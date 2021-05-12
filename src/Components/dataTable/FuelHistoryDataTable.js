import FuelHistryTableHead from "./FuelHistryTableHead";
import FuelHistoryToolBar from "./FuelHistoryToolBar";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Fragment, useState } from "react";
import auris from "../../assets/dataTable/auris.png";
import avanza from "../../assets/dataTable/avanza.png";
import prius from "../../assets/dataTable/prius.png";
import xenia from "../../assets/dataTable/xenia.png";
import VehiclePresention from "./dataTableCells/VehiclePresention";
import CostPresentation from "./dataTableCells/CostPresentation";
import DataTableActionCell from "./dataTableCells/DataTableActionCell";
import DataRow from "../UI/dataTableUI/DataRow";

function createData(image, name, status, date, time, totalKm, volume, cost) {
  return { image, name, status, date: date, time, totalKm, volume, cost };
}

export const vehicleAvailablity = {
  active: "0",
  inShop: "1",
  outOfService: "2",
};

const ROWS_BASE = [
  createData(
    auris,
    "Toyota auris",
    vehicleAvailablity.active,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
  createData(
    xenia,
    "Daihatsu xenia",
    vehicleAvailablity.outOfService,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),

  createData(
    auris,
    "Toyota auriss",
    vehicleAvailablity.active,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),

  createData(
    avanza,
    "Toyota avanzas",
    vehicleAvailablity.inShop,
    new Date("2019-06-8"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),

  createData(
    avanza,
    "Toyota avanza",
    vehicleAvailablity.inShop,
    new Date("2019-06-10"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
  createData(
    prius,
    "Toyota prius",
    vehicleAvailablity.active,
    new Date("2019-06-10"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const getRowsDateGrouped = rowsArray => {
  const array = [...rowsArray];
  // transform vehicle date to match the human readble
  console.log(array);
  const transformedArray = array.map(item => {
    const temp = item;
    if (typeof temp.date !== "string") {
      temp.date = temp.date.toDateString();
    }
    return temp;
  });
  // group the vehicle withing the same date
  const groupBy = (transformedArray, key) => {
    return array.reduce((result, currentItem) => {
      (result[currentItem[key]] = result[currentItem[key]] || []).push(
        currentItem
      );
      return result;
    }, {});
  };
  const groupedArray = groupBy(array, "date");

  // return an array of object contain the date and its rows
  return Object.keys(groupedArray).map(date => {
    return {
      date,
      rows: groupedArray[date],
    };
  });
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "4rem  2rem",
    marginTop: theme.mixins.toolbar.minHeight,
  },
  paper: {
    width: "100%",
    // padding: "0rem 1rem",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  nextIconButton: {
    backgroundColor: "#186299",
  },
  headRowStyleRoot: {
    backgroundColor: theme.palette.background.default,
  },
}));

const FuelHistoryDataTable = props => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isSortedByDate, setIsSortedByDate] = useState(true);
  const [rows, setRows] = useState(
    stableSort(ROWS_BASE, getComparator("desc", "date"))
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeSorting = sortBy => {
    console.log(sortBy);
    if (sortBy === "date") {
      setRows(stableSort(ROWS_BASE, getComparator("desc", "date")));
      setIsSortedByDate(true);
    } else if (sortBy === "status") {
      setIsSortedByDate(false);
      setRows(stableSort(ROWS_BASE, getComparator("asc", "status")));
    }
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <FuelHistoryToolBar
        rowsCount={rows.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onSortingChangeHandler={handleChangeSorting}
      />
      <TableContainer>
        <Paper elevation={0} variant='outlined' className={classes.paper}>
          <Table
            size='medium'
            className={classes.table}
            aria-labelledby='tableTitle'
          >
            <FuelHistryTableHead classes={classes} />
            <TableBody>
              {isSortedByDate &&
                getRowsDateGrouped(rows).map((dayRow, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Fragment key={labelId}>
                      <DataRow date={dayRow.date} />
                      {dayRow.rows.map((row, index) => {
                        const labelId = `table-row${index}`;
                        return (
                          <TableRow hover key={row.name}>
                            <TableCell
                              component='th'
                              key={labelId}
                              scope='row'
                              // padding='none'
                            >
                              <VehiclePresention
                                name={row.name}
                                image={row.image}
                                status={row.status}
                              />
                            </TableCell>
                            <TableCell align='left'>{row.time}</TableCell>
                            <TableCell align='left'>{row.totalKm}</TableCell>
                            <TableCell align='left'>{row.volume}</TableCell>
                            <TableCell align='left'>
                              <CostPresentation cost={row.cost} />
                            </TableCell>
                            <TableCell align='center'>
                              <DataTableActionCell />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </Fragment>
                  );
                })}
              {!isSortedByDate &&
                rows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={event => handleClick(event, row.name)}
                      // role='checkbox'
                      // aria-checked={isItemSelected}
                      // tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        // padding='none'
                      >
                        <VehiclePresention
                          name={row.name}
                          image={row.image}
                          status={row.status}
                        />
                      </TableCell>
                      <TableCell align='left'>{row.time}</TableCell>
                      <TableCell align='left'>{row.totalKm}</TableCell>
                      <TableCell align='left'>{row.volume}</TableCell>
                      <TableCell align='left'>
                        <CostPresentation cost={row.cost} />
                      </TableCell>
                      <TableCell align='center'>
                        <DataTableActionCell />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </div>
  );
};

export default FuelHistoryDataTable;

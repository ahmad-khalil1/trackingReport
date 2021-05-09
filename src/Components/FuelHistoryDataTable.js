import FuelHistryTableHead from "./FuelHistryTableHead";
import FuelHistoryToolBar from "./FuelHistoryToolBar";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { useState } from "react";
import auris from "../assets/dataTable/auris.png";
import avanza from "../assets/dataTable/avanza.png";
import prius from "../assets/dataTable/prius.png";
import xenia from "../assets/dataTable/xenia.png";

function createData(image, name, status, time, totalKm, volume, cost) {
  return { image, name, status, time, totalKm, volume, cost };
}
const rows = [
  createData(
    prius,
    "Toyota prius",
    "active",
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
  createData(
    avanza,
    "Toyota avanza",
    "active",
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
  createData(
    xenia,
    "Daihatsu xenia",
    "active",
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000"
  ),
  createData(
    auris,
    "Toyota auris",
    "active",
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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
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
    backgroundColor: "#E8ECEF",
  },
}));

const FuelHistoryDataTable = props => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FuelHistoryToolBar
          rowsCount={rows.length}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table className={classes.table} aria-labelledby='tableTitle'>
            <FuelHistryTableHead />
            <TableBody>
              {rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={event => handleClick(event, row.name)}
                    // role='checkbox'
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                    >
                      {row.name}
                    </TableCell>
                    {/* <TableCell align='right'>{row.calories}</TableCell> */}
                    {/* <TableCell align='right'>{row.fat}</TableCell> */}
                    {/* <TableCell align='right'>{row.carbs}</TableCell> */}
                    {/* <TableCell align='right'>{row.protein}</TableCell> */}
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
        </TableContainer>
      </Paper>
    </div>
  );
};

export default FuelHistoryDataTable;

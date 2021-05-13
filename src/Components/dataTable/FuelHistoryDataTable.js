import FuelHistryTableHead from "./FuelHistryTableHead";
import FuelHistoryToolBar from "./FuelHistoryToolBar";
import { makeStyles, TableContainer, Table, Paper } from "@material-ui/core";
import { Fragment, useState } from "react";
import { ROWS_BASE } from "../../data/rows";
import FuelHistryTableBody from "./FuelHistryTableBody";
console.log("row base", ROWS_BASE);
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

  const handleChangeSorting = sortBy => {
    console.log(ROWS_BASE);
    if (sortBy === "date") {
      setRows(stableSort(ROWS_BASE, getComparator("desc", "date")));
      setIsSortedByDate(true);
    } else if (sortBy === "status") {
      setIsSortedByDate(false);
      setRows(stableSort(ROWS_BASE, getComparator("asc", "status")));
    }
  };
  const handleDelete = id => {
    setRows(prevState => {
      const temp = [...prevState];
      return temp.filter(item => item.id !== id);
    });
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <FuelHistoryToolBar
        rowsCount={rows.length}
        handleChangePage={handleChangePage}
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
            <FuelHistryTableBody
              isSortedByDate={isSortedByDate}
              handleDelete={handleDelete}
              rows={rows}
              emptyRow={emptyRows}
            />
          </Table>
        </Paper>
      </TableContainer>
    </div>
  );
};

export default FuelHistoryDataTable;

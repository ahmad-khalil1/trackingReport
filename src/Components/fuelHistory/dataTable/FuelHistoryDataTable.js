import FuelHistryTableHead from "./FuelHistryTableHead";
import FuelHistoryToolBar from "./FuelHistoryToolBar";
import { makeStyles, TableContainer, Table, Paper } from "@material-ui/core";
import { useState } from "react";
import FuelHistryTableBody from "./FuelHistryTableBody";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { rowActions } from "../../../store/rowSlice";
import RowEditingModal from "../rowEditing/RowEditingModal";

// table custom styles
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "4rem  2rem",
    marginTop: theme.mixins.toolbar.minHeight,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
}));

// Datetable
const FuelHistoryDataTable = _ => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isSortedByDate, setIsSortedByDate] = useState(true);
  const rows = useSelector(state => state.rows.rows);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeSorting = sortBy => {
    dispatch(rowActions.sortRows({ sortBy: sortBy }));
    setIsSortedByDate(state => {
      const prevstate = state;
      return !prevstate;
    });
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <RowEditingModal />
      <FuelHistoryToolBar
        rowsCount={rows.length}
        handleChangePage={handleChangePage}
        onSortingChangeHandler={handleChangeSorting}
        page={page}
      />
      <TableContainer>
        <Paper elevation={0} variant='outlined' className={classes.paper}>
          <Table
            size='medium'
            className={classes.table}
            aria-labelledby='tableTitle'
          >
            <FuelHistryTableHead />
            <FuelHistryTableBody
              isSortedByDate={isSortedByDate}
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

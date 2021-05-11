import {
  Grid,
  makeStyles,
  MenuItem,
  TablePagination,
  Toolbar,
} from "@material-ui/core";
import TablePaginationActions from "./UI/TablePaginationActions";
import { useState } from "react";
import SortingSelect from "./UI/SortingSelect";

const useToolbarStyles = makeStyles(theme => ({
  root: {},
  title: {
    // flex: "1 1 100%"
  },
  selectFilled: {
    backgroundColor: theme.palette.background.paper,
  },
  selectpaperRoot: {
    padding: "0.375rem 1.875rem",
    // cellRoot: { color: theme.palette.text.hint },
    "& p": { color: theme.palette.text.hint },
    color: theme.palette.text.secondary,
  },
  selectRoot: { color: theme.palette.text.secondary },

  formformControl: { color: theme.palette.text.secondary },
}));

const FuelHistoryToolBar = props => {
  const classes = useToolbarStyles();
  const menuClasses = { paper: classes.selectRoot };
  const [timeZoneState, setTimeZoneState] = useState("egypt");
  const [sortingState, setSortingState] = useState("date");
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleTimeZoneChange = event => {
    setTimeZoneState(event.target.value);
  };
  const handleSortingChange = event => {
    setSortingState(event.target.value);
  };
  return (
    <Toolbar disableGutters className={classes.root}>
      <Grid container alignItems='center' justify='flex-end'>
        <TablePagination
          ActionsComponent={TablePaginationActions}
          rowsPerPageOptions={[]}
          labelRowsPerPage={""}
          component='div'
          count={props.rowsCount}
          rowsPerPage={10}
          page={page}
          onChangePage={handleChangePage}
        />

        <SortingSelect
          value={timeZoneState}
          onChangeHandler={handleTimeZoneChange}
          selectTitle='TimeZone'
        >
          <MenuItem value={"egypt"}>🇪🇬</MenuItem>
          <MenuItem value={"saudi"}>🇸🇦</MenuItem>
        </SortingSelect>

        <SortingSelect
          value={sortingState}
          onChangeHandler={handleSortingChange}
          selectTitle='Sort'
        >
          <MenuItem value={"date"}>Date</MenuItem>
          <MenuItem value={"status"}>Status</MenuItem>
        </SortingSelect>
      </Grid>
    </Toolbar>
  );
};

export default FuelHistoryToolBar;

import { Grid, MenuItem, TablePagination, Toolbar } from "@material-ui/core";
import TablePaginationActions from "../../UI/dataTableUI/TablePaginationActions";
import { useState } from "react";
import SortingSelect from "../../UI/dataTableUI/SortingSelect";

const FuelHistoryToolBar = props => {
  const [timeZoneState, setTimeZoneState] = useState("egypt");
  const [sortingState, setSortingState] = useState("date");

  const handleTimeZoneChange = event => {
    setTimeZoneState(event.target.value);
  };
  const handleSortingChange = event => {
    setSortingState(event.target.value);
    props.onSortingChangeHandler(event.target.value);
    console.log(sortingState);
  };
  return (
    <Toolbar disableGutters>
      <Grid container alignItems='center' justify='flex-end'>
        <TablePagination
          ActionsComponent={TablePaginationActions}
          rowsPerPageOptions={[]}
          labelRowsPerPage={""}
          component='div'
          count={props.rowsCount}
          rowsPerPage={10}
          page={props.page}
          onChangePage={props.handleChangePage}
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

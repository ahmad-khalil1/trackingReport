import { createSlice } from "@reduxjs/toolkit";
import { ROWS_BASE } from "../data/rows";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
// dateParsedToDateString.slice().map(date => Date.parse(date)).sort((a,b) => { return a-b}).map(date => new Date(date))
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

const intitalRows = stableSort(ROWS_BASE, getComparator("desc", "date"));
const rowInitialState = {
  rows: [...intitalRows],
};

const rowSlice = createSlice({
  name: "row",
  initialState: rowInitialState,
  reducers: {
    deleteRow(state, action) {
      const id = action.payload;
      state.rows = state.rows.filter(item => item.id !== id);
    },
    addRow(state, action) {},
    editRow(state, action) {},
    sortRows(state, action) {
      if (action.payload.sortBy === "date") {
        state.rows = stableSort(ROWS_BASE, getComparator("desc", "date"));
      } else if (action.payload.sortBy === "status") {
        state.rows = stableSort(ROWS_BASE, getComparator("asc", "status"));
      }
    },
  },
});

export const rowActions = rowSlice.actions;
export default rowSlice.reducer;

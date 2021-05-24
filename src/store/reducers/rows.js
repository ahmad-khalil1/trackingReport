import { DELETE_ROW, ADD_ROW, EDIT_ROW, SORT_ROWS } from "../actionTypes";
import { getComparator, stableSort } from "../../helpers/sortingLogic";
import { ROWS_BASE } from "../../data/rows";

const intitalRows = stableSort(ROWS_BASE, getComparator("desc", "date"));
const initialState = { rows: [...intitalRows] };

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_ROW: {
      const { id } = action.payload;
      return { rows: state.rows.slice().filter(item => item.id !== id) };
    }
    case ADD_ROW: {
    }
    case EDIT_ROW: {
      const { editedRowID, editedRow } = action.payload;
      return {
        rows: state.rows.map(row => {
          if (row.id !== editedRowID) {
            return row;
          }
          return {
            //could be added ,pls to test it
            ...row,
            ...editedRow,
          };
        }),
      };
    }
    case SORT_ROWS: {
      const { sortBy } = action.payload;
      if (sortBy === "date") {
        return {
          rows: stableSort(ROWS_BASE, getComparator("desc", "date")),
        };
      } else if (sortBy === "status") {
        return {
          rows: stableSort(ROWS_BASE, getComparator("asc", "status")),
        };
      }
    }
    default:
      return state;
  }
}

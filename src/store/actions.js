import {
  // row action types
  DELETE_ROW,
  ADD_ROW,
  EDIT_ROW,
  SORT_ROWS,
  //row editing action types
  START_EDIT_ROW,
  RESET_ROW_EDIT,
} from "./actionTypes";

// row actions
export const deleteRow = id => ({
  type: DELETE_ROW,
  payload: { id },
});

export const editRow = payload => ({
  type: EDIT_ROW,
  payload: payload,
});

export const sortRows = payload => ({
  type: SORT_ROWS,
  payload: payload,
});

// row editing actions

export const startEditRow = id => ({
  type: START_EDIT_ROW,
  payload: { id },
});

export const resetEditRow = payload => ({
  type: RESET_ROW_EDIT,
  payload: payload,
});

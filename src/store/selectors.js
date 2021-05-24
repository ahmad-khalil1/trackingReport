export const getRowsState = state => {
  return state.rows.rows;
};

export const getEditingState = state => {
  return state.rowEditing.isEditing;
};

export const getCurrentEditRowID = state => {
  return state.rowEditing.currentEditingRowID;
};

export const gitCurrentEditRow = state => {
  return getRowsState(state).find(row => row.id === getCurrentEditRowID(state));
};

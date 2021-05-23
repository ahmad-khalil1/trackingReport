export const getRowsState = state => {
  return state.rows.rows;
};

export const getEditingState = state => {
  return state.rowEdit.isEditing;
};

export const getCurrentEditRowID = state => {
  return state.rowEdit.currentEditingRowID;
};

export const gitCurrentEditRow = state => {
  return getRowsState(state).find(row => row.id === getCurrentEditRowID(state));
};

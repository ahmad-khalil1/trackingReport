import { createSlice } from "@reduxjs/toolkit";

const initialState = { isEditing: false, currentEditingRowID: "" };

const rowEditing = createSlice({
  name: "rowEditing ",
  initialState: initialState,
  reducers: {
    startEditRow(state, action) {
      state.isEditing = true;
      state.currentEditingRowID = action.payload;
    },
    resetEditRow(state, action) {
      state.isEditing = false;
      // state.currentEditingRowID = "";
    },
  },
});

export const rowEditingActions = rowEditing.actions;
export default rowEditing.reducer;

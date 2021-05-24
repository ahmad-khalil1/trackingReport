import { START_EDIT_ROW, RESET_ROW_EDIT } from "../actionTypes";

const initialState = { isEditing: false, currentEditingRowID: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case START_EDIT_ROW: {
      const { id } = action.payload;
      return {
        isEditing: true,
        currentEditingRowID: id,
      };
    }
    case RESET_ROW_EDIT: {
      return {
        ...state,
        isEditing: false,
      };
    }
    default:
      return state;
  }
}

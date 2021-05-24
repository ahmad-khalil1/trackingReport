import { combineReducers } from "redux";
import rows from "./rows";
import rowEditing from "./rowEditing";

export default combineReducers({ rows, rowEditing });

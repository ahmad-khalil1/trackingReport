import { configureStore } from "@reduxjs/toolkit";
import rowEditingSlice from "./rowEditingSlice";
import rowSlice from "./rowSlice";

const Store = configureStore({
  reducer: {
    rows: rowSlice,
    rowEdit: rowEditingSlice,
  },
});

export default Store;

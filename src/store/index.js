import { configureStore } from "@reduxjs/toolkit";
import rowSlice from "./rowSlice";

const Store = configureStore({
  reducer: {
    rows: rowSlice,
  },
});

export default Store;

// import { configureStore } from "@reduxjs/toolkit";
// import rowEditingSlice from "./rowEditingSlice";
// import rowSlice from "./rowSlice";
import rootReducer from "./reducers/reducerIndex";
import { createStore } from "redux";

// const Store = configureStore({
//   reducer: {
//     rows: rowSlice,
//     rowEdit: rowEditingSlice,
//   },
// });
// export default Store;

export default createStore(rootReducer);

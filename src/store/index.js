import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import counterSlice from "./reducers/counterSlice";
import loginSlice from "./reducers/loginSlice";

// NOTE - configureStore has inbuilt Redux dev-tools support. So no need to use __WINDOW_REDUX_DEVTOOL__ function.
export default configureStore({
  reducer: {
    counter: counterSlice,
    login: loginSlice,
    app: appSlice,
  },
});

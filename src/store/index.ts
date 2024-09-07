import { configureStore } from "@reduxjs/toolkit";
import coupleReducer from "./coupleSlice";

const store = configureStore({
  reducer: {
    couple: coupleReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

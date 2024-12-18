import { configureStore } from "@reduxjs/toolkit";
import app from "@/store/slices/app/appSlice";

const store = configureStore({
  reducer: {
    app: app,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

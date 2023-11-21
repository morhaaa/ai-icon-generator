import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-reducer";
import userSlice from "./user-reducer";
import modalSlice from "./modal-credit";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

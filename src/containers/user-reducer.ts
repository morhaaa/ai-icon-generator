import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: IUser | null;
}

const initialState: UserState = { value: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state: UserState, action: PayloadAction<IUser | null>) {
      state.value = action.payload;
    },
    updateUserBalance(state: UserState, action: PayloadAction<number>) {
      state.value!.balance = action.payload;
    },
    logOut(state: UserState, action: PayloadAction<null>) {
      state.value = action.payload;
    },
  },
});

export const { setUserInfo, logOut, updateUserBalance } = userSlice.actions;

export default userSlice;

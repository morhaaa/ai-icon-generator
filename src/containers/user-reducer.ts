import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserInfo = createAsyncThunk<IUser | null, string>(
  "user/fetchUserInfo",
  async (email: string) => {
    const response = await fetch(`/api/userInfo/${email}`);
    const result = await response.json();
    if (result.success) {
      const userInfo: IUser = {
        name: result.data.name,
        email: result.data.email,
        balance: result.data.balance,
        id: result.data._id,
      };
      return userInfo;
    } else {
      return null;
    }
  }
);

interface UserState {
  value: IUser | null;
  loading: "idle" | "pending";
  error: string | null;
}

const initialState: UserState = {
  value: null,
  loading: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state: UserState, action: PayloadAction<IUser | null>) {
      state.value = action.payload;
    },
    updateUserBalance(state: UserState, action: PayloadAction<number>) {
      if (state.value) {
        state.value.balance = action.payload;
      }
    },
    logOut(state: UserState) {
      state.value = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = "idle";
        state.value = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setUserInfo, logOut, updateUserBalance } = userSlice.actions;

export default userSlice;

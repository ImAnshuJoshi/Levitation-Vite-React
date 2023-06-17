// store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state :any , action: {payload : String}) => {
      state.userInfo = action.payload;
    },
    setToken : (state:any, action:any) => {
        state.userToken = action.payload;
    }
  },
  extraReducers: {},
});

export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;

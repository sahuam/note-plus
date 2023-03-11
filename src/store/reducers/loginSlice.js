// reducer by using createSlice

const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
  name: "login",
  initialState: { isLogin: false, username: "" },
  reducers: {
    updateLoginStatus: (state, action) => ({
      ...state,
      isLogin: action.payload.isLogin,
      username: action.payload.username,
    }),
  },
});

// export actions
export const { updateLoginStatus } = loginSlice.actions;
// export reducer
export default loginSlice.reducer;

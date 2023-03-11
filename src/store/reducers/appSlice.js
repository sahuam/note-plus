// reducer by using createSlice

const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: { bgcolor: "whitesmoke" },
  reducers: {
    changeBackgroundColor: (state, action) => ({
      ...state,
      bgcolor: action.payload.bgcolor,
    }),
  },
});

// export actions
export const { changeBackgroundColor } = appSlice.actions;
// export reducer
export default appSlice.reducer;

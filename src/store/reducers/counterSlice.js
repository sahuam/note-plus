const { createSlice } = require("@reduxjs/toolkit");

// Here createSlice is creating a reducer.
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 1 };
    },
    decrement: (state) => {
      return { ...state, value: state.value - 1 };
    },
    incrementByAmount: (state, action) => {
      return { ...state, value: state.value - action.payload };
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

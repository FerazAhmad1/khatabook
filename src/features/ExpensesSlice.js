import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentExpense: {},
  expenses: [],
};
export const fetchExpenses = createAsyncThunk("expense/fetchExpenses", () => {
  return axios
    .get(
      "https://khatabook-70c6a-default-rtdb.asia-southeast1.firebasedatabase.app/name.json"
    )
    .then((response) => response.data);
});

console.log(
  fetchExpenses.pending,
  "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
);
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    current: (state, action) => {
      state.currentExpense = action.payload;
    },
    allexpense: (state, action) => {
      console.log(action);
      state.expenses = action.payload;
    },
  },
});

export default expenseSlice.reducer;
export const { current, allexpense } = expenseSlice.actions;

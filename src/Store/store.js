import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import expenseReducer from "../features/ExpensesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
  },
});
export default store;

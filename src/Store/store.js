import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import expenseReducer from "../features/ExpensesSlice";
import themeReducer from "../features/ThemeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    theme: themeReducer,
  },
});
export default store;

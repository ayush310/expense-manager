import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/Expenses";
// import categoryReducer from "./features/Category"

export const store = configureStore({
    reducer: {
      expenses: expensesReducer,
    //   category: categoryReducer
    },
  });
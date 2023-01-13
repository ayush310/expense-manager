import { createSlice } from "@reduxjs/toolkit";

import { ExpenseData } from "../ExpenseData";

export const expenseSlice = createSlice({
  name: "expenses",
  initialState: { value: ExpenseData },
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.value = state.value.filter((expense) => expense.id !== action.payload.id);
    },

    updateDesc: (state, action) => {
      state.value.map((expense) => {
        if (expense.id === action.payload.id) {
          expense.description = action.payload.description;
        }
      });
    },
    updateAmount: (state, action) => {
      state.value.map((expense) => {
        if (expense.id === action.payload.id) {
          expense.amount = action.payload.amount;
        }
      });
    },
    updateExpenses:(state,action)=>{
      state.value = state.value.filter((expense)=>expense.category === action.payload.category)
    }
  },
});

export const { addExpense, deleteExpense, updateDesc,updateAmount,updateExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;

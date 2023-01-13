import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addExpense}  from "../features/Expenses";


const ExpenseForm = (props) => {
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

  const dispatch = useDispatch();
  const expenseList = useSelector((state) => state.expenses.value);


  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const categoryHandler = (event) =>{
    setEnteredCategory(event.target.value);
  }
  const getFormattedDate = (date)=> {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '-' + day + '-' + year;
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      dispatch(
        addExpense({
          id: expenseList[expenseList.length - 1].id + 1,
          description: enteredDescription,
          amount: +enteredAmount,
          date: getFormattedDate(new Date(enteredDate)),
          category: enteredCategory
        })
        );
        console.log('New expense');
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onCancel();
    }}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Description</label>
          <input
            type='text'
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-01-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Category</label>
        <select onChange={categoryHandler}>
        <option value='Select' selected='selected'><label>--Select--</label></option>
          <option value='Travel'>Travel</option>
          <option value='Food & Dining'>Food & Dining</option>
          <option value='Education'>Education</option>
          <option value='Shopping'>Shopping</option>
          <option value='Miscellaneous'>Miscellaneous</option>
        </select>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
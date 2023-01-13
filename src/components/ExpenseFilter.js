import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import {updateExpenses} from '../features/Expenses'
const ExpensesFilter = () => {

    const [selectedCategory, setSelectedCategory] = useState("--Select--")

    const dispatch = useDispatch();

    const dropdownChangeHandler = (event) => {
        setSelectedCategory(event.target.value);
        console.log(selectedCategory);
        dispatch(updateExpenses({ category:selectedCategory }));
}
return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Catagory</label>
        <select onChange={dropdownChangeHandler}>
        <option value='Select' selected='selected'><label>--Select--</label></option>
          <option value='Travel'>Travel</option>
          <option value='Food & Dining'>Food & Dining</option>
          <option value='Education'>Education</option>
          <option value='Shopping'>Shopping</option>
          <option value='Miscellaneous'>Miscellaneous</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense, deleteExpense, updateDesc,updateAmount }  from "../features/Expenses";

const Card = ({expense}) => {
  const [newDesc, setNewDesc] = useState("");
  const [newAmount,setNewAmount] = useState("")

    const expenseList = useSelector((state) => state.expenses.value);
    const dispatch = useDispatch();
  return (
    <div className="card">
        <h2>Description:{expense.description}</h2>
        <h2>Category:{expense.category}</h2>
        <h2>Amount:${expense.amount}</h2>
        <h2>Date:{expense.date}</h2>
        <div className='edit'>
          <div style={{fontSize:20 ,cursor:'pointer'}} onClick={() => {
                  dispatch(deleteExpense({ id: expense.id }));
                }}>❌</div>
                <input type="text" placeholder="Edit Desc." onChange={(event) => {
                  setNewDesc(event.target.value);
                }}/>
              <button
                onClick={() => {
                  dispatch(
                    updateDesc({ id: expense.id, description: newDesc })
                  );
                }}
              >
                {" "}
                Update Description
              </button>
              <input type="text" placeholder="Edit Amount" onChange={(event) => {
                  setNewAmount(event.target.value);
                }}/>
              <button
                onClick={() => {
                  dispatch(
                    updateAmount({ id: expense.id, amount: newAmount })
                  );
                }}
              >
                {" "}
                Update Amount
              </button>
          </div>
          </div>
          
  );  
}

export default Card;
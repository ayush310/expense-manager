import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function CardList({budget}) {
  const expenseList = useSelector((state) => state.expenses.value);

  return (
    <div className="card-list">
     {expenseList.map((expense) => {
      return(
    <Card expense={expense} />
      )})}
  </div>
);
}

export default CardList;


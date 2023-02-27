import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  /* 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); */
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /* All element get them from JUST event like e.target.value will be string */
  const titleChangeHandler = (e) => {
    /* setEnteredTitle(e.target.value); */

    /*         setUserInput({
            ...userInput, // don't use this coding for update data that depends on the previos one, insted use a anonymous fn 
            enteredTitle: e.target.value
        }); */

    /* this is the correct way to use prev data, react style to garanty the last prev element */
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    /* setEnteredAmount(e.target.value); */

    /*         setUserInput({
            ...userInput,
            enteredAmount: e.target.value
        }); */

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    /* setEnteredDate(e.target.value); */

    /*         setUserInput({
            ...userInput,
            enteredDate: e.target.value
        }); */

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    /* In the video he use first option, 3 useState */
    const expenseData = userInput;

    /* This is how communicate up with parent components */
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

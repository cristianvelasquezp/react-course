import {useState} from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    //const [inputState, setInputState] = useState( {
    //                                        title: '',
    //                                        amount: '',
    //                                        date: '',
    //                                    });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        //setInputState((prevState) => {
        //    return { ...prevState, title: e.target.value}
        //});
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        //setInputState((prevState) => {
        //    return { ...prevState, amount: e.target.value}
        //});
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        //setInputState((prevState) => {
        //    return { ...prevState, date: e.target.value}
        //});
    }

    const showFormHandler = (e) => {
        e.preventDefault()
       setShowForm( (prevState) => {
           return prevState === false ? true : false;
       });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);

        props.onSaveSpenseData(expenseData);
    }

    if (showForm === false) {
        return (
            <div className="new-expense__actions">
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="Number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={showFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
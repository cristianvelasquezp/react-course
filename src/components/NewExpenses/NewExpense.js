import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveSpenseDataHandler = (enteredSpenseData) => {
        const spenseData = {
            ...enteredSpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(spenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveSpenseData={saveSpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";

function Expenses(promp) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const ExpenseFilter = promp.data.filter( expense => {
        return expense.date.getFullYear().toString() ===  filteredYear
    })

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilterHandler={filterChangeHandler}
                />
                <ExpensesChart expenses={ExpenseFilter} />
                <ExpensesList items={ExpenseFilter} />
            </Card>
        </div>
    )

}

export default Expenses;
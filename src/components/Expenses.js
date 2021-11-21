import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";

function Expenses(promp) {

    return(
        <Card className="expenses">
            <ExpenseItem
                id={promp.data[0].id}
                title={promp.data[0].title}
                amount={promp.data[0].amount}
                date={promp.data[0].date}
            />
            <ExpenseItem
                id={promp.data[1].id}
                title={promp.data[1].title}
                amount={promp.data[1].amount}
                date={promp.data[1].date}
            />
            <ExpenseItem
                id={promp.data[2].id}
                title={promp.data[2].title}
                amount={promp.data[2].amount}
                date={promp.data[2].date}
            />
            <ExpenseItem
                id={promp.data[3].id}
                title={promp.data[3].title}
                amount={promp.data[3].amount}
                date={promp.data[3].date}
            />
        </Card>
    )

}

export default Expenses;
import React , {useState} from "react";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [expenseItems , setExpenseItems] = useState([
    {id: 1,date :new Date("2021-11-06"),title :"New Phone",price :500},
    {id: 2,date :new Date("2021-08-07"),title :"New Camera",price :300},
    {id: 3,date :new Date("2021-03-08"),title :"New TV",price :600},
  ]);
  const onAddExpense=(value)=>{
    // cach khac
    /*setExpenseItems([
      ...expenseItems,
      {
        date  : new Date(value.data),
        title : value.title,
        price : value.amount,
      }
    ])*/

    //cach dung dan
    /*setExpenseItems((prev)=>{
      return[
        ...prev,
        {
          date  : new Date(value.data),
          title : value.title,
          price : +value.amount,
        }
      ]
    })*/

    // cach khac
    setExpenseItems(expenseItems.concat({
      date  : new Date(value.date),
      title : value.title,
      price : value.amount,
    }));
  };
  console.log("expense items",expenseItems);

  /*const [count , setCount]=useState(10);
  const handleAddNewExpense=()=>{
    console.log("click me!");
    setCount(count +1);
  };*/
  
  return (
    //JSX - Javascript XML
    <div className="App">
      <ExpenseForm onAddExpense={onAddExpense}/>
      <Expenses data={expenseItems}/>
    </div>
  );
}

export default App;

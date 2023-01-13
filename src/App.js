import './App.css';
import CardList from './components/CardList';
import ExpensesFilter from './components/ExpenseFilter';
import NewExpense from './components/NewExpense';

function App() {
  return (
    <div className="App">
      <NewExpense />
      <ExpensesFilter />
      <CardList />
    </div>

  );
}

export default App;

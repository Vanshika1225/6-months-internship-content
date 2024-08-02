import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';
import VisibilityFilter from './Component/VisibilityFilter';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </div>
  );
}

export default App;
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // ajoute
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

// sup
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

// cocher/décoche
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };




  return (
    <div className="app">
      <h1>Ma Todo Liste</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p className="counter">
        {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
      </p>
    </div>
  );
}

export default App;
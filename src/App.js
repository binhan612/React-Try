import React from 'react';
import TodoList from './components/TodoList.js';
import { useState } from 'react';
import TodoForm from './components/TodoForm.js';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'abc' },
    { id: 2, name: 'nmg' },
    { id: 3, name: 'hkj' }
  ]);
  function handleOnClick(todo) {
    // console.log(todo)
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };
  function handleOnSubmit(value) {
    const formValue = {
      id: todoList.length + 1,
      name: value,
    };
    console.log(formValue)
    const newTodos = [...todoList];
    newTodos.push(formValue);
    setTodoList(newTodos);
  };
  return (
    <>
      <h1>React Hooks</h1>
      <TodoForm onSubmitForm={handleOnSubmit} />
      <TodoList todoList={todoList} onTodoClick={handleOnClick} />

    </>
  );
}

export default App;

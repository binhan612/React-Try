import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import PostList from './components/PostList';
import Pagination from './components/Pagination.js';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm.js';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'abc' },
    { id: 2, name: 'nmg' },
    { id: 3, name: 'hkj' }
  ]);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    // _searchTerm: ...,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters)
        const apiUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const res = await fetch(apiUrl);
        const resJSON = await res.json();
        const { data, pagination } = resJSON
        setPosts(data)
        setPagination(pagination)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchPostList();
  }, [filters]);

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
  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    });
  };
  function handleSubmit(formValue) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: formValue.q,
    });
  }
  return (
    <>
      <h1>React Hooks</h1>
      {/* <TodoForm onSubmitForm={handleOnSubmit} />
      <TodoList todoList={todoList} onTodoClick={handleOnClick} /> */}
      <PostFilterForm onSubmit={handleSubmit} />
      <PostList data={posts} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;

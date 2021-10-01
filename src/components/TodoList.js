import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
};

function TodoList(props) {
    const { todoList, onTodoClick } = props;
    function handleClick(todo) {
        onTodoClick(todo);
    };

    return (
        <ul>
            {todoList.map(todo => (<li key={todo.id} onClick={() => handleClick(todo)}>{todo.name}</li>))}
        </ul>
    );
}

export default TodoList;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, SetTodoList] = useState(initTodoList);

    const [filteredStatus, SetFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        SetTodoList(newTodoList)

    };

    const handleShowAllClick = () => {
        SetFilteredStatus('all');
    };
    const handleShowCompletedClick = () => {
        SetFilteredStatus('completed');
    };
    const handleShowNewClick = () => {
        SetFilteredStatus('new');
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default TodoFeature;
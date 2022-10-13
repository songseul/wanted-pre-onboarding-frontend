import React, { useState, useEffect } from 'react';
import Template from '../components/Todo/Template';
import TodoList from '../components/Todo/TodoList';
import TodoInsert from '../components/Todo/TodoInsert';
import axios from 'axios';
import { MdAddCircle } from 'react-icons/md';
import styled from 'styled-components';

function TodoListPage() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const token = localStorage.getItem('accessToken');

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (text === '') {
      return alert('할일을 입력해 주세요');
    } else {
      const body = {
        todo: text,
      };
      axios.post('https://pre-onboarding-selection-task.shop/todos', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };

  const onCheckToggle = id => {
    setTodoList(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(
        'https://pre-onboarding-selection-task.shop/todos',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setTodoList(data);
    };
    getTodos();
  }, [todoList, token]);

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };
  const onRemove = id => {
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      axios.delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  };
  const onUpdate = (id, todo, isCompleted) => {
    // console.log(id, todo, isCompleted);
    const body = {
      todo,
      isCompleted,
    };
    const todoUpdate = async () => {
      await axios.put(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };
    todoUpdate();
  };

  return (
    <div>
      <Template todoLength={todoList.length}>
        <TodoList
          todoList={todoList}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
        <AddTodoButton onClick={onInsertToggle}>
          <MdAddCircle />
        </AddTodoButton>
        {insertToggle && (
          <TodoInsert
            todoList={todoList}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            selectedTodo={selectedTodo}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </div>
  );
}

export default TodoListPage;

const AddTodoButton = styled.div`
  position: fixed;
  right: 5px;
  bottom: 30px;
  z-index: 100;
  width: 100px;
  height: 100px;
  cursor: pointer;
  font-size: 5rem;
  color: #cda1eb;
`;

import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({
  todoList,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
  onUpdate,
  onRemove,
}) => {
  return (
    <TodoListLayout>
      {todoList?.map(todos => (
        <TodoItem
          todos={todos}
          key={todos.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      ))}
    </TodoListLayout>
  );
};

export default TodoList;

const TodoListLayout = styled.div`
  width: 90vw;
  height: 70vh;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 375px) {
    height: 500px;
  }
`;

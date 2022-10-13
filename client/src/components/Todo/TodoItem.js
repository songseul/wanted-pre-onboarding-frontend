import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styled from 'styled-components';
import { GoTrashcan, GoPencil } from 'react-icons/go';

const TodoItem = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
  onUpdate,
  onRemove,
}) => {
  const { id, todo, isCompleted } = todos;

  return (
    <TodoItemLayout>
      <div
        className={`content ${isCompleted ? 'checked' : ''}`}
        onClick={() => {
          onUpdate(id, todo, !isCompleted);
        }}
      >
        {isCompleted ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => onCheckToggle(id)} />
        )}
        <span className="text">{todo}</span>
      </div>
      <GoPencil
        style={{
          marginRight: '10px',
          color: '#f67280',
          fontSize: '1.2rem',
          cursor: ' pointer',
        }}
        onClick={() => {
          onInsertToggle();
          onChangeSelectedTodo(todos);
        }}
      />
      <span style={{ color: '#f67280' }}>/ </span>
      <GoTrashcan
        style={{
          marginLeft: '10px',
          color: '#f67280',
          fontSize: '1.2rem',
          cursor: ' pointer',
        }}
        onClick={() => {
          onRemove(id);
        }}
      />
    </TodoItemLayout>
  );
};

export default TodoItem;

const TodoItemLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f67280;
  padding: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .content {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .content svg {
    font-size: 1.5rem;
    color: #f67280;
  }
  .content .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  .content.checked {
    color: #6c567b;
    text-decoration: line-through;
    cursor: pointer;
    opacity: 0.6;
  }
  button {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 5px 1px #f67280;
    color: #f67280;
  }
`;

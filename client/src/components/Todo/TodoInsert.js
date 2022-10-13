import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdAddCircle } from 'react-icons/md';
import { GoTrashcan, GoPencil } from 'react-icons/go';

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [newTodo, setNewTodo] = useState('');

  const onChange = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(newTodo);
    setNewTodo('');
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setNewTodo(selectedTodo.todo);
    }
  }, [selectedTodo]);

  return (
    <TodoInsertLayout>
      <ModalBackground onClick={onInsertToggle}></ModalBackground>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, newTodo);
                onInsertToggle();
              }
            : onSubmit
        }
      >
        {selectedTodo ? (
          <p style={{ color: '#6c567b', fontSize: '0.8rem' }}>
            아래 내용을 고치고 수정 버튼을 클릭하세요!
          </p>
        ) : (
          ''
        )}
        <input
          type="text"
          placeholder="새로운 할일을 적어주세요"
          value={newTodo}
          onChange={onChange}
        />
        {selectedTodo ? (
          <div className="rewrite">
            <button
              style={{
                color: '#f67280',
                fontSize: '1rem',
                cursor: ' pointer',
              }}
              onClick={() => {
                onUpdate(selectedTodo.id, newTodo, selectedTodo.isCompleted);
                onInsertToggle();
              }}
            >
              수정
            </button>
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </TodoInsertLayout>
  );
};

export default TodoInsert;
const TodoInsertLayout = styled.div`
  form {
    margin-left: 10%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 990;
    width: 300px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 1px 2px 5px 1px #f67280;
    background: white;

    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: 1px solid #f67280;
      padding: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.5;
    }
    button {
      padding-top: 20px;
      background: none;
      outline: none;
      border: none;
      color: #f67280;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.1s background ease-in;
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  z-index: 980;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c567b;
  opacity: 0.8;
`;

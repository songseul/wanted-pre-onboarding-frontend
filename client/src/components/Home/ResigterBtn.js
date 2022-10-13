import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GoPencil } from 'react-icons/go';

const RegisterBtn = () => {
  const navigate = useNavigate();
  return (
    <RegisterBtnLayout>
      <p>찐 J가 되고 싶으세요?</p>
      <button onClick={() => navigate('/signup')}>
        <GoPencil /> 회원가입하기
      </button>
    </RegisterBtnLayout>
  );
};

export default RegisterBtn;

const RegisterBtnLayout = styled.div`
  box-shadow: 1px 2px 5px #f67280;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f67280;
  font-size: 1rem;
  button {
    width: 100%;
    border: none;
    padding: 5px 0px;
    color: #fff;
    background-color: #f67280;
  }
`;

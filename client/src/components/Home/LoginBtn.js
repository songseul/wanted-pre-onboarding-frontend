import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdCheckBox } from 'react-icons/md';

const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <LoginBtnLayout>
      <p> 회원이신가요?</p>
      <button onClick={() => navigate('/signin')}>
        <MdCheckBox /> 로그인하기
      </button>
    </LoginBtnLayout>
  );
};

export default LoginBtn;
const LoginBtnLayout = styled.div`
  box-shadow: 1px 2px 5px #6c567b;
  width: 200px;
  height: 200px;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6c567b;
  font-size: 1rem;
  button {
    width: 100%;
    border: none;
    padding: 5px 0px;
    color: #fff;
    background-color: #6c567b;
  }
`;

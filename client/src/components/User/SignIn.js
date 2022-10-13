import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = () => {
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setuserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const Refresh = () => {
    window.location.reload();
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios
      .post('https://pre-onboarding-selection-task.shop/auth/signin', userInfo)
      .then(res => {
        const accessToken = res.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        const loginStatus = true;
        localStorage.setItem('loginStatus', loginStatus);
        if (localStorage.accessToken) {
          navigate('/todo');
          Refresh();
        } else {
          alert('로그인 정보를 확인하세요');
        }
      });
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#555' }}>
        로그인
      </h2>
      <SignInLayout>
        <form onSubmit={onSubmit} onChange={onChange}>
          <label>
            이메일 <input type="email" name="email" />
          </label>
          <label>
            패스워드 <input type="password" name="password" minLength={8} />{' '}
          </label>
          <button type="submit">로그인</button>
        </form>
      </SignInLayout>
    </>
  );
};

export default SignIn;

const SignInLayout = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 10%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #6c567b;
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      border: 1px solid #f67280;
    }
    button {
      margin-top: 10px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #f67280;
      background: #fff;
    }
  }
`;

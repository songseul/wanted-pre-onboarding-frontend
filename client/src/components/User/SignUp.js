import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [opacity, setOpacity] = useState(0.5);

  const Check = () => {
    if (email === '' || password === '') {
      setErrMessage('양식을 모두 입력해주세요');
      setOpacity(0.5);
      return setCheck(false);
    }

    if (!email.includes('@')) {
      setErrMessage('이메일 형식을 맞춰 주세요');
      setOpacity(0.5);
      return setCheck(false);
    }

    if (password.length < 8) {
      setErrMessage('비밀번호는 문자와 숫자 상관 없이 8자 이상 입니다.');
      setOpacity(0.5);
      return setCheck(false);
    }
    setErrMessage('');
    setOpacity(1);
    return setCheck(true);
  };

  const emailOnChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordOnChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    Check();
  });

  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', body)
      .then(res => {
        if (res.status === 201) {
          alert('회원이 되신것을 축하합니다. 로그인 페이지로 이동합니다');
          navigate('/signin');
        } else {
          alert('회원가입을 다시 진행해 주세요.');
        }
      });
  };

  return (
    <div style={{ height: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#555' }}>
        회원가입
      </h2>
      <SignUpLayout>
        <form onSubmit={onSubmit}>
          <span
            style={{ color: '#D1AFE1', textAlign: 'center', fontWeight: '800' }}
          >
            {errMessage}
          </span>
          <label>
            이메일
            <span style={{ fontSize: '10px' }}>
              (@포함된 mail 형식으로 적어주세요)
            </span>
            <input type="email" name="email" onChange={emailOnChange} />
          </label>

          <label>
            패스워드
            <span style={{ fontSize: '10px' }}>
              (8개 이상의 패스워드를 적어주세요)
            </span>
            <input
              type="password"
              name="password"
              onChange={passwordOnChange}
            />
          </label>
          <button
            type="submit"
            disabled={!check}
            style={{ opacity: `${opacity}` }}
          >
            회원가입
          </button>
        </form>
      </SignUpLayout>
    </div>
  );
}

export default SignUp;

const SignUpLayout = styled.div`
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
      border: none;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
      background: #f67280;
    }
  }
`;

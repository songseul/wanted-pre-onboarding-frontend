import React from 'react';
import Home from '../components/Home/Home';
import LoginBtn from '../components/Home/LoginBtn';
import RegisterBtn from '../components/Home/ResigterBtn';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomePageButton>
        <LoginBtn />
        <RegisterBtn />
      </HomePageButton>
    </div>
  );
};

export default HomePage;

const HomePageButton = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  padding: 0 15px;
  gap: 10%;
  width: 100%;
  margin-top: 50px;
`;

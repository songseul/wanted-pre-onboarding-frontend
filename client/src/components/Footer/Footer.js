import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterLayout>
      <p> @2022 Todo List</p>
      <span>by Seulgi Song </span>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #f67280;
  p {
    font-size: 13px;
  }
  span {
    font-size: 9px;
    color: purple;
  }
`;

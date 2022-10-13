import React from 'react';
import styled from 'styled-components';

const Template = ({ children, todoLength }) => {
  return (
    <TemplateLayout>
      <TemplateTitle>오늘의 할일 ({todoLength})</TemplateTitle>
      <div> {children}</div>
    </TemplateLayout>
  );
};

export default Template;
const TemplateLayout = styled.div`
  padding-top: 20px;
  max-height: 100vh;
`;
const TemplateTitle = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6c567b;
`;

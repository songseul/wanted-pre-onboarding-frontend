import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Heading = () => {
  const token = localStorage.accessToken;
  const navigate = useNavigate();

  const Refresh = () => {
    window.location.reload();
  };

  const LogoutHandler = e => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
    Refresh();
  };

  return (
    <Navbar style={{ background: '#f67280' }} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!token && <Nav.Link href="/">홈</Nav.Link>}
            {token ? <Nav.Link href="/todo">오늘의 할일</Nav.Link> : ''}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {token ? (
            <Navbar.Text
              style={{ cursor: 'pointer' }}
              onClick={e => {
                LogoutHandler(e);
              }}
            >
              로그아웃
            </Navbar.Text>
          ) : (
            <>
              <Link
                to="/signin"
                style={{
                  color: '#ddd',
                  textDecoration: 'none',
                }}
              >
                로그인
              </Link>

              <Link
                to="/signup"
                style={{
                  marginLeft: '1rem',
                  color: '#ddd',
                  textDecoration: 'none',
                }}
              >
                회원가입
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;

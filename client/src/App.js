import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TodoListPage from './Pages/TodoListPage';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import Heading from './components/Nav/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';

const App = () => {
  const login = localStorage.getItem('accessToken');
  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/"
          element={login ? <Navigate to="/todo" /> : <HomePage />}
        />
        <Route
          path="/todo"
          element={login ? <TodoListPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={login ? <Navigate to="/todo" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={login ? <Navigate to="/todo" /> : <SignUp />}
        />
      </Routes>
    </>
  );
};

export default App;

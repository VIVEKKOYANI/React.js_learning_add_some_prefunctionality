import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

const MainRoutes = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn") ?? "false";
  console.log("isLoggedIn", isLoggedIn);

  return (
    <Router>
      <Routes>
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MainRoutes
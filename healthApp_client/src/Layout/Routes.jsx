import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../components/Login/Login';
import SignupPage from '../components/SignUp/SignUp';
import Dashboard from '../components/AdminDashboard/Dashboard';
import Clients from '../components/AdminDashboard/Clients';
import Appointments from '../components/AdminDashboard/Appointments';

const AppRoutes = ({ username, AdminRole, userId, email }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      {AdminRole === 'admin' ? (
        <React.Fragment>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/appointments" element={<Appointments />} />
        </React.Fragment>
      ) : (
        // If not an admin, redirect to the home page
        <Route path="/user" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};

export default AppRoutes;

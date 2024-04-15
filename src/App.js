import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate,Navigate } from 'react-router-dom';
import RegistrationPage from './pages/registrationPages/resPage';
import Findprofessional from './pages/findProfessional';
import LoginPage from './pages/loginPages/logPage';
import UserProfile from './pages/useprofile/userprof'
import Admin from './pages/adminPage/adminPage'
import ResetPage from './pages/resetPage/reset'
import OTP from './pages/optpage/otpPage';
import Forgot from './pages/forgetPassword/forgotPage';

import { ThemeProvider, styled } from 'styled-components';
import {light_theme} from './assets/utils/light_theme';
import { Container } from '@mui/material';
import Workouts from './pages/calendar/calendar';
import ProfessionalDashboard from './pages/ProfessionalDashboard';


const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userDetailsData = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetailsData) {
      console.log('userDetailsData', userDetailsData);
      console.log('this is working fine');
      setUserDetails(userDetailsData);
    }
  }, []);

  const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

  return (
    <ThemeProvider theme={light_theme}>
      <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/profile/:name" element={userDetails ? <UserProfile /> : <Navigate to="/" replace />} />
            <Route path="/forget" element={<Forgot />} />
            <Route path="/reset-password/:token" element={<ResetPage />} exact />
            <Route path="/otp/:email" element={<OTP />} exact />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/professional/:name" element={userDetails ? <Workouts /> : <Navigate to="/" replace />} />
            <Route path="/workplans/:name" element={userDetails ? <Findprofessional /> : <Navigate to="/" replace />} />
            <Route path="/admin/:name" element={userDetails ? <Admin /> : <Navigate to="/" replace />} />
            Add more routes as needed
          </Routes>
    </Router>
    </ThemeProvider>);
};

export default App;









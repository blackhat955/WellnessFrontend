import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FindProfessional from './pages/findProfessional';
import RegistrationPage from './pages/registrationPages/resPage';
import LoginPage from './pages/loginPages/logPage';
import WorkoutPlans from './pages/workoutPlansPages/workoutPlans';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FindProfessional />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/workoutplans" element={<WorkoutPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
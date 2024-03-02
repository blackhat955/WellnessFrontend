import React from 'react';
import Navbar from '../../components/navbar/navbar'; 
import Search from '../../components/searchnav/searchnav';
import './workoutPlans.css';

const WorkoutPlans = () => {
  return (
    <div>
      <Navbar />
      <Search className="go"/>
      <div className="workout-plans-container">
        <h1>Workout Plans</h1>

        <div className="workout-plan">
          <h2>Beginner Workout Plan</h2>
          <p>A simple workout plan for beginners to get started.</p>
          <ul>
            <li><b>Warm-up</b>: 5 minutes of jogging</li>
            <li><b>Strength Training</b>Strength Training: 3 sets of push-ups (10 reps each)</li>
            <li><b>Cardio</b>: 20 minutes of brisk walking or cycling</li>
            <li><b>Cool Down</b>: 5 minutes of stretching</li>
          </ul>
        </div>

        <div className="workout-plan">
          <h2>Intermediate Workout Plan</h2>
          <p>A workout plan for those who have been exercising regularly.</p>
          <ul>
            <li><b>Warm-up</b>: 10 minutes of skipping</li>
            <li><b>Strength Training</b>: 3 sets of squats (12 reps each)</li>
            <li><b>Cardio</b>: 30 minutes of running or swimming</li>
            <li><b>Cool Down</b>: 10 minutes of yoga</li>
          </ul>
        </div>

        <div className="workout-plan">
          <h2>Advanced Workout Plan</h2>
          <p>A challenging workout plan for advanced athletes.</p>
          <ul>
            <li><b>Warm-up</b>: 10 minutes of dynamic stretching</li>
            <li><b>Strength Training</b>: Circuit training with various exercises</li>
            <li><b>Cardio</b>: High-intensity interval training (HIIT)</li>
            <li><b>Cool Down</b>: 15 minutes of foam rolling and mobility work</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default WorkoutPlans;
import React, {useState} from 'react'
import './App.css'
import LearningPage from './pages/LearningPage'
import CareGiver from './pages/CareGiver';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import CareSeeker from './pages/CareSeeker';
import attendance from './pages/attendance';
import LoginStepOne from './login';
import LoginFormWithType from './Signup';

// const { useState } = React;

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      <div>
        {/* <LearningPage/> */}
        {/* <CareGiver/> */}
        {/* <Header/> */}
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <ProfilePage role="caregiver" /> */}
        {/* <ProfilePage role="careseeker" /> */}
        {/* <CareSeeker/> */}
        {/* <attendance/> */}
        {/* <LoginStepOne/> */}
        <LoginFormWithType/>
      </div>
    </>
  )
}

export default App;
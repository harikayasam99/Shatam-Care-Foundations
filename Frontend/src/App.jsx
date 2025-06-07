import React, {useState} from 'react'
import './App.css'
import LearningPage from './pages/LearningPage'
import CareGiver from './pages/CareGiver';

// const { useState } = React;

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      <div>
        {/* <LearningPage/> */}
        <CareGiver/>
      </div>
    </>
  )
}

export default App;
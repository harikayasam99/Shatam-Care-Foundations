import { useState } from 'react'
import './App.css'
import Feedback from './components/FeedbackForms/Feedback.jsx'; 
import GiverFeedback from './components/FeedbackForms/GiverFeedback.jsx';
import WomenEmpowerment from './components/WomenEmpowerment/WomenPowerment.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Feedback />
      <GiverFeedback />
      <WomenEmpowerment />
    </>
  )
}

export default App
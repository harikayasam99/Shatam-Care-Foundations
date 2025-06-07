import { useState } from 'react'
import './App.css'
import CareSeeker from './pages/CareSeeker'
import CareGiver from './pages/CareGiver'
import Filter from './components/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CareSeeker/> */}
        <CareGiver/>
        {/* <Filter/> */}
      </div>
    </>
  )
}

export default App

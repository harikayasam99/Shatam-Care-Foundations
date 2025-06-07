import { useState } from 'react'
import './App.css'
import AdminDashboard from './pages/admin_page'
import CaregiverAttendance from './pages/attendance'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <div>
       <CaregiverAttendance />
       {/* <Navbar/> */}
      </div>
    </>
  )
}

export default App

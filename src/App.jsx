import { Routes, Route } from "react-router-dom"
import './App.css'
import { CreateEmployee } from "./Pages/CreateEmployee/CreateEmployee.jsx"
import { EmployeeLsit } from "./Pages/EmployeeList/Employee.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeLsit />} />
      </Routes>
    </>
  )
}

export default App

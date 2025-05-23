import { Routes, Route } from "react-router-dom"
import './App.css'
import { CreateEmployee } from "./Pages/CreateEmployee/CreateEmployee.jsx"
import { EmployeeList } from "./Pages/EmployeeList/Employee.jsx"
import { Navigation } from "./Components/Navigation/Navigation.jsx"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  )
}

export default App

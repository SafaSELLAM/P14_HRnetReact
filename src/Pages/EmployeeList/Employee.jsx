import { useSelector } from "react-redux"

export const EmployeeLsit = () => {

    const employees = useSelector((state) => state.employees.employees)

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>{employee.firstName} {employee.lastName}</li>
                ))}
            </ul>
        </div>
    )
}
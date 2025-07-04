import { createSlice } from "@reduxjs/toolkit"
import { generateMockEmployees } from "./mockEmployeeData.js"


const initializeEmployees = () => {
    return generateMockEmployees(500)
}

const initialState = {
    employees: initializeEmployees()
}

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
 
    }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
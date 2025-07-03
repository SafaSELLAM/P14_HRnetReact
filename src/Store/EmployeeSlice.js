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
        resetWithMockData: (state, action) => {
            const count = action.payload || 500
            const mockData = generateMockEmployees(count)
            state.employees = mockData
        },
        clearAllEmployees: (state) => {
            state.employees = []
        },
    }
})

export const { addEmployee, resetWithMockData, clearAllEmployees } = employeeSlice.actions
export default employeeSlice.reducer
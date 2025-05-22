import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./EmployeeSlice.js"

const store = configureStore({
    reducer: {
        employees: employeesReducer,
    }
})

export default store
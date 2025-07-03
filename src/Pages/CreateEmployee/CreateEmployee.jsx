import { useState } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../Store/EmployeeSlice.js"
import { Modal } from "../../Components/Modal/Modal.jsx"
import { InputField } from "../../Components/Atoms/InputField.jsx"
import { AddressFieldset } from "../../Components/Molecules/AddressFieldset.jsx"
import { SelectField } from "../../Components/Atoms/SelectField.jsx"
import { stateOptions, departmentOptions } from "../../Components/Const/Const.jsx"
import "./CreateEmployee.css"
import "../../App.css"
import { DatePicker } from "react-datepicker-custom-hirraeth_98"
import 'react-datepicker-custom-hirraeth_98/dist/index.css'

export const CreateEmployee = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Custom styles for react-select 
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: 8,
            borderColor: state.isFocused ? "#6482AD" : "#7FA1C3",
            boxShadow: state.isFocused ? "0 0 0 2px #F5EDED" : "none",
            minHeight: "48px",
            background: "#FFF",
            fontSize: "1rem",
            paddingLeft: "2px",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "#7FA1C3"
                : state.isFocused
                    ? "#E2DAD6"
                    : "#fff",
            color: state.isSelected ? "#FFF" : "#222",
            fontSize: "1rem",
        }),
    }
    // State variables for form fields
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("Sales")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newEmployee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        }

        dispatch(addEmployee(newEmployee)) //save in redux

        // Reset form fields
        setFirstName("")
        setLastName("")
        setDateOfBirth("")
        setStartDate("")
        setStreet("")
        setCity("")
        setState("")
        setZipCode("")
        setDepartment("Sales")

        setIsModalOpen(true)

    }

    return (
        <div className="column">

            <h2 className="create-employee-title colorPrimary">Create Employee</h2>
            <form onSubmit={handleSubmit} className="form-create column backWhite">
                <div className="form-container row">
                    <div className="form-input column ">
                        <InputField label="First Name" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <InputField label="Last Name" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />

                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker lang="en" id="date-of-birth" type="text" value={dateOfBirth} onChange={(e) => {
                            setDateOfBirth(e.target.value)
                        }}
                        />
                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker id="start-date" type="text" value={startDate} onChange={(e) => {
                            setStartDate(e.target.value)
                        }}
                            lang="en" />

                    </div>
                    <div className="form-input column ">

                        <AddressFieldset
                            street={street}
                            setStreet={setStreet}
                            setCity={setCity}
                            city={city}
                            state={state}
                            setState={setState}
                            stateOptions={stateOptions}
                            customStyles={customStyles}
                        />
                        <SelectField
                            customStyles={customStyles}
                            label={"Department"}
                            inputId="department"
                            options={departmentOptions}
                            value={department}
                            onChange={(value) => {
                                setDepartment(value || "Sales")
                            }}
                            placeholder="Select a department"
                        />

                        <InputField label="Zip-code" id="zip-code" value={zipCode} onChange={e => setZipCode(e.target.value)} type="number" />
                    </div>

                </div>

                <div className="save-button_container row">
                    <button type="submit" className="button-save  backSecondary colorWhite">
                        Save
                    </button>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2 className="modal-text center colorPrimary">A New Employee created !</h2>
                    </Modal>
                </div>
            </form>
        </div>
    )
}


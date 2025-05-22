import { useState } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../../Store/EmployeeSlice.js"
import { Link } from "react-router-dom"
import { Modal } from "../../Components/Modal/Modal.jsx"
import "./CreateEmployee.css"
import "../../App.css"

export const CreateEmployee = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)

    // États pour chaque champ du formulaire
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

        dispatch(addEmployee(newEmployee)) // Enregistre dans Redux

        // Réinitialisation du formulaire
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
        <div className="column center">
            <div>
                <h1 className="bleu"> HRnet</h1>
                <Link to="/employees">View Current Employees</Link>
            </div>
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit} className="flex-column">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                {/* jQuery datetimepicker ici, commenté pour l’instant */}
                {/* $('#date-of-birth').datetimepicker(); */}

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                {/* $('#start-date').datetimepicker(); */}

                <fieldset className="address column">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
                        <option value="">Select a state</option>
                        <option value="NY">New York</option>
                        <option value="CA">California</option>
                    </select>
                </fieldset>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />

                <label htmlFor="department">Department</label>
                <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>

                <div>
                    <button type="submit" className="button">
                        Save
                    </button>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2>Succès !</h2>
                        <p>L'employé a bien été créé.</p>
                    </Modal>
                </div>
            </form>
        </div>
    )
}


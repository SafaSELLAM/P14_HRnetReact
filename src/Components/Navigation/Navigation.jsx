import { Link } from "react-router-dom"
import "./navigation.css"

export const Navigation = () => {
    return (
        <nav className="navbar between center backPrimary colorWhite">
            <div className="navbar-logo">HRnet</div>
            <div className="navbar-links">
                <Link to="/">Create Employee</Link>
                <Link to="/employees">Employee List</Link>
            </div>
        </nav>
    )
}
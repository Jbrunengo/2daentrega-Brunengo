import CardWidget from "../CardWidget/CardWidget"
import logo from '../Assets/logo.png'
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>CorralonWeb</h3>
            </Link>        
            <div className="Categorias">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <div className="alert alert-secondary">
                        <NavLink to={'/category/Pisos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Pisos</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="alert alert-success">
                        <NavLink to={'/category/Impermabilizaciones'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Impermeabilizaciones</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="alert alert-secondary">
                        <NavLink to={'/category/Reparacion y Refuerzo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Reparacion y refuerzo</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
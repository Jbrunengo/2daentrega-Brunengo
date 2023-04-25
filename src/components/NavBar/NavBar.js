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
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <NavLink to={'/category/Pisos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Pisos</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={'/category/Impermabilizaciones'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Impermeabilizaciones</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={'/category/Reparacion y Refuerzo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Reparacion y refuerzo</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
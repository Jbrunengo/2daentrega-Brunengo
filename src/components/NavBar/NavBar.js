import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'    

const NavBar = () => {
    return (
        <>
        <div>
            <img className="logo" src={logo} alt="logo" />
        </div>
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
                        <NavLink to={'/category/Impermeabilizaciones'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Impermeabilizaciones</NavLink>
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
        </>
    )
}
export default NavBar
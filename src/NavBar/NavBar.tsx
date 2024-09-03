import './styles/NavBar.css'
//import NavMenu from "./NavMenu"
import SideBar from './SideBar'

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-info fw-semibold fs-0">Sherlock</a>
                
                {/* Button Menu */}
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="offcanvas" data-bs-target="#sideMenu" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Menu */}
                {/* <NavMenu/> */}

                {/* Side Nabar */}
                <SideBar/>
            </div>
        </nav>
    )
}
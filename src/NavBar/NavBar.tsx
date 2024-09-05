import './styles/NavBar.css'
import SideBar from './SideBar'

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-info fw-semibold fs-0">Sherlock</a>
                
                {/* Button Menu */}
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="offcanvas" data-bs-target="#sideMenu" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"
                >
                  {/* <i className='bx bx-menu'></i> */}
                  <i className="bi bi-list"></i>
                </button>

                {/* Side Nabar */}
                <SideBar/>

            </div>
        </nav>
    )
}

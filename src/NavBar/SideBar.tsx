 import './styles/SideBar.css'
 import 'bootstrap/dist/css/bootstrap.min.css';

 export default function SideBar() {
    return(
        <section  className="offcanvas offcanvas-start bg-body-tertiary"
        id="sideMenu"
        tabIndex={-1}
        style={stylesCanvas}
        >
            <div className="offcanvas-header bg-danger">
                {/* <i className='bx bx-menu'></i> */}
                <a href="#" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="bi bi-x-lg" style={{fontSize:22, color: "black"}}></i>
                </a>               
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contents</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </section>
    )
}

const stylesCanvas: React.CSSProperties = {
    width:350,
}
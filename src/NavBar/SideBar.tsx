 import './styles/SideBar.css'

 export default function SideBar() {

    return(
        <section  className="offcanvas offcanvas-start bg-body-tertiary"
        id="sideMenu"
        tabIndex={-1}
        style={stylesCanvas}
        >
            <div className="offcanvas-header">
                {/* <i className='bx bx-menu'></i> */}
                <a href="#" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="bi bi-x-lg" style={{fontSize:22, color: "black"}}></i>
                </a>               
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Books</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Contents</a>
                    </li>
                </ul>
                <ul className="navbar-nav me-2 mb-0">
                    <li className="nav-item">
                        <a className="nav-link search" aria-current="page" href="#">
                            <input type="text" className='form-control' placeholder='Search...'/>
                            <i className='bi bi-search'></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#"
                        data-bs-toggle="offcanvas" data-bs-target="#sideCart" aria-controls="sideCart"
                        >   
                            <i className='bi bi-bag-fill position-relative'>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize:10}}>
                                  4+
                                </span>
                            </i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#userAccountModal">
                            <i className='bi bi-person-circle'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

const stylesCanvas: React.CSSProperties = {
    width:350,
}
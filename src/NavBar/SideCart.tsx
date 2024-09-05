import './styles/SideCart.css'

export default function SideCart(props:any) {
    return(
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="sideCart" aria-labelledby="offcanvasScrollingLabel"
        style={offCanvas}
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
        </div>
    )
}

const offCanvas: React.CSSProperties = {
     height: 'calc(100vh - 60px)',
     marginTop: 60,
}
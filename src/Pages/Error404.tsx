import './Error.css'
import { Link } from "react-router-dom";
import imgCat from './image-cat.png'

export default function Error404() {
    return(
        <div className="container Error">
            <div className="left text-center">
                <img src={imgCat} alt="image of a cat"/>
            </div>
            <div className="right">
                <h3>Opps.</h3>
                <p className='p-1'>We can't find the page you're looking for.</p>
                <p className='p-2'>It may have expired, or there cloud be a typo. Maybe you can find what you need from pur homepage.</p>

                <Link to='/home' className="btn btn-primary btn-sm">Return to Sherlock.com</Link>
            </div>
        </div>
    )
}
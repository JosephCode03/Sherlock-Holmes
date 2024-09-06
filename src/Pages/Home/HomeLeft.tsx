import './styles/HomeLeft.css'
import { Link } from "react-router-dom";

export default function HomeLeft() {
    return(
        <div className="text-center">
            <h3 className="welcome-message">Welcome Readers</h3>
            <p className="p-home-1">
            Discover new experiences in our library, we give you offers with discounts included in original editions, we also give you a description of the content of each book released. Register on our platform to be able to buy and keep you up to date with our work.
            </p>

            <div className="buttons-group">
                <Link to='/books' className="btn btn-primary btn-sm">
                Buy our books
                </Link>
            </div>
        </div>
    )
}
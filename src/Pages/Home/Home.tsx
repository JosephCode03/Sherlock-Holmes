import './styles/Home.css'
import sherlock from './sherlock-holmes-picture.png'
import HomeLeft from './HomeLeft'

export default function Home() {
    return(
        <div className="container Home">
            <div className="home-left bg-danger">
                <HomeLeft/>
            </div>
            <div className="home-right bg-info">
                <img src={sherlock} alt="sherlock-holmes-picture" />
            </div>
        </div>
    )
}
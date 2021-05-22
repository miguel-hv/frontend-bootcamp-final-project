import { Link } from "react-router-dom";
import "./Home.scss"


const Home = () => {
    return (
            <div className="home-container">
                <div>Home</div>
                <Link to="/donations"> Koalas on fire</Link>
            </div>
    );
};

export default Home;

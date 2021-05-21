import { Link } from "react-router-dom";
import "./Home.scss"


const Home = () => {
    return (
        <>
        <div className="home-container">
            <header>
                <div>Home</div>
            </header>
            <body>
                <Link to="/donations"> Koalas on fire</Link>
            </body>
            </div>
        </>
    );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <header>
                <div>Home</div>
            </header>
            <body>
                <Link to="/donations"> Koalas on fire</Link>
            </body>
        </>
    )

}

export default Home;
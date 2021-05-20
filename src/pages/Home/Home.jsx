import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <>
            <header>
                <div>Nombre</div>
            </header>
            <body>
                <Link to="/donations"> Koalas on fire</Link>
            </body>
        </>
    )

}

export default Home;
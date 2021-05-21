import { Link } from 'react-router-dom';

const Pickups = () => {

    return (
        <>
            <header>
                <div>Pickups</div>
            </header>
            <body>
                <Link to="/pickups/form"> Recogida puntual</Link>
            </body>
        </>
    )

}

export default Pickups;
import { Link } from 'react-router-dom';

const Donations = () => {

    return (
        <>
            <header>
                <div>Donations</div>
            </header>
            <body>
                <Link to="/donations/form"> Donar </Link>
            </body>
        </>
    )

}

export default Donations;
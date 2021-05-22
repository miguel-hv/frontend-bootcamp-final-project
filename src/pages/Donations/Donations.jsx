import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Donations = () => {

    return (
        <>

                <div>Donations</div>

                <Link to="/donations/form"> Donar </Link>
        </>
    )

}

export default Donations;
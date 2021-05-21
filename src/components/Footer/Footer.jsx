import { Link } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {

    return(
        <>
        <div className="footer-container">
        <div>Footer</div>
        <Link to="/pickups"> Icono camión</Link>
        <Link to="/"> Home</Link>
        </div>
        </>
    )
}

export default Footer;
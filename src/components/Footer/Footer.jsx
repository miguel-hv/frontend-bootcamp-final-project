import { Link } from "react-router-dom";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHome, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>

                <div>
                    <Link to="/pickups">
                        <FontAwesomeIcon icon={faTruck} />
                    </Link>
                </div>
                <div>
                    <Link to="">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;

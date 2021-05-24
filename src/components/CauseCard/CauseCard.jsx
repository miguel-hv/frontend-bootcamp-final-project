import { Link } from 'react-router-dom';
import "./CauseCard.scss";

const CauseCard = (props) => {

    const { cause } = props;

    return (

        <Link to="/donations"> 
            <div className="cause">
                <h3 className="cause__name">{cause.name}</h3>
                <img className="image" src= {cause.image} alt="cause" />
            </div>           
        </Link>
    )

}

export default CauseCard;
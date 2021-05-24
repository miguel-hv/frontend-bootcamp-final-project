import { Link } from 'react-router-dom';

const CauseCard = (props) => {

    const { cause } = props;

    return (

        <Link to="/donations"> 
        
            <h2>{cause.name}</h2>
            <img className="image" src= {cause.image} alt="cause" />

        </Link>
    )

}

export default CauseCard;
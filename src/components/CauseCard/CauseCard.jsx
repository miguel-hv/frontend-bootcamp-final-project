import { Link } from 'react-router-dom';

const CauseCard = (props) => {

    const { cause } = props;

    return (

        <Link to="/donations/form"> 
        
            <h2>{cause.name}</h2>
            <img src= {cause.image} alt="cause" />

        </Link>
    )

}

export default CauseCard;
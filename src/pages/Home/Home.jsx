import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { causesAsync } from '../../redux/reducers/causes.slice';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import "./Home.scss"



const Home = () => {

    const allCauses = useSelector(state => state.causes.allCauses);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(causesAsync());
        // console.log(allCauses);
        // eslint-disable-next-line
    }, []);

    //console.log('allCauses:',allCauses);


    return (
        <>
            <div className="home-container">
            <h1>R-cicl <FontAwesomeIcon icon={faSync} /></h1>
                <div>
                    <img src="" alt="user avatar" />
                </div>
                <div>
                    {/* {allCauses[0].name} */}
                </div>
                <Link to="/donations"> Koalas on fire</Link>
            </div>
        </>    
    );
};

export default Home;

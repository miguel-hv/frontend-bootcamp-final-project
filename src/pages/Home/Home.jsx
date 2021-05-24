import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { causesAsync } from '../../redux/reducers/causes.slice';
import { CauseCard } from '../../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import "./Home.scss"



const Home = () => {

    const { user } = useSelector(state => state.user);
    const allCauses = useSelector(state => state.causes.allCauses);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(causesAsync());
        // eslint-disable-next-line
    }, []);

    // console.log('allCauses:',allCauses);
    //console.log('allCauses:',allCauses);


    return (
        <>
            <div className="home-wrap">                            

                {user &&  <div className="user-profile">
                    <div className="user-profile__avatar">
                        <img className="image image__avatar"src={user.image} alt="avatar" />
                    </div>
                    <div className="user-profile__welcome">
                        <h3 className="logo-main">R-cicl <FontAwesomeIcon icon={faSync} /></h3>
                        ¡Hola {user.name}!
                    </div>
                </div>
                }
                <div>
                    {allCauses.map((cause) => {
                return <CauseCard key={`${cause._id}-${cause.name}`} cause={cause} />;
                })}
                </div>
            </div>
        </>    
    );
};

export default Home;

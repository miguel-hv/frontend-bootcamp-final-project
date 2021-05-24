import { CauseCard } from '../../components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

import "./Home.scss"



const Home = (props) => {

    const {user, allCauses} = props;

    // console.log('allCauses:',allCauses);
    //console.log('allCauses:',allCauses);


    return (
        <>
        <div className="home-box">
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
                <div className="causes-wrap">
                    {allCauses.map((cause) => {
                return <CauseCard key={`${cause._id}-${cause.name}`} cause={cause} />;
                })}
                </div>
            </div>
            </div>
        </>    
    );
};

export default Home;

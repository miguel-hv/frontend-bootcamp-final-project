import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { causesAsync } from '../../redux/reducers/causes.slice';
import { CauseCard } from '../../components';
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


    return (
        <>
            <div className="home-container">
                <div>Home</div>
                {user && 
                    <span className="nav__user-message">
                        ¡Hola {user.name}!
                    </span>
                }
                <div>
                    {allCauses.map((cause) => {
                return <CauseCard key={`${cause._id}-${cause.name}`} cause={cause} />;
            })}
                </div>
                {/* <Link to="/donations"> Koalas on fire</Link> */}
            </div>
        </>    
    );
};

export default Home;

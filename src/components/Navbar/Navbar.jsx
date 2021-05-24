import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAsync } from '../../redux/reducers/user.slice';
import "./Navbar.scss";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector(state => state.user);

    const redirect = () => {
        history.push('/');
    }

    const logout = () => {
        dispatch(logoutAsync());
        // dispatch(logoutAsync(redirect));
    };

    
    return (

        <>
        <nav className="navbar">
            <div>
                {!user && <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                </>}

                {user && <>
                    <button onClick={logout}>Logout</button>
                </>}
            </div>
        </nav>
            
            
        </>
    );
};

export default Navbar;

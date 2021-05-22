import { useHistory } from 'react-router-dom';
import { logout } from '../../api/auth.api';

const LogoutButton = (props) => {
    const history = useHistory();

    const logoutUser = async () => {
        await logout();
        props.saveUser(null);
        history.push("/");
    }

    return (
        <button onClick={logoutUser}>Deslogate</button>
    )
};

export default LogoutButton;
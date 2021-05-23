import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/reducers/user.slice';

const INITIAL_STATE = {
    email: "",
    password: "",
};

const Login = (props) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(INITIAL_STATE);
    const error = useSelector(state => state.user.error);

    const redirect = () => props.history.push('/');

    const submit = async (ev) => {
        ev.preventDefault();

        dispatch(loginAsync({
            form,
            cb: redirect,
        }));
        setForm(INITIAL_STATE);
    };

    const changeInput = (ev) => {
        const { name, value } = ev.target;

        setForm({ ...form, [name]: value });
    };


    return (
        <>
            <h1 onClick={redirect}>Lógate</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="tuemail@email.com"
                        onChange={changeInput}
                        value={form.email}
                    />
                </label>

                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={changeInput}
                        value={form.password}
                    />
                </label>
                <button type="submit">Lógate</button>

                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
};

export default Login;

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/reducers/user.slice';
import "./Login.scss";

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
            <div className="login-box">
                <div>
                    <h1 className="login-title">Lógate</h1>
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
                        <button type="submit" className="login-button">
                            Lógate
                        </button>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

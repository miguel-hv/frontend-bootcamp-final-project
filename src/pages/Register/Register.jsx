import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAsync } from "../../redux/reducers/user.slice";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    image: "",
    street: "",
    postalCode: "",
    city: "",
};

const Register = (props) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(INITIAL_STATE);
    const error = useSelector(state => state.user.error);

    const redirect = () => props.history.push('/');

    const submit = async (ev) => {
        ev.preventDefault();


        dispatch(registerAsync({
            form,
            // cb: redirect,
        }));
        setForm(INITIAL_STATE);
    };

    const changeInput = (ev) => {
        const { name, value } = ev.target;

        setForm({ ...form, [name]: value });
    };

    return (
        <>
            <form onSubmit={submit} encType="multipart/form-data">
                <label>
                    <p>Nombre de usuarie</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        onChange={changeInput}
                        value={form.name}
                    />
                </label>
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
                    <p>Foto de perfil</p>
                    <input
                        type="file"
                        name="image"
                        onChange={changeInput}
                        value={form.image}
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
                <label>
                    <p>Dirección</p>
                    <input
                        type="text"
                        name="street"
                        placeholder="Calle, numero y piso."
                        onChange={changeInput}
                        value={form.street}
                    />
                </label>
                <label>
                    <p>Código postal</p>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="cp"
                        onChange={changeInput}
                        value={form.postalCode}
                    />
                </label>
                <label>
                    <p>Ciudad</p>
                    <input
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        onChange={changeInput}
                        value={form.city}
                    />
                </label>

                <button type="submit">Regístrate</button>

                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
};

export default Register;

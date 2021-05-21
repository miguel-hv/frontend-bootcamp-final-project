import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api/auth.api";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    street: "",
    postalCode: "", //no tiene que ser array
    city: "",
    
};

const Register = (props) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [error, setError] = useState("");

    const submit = async (ev) => {
        ev.preventDefault();

        try {
            const user = await register(form);
            props.saveUser(user);
            props.history.push("/");
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    const changeInput = (ev) => {
        const { name, value } = ev.target;

        setForm({ ...form, [name]: value });
    };

    //console.log(props);

    return (
        <>
            <Link to="/login">
                <h1>Login</h1>
            </Link>
            <form onSubmit={submit}>
                <label htmlFor="name">
                    <p>Nombre de usuarie</p>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        onChange={changeInput}
                        value={form.name}
                    />
                </label>
                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tuemail@email.com"
                        onChange={changeInput}
                        value={form.email}
                    />
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={changeInput}
                        value={form.password}
                    />
                </label>
                <label htmlFor="address">
                    <p>Dirección</p>
                    <input
                        type="text"
                        id="address"
                        name="street"
                        placeholder="Calle, numero y piso."
                        onChange={changeInput}
                        value={form.street}
                    />
                </label>
                <label htmlFor="address">
                    <p>Código postal</p>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="cp"
                        onChange={changeInput}
                        value={form.postalCode}
                    />
                </label>
                <label htmlFor="address">
                    <p>Ciudad</p>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ciudad"
                        onChange={changeInput}
                        value={form.city}
                    />
                </label>

                <button type="submit">Regístrate</button>
                {error && <div>{error}</div>}
            </form>
        </>
    );
};

export default Register;

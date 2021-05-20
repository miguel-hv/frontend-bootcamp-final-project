import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../api/auth.api";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    address: [{
                street:"", 
                postalCode:"", 
                city:"",
            }],
    tpv: [{
            number:"",
            dateExpiry: "",
            cvv:"",
        }],
};

const Register = (props) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [error, setError] = useState("");

    const submit = async (ev) => {
        ev.preventDefault();

        try {
            const user = await register(form);
            props.saveUser(user);
            setForm(INITIAL_STATE);
            props.history.push("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const changeInput = (ev) => {
        const { name, value } = ev.target;

        setForm({ ...form, [name]: value });
    };

    console.log(props);

    return (
        <>
            <Link to="/login">
                <h1>Registro</h1>
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
                <label htmlFor="street">
                    <p>Dirección</p>
                    <input type="text"
                            id="street"
                            name="street"
                            placeholder="Calle, numero y piso."
                            onChange={changeInput}
                            value={form.address.street}
                     />
                </label>
                <label htmlFor="postalCode">
                    <p>Código postal</p>
                    <input type="text"
                            id="postalCode"
                            name="postalCode"
                            placeholder="cp"
                            onChange={changeInput}
                            value={form.address.postalCode}
                     />
                </label>
                <label htmlFor="city">
                    <p>Ciudad</p>
                    <input type="text"
                            id="city"
                            name="city"
                            placeholder="Ciudad"
                            onChange={changeInput}
                            value={form.address.city}
                     />
                </label>
                <label htmlFor="number">
                    <p>Numero de la tarjeta</p>
                    <input type="text"
                            id="number"
                            name="number"
                            placeholder="Numero de la tarjeta"
                            onChange={changeInput}
                            value={form.tpv.number}
                     />
                </label>
                <label htmlFor="dateExpiry">
                    <p>Fecha de caducidad</p>
                    <input type="text"
                            id="dateExpiry"
                            name="dateExpiry"
                            placeholder="fecha de caducidad"
                            onChange={changeInput}
                            value={form.tpv.dateExpiry}
                     />
                </label>
                <label htmlFor="cvv">
                    <p>Cvv</p>
                    <input type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="fecha de caducidad"
                            onChange={changeInput}
                            value={form.tpv.cvv}
                     />
                </label>

                <button type="submit">Regístrate</button>
                {error && <div>{error}</div>}
            </form>
        </>
    );
};

export default Register;

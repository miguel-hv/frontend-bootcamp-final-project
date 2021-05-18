import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../api/auth.api";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    addres: [{
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
                <label htmlFor="addres">
                    <p>Dirección</p>
                    <input type="text"
                            id="addres"
                            name="addres"
                            placeholder="Calle, numero y piso."
                            onChange={changeInput}
                            value={form.addres.street}
                     />
                </label>
                <label htmlFor="addres">
                    <p>Código postal</p>
                    <input type="text"
                            id="postalCode"
                            name="postalCode"
                            placeholder="cp"
                            onChange={changeInput}
                            value={form.addres.postalCode}
                     />
                </label>
                <label htmlFor="addres">
                    <p>Ciudad</p>
                    <input type="text"
                            id="city"
                            name="city"
                            placeholder="Ciudad"
                            onChange={changeInput}
                            value={form.addres.city}
                     />
                </label>
                <label htmlFor="tpv">
                    <p>Numero de la tarjeta</p>
                    <input type="text"
                            id="tpv"
                            name="tpv"
                            placeholder="Numero de la tarjeta"
                            onChange={changeInput}
                            value={form.tpv.number}
                     />
                </label>
                <label htmlFor="tpv">
                    <p>Fecha de caducidad</p>
                    <input type="text"
                            id="tpv"
                            name="tpv"
                            placeholder="fecha de caducidad"
                            onChange={changeInput}
                            value={form.tpv.dateExpiry}
                     />
                </label>
                <label htmlFor="tpv">
                    <p>Cvv</p>
                    <input type="text"
                            id="tpv"
                            name="tpv"
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

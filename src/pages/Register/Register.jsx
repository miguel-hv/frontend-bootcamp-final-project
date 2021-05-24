import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerAsync } from "../../redux/reducers/users.slice";
import "./Register.scss";


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
    const [form, setForm] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const submit = async (ev) => {
        ev.preventDefault();

        try {
            dispatch(registerAsync(form));
            setForm(INITIAL_STATE);
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

    return (
        <>
            {/* <Link to="/login">
                <h4>Ve a login</h4>
            </Link> */}
            
            <div className="form-box">
            <div>
                <form onSubmit={submit} encType="multipart/form-data" className="register-form">
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

                    <button type="submit" className="button">Regístrate</button>
                    {error && <div>{error}</div>}
                </form>
                </div>
            </div>
        </>
    );
};

export default Register;

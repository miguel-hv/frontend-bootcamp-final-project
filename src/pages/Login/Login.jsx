import { useState } from "react";
import { login } from "../../api/auth.api";
import "./Login.scss"

const INITIAL_STATE = {
    email:"",
    password:"",
};

const Login = (props) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [error, setError] = useState("");

    const submit = async (ev) => {

        ev.preventDefault();

        try{

            const user = await login(form);
            console.log('usuario logado', user);
            props.saveUser(user);
            setForm(INITIAL_STATE);
            props.history.push("/");
            
        }catch(error){
            setError(error.message);
        }
    };    
    

    const changeInput = (ev) => {
        const { name, value } = ev.target;
        
        setForm({ ...form, [name]: value });

    };

    const redirect = () => {
        props.history.push({
            pathname: "/register",
            
        });
    };

    return (
        <>
        <div className="login-box">
        <h1 onClick={redirect}>Lógate</h1> 
        <form onSubmit={submit} >
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
            <button type="submit" className="login-button">Lógate</button>

            {error && <div>{error}</div> }
        </form>
      </div>
        </> 
    );
};

export default Login;
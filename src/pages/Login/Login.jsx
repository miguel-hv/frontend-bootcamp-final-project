import { useState } from "react";
import { login } from "../../api/auth.api";

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

        }catch{
            
        }
    }
};
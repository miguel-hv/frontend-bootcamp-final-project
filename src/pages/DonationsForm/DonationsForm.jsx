import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addDonation } from '../../redux/reducers/donations.slice';
import { Link } from 'react-router-dom';


const INITIAL_STATE = {
    quantity: 0,
    name: "",
    surname: "",
    hideName: false,
    email: "",
    postalCode: "",
    city: "",
};

const DonationsForm = (props) => {

    const dispatch = useDispatch();
    const [form, setForm] = useState(INITIAL_STATE);
    // const error = useSelector(state => state.user.error);

    const redirect = () => props.history.push('/');

    const submit = async (ev) => {
        ev.preventDefault();

        console.log('formulario donations enviado');

        dispatch(addDonation(form.quantity));
        redirect();
        // setForm(INITIAL_STATE);
    };

    const changeInput = (ev) => {
        const { name, value, type } = ev.target;
        let parsedValue = value;
        if (type === 'number'){
            parsedValue = Number(value);
        }
        setForm({ ...form, [name]: parsedValue });
    };

    return (
        <>

            <Link to="/donativos"> Donar ahora</Link>
            <header>
                <div>Indica tu donativo</div>
            </header>

        
            <form onSubmit={submit} className="donations-form">

                <label htmlFor="quantity">                    
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Cantidad"
                        onChange={changeInput}
                        value={form.quantity}
                    />
                </label>
                <label htmlFor="name">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"  
                        onChange={changeInput}
                        value={form.name}
                    />
                </label>
                <label htmlFor="surname">
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="surname"
                        onChange={changeInput}
                        value={form.name}
                    />
                </label>

                <label htmlFor="email">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        onChange={changeInput}
                        value={form.email}
                    />
                </label>

                <label htmlFor="hideName">
                    <p>Ocultar nombre</p>
                    <input
                        type="checkbox"
                        id="hideName"
                        name="hideName"
                        onChange={changeInput}
                        value={form.hideName}
                    />
                </label>

                <label htmlFor="postalCode">
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="postalCode"
                        onChange={changeInput}
                        value={form.postalCode}
                    />
                </label>
                <label htmlFor="city">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="city"
                        onChange={changeInput}
                        value={form.city}
                    />
                </label>

                <div>
                    <button type="submit">Donar</button>
                </div>


                {/* {error && <div className="error">{error}</div>} */}
            </form>

        </>
    )

}

export default DonationsForm;
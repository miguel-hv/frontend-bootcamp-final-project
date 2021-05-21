import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step3 = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.pets.form);

    const inputChange = (ev) => {
        const {name, value, type, checked} = ev.target;
        let tempValue = value;

        if (type === 'checkbox') {
            tempValue = checked;
        }

        dispatch(changeFormField({name, value: tempValue}));
    };
    return (
        <>
            <h2>Paso 3</h2>
            <form>
                <label htmlFor="paymentCard">
                <p>Tarjeta acabada en 1234</p>
                    <input 
                        type="checkbox"
                        id="paymentCard"
                        name="paymentCard"
                        onChange={inputChange}
                        value={form.paymentCard}
                     />
                </label>
            </form>
        </>
    );
};

export default Step3;

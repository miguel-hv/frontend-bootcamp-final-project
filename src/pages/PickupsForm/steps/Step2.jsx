import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step2 = () => {
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
            <h2>Paso 2</h2>
            <form>
                <p>Inputs paso 2</p>
                <label htmlFor="address">
                    <p>Dirección</p>
                    <input
                        type="checkbox"
                        id="address"
                        name="address"
                        onChange={inputChange}
                        value={form.address}
                    />
                </label>
            </form>
        </>
    );
};

export default Step2;

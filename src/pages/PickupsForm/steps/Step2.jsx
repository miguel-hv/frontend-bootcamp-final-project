import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step2 = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.pets.form);
    const testAddress = 'C/ Prueba 13 3ºB 55541 Madrid';

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
                <label htmlFor="address">
                    <p>{testAddress}</p>
                    <input
                        type="checkbox"
                        id="address"
                        name="address"
                        onChange={inputChange}
                        // value={testAddress}
                    />
                </label>
            </form>
        </>
    );
};

export default Step2;

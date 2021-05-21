import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step1 = () => {

    const dispatch = useDispatch();
    const form = useSelector((state) => state.pets.form);

    const inputChange = (ev) => {
        const {name, value} = ev.target;

        dispatch(changeFormField({name, value}));
    };


    return (
        <>
            <h2>Paso 1</h2>
            <form >
                <label htmlFor="date">
                    <p>Fecha</p>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Fecha"
                        onChange={inputChange}
                        value={form.date}
                    />
                </label>
                <label htmlFor="time">
                    <p>Hora</p>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        placeholder="20:00h"
                        onChange={inputChange}
                        value={form.time}
                    />
                </label>
            </form>
        </>
    );
};

export default Step1;

import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step4 = () => {
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
            <h2>Paso 4</h2>
            <form>
                <label htmlFor="paper">
                    <p>Cartón y papel</p>
                    <input type="checkbox"
                            id="paper"
                            name="paper"
                            onChange={inputChange}
                            value={form.paper}
                     />
                </label>
                <label htmlFor="glass">
                    <p>Vidrio</p>
                    <input type="checkbox"
                            id="glass"
                            name="glass"
                            onChange={inputChange}
                            value={form.glass}
                     />
                </label>
                <label htmlFor="batteries">
                    <p>Pilas</p>
                    <input type="checkbox"
                            id="batteries"
                            name="batteries"
                            onChange={inputChange}
                            value={form.batteries}
                     />
                </label>
                <label htmlFor="clothes">
                    <p>Ropa</p>
                    <input type="checkbox"
                            id="clothes"
                            name="clothes"
                            onChange={inputChange}
                            value={form.clothes}
                     />
                </label>
                <label htmlFor="oil">
                    <p>Aceite</p>
                    <input type="checkbox"
                            id="oil"
                            name="oil"
                            onChange={inputChange}
                            value={form.oil}
                     />
                </label>
            </form>
        </>
    );
};

export default Step4;

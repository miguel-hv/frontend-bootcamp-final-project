import { useDispatch, useSelector } from "react-redux";
import { changeFormField } from "../../../redux/reducers/pickups.slice";

const Step3 = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.pets.form);

        // dispatch(changeFormField({name, value: tempValue}));
   
    return (
        <>
            <h2>Paso 5</h2>
            <div>coge toda la info y la pinta</div>
        </>
    );
};

export default Step3;

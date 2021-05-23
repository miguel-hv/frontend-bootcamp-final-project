import { useDispatch, useSelector } from "react-redux";

const Step3 = () => {
    const dispatch = useDispatch();
        // dispatch(changeFormField({name, value: tempValue}));
   
    return (
        <>
            <h2>Paso 5</h2>
            <div>coge toda la info y la pinta</div>
        </>
    );
};

export default Step3;

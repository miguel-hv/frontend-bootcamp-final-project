import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stepBackward, stepForward, addPet, resetForm } from '../../redux/reducers/pickups.slice';
// import {createPet} from '../../api/pets.api';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';


const PickupsForm = () => {
    const dispatch = useDispatch();
    const { actualStep, form } = useSelector(state => state.pets);
    const [image, setImage] = useState(null);

    const renderStep = () => {
        const actualStepComponent = steps[actualStep - 1];

        if (actualStepComponent) return actualStepComponent;
        else return null;
    };

    // const addFile = (ev) => {
    //     const img = ev.target.files[0];

    //     if (img) setImage(img);
    // };

    const submitForm = async (ev) => {
        ev.preventDefault();
        console.log('formulario enviado');
        // const formData = new FormData();

        // for (let key in form) {
        //     formData.append(key, form[key]);
        // }

        // if (image) formData.append('image', image);

        // const pet = await createPet(formData);

        // if (pet.name) {
        //     dispatch(addPet(pet));
        //     dispatch(resetForm());
        //     setImage(null);
        // } else {
        //     console.log('error', pet);
        // }
    }

    const steps = [
        <Step1 />,
        <Step2 />,
        <Step3/>,
        <Step4/>,
        <Step5/>,
    ];

    const isLastStep = actualStep < steps.length;
    
    return(
        <div className="pets-create">
        <h1>
            Formulario de recogida
        </h1>

        {renderStep()}
        
        <button
            onClick={() => dispatch(stepBackward())}
            disabled={actualStep <= 1}
        >
            Anterior
        </button>
        {isLastStep && <button onClick={() => dispatch(stepForward())}>Siguiente</button>}

        {actualStep === 3 && <div style={{margin: '24px 0px'}}>
            <button onClick={submitForm}>SUBMIT FORM</button>
        </div>}
    </div>


    )    
}

export default PickupsForm;
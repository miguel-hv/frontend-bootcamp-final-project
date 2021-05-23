// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stepBackward, stepForward } from '../../redux/reducers/pickups.slice';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';


const PickupsForm = () => {
    const dispatch = useDispatch();
    const { actualStep, form } = useSelector(state => state.pickups);

    const renderStep = () => {
        const actualStepComponent = steps[actualStep - 1];

        if (actualStepComponent) return actualStepComponent;
        else return null;
    };

    const submitForm = async (ev) => {
        ev.preventDefault();

        console.log('formulario enviado');
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
        <div className="pickups-form">
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

            {actualStep === 5 && <div>
                <button onClick={submitForm}>SUBMIT FORM</button>
            </div>}
        </div>
    )    
}

export default PickupsForm;
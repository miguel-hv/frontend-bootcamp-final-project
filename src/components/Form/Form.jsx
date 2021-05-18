import { useState } from 'react';

/**
 * Creamos estado inicial
 */
const INITIAL_FORM = {
    text: '',
    pablo: '',
}

/**
 * Componente funcional
 */
const Form = (props) => {
    /**
     * Creamos una variable de estado para nuestros inputs.
     * Una propiedad text y otra pablo, ambas vacías.
     */
    const [form, setForm] = useState(INITIAL_FORM);

    const submitForm = (ev) => {
        ev.preventDefault();

        /**
         * Llamamos a la función del padre (App) que crea un nuevo mensaje
         */
        // props.addItem(form.text);

        /**
         * Reseteamos formulario
         */
        console.log('formulario enviado: '+ form.text)
        setForm(INITIAL_FORM);
    };

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;

        setForm({
            ...form,
            [name]: value
        });
    }
    
    return (
        <form onSubmit={submitForm}>
            <input type="text" name="text" onChange={handleInputChange} value={form.text} />
            <input type="text" name="pablo" onChange={handleInputChange} value={form.pablo} />
            <button type="submit">Grabar tarea</button>
        </form>
    );
};

export default Form;

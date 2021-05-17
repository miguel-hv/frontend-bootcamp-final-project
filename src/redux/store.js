import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducers/counter.slice'; //borrar (solo para muestra)

export default configureStore({
    reducer: {
        counter: counterSlice.reducer, //borrar  (solo para muestra)
    }
});

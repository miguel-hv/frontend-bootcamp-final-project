import { configureStore } from '@reduxjs/toolkit';
import { pickupsSlice } from './reducers/pickups.slice';

export default configureStore({
    reducer: {
        pets: pickupsSlice.reducer,
    }
});

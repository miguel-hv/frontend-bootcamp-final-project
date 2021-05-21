import { configureStore } from '@reduxjs/toolkit';
import { pickupsSlice } from './reducers/pickups.slice';
import { donationsSlice } from './reducers/donations.slice';

export default configureStore({
    reducer: {
        pets: pickupsSlice.reducer,
        donations: donationsSlice.reducer,
    }
});

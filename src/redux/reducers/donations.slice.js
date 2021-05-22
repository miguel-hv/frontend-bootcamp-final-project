import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
    donation: 0,
    cause: "prueba",
    response: '',
    error: '',
}


export const donationsSlice = createSlice({
    name: 'donations',
    initialState: INITIAL_STATE,
    reducers: {
    },
   
});

export const {
    addDonation,
} = donationsSlice.actions;
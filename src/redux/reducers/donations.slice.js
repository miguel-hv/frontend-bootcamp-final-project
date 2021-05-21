import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    user: null,
    donatedQuantity: 0,
    error: '',
}

export const donationsSlice = createSlice({
    name: 'donations',
    initialState: INITIAL_STATE,
    reducers: {
        addDonation: (state, action) => {
            state.donatedQuantity += action.payload;
        },
    },
   
});

export const {
    addDonation,
} = donationsSlice.actions;
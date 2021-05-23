
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    itemsToPickup: [],
    form: {
        date: '',
        time: '',
        address: false,
        paymentCard: false,
    },
    actualStep: 1,
    error: '',
}

export const pickupsSlice = createSlice({
    name: 'pickups',
    initialState: INITIAL_STATE,
    reducers: {
        stepForward: (state) => {
            state.actualStep += 1;
        },
        stepBackward: (state) => {
            if (state.actualStep > 1) state.actualStep -= 1;
            else state.error = 'No puedes retroceder más';
        },
        changeFormField: (state, action) => {
            const {name, value} = action.payload;
            
            state.form[name] = value;
        },
        addRecicleItem: (state, action) => {
            state.itemsToPickup = [...state.itemsToPickup, action.payload];
        }, 
        resetForm: (state) => {
            state.form = INITIAL_STATE.form;
        },
    },
});

export const {
    stepBackward,
    stepForward,
    changeFormField,
    addRecicleItem,
    resetForm,
} = pickupsSlice.actions;

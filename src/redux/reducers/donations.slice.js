import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const INITIAL_STATE = {
    donation: 0,
    cause: "prueba",
    response: '',
    error: '',
}

// export const causeDonationAsync = createAsyncThunk("cause/donation", async (donation) => {
//     console.log("causeDonationAsync :"+donation)
//     return await causeDonation(donation);
// });

export const donationsSlice = createSlice({
    name: 'donations',
    initialState: INITIAL_STATE,
    reducers: {
        // addDonation: (state, action) => {
        //     state.donatedQuantity += action.payload;
        // },

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(causeDonationAsync.fulfilled, (state, action) => {
    //             state.response = action.payload;
    //             const { response, cb } = action.payload;

    //                 if (response.message) state.error = response.message;
    //                 else {
    //                     state.user = response;
    //                     state.error = '';
    //                     cb();
    //                 };
    //         });
    //     }
   
});

export const {
    addDonation,
} = donationsSlice.actions;
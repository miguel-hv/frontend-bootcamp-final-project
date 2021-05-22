import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { causeDonationPost} from "../../api/auth.api";


const INITIAL_STATE = {
    user: null,
    donatedQuantity: 0,
    error: '',
}

export const causeDonationAsync = createAsyncThunk("cause/donation", async (donation) => {
    return await causeDonationPost(donation);
});

export const donationsSlice = createSlice({
    name: 'donations',
    initialState: INITIAL_STATE,
    reducers: {
        addDonation: (state, action) => {
            state.donatedQuantity += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(causeDonationAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                //const { response, cb } = action.payload;

                //     if (response.message) state.error = response.message;
                //     else {
                //         state.user = response;
                //         state.error = '';
                //         cb();
                //     };
            });
        }
   
});

export const {
    addDonation,
} = donationsSlice.actions;
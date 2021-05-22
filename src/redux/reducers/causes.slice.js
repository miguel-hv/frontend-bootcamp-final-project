import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { causes } from "../../api/causes.api";

const INITIAL_STATE = {
    allCauses: [{
        name: "",
        description: "",
        image: "", 
        info: "",  
        raised:  "",
        goal:  "",
    }],
    error: "",
};

export const causesAsync = createAsyncThunk(
    "causes",
    async () => await causes()
);

export const causesSlice = createSlice({
    name: "causes",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder           
            .addCase(causesAsync.fulfilled, (state, action) => {
                console.log(action);
                state.allCauses   = action.payload;
            });
    },
});

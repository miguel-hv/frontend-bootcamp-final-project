

//BORRAR DOCUMENTO ENTERO (SOLO PARA MUESTRA)

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    counter: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {   increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
      },
  },
});

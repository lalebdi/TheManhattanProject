import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({ name: "Leah"})
            state.push({ name: "jane"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions
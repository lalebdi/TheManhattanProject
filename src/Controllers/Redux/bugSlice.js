import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../BugController';

const slice = createSlice({
    name: "bug",
    initialState: [],
    reducers: {
        getBugs:state => retrieveBugs() , // anything that is return from here will set the state
        createBugs:(state,actions)=>{

        },
        updateBug:(state,actions) => {

        },
        markComplete:(state,action) => {

        }
    }
})

export default slice.reducer;

export const {getBugs, createBugs, updateBug, markComplete} = slice.actions;


import React from "react";
import { createSlice } from "@reduxjs/toolkit"; 

const initialState: {status: boolean} = {status : false};

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        handleStatus (state) {
            state.status = !state.status
        } 
    }
})

export const {handleStatus} = burgerSlice.actions

export default burgerSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState: {value: boolean} = {value: false};
const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        showModal(state) {
        state.value = !state.value
        },
     
}})

export const {showModal} = modalSlice.actions;

export default modalSlice.reducer;      
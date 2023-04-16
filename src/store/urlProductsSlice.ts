import { createSlice } from "@reduxjs/toolkit";

const initialState: {url:string} = { url :'https://fakestoreapi.com/products/category/electronics' }

const urlProducts = createSlice({
    name: 'url',
    initialState,
    reducers: {
        changeUrl(state, actions) {
            state.url = actions.payload
        }
    }
})

export const {changeUrl} = urlProducts.actions

export default urlProducts.reducer
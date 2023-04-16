import {configureStore} from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import urlProductsReducer from './urlProductsSlice'
import burgerReducer from './burgerSlice'

const store = configureStore ({

    reducer : {
        modalWindow : modalReducer,
        urlProducts : urlProductsReducer,
        burgerStatus: burgerReducer

    }

})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
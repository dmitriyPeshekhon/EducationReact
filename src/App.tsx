import React from "react";
import { useAppSelector } from "./store/hooks";
import { useAppDispatch } from "./store/hooks";
import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import { Products } from "./components/listProduct/Products";
import { Modal } from "./components/ModalWindow/Modal";
import {showModal} from './store/modalSlice'

const App: React.FC = () => {

const selectorModal = useAppSelector(state => state.modalWindow.value)


const dispatch = useAppDispatch()

return (
<div className="container">

    <div className="header-top">sobaka sutulaya</div>

    <NavBar/>

    <button style = {{margin: '100px 0 0 0'}} onClick={() => dispatch(showModal())}>Show modal window</button>

    <Products/>
    
    {selectorModal ? <Modal/> : null}

  
    
</div>
    )
}

export default App;
import React from "react";
import './NavBar.css'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleStatus } from "../../store/burgerSlice";
import { Categories } from "../ListCategories/Categories";

export const NavBar: React.FC = (): JSX.Element => {

const dispatch = useAppDispatch()
    
return <nav>

    <div className="containerNav">
    <img src='../../public/pes.jpeg' alt='mops'/>

        <button className='burgerButton' onClick={() => dispatch(handleStatus())}>

            <span>Категории</span>
            

        </button>

    </div>
    
    <Categories/>

</nav>
}
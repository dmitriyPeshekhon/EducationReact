import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import './burgerWindow.css'
import { Categories } from "../ListCategories/Categories";

export const BurgerWindow = () => {
    return <div>
        <Categories/>
    </div>
}
import React from "react";
import './Category.css'
import { changeUrl } from "../../../store/urlProductsSlice";
import { useAppDispatch } from "../../../store/hooks";

type PropsData = {
category: string
}

export const Category: React.FC<PropsData> =  (category): JSX.Element => {

const dispatch = useAppDispatch()

const url = category.category === 'electronics' 
            ? 'https://fakestoreapi.com/products/category/electronics'
            : category.category === 'jewelery'
            ? 'https://fakestoreapi.com/products/category/jewelery'
            : category.category === "men's clothing"
            ? "https://fakestoreapi.com/products/category/men's clothing"
            : category.category === "women's clothing"
            ? "https://fakestoreapi.com/products/category/women's clothing"
            : 'https://fakestoreapi.com/products'

    return (
        <h3 style = {{width:'max-content', color:'white', cursor: 'pointer'}}onClick={ () => dispatch(changeUrl(url)) }>
        {`${category.category[0].toUpperCase()}${category.category.substring(1)}`}
        </h3>
    )
}


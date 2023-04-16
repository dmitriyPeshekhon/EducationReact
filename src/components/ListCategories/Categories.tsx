import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {Category} from "./Category/Category";
import './Categories.css'
import { useAppSelector } from "../../store/hooks";

async function fetchCategory() {
    const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
    return response.data
    
 }
 
export const Categories: React.FC = (): JSX.Element => {

const selector = useAppSelector((state) => state.burgerStatus.status)

const {data,isLoading, isError} = useQuery('prevRequest', fetchCategory)

return (
<div className={selector ? 'categories' : 'categories show'}>
    {isLoading ? <h1 style={{textAlign: "center"}}>Loading...</h1> 
    : isError ? <h1 style={{textAlign: "center"}}>Error!!!</h1> 
    : data ? data.map((category, index) => <Category category = {category} key = {index}/>) 
    : <h3>No Data</h3>}
</div>
)

}
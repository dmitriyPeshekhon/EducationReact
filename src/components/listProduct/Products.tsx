import React from "react";
import { Product } from "./Product/Product";
import axios from "axios";
import { useAppSelector } from "../../store/hooks";
import type { TypeProduct } from "./Product/typeProduct";

export const Products: React.FC = (): JSX.Element => {

const [data, setData] = React.useState<TypeProduct[]>([])
const [isError, setError] = React.useState()
const [isLoading, setLoading] = React.useState(false)


const url = useAppSelector(state => state.urlProducts.url)

async function fetchProducts () {
   await axios.get<TypeProduct[]>(url)
   .then((response) => {setData(response.data); setLoading(false)})
   .catch(error => setError(error.message))
}

React.useEffect(
    () => {setLoading(true); fetchProducts()}, []
)

React.useEffect(
    () => {setLoading(true); fetchProducts()}, [url]
)

    return(
    <>
        {isLoading ? 
            <h1 style={{textAlign: "center"}}>Loading...</h1> : 
            isError ? 
            <h1 style={{textAlign: "center"}}>Error!!!</h1> :
            data ?
            data.map((product) => <Product product={product} key = {product.id}/>) : 
            <h3>No Data</h3>
        }
    </>
    )
}
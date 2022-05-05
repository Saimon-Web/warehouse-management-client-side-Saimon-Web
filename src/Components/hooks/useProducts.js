import { useEffect, useState } from "react"

const useProducts =()=> {
    const [products,setProducts]=useState([]);
    useEffect(()=> {
        fetch(' https://shielded-brook-58570.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return [products,setProducts];
}
export default useProducts;
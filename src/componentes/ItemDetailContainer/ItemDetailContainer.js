import { useState, useEffect } from "react";
import { getProductById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState()
    
    useEffect(()=> {
        getProductById(id).then(product => {
            setProduct(product)
             
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
    <> 
      <h1>Detalle</h1>
      <h2>{product?.name}</h2>
    </>

    )
}

export default ItemDetailContainer  

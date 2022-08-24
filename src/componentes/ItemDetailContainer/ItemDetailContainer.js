import { useState, useEffect } from "react";
import { getProductById } from "../../asynmock";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    useEffect(()=> {
        getProductById('1').then(response => {
            setProduct(response)
             
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

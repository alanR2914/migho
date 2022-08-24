import { getProducts } from "../../asynmock";
import { useEffect, useState } from 'react'

const ItemListContainer = ({greeting}) => {   
        const [products, setProducts] = useState([])

        useEffect(() =>{
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    return(
    <>
      <h1>{greeting}</h1>
      <div>
        {products.map(prod => <p key= {prod.id}>{prod.name}</p>)}
      </div>
    </>
    )
  }

export default ItemListContainer;  
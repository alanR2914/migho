import "./ItemListContainer.css"
import { getProducts } from "../../asynmock";
import { useEffect, useState } from 'react'
import Itemlist from "../ItemList/ItemList";

const ItemListContainer = ({greeting, setPage}) => {   
        const [products, setProducts] = useState([])

        useEffect(() =>{
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])
    return(
    <>
      <h1>{greeting}</h1>
      <Itemlist products={products}/>
      <Itemlist products={products} setPage={setPage} />
 {/*      <div>

        {products.map(prod => <p key= {prod.id}>{prod.name}</p>)}
      </div> */}
    </>
    )
  }

export default ItemListContainer;  
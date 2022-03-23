import React from "react";
import ItemList from "../../Item/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from '../../Utils/Items/items'
import { useParams } from "react-router-dom";


export default function ItemListContainer () {

  const [products, setProducts]=useState([])
  const { id }=useParams()


  useEffect(() => {
    if (id) {
      getProducts
        .then(resp => setProducts(resp.filter(prod => prod.categoria===id)))
        .catch(err => console.log(err))
    } else {
      getProducts
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))

    }
  }, [id])
  return (
    <>
      <ItemList products={products} />
      
    </>
  )
}



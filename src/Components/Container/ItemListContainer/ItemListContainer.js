import React from "react";
import ItemList from "../../Item/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from '../../Utils/Items/items'


export default function ItemListContainer () {

  const [products, setProducts]=useState([])


  useEffect(() => {
    getProducts
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <ItemList products={products} />
    </>
  )
}



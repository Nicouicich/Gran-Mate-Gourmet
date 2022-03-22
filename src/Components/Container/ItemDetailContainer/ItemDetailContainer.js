import React, { useState, useEffect } from "react";
import { getProducts } from "../../Utils/Items/items";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer () {

  const [product, setProduct]=useState({})

  const { productoId }=useParams()

  console.log(typeof(parseInt(productoId)))
  useEffect(() => {
    getProducts
      .then(resp => setProduct(resp.find(prod => parseInt(prod.id)=== parseInt( productoId))))
      .catch(err => console.log(err))
  }, [productoId])


  return (
    <div>
      <ItemDetail product={product} />
    </div>

  )

}
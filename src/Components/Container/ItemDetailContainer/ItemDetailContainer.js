import React, {useState, useEffect} from "react";
import { getProducts } from "../../Utils/Items/items";
import ItemDetail from "../../ItemDetail/ItemDetail";

export default function ItemDetailContainer () {

  const [product, setProduct]= useState ({})

  useEffect (() => {
    getProducts
    .then (resp => setProduct(resp.find(prod => prod.id ===1)))
    .catch (err => console.log(err))
  }, [])


return (
  <div>
    <ItemDetail product = {product} />
  </div>

)

}
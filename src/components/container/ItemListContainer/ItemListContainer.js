import React from 'react'
import ItemList from '../../Item/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../../utils/Items/items'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProducts
      .then((resp) =>
        id
          ? setProducts(resp.filter((prod) => prod.categoria === id))
          : setProducts(resp)
      )
      .catch((err) => console.log(err))
  }, [id])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

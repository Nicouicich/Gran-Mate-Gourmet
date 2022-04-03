import React from 'react'
import ItemList from '../../Item/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../../utils/Items/items'
import { useParams } from 'react-router-dom'
import { doc, getDocs, collection, getFirestore } from 'firebase/firestore'



export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { id } = useParams()
  const [prod, setProd] = useState({})

  // useEffect(() => {
  //   getProducts
  //     .then((resp) =>
  //       id
  //         ? setProducts(resp.filter((prod) => prod.categoria === id))
  //         : setProducts(resp)
  //     )
  //     .catch((err) => console.log(err))
  // }, [id])

  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryDoc = doc(db,'productos', 'AYsnGhhjsW4s4fIcb18W')
  //   getDoc(queryDoc)
  //   .then(resp => setProd({id:resp.id, ...resp.data()}))
  // }, [id])

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db,'productos')
    getDocs(queryCollection)
    .then(resp => setProducts(resp.docs.map (prod => ({id: prod.id, ...prod.data()})) ) )
  }, [id])

  console.log(prod)
  return (
    <>
      <ItemList products={products} />
    </>
  )
}

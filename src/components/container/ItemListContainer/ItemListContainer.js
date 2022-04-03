import React from 'react'
import ItemList from '../../Item/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, getFirestore,query, where } from 'firebase/firestore'



export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { categoriaId } = useParams()

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
    
    if (categoriaId){ //aca esta el filtro por categoria
      const queryFilter = query(queryCollection,where ('categoria', '==', categoriaId))
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    }
    else{ //si no tiene una categoria devuelvo todos los productos

      getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map (prod => ({id: prod.id, ...prod.data()})) ) )
    }

  }, [categoriaId])

  return (
    <>
      <ItemList products={products} />
    </>
  )
}

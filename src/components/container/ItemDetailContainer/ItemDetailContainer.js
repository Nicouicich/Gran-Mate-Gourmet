/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {  getDoc, doc, getFirestore } from 'firebase/firestore'


export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { productoId } = useParams()

  // useEffect(() => {
  //   getProducts
  //     .then((resp) => setProduct(resp.find((prod) => prod.id == productoId)))
  //     .catch((err) => console.log(err))
  // }, [productoId])


  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryCollection = collection(db,'productos')
  //   const queryFilter = query(queryCollection, where('id', '==', parseInt(productoId)))

  //   getDocs(queryFilter)
  //   .then((resp) =>setProduct(resp.docs[0].data()) )
  //   .catch(err => console.log(err))
  // }, [productoId])

  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db,'productos',productoId)

    getDoc(queryDoc)
    .then((resp) =>setProduct({id:resp.id, ...resp.data()}) )
    .catch(err => console.log(err))
  }, [productoId])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

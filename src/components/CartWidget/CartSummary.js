/* eslint-disable eqeqeq */
import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from 'firebase/firestore'

export default function CartProduct() {
  const { cartList, totalPrice, emptyCart } = useCartContext()

  const updateStock = async () => {
    const db = getFirestore()
    const queryCollectionProducts = collection(db, 'productos')

    const queryUpdateStock = await query(
      queryCollectionProducts,
      where(
        documentId(),
        'in',
        cartList.map((prod) => prod.id)
      )
    )
    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((prod) => prod.id == res.id).cant,
          })
        )
      )
      .finally(() => console.log('Se actualizo el stock'))

    batch.commit()
  }

  const generateOrder = async (e) => {
    e.preventDefault()
    let order = {}

    order.buyer = {
      name: 'Nico',
      email: 'nico_uicich@outlook.com',
      phone: '1123123123',
    }
    order.price = { totalPrice }
    order.products = cartList.map((product) => {
      const id = product.id
      const nombre = product.title
      const precio = product.price
      const cantidad = product.cant

      return { id, nombre, precio, cantidad }
    })
    const db = getFirestore()
    const queryCollectionOrders = collection(db, 'orders')
    await addDoc(queryCollectionOrders, order).then(({ id }) => alert(id))

    await updateStock()
    emptyCart()
  }

  return (
    <>
      <div className='col-md-4 summary'>
        <div>
          <h5>
            <b>Resumen</b>
          </h5>
        </div>
        <br />
        <div className='row'>
          <div className='col' style={{ paddingLeft: '0' }}>
            Items: {cartList.length}
          </div>
          <div className='col text-right'>${totalPrice}</div>
        </div>
        <form>
          <p>Entrega</p>{' '}
          <select>
            <option className='text-muted'>Retiro en el Local</option>
            <option className='text-muted'>Entrega a Domicilio</option>
          </select>
          <p>GIVE CODE</p> <input id='code' placeholder='Enter your code' />
        </form>
        <div
          className='row'
          style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
          <div className='col'>Precio Total</div>
          <div className='col text-right'>${totalPrice}</div>
        </div>{' '}
        <button className='btn-cart' onClick={generateOrder}>
          Finalizar Compra
        </button>
      </div>
    </>
  )
}

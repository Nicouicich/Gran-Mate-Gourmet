/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DetailsBtn from '../DetailsBtn/DetailsBtn'
import { useCartContext } from '../../context/CartContext/CartContext'
import '../../Styles/styles.css'

export default function ItemCount({ stock, varieties, id, onAdd }) {
  const [count, setCount] = useState(1)
  const [disableCart, setDisableCart] = useState(false)
  const [stockRenew, setStockRenew] = useState(stock)
  const { cartList } = useCartContext()

  const subtractCount = () => {
    if (count > 1) setCount(count - 1)
  }
  const isOnList = () => {
    const prod = cartList.find((prod) => prod.id == id)
    const cant = prod?.cant ? prod.cant : 0
    return cant
  }

  const sumCount = () => {
    const prod = isOnList()
    console.log(prod)
  
    if (count + prod < stock)
      setCount(count + 1)
  }

  useEffect(() => {
    if (stock === 0) setDisableCart(true)
    setCount(1)
  }, [stock])

  const addCart = () => {
    onAdd(count)
    setAddedToCart(true)
  }

  useEffect(() => {
    setStockRenew(stockRenew)
  }, [stockRenew])

  useEffect(() => {
    if (stock) setStockRenew(stock)
  }, [stock])

  const [addedToCart, setAddedToCart] = useState(false)

  const AddButtonCart = ({ handleBtn }) => {
    return (
      <Link to='/carrito'>
        <button
          className='btn btn-outline-secondary buy-product'
          onClick={handleBtn}
          style={{ display: addedToCart ? 'active' : 'none' }}>
          Terminar compra
        </button>
      </Link>
    )
  }

  return (
    <>
      <div id='select-variety'>
        <select className='select-option btn-outline-secondary'>
          {varieties?.map((variety) => (
            <option key={variety} value={variety}>
              {variety}
            </option>
          ))}
        </select>
        <DetailsBtn id={id} />
      </div>
      <div>
        <label> Stock: {stock} </label>
      </div>
      <div className='btn-count'>
        <button
          className='btn btn-outline-secondary rounded-0 btn-sm'
          onClick={subtractCount}>
          -
        </button>
        <label> {count} </label>
        <button
          className='btn btn-outline-secondary rounded-0 btn-sm '
          onClick={sumCount}>
          +
        </button>
      </div>
      <div>
        <button
          className='btn  btn-success'
          id='add-to-cart'
          onClick={addCart}
          disabled={disableCart}>
          Agregar al Carrito
        </button>
        {<AddButtonCart />}
      </div>
    </>
  )
}

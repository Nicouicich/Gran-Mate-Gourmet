import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import '../../Styles/styles.css'

export default function CartProduct({ product }) {
  let totalPrice = product.cant * product.price
  const [count, setCount] = useState(1)
  const { removeProduct, addProduct } = useCartContext()

  const subtractCount = () => {
    if (product.cant > 1) setCount(count - 1)
  }

  const sumCount = () => {
    if (product.cant < product.stock) setCount(count + 1)
  }

  return (
    <>
      <div className='row border-top border-bottom'>
        <div className='row main align-items-center'>
          <div className='col-1'>
            <img className='img-fluid' src={product.pictureUrl} alt='' />
          </div>
          <div className='col'>
            <div className='row '>{product.title}</div>
            <div className='row text-muted'>{product.description}</div>
          </div>

          <div className='col'>
            <div className='btn-count'>
              <button
                className='btn btn-outline-secondary rounded-0 btn-sm'
                onClick={subtractCount}>
                -
              </button>
              <label> {product.cant} </label>
              <button
                className='btn btn-outline-secondary rounded-0 btn-sm '
                onClick={sumCount}>
                +
              </button>
            </div>
          </div>
          <div className='col'>${product.price}</div>
          <div className='col'>$ {totalPrice}</div>
          <div className='col' id='bin'><img src='/assets/images/eliminar.png' alt='bin' /></div>

        </div>
      </div>
    </>
  )
}

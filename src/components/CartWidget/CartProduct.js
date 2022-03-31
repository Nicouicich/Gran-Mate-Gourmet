import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import '../../Styles/styles.css'

export default function CartProduct({ product }) {
  let totalPrice = product.cant * product.price
  const { removeProduct, sumProduct,subProduct } = useCartContext()

  const subtractCount = () => {
    if (product.cant > 1) 
      subProduct(product.id)
  }

  const sumCount = () => {
    if (product.cant < product.stock)
      sumProduct(product.id)
  }

  const removeById = () => {
    removeProduct(product.id)
  }

  return (
    <>
      <div className='row border-top border-bottom'>
        <div className='row main align-items-center'>
          <div className='col-2'>
            <img className='img-fluid' src={product.pictureUrl} alt='' />
          </div>
          <div className='col'>
            <div className='row '>{product.title}</div>
            <div className='row text-muted'>{product.description}</div>
          </div>

          <div className='col'>
            <div className='btn-count btnCart'>
              <button
                className='btn btn-outline rounded-0 btn-sm btn-izq'
                onClick={subtractCount}>
                -
              </button>
              <label> {product.cant} </label>
              <button
                className='btn btn-outline rounded-0 btn-sm btn-der'
                onClick={sumCount}>
                +
              </button>
            </div>
          </div>
          <div className='col'>${product.price}</div>
          <div className='col'>$ {totalPrice}</div>
          <div className='col' id='bin'><img src='/assets/images/eliminar.png' alt='bin' onClick={removeById}/></div>

        </div>
      </div>
    </>
  )
}

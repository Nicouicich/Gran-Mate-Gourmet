import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { NavLink } from 'react-router-dom'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'
import '../../Styles/styles.css'

export default function CartWidget() {
  const { cartList, emptyCart } = useCartContext()
  const [emptyBtn, setEmptyBtn] = useState(false)

  useEffect(() => {
    if (cartList.length) setEmptyBtn(true)
    else setEmptyBtn(false)
  }, [cartList])

  return (
    <>
      <div className='card-widget cartWidget'>
        <div className='row'>
          <div className='col-md-8 cart'>
            <div className='title'>
              <div className='row'>
                <div className='col'>
                  <h4>
                    <b>Carrito</b>
                  </h4>
                </div>
                <div className='col align-self-center text-right text-muted'>
                  Cantidad de Productos: {cartList.length}
                </div>
              </div>
            </div>

            <div className='container container-cart'>
              <div className='row'>
                <div className='col-1 col-product'>Producto</div>
                <div className='col'>Descripcion</div>
                <div className='col'>Cantidad</div>
                <div className='col'>Precio Unitario</div>
                <div className='col'>Precio Total</div>
                <div className='col'></div>
              </div>

              {cartList.length ? (
                cartList.map((product) => (
                  <CartProduct product={product} key={product.id} />
                ))
              ) : (
                <div className='empty-cart'>Carrito Vacío</div>
              )}
            </div>

            <div className='emptyCart'>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={emptyCart}
                style={{ visibility: emptyBtn ? 'visible' : 'hidden' }}>
                Limpiar Carrito
              </button>
            </div>
            <div>
              <NavLink to='/'>
                <img
                  src='/assets/images/left-arrow.png'
                  alt='logo'
                  className='left-arrow fixed-bottom'
                />
              </NavLink>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </>
  )
}

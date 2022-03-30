import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import '../../Styles/styles.css'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'

export default function CartWidget() {
  const { cartList, emptyCart } = useCartContext()

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
                <div className='col-1'>Producto</div>
                <div className='col'>Descripcion</div>
                <div className='col'>Cantidad</div>
                <div className='col'>Precio Unitario</div>
                <div className='col'>Precio Total</div>
                <div className='col'></div>

              </div>
              {cartList.map((product) => (
                <CartProduct product={product} key={product.id} />
              ))}
            </div>

            <div className='emptyCart'>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={emptyCart}>
                Limpiar Carrito
              </button>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </>
  )
}

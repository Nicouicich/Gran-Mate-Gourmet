import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext/CartContext'


export default function ItemDetail({ product }) {
  const { addToCart, cartList } = useCartContext()

  const onAdd = (cant) => {
    addToCart({ ...product, cant: cant })
  }
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center h-100 text-center '>
        <div className='box-shadow '>
          <div className='product'>
            <div className='card '>
              <div className='card-body'>{product.title}</div>
              <div className='extra'>
                <img src={product.pictureUrl} className='img-top' alt='' />
              </div>
              <div>
                <h4>{product.price}</h4>

                <p>{product.description}</p>
              </div>

              <div>
                <ItemCount
                  stock={product.stock}
                  varieties={product.varieties}
                  id={product.id}
                  onAdd={onAdd}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* eslint-disable eqeqeq */
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext=createContext([])

export const useCartContext=() => useContext(CartContext)

export default function CartContextProvider ({ children }) {
  const [cartList, setCartList]=useState([])
  const [totalPrice, setTotalPrice]=useState(0)


  useEffect(() => {
    let price=0
    if (cartList.length) {
      for (let prod of cartList)
        price+=(prod.cant*prod.price)
    }
    setTotalPrice(price)
    console.log("Precio", price)

  }, [cartList])



  const addToCart=(product) => {
    const found=cartList.find((prod) => prod.id==product.id)

    if (found) {
      let arr=cartList.map((prod) => {
        prod.cant=
          prod.id==product.id? prod.cant+product.cant:product.cant
        return prod
      })
      setCartList(arr)
      console.log(arr)
    } else setCartList([...cartList, product])
  }

  const emptyCart=() => {
    setCartList([])
  }

  const addProduct = () => {

  }

  const removeProduct = () => {

  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalPrice,
        addToCart,
        emptyCart,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([])

  const addToCart = (product) => {
    const found = cartList.find((prod) => prod.id == product.id)
    console.log("Encontrado",found)
    console.log("Producto:", product)
    if (found !== undefined) {
      const arr = cartList.map((prod) =>
        prod.id == product.id ? (prod.cant += product.cant) : prod.cant
      )

      setCartList(arr)
    } else setCartList([...cartList, product])
  }

  const emptyCart = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

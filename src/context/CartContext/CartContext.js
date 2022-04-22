/* eslint-disable eqeqeq */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    let price = 0;
    if (cartList.length) {
      for (let prod of cartList) price += prod.cant * prod.price;
    }
    setTotalPrice(price);
  }, [cartList]);

  const addToCart = (product) => {
    const found = cartList.find((prod) => prod.id == product.id);

    if (found) {
      let arr = cartList.map((prod) => {
        prod.cant =
          prod.id == product.id ? prod.cant + product.cant : product.cant;
        return prod;
      });
      setCartList(arr);
    } else setCartList([...cartList, product]);
    if (cartList.length == undefined) setTotalProducts(0);
    else setTotalProducts(cartList.length);
    console.log("añadiendo" , totalProducts)
  };
 

  const emptyCart = () => {
    setCartList([]);
  };

  const sumProduct = (id) => {
    let arr = cartList.map((prod) => {
      prod.cant = prod.id == id ? prod.cant + 1 : prod.cant;
      return prod;
    });
    setCartList(arr);
  };

  const subProduct = (id) => {
    let arr = cartList.map((prod) => {
      prod.cant = prod.id == id ? prod.cant - 1 : prod.cant;
      return prod;
    });
    setCartList(arr);
  };

  const removeProduct = (id) => {
    setCartList(cartList.filter((item) => item.id != id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalPrice,
        totalProducts,
        addToCart,
        emptyCart,
        removeProduct,
        subProduct,
        sumProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

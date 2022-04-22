import React, { useState,useEffect } from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"
import { useCartContext } from "../../context/CartContext/CartContext"

export default function CartIcon() {
  const { cartList } = useCartContext();
  const  [cant, setCant] = useState(0)

  useEffect(() => {
    if (cartList)
      setCant(cartList.length)
  }, [cartList])

  return (
    <Badge badgeContent={cant} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
}

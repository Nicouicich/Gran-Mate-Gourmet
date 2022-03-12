import React, { useEffect, useState } from "react";

export default function ItemCount ({ stock, initial }) {
  const [count, setCount]=useState(parseInt(initial))
  const [disableBtn, setDisableBtn]=useState(false);
  const [stockRenew, setStockRenew]=useState(parseInt(stock))


  const subtractCount=() => {

    if (count===1)
      alert("El minimo para ingresar al carrito es 0 ")
    else
      setCount(count-1)

  }

  const sumCount=() => {
    if (count>=stockRenew)
      alert("No se pueden agregar mas unidades que el stock disponible")
    else
      setCount(count+1)
  }

  useEffect(() => {
    if (stockRenew===0) {
      alert("No queda Stock")
      setDisableBtn(true)
    }
    setCount(parseInt(initial))

  }, [stockRenew,initial])


  const addCart=() => {

    alert("Producto agregado al carrito correctamente")
    setStockRenew(stockRenew-count)
  }


  return (

    <>
      <div>
        <label for=""> Stock actualizado : {stockRenew} </label>
      </div>
      <div>
        <button onClick={subtractCount}><img src="assets/images/subtract.png" alt="" /></button>
        <label > {count} </label>
        <button onClick={sumCount}><img src="assets/images/add.png" alt="" /></button>


      </div>
      <div>
        <button onClick={addCart} disabled={disableBtn}>Agregar al Carrito</button>
      </div>

    </>

  )


}
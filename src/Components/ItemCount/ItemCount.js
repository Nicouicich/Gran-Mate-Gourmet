import React, { useEffect, useState } from "react";
import '../../Styles/styles.css';


export default function ItemCount ({ stock, initial }) {
  const [count, setCount]=useState(parseInt(initial))
  const [disableBtn, setDisableBtn]=useState(false);
  const [stockRenew, setStockRenew]=useState(parseInt(stock))


  const subtractCount=() => {

    if (count>1)
      setCount(count-1)
  }

  const sumCount=() => {
    if (count<stockRenew)
      setCount(count+1)
  }

  useEffect(() => {
    if (stockRenew===0) 
      setDisableBtn(true)
    
    setCount(parseInt(initial))

  }, [stockRenew,initial])


  const addCart=() => {
    setStockRenew(stockRenew-count)
  }


  return (

    <>
      <div>
        <label for=""> Stock: {stockRenew} </label>
      </div>
      <div className="btn-count">
        <button className="btn btn-outline-secondary rounded-0 btn-sm" onClick={subtractCount}>-</button>
        <label > {count} </label>
        <button className="btn btn-outline-secondary rounded-0 btn-sm " onClick={sumCount}>+</button>
      </div>
      <div>
        <button className="btn  btn-success rounded-0" onClick={addCart} disabled={disableBtn}>Agregar al Carrito</button>
      </div>

    </>

  )


}
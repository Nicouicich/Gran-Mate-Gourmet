import React, { useEffect, useState } from "react";
import '../../Styles/styles.css';
import { Link } from "react-router-dom";

export default function ItemCount ({ stock, varieties, id }) {
  const [count, setCount]=useState(1)
  const [disableCart, setDisableCart]=useState(false);
  const [stockRenew, setStockRenew]=useState(stock)


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
      setDisableCart(true)
    setCount(1)

  }, [stockRenew])

  

  const addCart=() => {
    setStockRenew(stockRenew-count)
  }

  useEffect (()=> {
    setStockRenew(stockRenew)
  }, [stockRenew] )

  return (

    <>
      <div id="select-variety">
        <select className="select-option btn-outline-secondary" >
          
          {varieties?.map(variety => (
            <option key={variety} value={variety}>{variety}</option>
          ))}

        </select>
        <Link to={`/detalle/${id}`}>
          <button type="" className="btn btn-outline-secondary details" >Detalles</button>
        </Link>
        

      </div>
      <div>
        {console.log(stockRenew)}

        <label htmlFor=""> Stock: {stockRenew} </label>
      </div>
      <div className="btn-count">
        <button className="btn btn-outline-secondary rounded-0 btn-sm" onClick={subtractCount}>-</button>
        <label > {count} </label>
        <button className="btn btn-outline-secondary rounded-0 btn-sm " onClick={sumCount}>+</button>
      </div>
      <div>
        <button className="btn  btn-success" id="add-to-cart" onClick={addCart} disabled={disableCart}>Agregar al Carrito</button>
      </div>
      

    </>

  )


}
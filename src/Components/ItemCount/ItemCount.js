import React, { useEffect, useState } from "react";
import '../../Styles/styles.css';
import { Link } from "react-router-dom";

export default function ItemCount ({ stock, initial, varieties, id }) {
  const [count, setCount]=useState(parseInt(initial))
  const [disableCart, setDisableCart]=useState(false);
  const [stockRenew, setStockRenew]=useState(parseInt(stock))
  const [variety, setVariety]=useState(false)

  const handleVariety=(variety) => {
    const option=variety.target.value
    console.log(option)
    setVariety(variety)
  }




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

    setCount(parseInt(initial))

  }, [stockRenew, initial])


  const addCart=() => {
    setStockRenew(stockRenew-count)
  }


  return (

    <>
      <div>
        <select className="select-option btn-outline-secondary" >
          {varieties.map(variety => (
            <option key={variety} value={variety}>{variety}</option>
          ))}

        </select>
        <Link to={`/detalle/${id}`}>
          <button type="" className="btn btn-outline-secondary details">Detalles</button>
        </Link>
        

      </div>
      <div>
        <label for=""> Stock: {stockRenew} </label>
      </div>
      <div className="btn-count">
        <button className="btn btn-outline-secondary rounded-0 btn-sm" onClick={subtractCount}>-</button>
        <label > {count} </label>
        <button className="btn btn-outline-secondary rounded-0 btn-sm " onClick={sumCount}>+</button>
      </div>
      <div>
        <button className="btn  btn-success" onClick={addCart} disabled={disableCart}>Agregar al Carrito</button>
      </div>
      

    </>

  )


}
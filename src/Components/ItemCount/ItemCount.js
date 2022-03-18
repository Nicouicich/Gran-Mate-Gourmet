import React, { useEffect, useState } from "react";
import '../../Styles/styles.css';



export default function ItemCount ({ stock, initial, varieties }) {
  const [count, setCount]=useState(parseInt(initial))
  const [disableCart, setDisableCart]=useState(true);
  const [disableSub, setDisableSub]=useState(true);
  const [disableAdd, setDisableAdd]=useState(true);

  const [stockRenew, setStockRenew]=useState(parseInt(stock))
  const [variety, setVariety]=useState(false)

  const handleVariety=(variety) => {
    const option=variety.target.value
    console.log(option)
    setVariety(variety)
  }


  if (varieties==null) {
    setDisableCart(false)
    setDisableAdd(false)
    setDisableSub(false)
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
        <select
          onChange={e => { console.log(e.target.value);
          if( stock!== 0)
            setDisableCart(false); 
          setDisableAdd(false); 
          setDisableSub(false) }}>

          <option value={-1} disabled selected>Seleccione una variedad</option>

          {varieties.map(variety => (
            <option key={variety} value={variety}>{variety}</option>
          ))}
        </select>

      </div>
      <div>
        <label for=""> Stock: {stockRenew} </label>
      </div>
      <div className="btn-count">
        <button className="btn btn-outline-secondary rounded-0 btn-sm" onClick={subtractCount} disabled={disableSub}>-</button>
        <label > {count} </label>
        <button className="btn btn-outline-secondary rounded-0 btn-sm " onClick={sumCount} disabled={disableAdd}>+</button>
      </div>
      <div>
        <button className="btn  btn-success" onClick={addCart} disabled={disableCart}>Agregar al Carrito</button>
      </div>

    </>

  )


}
import React from "react";
import { useCartContext } from '../../context/CartContext/CartContext';


export default function CartProduct () {

  const { cartList, totalPrice }=useCartContext()



  return (
    <>
      <div className="col-md-4 summary">
            <div>
              <h5><b>Resumen</b></h5>
            </div>
            <br />
            <div className="row">
              <div className="col" style={{ "paddingLeft": "0" }}>Items: {cartList.length}</div>
              <div className="col text-right">${totalPrice}</div>
            </div>
            <form>
              <p>Entrega</p> <select>
                <option className="text-muted">Retiro en el Local</option>
                <option className="text-muted">Entrega a Domicilio</option>
              </select>
              <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
            </form>
            <div className="row" style={{ "borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0" }}>
              <div className="col">Precio Total</div>
              <div className="col text-right">${totalPrice}</div>
            </div> <button className="btn-cart">Finalizar Compra</button>
          </div>
    </>
  )

}
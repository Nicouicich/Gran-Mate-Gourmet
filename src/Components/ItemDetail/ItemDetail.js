import React from "react";

export default function ItemDetail ({ product }) {

  return (
    <>
      <p>{product.description}</p>
      <div className="extra">
        <img src={product.pictureUrl} className="img-top" alt="foto" />
      </div>
      <div>
        <h4>{product.price}</h4>

        <p>{product.description}</p>
      </div>
      <div>

      </div>
    </>
  )
}
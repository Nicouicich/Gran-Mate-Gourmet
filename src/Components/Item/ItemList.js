import React from "react";
import '../../Styles/styles.css'
import Item from './Item'

export default function ItemList ({products}) {



  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100 text-center ">
        <div className="row box-shadow ">
          
          {products.map((product) =>
            <Item product = {product} key ={product.id}/>
          )}
        </div>
      </div>
    </>
  )

}
import React, { useEffect, useState } from "react";
import { getProducts } from "./Item";
import ItemCount from "../ItemCount/ItemCount";
import '../../Styles/styles.css'

export default function ItemList () {

  const [products, setProducts]=useState([])

  useEffect(() => {
    getProducts
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100 text-center ">
        <div className="row box-shadow ">

          {products.map((product) =>
            <div className="col-md-4 product">
              <div className="card ">
                <div className="card-body">
                  {product.title}
                </div>
                <div className="extra">
                  <img src={product.pictureUrl} className="img-top" alt="" />
                </div>
                <div>
                  <h4>{product.price}</h4>

                  <p>{product.description}</p>
                </div>
                <div>
                  <p><ItemCount stock={product.stock} initial="1" /></p>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>

      {/* {products.map((product) =>
          <div >
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
            <div>
              <img src={product.pictureUrl} alt="" />
            </div>
            <div>
              {product.price}
            </div>
            <div>
              {product.description}
            </div>
            <div>
            <ItemCount stock={product.stock} initial="1" />
            </div>
          </div>
          
        )} */}

    </>
  )

}
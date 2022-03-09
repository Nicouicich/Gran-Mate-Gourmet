import { render } from "@testing-library/react";
import React from "react";

class ItemListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.mensaje = props.mensaje
  }

  render() {
    return (
    <p>{this.mensaje}</p>
    )
  }
}

export default ItemListContainer
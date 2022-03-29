import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsBtn({ id }) {
  return (
    <Link to={`/detalle/${id}`}>
      <button type='' className='btn btn-outline-secondary details'>
        Detalles
      </button>
    </Link>
  )
}

import React from 'react';
import '../../Styles/styles.css'
import CartWidget from '../CartWidget/CartWidget';
import { Navigate, NavLink } from 'react-router-dom';

export default function NavBar () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light stroke">
        <div className="container-fluid">
          <NavLink to="/">

            <img src="assets/images/logo.png" alt="logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">Ofertas</a>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/mate" className="nav-link">
                  Mates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/yerba" className="nav-link">
                  Yerbas
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='/#'>Cuenta</a>
              </li>
              <li className="nav-item">
                <NavLink to='carrito'>
                  <CartWidget />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

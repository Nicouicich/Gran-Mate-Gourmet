import React from "react";
import CartIcon from "../CartWidget/CartIcon";
import { NavLink } from "react-router-dom";
import "../../Styles/styles.css";
import DropDown from './DropDown'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light stroke">
        <div className="container-fluid">
          <NavLink to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Ofertas
                </NavLink>
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
              <li className="nav-item dropdown">
                {/* Dsps en el dropdown se va a iterar por todas la categorias y crear el link a c/u */}
              {/* <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <DropDown/>
              </a> */}
              
            </li>
              
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Cuenta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/carrito">
                  <CartIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

   
    </>
  );
}

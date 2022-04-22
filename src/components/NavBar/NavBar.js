import React from "react";
import CartIcon from "../CartWidget/CartIcon";
import { NavLink } from "react-router-dom";
import "../../Styles/styles.css";

export default function NavBar() {
  return (
    <>
      {/* <nav className='navbar navbar-expand-lg bg-light navbar-light stroke'>
        <div className='container-fluid'>
          <NavLink to='/'>
            <img src='/assets/images/logo.svg' alt='logo' />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  Ofertas
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/categoria/mate' className='nav-link'>
                  Mates
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/categoria/yerba' className='nav-link'>
                  Yerbas
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/categoria/mate' className='nav-link'>
                  Cuenta
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/carrito'>
                  <CartIcon/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      
        <header
          className="navbar navbar-inverse navbar-fixed-top bs-docs-nav"
          role="banner"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target=".bs-navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="./" className="navbar-brand">
                Bootstrap Menu
              </a>
            </div>
            <nav
              className="collapse navbar-collapse bs-navbar-collapse"
              role="navigation"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <h1>Home</h1>
                </li>

                <li className="dropdown">
                  <a href="/#" className="dropbtn">
                    About
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/#">Mission</a>
                    </li>
                    <li>
                      <a href="/#">Vision</a>
                    </li>
                    <li>
                      <a href="/#">Careers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Products</a>
                </li>
                <li>
                  <a href="/#">Services</a>
                </li>
                <li className="active">
                  <a href="/#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      
    </>
  );
}

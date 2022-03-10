import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";

import style from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBarContainer}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="containerLogo">

          <Link to="/">
            <GiConverseShoe size={32} color={"black"} />{" "}
            <a className="navbar-brand">SNikers</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/products">
                <a className="nav-link">Products</a>
              </Link>
            </li>

            <div className={style.adropdown}>
              <button className={style.dropbtn}>Categories</button>
              <div className={style.dropdownContent}>

                <a >Men</a>

                <a >Women</a>
                <a >Kids</a>
              </div>
            </div>

            <li className="nav-item">
              <Link to="/shoppingcart" className="nav-link">
                <AiOutlineShoppingCart size={25} />
              </Link>
            </li>

            <Link to="/register">
              <li className="nav-item">
                <a className="nav-link">Register</a>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item">
                <a className="nav-link">Log In</a>
              </li>
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div>

              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

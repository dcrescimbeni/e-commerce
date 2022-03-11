import React from "react";
import { Link } from "react-router-dom";
import { getSession, sendLogoutRequest } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { GiConverseShoe } from "react-icons/gi";
import style from "../styles/NavBar.module.css";

const NavBar = () => {
  // esta es la logica para togglear register y login cuando el user esta logueado

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendLogoutRequest());
  };

  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

 

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <GiConverseShoe size={25}/> SNikers
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li> */}
              <li className="nav-item">
              <Link to="/products">
                <a className="nav-link" href="#">
                  Producs
                </a>
                </Link>
              </li>

              {/* Drop down Categories */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  <AiOutlineShoppingCart size={25} />
                </a>
              </li>

             

            {/* Search */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
              <BiSearchAlt />
              </button>
            </form>
            {/* Search End*/}

             {/* Profile */}

             <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <CgProfile size={25}/>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                  <Link to="/register" >
                    <a className="dropdown-item" href="#">
                      Register
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                    <a className="dropdown-item" href="#">
                     Login
                    </a>
                    </Link>
                  </li>
                 
                </ul>
              </li>
            </ul>
              {/* Profile End */}



          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../state/user";
import { GiConverseShoe } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";


const SubNavBar = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchSubmit = async (e) => {

        e.preventDefault()
        navigate(`/search?query=${searchTerm}`)
      
      };

      const handleClick = () => {
        dispatch(sendLogoutRequest());
      };

      const user = useSelector((state) => {
        console.log(state.user);
        return state.user;
      });


  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      <div className="container ">
        <li className="nav-item d-flex">
          <Link to="/">
            <a className="navbar-brand" >
              <GiConverseShoe size={30} />
              SNikers
            </a>
          </Link>
        </li>

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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
           

            {/* Drop down Categories */}
           

            {/* Search */}
            <form onSubmit={(e) => {handleSearchSubmit(e)}} className="d-flex">
              <input 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control me-2"
                aria-label="Search"
                hint="Search" 
                type="text"
                placeholder="Search"
              />
            </form>
            {/* Search End*/}

            <li className="nav-item">
              <Link className="nav-link" to="/shoppingcart">
                {" "}
                <AiOutlineShoppingCart size={25} color="black" />
              </Link>
            </li>

            {/* Profile Register/Login*/}

            {/* {user.adminId? ( <Link to="/admin">Admin</Link>):(
              otra cosa
             )} */}
           

            {user.userId ? (
              <>
                 <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   <CgProfile size={25} color="black"/>
                  {user.firstName}
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <Link to="/profile">
                      <a className="dropdown-item" >
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/purchaseHistory">
                      <a className="dropdown-item" >
                        Purchase History
                      </a>
                    </Link>
                  </li>
                  <li>
                  <li  class="dropdown-divider" />
                    <Link to="/">
                    <button onClick={handleClick} className="dropdown-item">
                      Logout
                    </button>
                    </Link>
                  </li>
                </ul>
              </li>
              </>    
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CgProfile size={25} color= "black" />
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/register">
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
            )}
          
          </ul>
          {/* Profile End */}

        </div>
      </div>
    </nav>

    <br/><br/><br/>
 
      </div>
  )
  };
  
export default SubNavBar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../Hooks/useInputs';
import { sendLogoutRequest } from '../state/user';
import { sendLoginRequest } from '../state/user';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { GiConverseShoe } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import style from '../styles/Login.module.css';
import axios from 'axios';
import { getSession } from '../state/user';

const Login = () => {
  const inputEmail = useInput();
  const inputPassword = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    dispatch(sendLogoutRequest());
  };

  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.user;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    dispatch(sendLoginRequest(form));
    if (user) navigate('/');
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  // const Submit = (e) => {
  //   e.preventDefault();
  //   navigate("/")
  // };

  return (
    <div className={style.masthead}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <div className="container ">
          <li className="nav-item d-flex">
            <Link to="/">
              <a className="navbar-brand">
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
              <form
                onSubmit={(e) => {
                  handleSearchSubmit(e);
                }}
                className="d-flex"
              >
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
                  {' '}
                  <AiOutlineShoppingCart size={25} color="black" />
                </Link>
              </li>

              {/* Profile Register/Login*/}

              {/* {user.adminId? ( <Link to="/admin">Admin</Link>):(
              otra cosa
             )} */}

              {user.userId ? (
                <>
                  {/* Test menu dropdown user logueado */}
                  {/* Test menu dropdown user logueado */}

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <CgProfile size={25} color="black" />{' '}
                      <b>{user.firstName}</b>
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/profile">
                          <a className="dropdown-item">Profile</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/purchaseHistory">
                          <a className="dropdown-item">Purchase History</a>
                        </Link>
                      </li>
                      <li>
                        <li class="dropdown-divider" />
                        <Link to="/">
                          <button className="dropdown-item">Logout</button>
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
                    <CgProfile size={25} color="black" />
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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

            <div></div>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />

      <div className="color-overlay d-flex justify-content-center align-items-center">
        <div className="containerForm">
          <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3">
            <Form.Group
              onSubmit={handleSubmit}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                {...inputEmail}
                type="email"
                placeholder="Enter Email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...inputPassword}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check tupe="checkbox" label="Remember Me"></Form.Check>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
            <br></br>
            <p>You don't have an account?</p>
            <Link to="/register">
              <div className="d-flex justify-content-center">
                <b>Register</b>
              </div>
            </Link>
            {/* <Link to="/google">
              <FcGoogle size={32} />
            </Link>{' '}
            <Link to="/facebook">
              <BsFacebook size={30} />
            </Link> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

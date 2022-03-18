import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import  axios  from "axios";
import useInput from "../Hooks/useInputs";
import {Button} from 'react-bootstrap';

const UsersManagement = () => {
  //obtener id del usuario a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split("/");
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let userId = parseInt(reducedURL);

  //obtener info de 1 usuario

  const [userInfo, setUserInfo] = useState();

useEffect(() => {
  axios.
  get(`/api/users/user/${userId}`)
  .then((res) => 
    res.data
  )
  .then((user) => {setUserInfo(user)
  firstName.setValue(user.firstName)
  lastName.setValue(user.lastName)
  email.setValue(user.email)
  billingAddress.setValue(user.billingAddress)
  shippingAddress.setValue(user.shippingAddress)
  setAdmin(user.isAdmin)
})
}, [])


  //axios para editar usuario

  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const billingAddress = useInput();
  const shippingAddress = useInput();


  //setAdmin
  const [admin, setAdmin] = useState(false);

  const handleChange = (e) => {
    e.preventDefault()
    setAdmin(!admin)
  }
  

  //edit user
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
    axios
    .put(`/api/users/edit/${userId}`, {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        billingAddress: billingAddress.value,
        shippingAddress: shippingAddress.value,
        isAdmin: admin
    })
    .then((res) => res.data)
    .then((editedUser) => console.log(editedUser))
    navigate("/usersManagement")
  };

  if (!userInfo) return <div></div>

  return (
    <>
      <h2 className="fs-4 mb-3 text-center text-uppercase">MANAGE USER</h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  {...firstName}
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Last Name
                </label>
                <input
                  {...lastName}
                  placeholder={userInfo.lastName}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  {...email}
                  type="email"
                  placeholder={userInfo.email}
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Billing Address
                </label>
                <input
                  {...billingAddress}
                  type="text"
                  placeholder={userInfo.billingAddress}
                  className="form-control"
                  id="inputAddress"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Shipping Address
                </label>
                <input
                  {...shippingAddress}
                  type="text"
                  className="form-control"
                  placeholder={userInfo.shippingAddress}
                  id="inputAddress2"
                />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    defaultChecked={userInfo.isAdmin}
                    onChange={(e) => {handleChange(e)}}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Admin
                  </label>
                </div>
              </div>
              <div className="col-12 modal-footer">
              <Link to="/usersManagement"><Button variant="primary">Back</Button>{' '}</Link>
                <button type="submit" className="btn btn-primary pe-2">
                  Accept
                </button>
                <Link to="/admin" className="btn btn-secondary">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <br></br>
    </>
  );
};

export default UsersManagement;

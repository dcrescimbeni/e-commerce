import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import useInput from '../Hooks/useInputs';
import axios from 'axios';

const Profile = () => {
  let firstName = useInput();
  let lastName = useInput();
  let email = useInput();
  let billingAddress = useInput();
  let shippingAddress = useInput();

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

  useEffect(() => {
    firstName.setValue(user.firstName);
    lastName.setValue(user.lastName);
    email.setValue(user.email);
    billingAddress.setValue(user.billingAddress);
    shippingAddress.setValue(user.shippingAddress);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/users/details`, {
      firstName: firstName.value,
    });
  };

  if (!user.userId) return <div></div>;

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <>
        <h2 className="fs-4 mb-3 text-center text-uppercase">Edit Profile</h2>
        <section className="container mt-5">
          <div className="card">
            <div className="card-body">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    First Name
                  </label>
                  <input
                    {...firstName}
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Last Name
                  </label>
                  <input
                    {...lastName}
                    type="text"
                    className="form-control"
                    id="inputLastName"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Email
                  </label>
                  <input
                    {...email}
                    type="text"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Billing Address
                  </label>
                  <input
                    {...billingAddress}
                    type="text"
                    className="form-control"
                    id="inputBillingAddress"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputAddress" className="form-label">
                    Shipping Address
                  </label>
                  <input
                    {...shippingAddress}
                    type="text"
                    className="form-control"
                    id="inputShippingAddress"
                  />
                </div>
                <div className="col-12 modal-footer">
                  <button type="submit" className="btn btn-primary pe-2">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;

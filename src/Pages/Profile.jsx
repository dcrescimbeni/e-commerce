import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";


const Profile = () => {
  let { firstName } = useParams();

  console.log("Params =>", firstName);

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });


  return (
    <div>
      <NavBar />
      <br/><br/><br/>
      <>
      <h2 className="fs-4 mb-3 text-center text-uppercase">Edit Profile</h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form  className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                 Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
             
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                 Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Shipping Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
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
    <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default Profile;

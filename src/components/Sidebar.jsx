import React from "react";
import styles from "../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import { getSession, sendLogoutRequest } from "../state/user";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });


  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendLogoutRequest());
  };

  return (
    <div>
      <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark" style={{width: 250}}> <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> <svg className="bi me-2" width="40" height="32"> </svg> <span className={`${styles.profile} fs-4`}><CgProfile size={25} />Admin Panel </span> </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
        <li> <Link to="/usersManagement" className="nav-link text-white"> <i className="fa fa-user"></i><span className="ms-2">Manage Users</span> </Link> </li>
        <li> <Link to="/productsManagement" className="nav-link text-white"> <i className="fa fa-briefcase"></i><span className="ms-2">Manage Products</span> </Link> </li>
        <li> <Link to="/categoriesManagement" className="nav-link text-white"> <i className="fa fa-window-restore"></i><span className="ms-2">Manage Categories</span> </Link> </li>
    </ul>
    <hr/>
    <div className={styles.logBtn}> <Link to="/" className="d-flex align-items-center text-white text-decoration-none "  > <RiLogoutBoxLine onClick={handleClick} className={styles.logButton} size={23} /> <strong> Log out</strong> </Link>
        <ul >
            <li>
                <hr />
            </li>
        </ul>
    </div>
</div>
      {/* <div
        className="d-flex vh-50 flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 300, height: 1000 }}
      >
        {" "}
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {" "}
          <svg className="bi me-2" width="40" height="32">
            {" "}
          </svg>{" "}
          <span className="fs-4">Admin Panel</span>{" "}
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            {" "}
            <Link
              to="/usersManagement"
              className="nav-link active"
              aria-current="page"
            >
              {" "}
              <i className="fa fa-user"></i>
              <span className="ms-2">Manage Users</span>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/productsManagement" className="nav-link text-white">
              {" "}
              <i className="fa fa-briefcase"></i>
              <span className="ms-2">Manage Products</span>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/categoriesManagement" className="nav-link text-white">
              {" "}
              <i className="fa fa-window-restore"></i>
              <span className="ms-2">Manage Categories</span>{" "}
            </Link>{" "}
            </li>
          <li>
            {" "}
            <Link
              to="/categoriesManagement"
              className="nav-link text-white"
              style={{ color: "#FFF" }}
            >
              {" "}
              <RiLogoutBoxLine className={styles.logButton} size={23} />
              <span className="ms-2">Log out</span>{" "}
            </Link>{" "}
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;

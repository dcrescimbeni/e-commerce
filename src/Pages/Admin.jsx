import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Admin.module.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsManagement from "../Pages/ProductsManagement";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";

const Admin = () => {

  const location = useLocation();

  const user = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.admContainer}>
        <Navbar className={styles.navBar} bg="dark" variant="dark">
          <Container className={styles.navBar}>
            <Navbar.Brand>
              <Nav className="me-auto">
                {" "}
                <Link to="/" style={{ color: "#FFF" }}>
                  <AiOutlineHome size={25} />
                </Link>
              </Nav>
            </Navbar.Brand>
            <Navbar.Brand>Welcome {user.firstName}</Navbar.Brand>
          </Container>
        </Navbar>
        {/* <FormUser className={styles.testForm}/> */}
        {/* <AdminTable/> */}
        {location.pathname === "/usersManagement" ? <UsersList /> : ""}
        {/* {location.pathname === "/categoriesManagement" ? < /> : ""} */}
        {location.pathname === "/productsManagement" ? < ProductsManagement /> : ""}
      </div>
    </div>
  );
};

export default Admin;

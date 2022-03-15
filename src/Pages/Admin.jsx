import React, {useEffect} from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Admin.module.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { useSelector} from "react-redux";

const Admin = () => {

    const user = useSelector((state) => {
      console.log(state.user);
      return state.user;
    });

  

  return (
    <div className={styles.container}>
      <Sidebar />
      <Navbar className={styles.navBar} bg="dark" variant="dark">
        <Container className={styles.navBar}>
          <Navbar.Brand >
          <Nav className="me-auto">
            {" "}
            <Link to="/" style={{ color: '#FFF' }}>
              <AiOutlineHome size={25} /> 
            </Link>
            </Nav>
          </Navbar.Brand>
          <Navbar.Brand>
            Welcome {user.firstName}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Admin;

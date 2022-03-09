import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import style from "../styles/Login.module.css";

const Register = () => {

  
    return (
      <div className={style.masthead}>
      <div className="color-overlay d-flex justify-content-center align-items-center">
          <div className="containerForm">
            
          <Form className="rounded p-4 p-sm-3 ">
           
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name " />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Billing Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Billing Address " />
          </Form.Group>


          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button  variant="primary" size="lg" type="submit">
            Submit
          </Button>
          </div>
     
          <Link to="/login">
            <p>Login</p>
          </Link>
  
        </Form>
        </div>
      </div>
    </div>
        
    )
}

export default Register

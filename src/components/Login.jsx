import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import useInput from "../Hooks/useInputs";
// import { sendLoginRequest } from "../state/user";
import style from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={style.masthead}>
      <div className="color-overlay d-flex justify-content-center align-items-center">
          <div className="containerForm">
        <Form className="rounded p-4 p-sm-3 ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check tupe="checkbox" label="Remember Me"></Form.Check>
          </Form.Group>
          <div className="d-grid gap-2">
          <Button  variant="primary" size="lg" type="submit">
            Submit
          </Button>
          </div>
          <br></br>
          <br></br>
          <p>You dont have an account</p>
          <Link to="/register">
            <p>Register</p>
          </Link>
        </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import useInput from "../Hooks/useInputs";
import { sendRegister } from "../state/user";
import { FcGoogle} from "react-icons/fc";
import { BsFacebook }  from "react-icons/bs";
import { Form, Button } from "react-bootstrap";
import style from "../styles/Login.module.css";

const Register = () => {

  const inputFirstName = useInput();
  const inputLastName = useInput();
  const inputEmail = useInput();
  const inputBillingAddress = useInput();
  const inputPassword = useInput();
 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        email: inputEmail.value,
        billingAddress: inputBillingAddress.value,
        password: inputPassword.value,
      }
    console.log("Form =>", form)
    dispatch(sendRegister(form))    
  };

    return (
      <div className={style.masthead}>
      <div className="color-overlay d-flex justify-content-center align-items-center">
          <div className="containerForm">
            
          <Form onSubmit={handleSubmit} className="rounded p-4 p-sm-3 ">
           
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control {...inputFirstName} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control {...inputLastName} type="text" placeholder="Enter Last Name " />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control {...inputEmail} type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Billing Address</Form.Label>
            <Form.Control   {...inputBillingAddress} type="text" placeholder="Enter Billing Address " />
          </Form.Group>


          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control   {...inputPassword} type="password" placeholder="Enter Password" />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button  variant="primary" size="lg" type="submit">
            Submit
          </Button>
          </div>
     
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/google"><FcGoogle size={32} /></Link> <Link to="/facebook"><BsFacebook size={30}/></Link>
        </Form>
        </div>
      </div>
    </div>
        
    )
}

export default Register

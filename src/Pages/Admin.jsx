import React from 'react';
import { Link } from "react-router-dom";
// import { Button, Alert, Card } from "react-bootstrap";
import { ImUserTie } from "react-icons/im"

const Admin = () => {
    return (
        
        <div>
            <br/>
            <br/>
            <br/>
            <br/>

            <p><ImUserTie size={45} color="blue"/>Hello Admin</p>

            <Link to="/productsManagment">
            <p>Page productsManagment</p>
            </Link>

            <Link to="/usersManagment" >
            <p>Page usersManagment</p>
            </Link>

            <Link to="/categoriesManagment" >
            <p>Page categoriesManagment</p>
            </Link>

           
            
        </div>
    )
}

export default Admin




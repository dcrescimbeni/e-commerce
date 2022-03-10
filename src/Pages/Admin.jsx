import React from 'react';
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <p>Hello Admin</p>
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

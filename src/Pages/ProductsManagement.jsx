import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/UsersList.module.css';
import {Button} from 'react-bootstrap';


const ProductsManagement = () => {

const [productsList, setProductsList] = useState();

useEffect(() => {
axios
.get("/api/products/allProducts")
.then((res) => res.data)
.then((products) => setProductsList(products))
}, [])

if (!productsList) return <div></div>;

console.log(productsList)

// const handleDelete = (e) =>{
// e.preventDefault();
// axios.
// delete("/api/users/delete/:id")
// }

    return (
        <div className="container-fluid px-4">
            <div className="row my-5">
                <h3 className="fs-4 mb-3">Products   <Link to="/newProduct"><Button variant="success">Add New Product</Button></Link>{' '}</h3>
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbodyContainer} >
                            {productsList.map((product) => {
                                return (
                                    <tr className={styles.userContainer}>
                                    <th scope="row">{product.productId}</th>
                                    <td>{product.name}</td>
                                    <td>{product.stock}</td>
                                    <td>{`${product.price} €`}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/users/${product.userId}`} className='btn btn-warning'>Edit</Link></td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductsManagement

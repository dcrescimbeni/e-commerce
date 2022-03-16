import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const UsersList = () => {

const [usersList, setUsersList] = useState();

useEffect(() => {
axios
.get("/api/users/admin/users")
.then((res) => res.data)
.then((users) => setUsersList(users))
}, [])

console.log(usersList)

    return (
        <div className="container-fluid px-4">
            <div className="row my-5">
                <h3 className="fs-4 mb-3">Users</h3>
                <div className="col">
                    <table className="table bg-white rounded shadow-sm  table-hover">
                        <thead>
                            <tr>
                                <th scope="col" width="50">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Luis</td>
                                <td>luis@gmail.com</td>
                                <td><Link to="/user-edit" className='btn btn-warning'>Edit</Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Juan</td>
                                <td>juan@gmail.com</td>
                                <td><Link to="/user-edit" className='btn btn-warning'>Edit</Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Luis</td>
                                <td>luis@gmail.com</td>
                                <td><Link to="/user-edit" className='btn btn-warning'>Edit</Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Juan</td>
                                <td>juan@gmail.com</td>
                                <td><Link to="/user-edit" className='btn btn-warning'>Edit</Link></td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsersList;
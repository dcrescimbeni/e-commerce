import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {axios} from "axios";

const UsersManagement = () => {



    return (
        <>
            <h2 className="fs-4 mb-3 text-center text-uppercase">User</h2>
            <section className='container mt-5'>
                <div className='card'>
                    <div className='card-body'>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Billing Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Shipping Address</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="" />
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Admin
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 modal-footer">
                                <button type="submit" className="btn btn-primary pe-2">Aceptar</button>
                                <Link to="/admin" className="btn btn-secondary">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsersManagement;
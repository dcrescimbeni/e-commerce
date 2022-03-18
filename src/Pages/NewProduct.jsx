import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import  axios  from "axios";
import useInput from "../Hooks/useInputs";
import {Button} from 'react-bootstrap';

const NewProduct = () => {

    //axios para crear producto
  const name = useInput();
  const price = useInput();
  const color = useInput();
  const size = useInput();
  const stock = useInput();
  const categories = useInput();
  const pictures = useInput();
  const description = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
    axios
    .post(`/api/products/newProduct`, {
        name: name.value,
        price: price.value,
        color: color.value,
        size: size.value,
        stock: stock.value,
        categories: categories.value,
        img: pictures.value,
        pictures: pictures.value,
        description: description.value
    })
    .then((res) => res.data)
    .then((newProduct) => console.log(newProduct))
    navigate("/productsManagement")
  };

  return (
    <>
      <h2 className="fs-4 mb-3 text-center text-uppercase">Add a New Product</h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Name
                </label>
                <input
                  {...name}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Price
                </label>
                <input
                  {...price}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Color
                </label>
                <input
                  {...color}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Stock
                </label>
                <input
                  {...stock}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Size
                </label>
                <input
                  {...size}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Pictures
                </label>
                <input
                  {...pictures}
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="URL de imágenes separadas por comas"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Categories
                </label>
                <input
                  {...categories}
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Números para cada categoría separados por comas"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Description
                </label>
                <input
                  {...description}
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div className="col-12 modal-footer">
              <Link to="/productsManagement"><Button variant="primary">Back</Button>{' '}</Link>
                <button type="submit" className="btn btn-primary pe-2">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default NewProduct;
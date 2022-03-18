import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../Hooks/useInputs";
import {Button} from 'react-bootstrap';

const ProductEdit = () => {
  //obtener id del usuario a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split("/");
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let productId = parseInt(reducedURL);

  //axios para editar producto

  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    axios
      .get(`/api/products/product/${productId}`)
      .then((res) => res.data)
      .then((product) => {
        setProductInfo(product);
        price.setValue(product.price);
        productName.setValue(product.name);
        color.setValue(product.color);
        size.setValue(product.size);
        stock.setValue(product.stock);
        img.setValue(product.img);
        description.setValue(product.description);
      });
  }, []);

  //enviar del producto editado al servidor
  const navigate = useNavigate();

  const productName = useInput();
  const price = useInput();
  const color = useInput();
  const size = useInput();
  const stock = useInput();
  const img = useInput();
  const description = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/products/product/${productId}`, {
        name: productName.value,
        price: price.value,
        color: color.value,
        size: size.value,
        stock: stock.value,
        description: description.value,
      })
      .then((res) => res.data);
      navigate("/productsManagement")
  };

  if (!productInfo) return <div></div>;

  return (
    <>
      <h2 className="fs-4 mb-3 text-center text-uppercase">Edit Product </h2>
      <section className="container mt-5">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  {...productName}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Price
                </label>
                <input
                  {...price}
                  type="number"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Color
                </label>
                <input
                  {...color}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Size
                </label>
                <input
                  {...size}
                  type="number"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Stock
                </label>
                <input
                  {...stock}
                  type="number"
                  className="form-control"
                  id="inputAddress"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Pictures
                </label>
                <input
                  {...img}
                  type="text"
                  className="form-control"
                  id="inputAddress2"
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
                />
              </div>
              <div className="col-12 modal-footer">
              <Link to="/productsManagement"><Button variant="primary">Back</Button>{' '}</Link>
                <button type="submit" className="btn btn-primary pe-2">
                  Accept
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default ProductEdit;

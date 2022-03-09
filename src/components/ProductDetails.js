import React from "react";
import data from "../fakeDB/data";
import styles from "../styles/ProductDetails.module.css";
import { Card, Button } from 'react-bootstrap';

const ProductDetails = () => {
  const { products } = data;

  //obtener id del producto a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split("/");
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let productID = parseInt(reducedURL);

  return (

    <div className={styles.container}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={products[productID]["image1"]} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Sumar al carrito</Button>
    <Button variant="primary">Quitar del carrito</Button>
  </Card.Body>
</Card>
    </div>
    // <div className={styles.mainConteiner}>
    //   <div className={styles.image}>
    //     <img src={products[productID]["image1"]} alt="imagen" />
    //     </div>
    //     <div className={styles.container}>
    //     <div>{products[productID]["name"]}</div>
    //     <div className={styles.text}>{products[productID]["description"]}</div>
    //     <div>{products[productID]["price"]}</div>
    //     <button>Sumar al carrito</button>
    //     <button>Quitar del carrito</button>
    //   </div>
    // </div>
  );
};

export default ProductDetails;

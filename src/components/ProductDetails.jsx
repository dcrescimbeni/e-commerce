import React, { useEffect, useState } from "react";
// import data from "../fakeDB/data";
import styles from "../styles/ProductDetails.module.css";
import { Card, Button, Carousel, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ onAdd }) => {
  // const { products } = data;
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  // console.log(productId)

  useEffect(() => {
    axios
      .get(`/api/products/product/${productId}`)
      .then((res) => res.data)
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(product.img);

  //obtener id del producto a partir de la url
  // let currentURL = window.location.href;
  // let arrayURL = currentURL.split("/");
  // let reducedURL = [];

  // for (let i = 0; i < arrayURL.length; i++) {
  //   if (i === arrayURL.length - 1) {
  //     reducedURL.push(arrayURL[i]);
  //   }
  // }

  // let productId = parseInt(reducedURL);
  // console.log(reducedURL);
  // console.log(products[productId]["image4"])
  // console.log(product)

  return (
    <div className={styles.container}>
      <Carousel className={styles.image} fade variant="dark">
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={product.img[0]}
            alt="First slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={product.img[1]}
            alt="Second slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={product.img[2]}
            alt="Third slide"
          /> */}
        </Carousel.Item>
      </Carousel>

      <div className={styles.card}>
        <Card style={{ width: "30rem", height: "56rem" }}>
          <Card.Body>
            <br></br>
            <Card.Title className={styles.name}>
              {product.name}{" "}
              <Link to="/writeReview">
                <Button variant="warning">Escribir reseña</Button>
              </Link>
            </Card.Title>
            <br></br>
            <br></br>
            <Card.Text className={styles.description}>
              {product.description}
            </Card.Text>
            <br></br>
            <Card.Text
              className={styles.description}
            >{`${product.price} € `}</Card.Text>
            <br></br>
            <br></br>
            <div className={styles.buttonsContainer}>
              <Button variant="primary" onClick={() => onAdd(product)}>Sumar al carrito</Button>
              <Button variant="primary">Quitar del carrito</Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.scoreTitle}>Valoración Promedio</div>
            <div className={styles.score}>5</div>
            <br></br>
            <br></br>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;

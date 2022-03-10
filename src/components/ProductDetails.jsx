import React from "react";
import data from "../fakeDB/data";
import styles from "../styles/ProductDetails.module.css";
import { Card, Button, Carousel, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Carousel className={styles.image} fade variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={products[productID]["image4"]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={products[productID]["image2"]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={products[productID]["image3"]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className={styles.card}>
        <Card style={{ width: "30rem", height: "56rem" }}>
          <Card.Body>
            <br></br>
            <Card.Title className={styles.name}>
              {products[productID]["name"]}{" "}
              <Link to="/writeReview">
                <Button variant="warning">Escribir reseña</Button>
              </Link>
            </Card.Title>
            <br></br>
            <br></br>
            <Card.Text className={styles.description}>
              {products[productID]["description"]}
            </Card.Text>
            <br></br>
            <Card.Text
              className={styles.description}
            >{`${products[productID]["price"]} € `}</Card.Text>
            <br></br>
            <br></br>
            <div className={styles.buttonsContainer}>
              <Button variant="primary">Sumar al carrito</Button>
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

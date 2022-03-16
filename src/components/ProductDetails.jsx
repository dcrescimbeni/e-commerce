import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductDetails.module.css';
import { Card, Button, Carousel, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = ({ onAdd }) => {
  //obtener id del producto a partir de la url
  let currentURL = window.location.href;
  let arrayURL = currentURL.split('/');
  let reducedURL = [];

  for (let i = 0; i < arrayURL.length; i++) {
    if (i === arrayURL.length - 1) {
      reducedURL.push(arrayURL[i]);
    }
  }

  let productID = parseInt(reducedURL);

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/product/${productID}`)
      .then((res) => {
        // console.log(res.data)
        setProductInfo(res.data);
      });
  }, []);

  if (!productInfo.img) return <div></div>;
  return (
    <div className={styles.container}>
      <Carousel className={styles.image} fade variant="dark">
        {productInfo.img.map((imgSource) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={imgSource}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className={styles.card}>
        <Card style={{ width: '30rem', height: '56rem' }}>
          <Card.Body>
            <br></br>
            <Card.Title className={styles.name}>
              {productInfo['name']}{' '}
              <Link to="/writeReview">
                <Button variant="warning">Escribir reseña</Button>
              </Link>
            </Card.Title>
            <br></br>
            <br></br>
            <Card.Text className={styles.description}>
              {productInfo['description']}
            </Card.Text>
            <br></br>
            <Card.Text
              className={styles.description}
            >{`${productInfo['stock']} unidades disponibles`}</Card.Text>
            <Card.Text
              className={styles.description}
            >{`${productInfo['price']} € `}</Card.Text>
            <br></br>
            <br></br>
            <div className={styles.buttonsContainer}>
              <Button variant="dark" onClick={() => onAdd(productInfo)}>
                Sumar al carrito
              </Button>
            </div>
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

import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductDetails.module.css';
import { Card, Button, Carousel, ListGroup, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

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
    <div>
      <NavBar />
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
        <Card style={{ width: '30rem', height: '40rem' }}>
          <Card.Body>
            <br></br>
            <Card.Title className={styles.name}>
              {productInfo['name']}{' '}
              <Link to="/writeReview">
                {/* <Button variant="warning">Escribir reseña</Button> */}
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
                Add to Cart
              </Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;

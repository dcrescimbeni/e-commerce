import React from "react";
import data from "../fakeDB/data";
import styles from "../styles/ProductList.module.css"
import {Link} from 'react-router-dom';


const ProductsList = () => {
  const { products } = data;
  return (
    <>
  
    
    <ul className={styles.container}>
      {products.map((product) => {
        return (
          <div key={product.id}>
           <Link to={`/products/${product.id}`}> <img className= {styles.image} src={product.image1} alt="imagen"></img> </Link>
            <div className={styles.name}>{product.name}</div>
            <div>{`${product.price} €`}</div>
          </div>
        );
      })}
    </ul>

    </>
  );
};

export default ProductsList;
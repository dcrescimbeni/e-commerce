import React from "react";

import data from "../fakeDB/data";
import styles from "../styles/ProductList.module.css"


const ProductsList = () => {
  const { products } = data;
  console.log(products);
  return (
    <>
  
    
    <ul className={styles.container}>
      {products.map((product) => {
        return (
          <div >
            <img className= {styles.image} src={product.image} alt="imagen"></img>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        );
      })}
    </ul>

    </>
  );
};

export default ProductsList;
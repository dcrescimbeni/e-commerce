import React from "react";
import styles from "../styles/ProductList.module.css"
import {Link} from "react-router-dom";

const ProductList = ({products}) => {

  return (
    <ul className={styles.container}>
      {products.map((product) => {
        return (
          <div key={product.id}>
           <Link to={`/products/${product.id}`}> <img className= {styles.image} src={product.image1} alt={product.name}/></Link>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        );
      })}
    </ul>
  );
};

export default ProductList;

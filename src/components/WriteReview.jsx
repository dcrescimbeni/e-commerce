import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/WriteReview.module.css";
import StarRating from "./StarRating";


const WriteReview = () => {


  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
      <Form className="call-lg-6 offset-lg-3">
      <StarRating className={styles.star}/>
      <br></br>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Review</Form.Label>
          <Form.Control
            className={styles.commentInput}
            type="text"
            as="textarea"
            placeholder="Escriba su reseña"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default WriteReview;

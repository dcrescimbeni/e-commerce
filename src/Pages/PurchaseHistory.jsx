import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Table } from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const PurchaseHistory = () => {
  const [orders, setOrders] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/userOrders/${id}`)
      .then((res) => setOrders(res.data));
  }, []);

  console.log("orders =>", orders);
  return (
    <div>
      <br />
      <br />
      <br />
      <NavBar />
      <br />

      <h2>
        <b>Purchase History</b>
      </h2>
      <br />
      <br />
      <br />
      <br />
      {/* Aca empieza el test del table bootstrap */}
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>Order Number</th>
              <th>Products</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              return order.orderDetails?.map(product => {
                return (
                  <tr>  
                    <td>
                      {" "}
                      <AiOutlineShoppingCart />
                    </td>
                    {/* {Product.price} */}
                    <td>{order.orderId}</td>
                    <td>{product.name}</td>
                    <td>{product.createdAt.substring(0,10)}</td>
                    <td>${product.price}</td>
                  </tr>
                );
              })
            })}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default PurchaseHistory;

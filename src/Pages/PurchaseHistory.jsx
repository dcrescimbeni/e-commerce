import React, {useEffect} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Table } from "react-bootstrap";
import axios from "axios";
import NavBar from "../components/NavBar";

const PurchaseHistory = () => {

  useEffect(() => {

    axios.get(`http://localhost:3001/api/users/userOrders/8`)
    .then((res) => console.log("Res.Data => ",res.data) )
   
  }, [])
  

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
              <th>Products</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              {/* {Product.price} */}
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
            <tr>
              <td>
                {" "}
                <AiOutlineShoppingCart />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>$ Table cell</td>
            </tr>
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

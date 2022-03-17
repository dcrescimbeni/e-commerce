import React from "react";
import { Link } from "react-router-dom";
import SubNavBar from "../components/SubNavBar";
import { useDispatch, useSelector } from 'react-redux'
import useScript from "../Hooks/useScript";
import { saveOrder } from '../state/orders';

const Checkout = ({ cartItems }) => {
  useScript("../script.js");

  const dispatch = useDispatch()

  //Ve el usuario que esta conectado
  const user = useSelector((state) => state.user);

  // console.log("Articulos Checkout")
  // console.log(cartItems)

  // console.log("Usuario en Checkout")
  // console.log(user);

  const subtotal = cartItems.reduce(
    (total, curr) => total + curr.price * curr.qty, 0);

  const shipping = 0;
  const total = subtotal + shipping;



  const placeOrderHandler = (id, order) => {

    const myorder = {
      address: user.shippingAddress,
      total,
      products: order,
    }

    console.log("MyOrder")
    console.log(myorder);

    // console.log(id)
    dispatch(saveOrder(id, myorder))
    // localStorage.removeItem('cart-products')
    console.log("Guardar Orden")
  }

  return (
    <>
      <SubNavBar />
      <div className="container mb-5">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <Link to="/shoppingcart">
                <button className="btn mt-3">
                  <i className="fas fa-arrow-left"></i>
                </button>
              </Link>
              <h2>Order Summary</h2>
              <div className="line"></div>
              {cartItems.map((item) => {
                return (
                  <div key={item.productId}>
                    <table className="order-table">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={item.img[0]}
                              className="full-width"
                              alt={item.name}
                            />
                          </td>
                          <td>
                            <br /> <span className="thin">Nike</span>
                            <br /> {item.name}
                            <br />{" "}
                            <span className="thin small">
                              {" "}
                              Color: {item.color}, Size:
                              {item.size}
                              <br />
                              <br />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="price">{item.price}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="line"></div>
                  </div>
                );
              })}

              <div className="total">
                <span style={{ float: "left" }}>
                  <div className="thin dense">VAT 19%</div>
                  <div className="thin dense">Delivery</div>
                  TOTAL
                </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  <div className="thin dense">$ {subtotal.toFixed(2)}</div>
                  <div className="thin dense">${shipping.toFixed(2)}</div>$
                  {total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>Please select your card: </td>
                    <td>
                      <div className="dropdown" id="card-dropdown">
                        <div className="dropdown-btn" id="current-card">
                          Visa
                        </div>
                        <div className="dropdown-select">
                          <ul>
                            <li>American Express</li>
                            <li>Master Card</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height="80"
                className="credit-card-image"
                id="credit-card-image"
                alt="prod"
              />
              Card Number
              <input className="input-field" />
              Card Holder
              <input className="input-field" />
              <table className="half-input-table">
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      Expires
                      <input className="input-field" />
                    </td>
                    <td>
                      CVC
                      <input className="input-field" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/thanks">
                <button
                  className="pay-btn"
                  onClick={() => placeOrderHandler(user.userId, cartItems)}
                >Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

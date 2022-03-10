import React from 'react'
import { Link } from 'react-router-dom';
import useScript from '../hooks/useScript'

const Checkout = ({ cartItems }) => {

    useScript('../script.js');

    return (
        <div className="container mb-5">
            <div className="window">
                <div className="order-info">
                    <div className="order-info-content">
                        <Link to="/shoppingcart">
                            <button className='btn mt-3'><i className="fas fa-arrow-left"></i></button>
                        </Link>
                        <h2>Order Summary</h2>
                        <div className="line"></div>
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9422df2-6b6c-45f4-8c29-72fef20d3d68/air-jordan-1-low-se-zapatillas-qvN6jx.png"
                                        className="full-width" alt="prod" />
                                    </td>
                                    <td>
                                        <br /> <span className="thin">Nike</span>
                                        <br /> Free Run 3.0 Women<br /> <span className="thin small"> Color: Grey/Orange, Size:
                                            10.5<br /><br /></span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className="price">$99.95</div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        <div className="line"></div>
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8bbfd4d-a3c4-4a04-9900-687285e8a82d/air-jordan-1-retro-high-og-zapatillas.png"
                                        className="full-width" alt="prod" />
                                    </td>
                                    <td>
                                        <br /> <span className="thin">Fjällräven</span>
                                        <br />Vintage Backpack<br /> <span className="thin small"> Color: Olive, Size: 20L</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="price">$235.95</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line"></div>
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td><img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b3f9f6d-43c6-455d-83e8-ba3d6a03b700/air-jordan-1-low-g-zapatillas-de-golf-gZm70T.png"
                                        className="full-width" alt="prod" />
                                    </td>
                                    <td>
                                        <br /> <span className="thin">Monobento</span>
                                        <br />Double Lunchbox<br /> <span className="thin small"> Color: Pink, Size: Medium</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className="price">$25.95</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line"></div>

                        <div className="total">
                            <span style={{ float: "left" }}>
                                <div className="thin dense">VAT 19%</div>
                                <div className="thin dense">Delivery</div>
                                TOTAL
                            </span>
                            <span style={{ float: "right", textAlign: "right" }}>
                                <div className="thin dense">$68.75</div>
                                <div className="thin dense">$4.95</div>
                                $435.55
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
                                            <div className="dropdown-btn" id="current-card">Visa</div>
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
                        <img src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png" height="80"
                            className="credit-card-image" id="credit-card-image" alt="prod" />
                        Card Number
                        <input className="input-field" />
                        Card Holder
                        <input className="input-field" />
                        <table className="half-input-table">
                            <tbody>
                                <tr>
                                    <td> Expires
                                        <input className="input-field" />
                                    </td>
                                    <td>CVC
                                        <input className="input-field" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="pay-btn">Checkout</button>

                    </div>

                </div>
            </div>

        </div>

    )


}

export default Checkout
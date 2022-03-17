import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


const ShoppingCart = ({ onAdd, onRemove, onDelete, cartItems }) => {


    const subtotal = cartItems.reduce((total, curr) => total + curr.price * curr.qty, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    const onModify = (e) => {
        console.log(e.target.value)
    }



    return (
        <>
        <NavBar />
         <br/><br/>
        <div className="container">
            <section className="px-4 py-5 w-100 p-3 mb-5 rounded" style={{ backgroundColor: "#ffffff" }}>

                <div className="row">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2 shadow" >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <div>
                                                    {cartItems.length === 0 && <div>Cart Is Empty</div>}
                                                </div>
                                                {cartItems.length > 0 && <h6 className="mb-0 text-muted">{cartItems.length} articulos</h6>}

                                            </div>
                                            <hr className="my-4" />

                                            {cartItems.map(item => {
                                                return (
                                                    <div key={item.productId} className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={item.img[0]}
                                                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">{item.name}</h6>
                                                            <h6 className="text-black mb-0">{item.description}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
                                                            <button
                                                                className="btn btn-link px-2"
                                                                onClick={() => onRemove(item)}
                                                            >
                                                                <i className="fas fa-minus"></i>
                                                            </button>

                                                            <input
                                                                style={{ textAlign: "center" }}
                                                                min="0"
                                                                name="quantity"
                                                                value={item.qty}
                                                                onChange={(e) => onModify(e.target.value)}
                                                                type="number"
                                                                className="form-control form-control-sm"
                                                                disabled
                                                            />

                                                            <button
                                                                className="btn btn-link px-2"
                                                                onClick={() => onAdd(item)}
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <span className="mb-0"><strong>{item.qty} x ${item.price.toFixed(2)}</strong></span>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button className="text-muted btn" onClick={() => onDelete(item)}><i className="fas fa-times"></i></button>
                                                        </div>
                                                    </div>)
                                            })}

                                            {cartItems.length > 0 && <hr className="my-4" />}


                                            <div className="pt-5">
                                                <h6 className="mb-0"><Link to="/" className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                {cartItems.length > 0 && <h5 className="text-uppercase">{cartItems.length} art.</h5>}
                                                <h5>$ {subtotal.toFixed(2)}</h5>
                                            </div>


                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>$ {total.toFixed(2)}</h5>
                                            </div>

                                            <Link to="/checkout"><button type="button" className="btn btn-dark btn-block btn-lg"
                                                data-mdb-ripple-color="dark">Continue to checkout</button></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default ShoppingCart
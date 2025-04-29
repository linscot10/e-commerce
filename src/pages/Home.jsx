import React from 'react'
import { Link } from 'react-router-dom'
import { FaTruck } from "react-icons/fa6";
import { FaRegCreditCard, FaStar } from "react-icons/fa";




const Home = () => {
    return (
        <div className="landing-page container-fluid bg-light py-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Welcome to Kibandaski</h1>
                <p className="lead text-muted">
                    Discover amazing products at unbeatable prices. Curated for quality, styled for you.
                </p>
                <Link to="/shop" className="btn btn-lg btn-primary px-5 mt-3">
                    Start Shopping
                </Link>
            </div>

            {/* Featured Products */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row g-4">
                    {[1, 2, 3].map((id) => (
                        <div className="col-md-4" key={id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`/images/product_${id}.jpg`}
                                    className="card-img-top"
                                    alt={`Product ${id}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Product {id}</h5>
                                    <p className="card-text">High-quality, best-in-class product at a great price.</p>
                                    <Link to="/shop" className="btn btn-outline-primary btn-sm">
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Shop With Us */}
            <div className="bg-white py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Why Shop With Us?</h2>
                    <div className="row text-center">
                        <div className="col-md-4 shadow-sm">
                            <h5><FaTruck /> Fast Shipping</h5>
                            <p>Reliable and quick delivery nationwide, so your order arrives right on time.</p>
                        </div>
                        <div className="col-md-4 shadow-sm">
                            <h5><FaRegCreditCard /> Secure Checkout</h5>
                            <p>Your payment information is processed securely with industry-standard encryption.</p>
                        </div>
                        <div className="col-md-4 shadow-sm">
                            <h5><FaStar /> Customer Satisfaction</h5>
                            <p>Thousands of happy customers and a dedicated support team at your service.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Call-to-Action */}
            <div className="text-center py-5">
                <h3 className="mb-3">Ready to discover your next favorite product?</h3>
                <Link to="/shop" className="btn btn-lg btn-success px-5">
                    Browse the Shop
                </Link>
            </div>
        </div>

    )
}

export default Home
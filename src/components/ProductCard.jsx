import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
    return (
        <div className="card h-100 shadow-sm" >
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price.toFixed(2)}</p>
                <Link className="btn btn-outline-primary mt-auto" to={`/product/${product.id}`}>
                    View details
                </Link>
            </div>
        </div>


    )
}

export default ProductCard
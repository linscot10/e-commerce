import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'



const mockProducts = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 49.99,
        image: '/images/headPhones.jpg',
        description: 'High-quality wireless headphones with noise cancellation.'
    },
    {
        id: 2,
        name: 'Smartwatch',
        price: 89.99,
        image: '/images/smartWatch.jpg',
        description: 'Track your fitness, monitor heart rate, and stay connected.'
    },
    {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 29.99,
        image: '/images/BluetoothSpeaker.jpg',
        description: 'Portable speaker with rich bass and crisp sound.'
    },
    {
        id: 4,
        name: 'Laptop Backpack',
        price: 39.99,
        image: '/public/images/Laptop Backpack.jpg',
        description: 'Durable and spacious backpack for laptops and accessories.'
    },
    {
        id: 5,
        name: 'Smartwatch',
        price: 89.99,
        image: '/images/smartWatch.jpg',
        description: 'Track your fitness, monitor heart rate, and stay connected.'
    },
    {
        id: 6,
        name: 'Bluetooth Speaker',
        price: 29.99,
        image: '/images/BluetoothSpeaker.jpg',
        description: 'Portable speaker with rich bass and crisp sound.'
    },
    {
        id: 7,
        name: 'Laptop Backpack',
        price: 39.99,
        image: '/public/images/Laptop Backpack.jpg',
        description: 'Durable and spacious backpack for laptops and accessories.'
    },
    {
        id: 8,
        name: 'Wireless Headphones',
        price: 49.99,
        image: '/images/headPhones.jpg',
        description: 'High-quality wireless headphones with noise cancellation.'
    }
]



const ProductDetails = () => {
    const { addToCart } = useCart()
    const { id } = useParams()
    const product = mockProducts.find(p => p.id === parseInt(id))

    if (!product) {
        return <div className="text-center mt-5"><h3>Product not found</h3></div>
    }

    return (
        <div className="row my-5">
            <div className="col-md-6 text-center">
                <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>{product.name}</h2>
                <p className="text-muted">${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails
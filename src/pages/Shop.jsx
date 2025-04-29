import React from 'react'
import ProductCard from '../components/ProductCard'

const mockProducts = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 49.99,
        image: '/images/headPhones.jpg'
    },
    {
        id: 2,
        name: 'Smartwatch',
        price: 89.99,
        image: '/images/smartWatch.jpg'
    },
    {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 29.99,
        image: '/images/BluetoothSpeaker.jpg'
    },
    {
        id: 4,
        name: 'Laptop Backpack',
        price: 39.99,
        image: '/public/images/Laptop Backpack.jpg'
    },
    {
        id: 5,
        name: 'Smartwatch',
        price: 89.99,
        image: '/images/smartWatch.jpg'
    },
    {
        id: 6,
        name: 'Bluetooth Speaker',
        price: 29.99,
        image: '/images/BluetoothSpeaker.jpg'
    },
    {
        id: 7,
        name: 'Laptop Backpack',
        price: 39.99,
        image: '/public/images/Laptop Backpack.jpg'
    },
    {
        id: 8,
        name: 'Wireless Headphones',
        price: 49.99,
        image: '/images/headPhones.jpg'
    }
]

const Shop = () => {
    return (
        <div>
            <h2 className="mb-4 text-center">Shop Our Products</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {mockProducts.map(product => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
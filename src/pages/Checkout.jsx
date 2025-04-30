import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useCart } from '../context/CartContext'

const Checkout = () => {
    const { user } = useUser()
    const { cartItems, clearCart } = useCart()
    const navigate = useNavigate()


    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')

    const handleOrder = (e) => {
        e.preventDefault()

        if (!user) {
            alert('You must be logged in to place an order.')
            navigate('/login')
            return
        }

        const orderDetails = {
            customer: user.name,
            email: user.email,
            address,
            city,
            phone,
            items: cartItems,
            total,
        }

        console.log('ORDER:', orderDetails)

        alert('Order placed successfully!')
        clearCart()
        navigate('/')
    }


    if (cartItems.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h4>Your cart is empty</h4>
                <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
                    Back to Shop
                </button>
            </div>
        )
    }

    return (
        <div className="container mt-5">

            <h3>Checkout</h3>

            <div className="mb-4">
                <h5>Cart Summary</h5>
                {cartItems.map((item) => (
                    <div key={item.id} className="border-bottom py-2">
                        <strong>{item.name}</strong> — KES {item.price} × {item.quantity} = KES {item.price * item.quantity}
                    </div>
                ))}
                <h5 className="mt-3">Total: KES {total}</h5>

                <form onSubmit={handleOrder}>
                    <h5>Delivery Details</h5>
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        className="form-control my-2"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-warning w-100 mt-3">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}


export default Checkout
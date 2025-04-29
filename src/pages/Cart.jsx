import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cartItems.length === 0) {
        return (
            <div className="text-center mt-5">
                <h3>Your cart is empty</h3>
                <Link to="/shop" className="btn btn-primary mt-3">Go to Shop</Link>
            </div>
        )
    }
    return (
        <div className="container mt-5">

            <h2>Your Cart</h2>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    style={{ width: '60px' }}
                                />
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-outline-secondary mt-3" onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

export default Cart
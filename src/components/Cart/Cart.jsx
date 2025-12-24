import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Style from "./Cart.module.css";

export default function Cart() {
    const { cartItems, removeFromCart, totalPrice, decreaseQuantity, increaseQuantity } =
        useContext(CartContext);

    if (cartItems.length === 0) {
        return <h2 className="text-center mt-5">Your cart is empty 🛒</h2>;
    }

    return (
        <div className="container mt-4">
        <h2 className="mb-4">Shopping Cart</h2>

        {cartItems.map((item) => (
            <div
            key={item.id}
            className="row align-items-center border-bottom py-3"
            >
            <div className="col-md-2">
                <img
                src={item.image}
                className="img-fluid"
                alt={item.title}
                />
            </div>

            <div className="col-md-4">
                <h6>{item.title}</h6>
                <p className="text-muted">${item.price}</p>
            </div>

            <div className="col-md-3 d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => decreaseQuantity(item.id)}
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>

            <div className="col-md-3 text-end">
                <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-outline-danger btn-sm"
                >
                Remove
                </button>
            </div>
            </div>
        ))}

        <h4 className="text-end mt-4">
            Total: ${totalPrice().toFixed(2)}
        </h4>
        </div>
    );
}

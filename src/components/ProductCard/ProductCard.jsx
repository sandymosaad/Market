import React from "react";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

export default function ProductCard({ product }) {
    const {addToCart} = useContext(CartContext);

    return (
        <div className="col-md-3">
        <div className="card h-100">
        <Link to={`/productdetails/${product.id}`}>  
            <img
            src={product.image}
            className="card-img-top p-3"
            alt={product.title}
            style={{ height: "250px", objectFit: "contain" }}
            />

            <div className="card-body d-flex flex-column">
            <h6 className="card-title">
                {product.title.split(" ").slice(0, 6).join(" ")}...
            </h6>

            <p className="text-muted small mb-1">
                {product.category}
            </p>

            <div className="d-flex align-items-center mb-2">
                <span className="text-warning me-1">⭐ {product.rating.rate}</span>
                <span className="text-muted small">
                ({product.rating.count})
                </span>
            </div>

            <p className="fw-bold text-success mt-auto">
                ${product.price}
            </p>
            </div>
        </Link>
        <Link
            className="btn btn-sm btn-outline-primary mt-2"
            onClick={()=> addToCart(product    )}
        >
            Add to Cart
        </Link>
        </div>
        </div>
    );
}

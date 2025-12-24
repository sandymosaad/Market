import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";

import Style from "./ProductsDetails.module.css"; 
export default function ProductsDetails() {
  const { id } = useParams();
  const getProductDetails = async (id) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  };

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  if (isLoading) return <h3 className="text-center mt-5">Loading...</h3>;
  if (isError) return <h3 className="text-danger text-center">{error.message}</h3>;

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
            style={{ objectFit: "contain", maxHeight: "500px", width: "100%" }}
          />
        </div>

        <div className="col-md-7 d-flex flex-column justify-content-between">
          <div>
            <h2>{product.title}</h2>
            <p className="text-muted mb-1">Category: {product.category}</p>
            <p className="text-warning mb-1">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <h3 className="text-success my-3">${product.price}</h3>
            <p>{product.description}</p>
          </div>

          <div className="mt-3">
            {/* <button className="btn btn-primary me-2" onClick={()=> addToCart(product    )}>Add to Cart</button> */}
            <Link to="/products" className="btn btn-outline-secondary">
            Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Style from "./Categories.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Categories() {
    function fetchCategories() {
        return axios.get("https://fakestoreapi.com/products/categories");
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });

    if (isLoading) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }

    if (isError) {
        return <h3 className="text-danger text-center">{error.message}</h3>;
    }

return (
    <div className="container mt-4">
    <h1 className="mb-4 text-center">Categories</h1>

    <div className="row g-4">
        {data.data.map((category, index) => (
        <div className="col-md-3" key={index}>
            <Link
            to={`/categories/${category}`}
            className="text-decoration-none text-dark"
            >
            <div className={`card text-center ${Style.categoryCard}`}>
                <div className="card-body">
                <h5 className="card-title text-capitalize fw-bold">
                    {category}
                </h5>
                <p className="text-muted">View products</p>
                </div>
            </div>
            </Link>
        </div>
        ))}
    </div>
    </div>
);
}

import React from "react";
import Style from './CategorieProducts.module.css';
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import {useQuery} from "@tanstack/react-query"
export default function CategorieProducts(){
    const { category } = useParams();
    function fetchCategoriesProducts(categoryName){
        return axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
    const {data,isLoading, isError, error }= useQuery({
        queryKey:['categoryProducts', category],
        queryFn: () => fetchCategoriesProducts(category)
    });

    if (isLoading) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }

    if (isError) {
        return <h3 className="text-danger text-center">{error.message}</h3>;
    }

    return <>
        <h1 className="text-center my-2">Products of Categorie {category}</h1>
        <p className="text-center my-2">Display products for category: {category}</p>
        <div className="container mt-4">
            <div className="row g-4">
            {data.data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    </>
}
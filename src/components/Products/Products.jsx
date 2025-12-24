// import axios from "axios";
// import ProductCard from "../ProductCard/ProductCard";
// import { useQuery } from "react-query";
// import React, { useEffect, useState } from "react"; 

// export default function Products() {

//   const [products, setProducts] = useState([]);

//     async function getProducts() {
//         let { data } = await axios.get(
//         "https://fakestoreapi.com/products"
//         );
//         setProducts(data);
//     }

//     useEffect(() => {
//         getProducts();
//     }, []);

//     return (
//         <div className="container mt-4">
//         <div className="row g-4">
//              { products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//             ))} 
//         </div>
//         </div>
//     );
// }
//------------------------------------------------------
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import ProductsDetails from "../ProductsDetails/ProductsDetails";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Products() {
 function getProducts() {
    return axios.get("https://fakestoreapi.com/products");
  }

  const { data, isLoading, isError, error } = useQuery({
    
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isLoading) {
    return <h3 className="text-center mt-5">
      is Loading ....
    </h3>;
  }

  if (isError) {
    return <h3 className="text-danger text-center">{error.message}</h3>;
  }

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {data.data.map((product) => (
        
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
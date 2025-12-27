import React from "react";
import Style from './Navbar.module.css';
import { Link } from "react-router-dom";
import  logo from "../../Assets/images/logo.jpg"
import { useContext } from "react";
import { CounterContext } from "../../Context/counterContext";
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../Context/CartContext"
export default function Navbar(){

    const { userToken, setUserToken } = useContext(CounterContext);
    const { cartItems } = useContext(CartContext);

    let cartItemsNumber = cartItems.length;

    const navigate = useNavigate();

    function logout() {
        setUserToken(null);
        localStorage.removeItem("userToken"); 
        navigate("/login");
    }

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} width={50} alt="Fresh Market"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="categories">Categories</Link>
                </li>     
                <li className="nav-item">
                    <Link className="nav-link" to="cart">Cart</Link>
                </li>             
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex align-items-center">
                    <i className="fa-brands fa-facebook mx-2" ></i>
                    <i className="fa-brands fa-twitter mx-2"></i>
                    <i className="fa-brands fa-instagram mx-2"></i>
                    <i className="fa-brands fa-whatsapp mx-2"></i>
                    <Link className="nav-link mx-2 " to="cart">
                        <i className="fa-solid fa-cart-shopping " ></i> 
                        <span className="bg-info rounded">{cartItemsNumber}</span> 
                    </Link>
                </li>

            {!userToken && (
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                </>
            )}

            {userToken && (
                <li className="nav-item">
                <button className="nav-link btn" onClick={logout}>
                    Logout
                </button>
                </li>
            )}

            </ul>
            </div>
            </div>
        </nav>
    </>
}   
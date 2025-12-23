import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import CounterContextProvider from './Context/counterContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';




let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      // protected pages
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      // public pages
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);


function App() {
  return  <>
  <CounterContextProvider>
       <RouterProvider router={routers}></RouterProvider>
  </CounterContextProvider>
  </>
}

export default App;

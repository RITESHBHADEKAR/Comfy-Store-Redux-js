import React from 'react';
import {
  About,
  SingleProduct,
  Register,
  Products,
  Orders,
  Login,
  Landing,
  HomeLayout,
  Error,
  Cart,
  Checkout,
} from './pages';
import { store } from './store';
import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkOutAction } from './components/CheckoutForm';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as orderLoader } from './pages/Orders';

// loader
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkOutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: orderLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

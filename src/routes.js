import React from "react";
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import ABM from 'src/pages/ABM';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import About from 'src/pages/About';
import CartDetail from 'src/pages/CartDetail';
import ProductDetail from 'src/pages/ProductDetail';
import ABMAlta from 'src/components/admin/ABMalta';
import ABMModificar from 'src/components/admin/ABMmodificar';
import Orders from 'src/pages/Orders';
import Checkout from 'src/pages/Checkout';

const routes = (props) => [
  {
    path: 'app',
    element:
      <DashboardLayout
        user={props.user}
        products={props.products}
        onLogOut={props.handleLogOut}
      />,
    children: [
      { path: 'account', element: !props.user.isGuest ?
        <Account user={props.user} onAccountDetailsSave={props.handleAccountDetailsSave} />
        : <Navigate to="/login" />
      },
      { path: 'home', element: <Home /> },
      { path: 'products', element: (
        <ProductList
          productsdb={props.productsDB}
          onAgregarClick={props.handleAddProduct}
        />) },
      { path: 'about', element: <About /> },
      { path: 'cart-detail', element:
        <CartDetail
          products={props.products}
          user={props.user}
          onAddProduct={props.handleAddProduct}
          onMinusProduct={props.handleMinusProduct}
          onRemoveProduct={props.handleRemoveProduct}
        /> },
      { path: 'product/:product_id', element: <ProductDetail productsdb={props.productsDB} onAgregarClick={props.handleAddProduct} />},
      { path: 'checkout', element: <Checkout user={props.user} products={props.products} onFinishedBuy={props.handleFinishedBuy} />}
    ]
  },
  {
    path: 'admin',
      element: props.user.isAdmin ?
        <DashboardLayout
          user={props.user}
          products={props.products}
          onLogOut={props.handleLogOut}
        /> : <Navigate to="/app/home" />,
      children: [
        { path: 'ABM', element:
          <ABM
            productsdb={props.productsDB}
          />
        },
        {
          path: 'add-product', element: <ABMAlta onNewProduct={props.insertProduct}/>
        },
        {
          path: 'change-product/:product_id', element: <ABMModificar />
        },
        { path: 'orders', element: <Orders ordersdb={props.ordersDB} /> },
      ]
    },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login',
        element: props.user.isGuest ? <Login onSuccessfulLogin={props.onSuccessfulLogin} /> : <Navigate to="/app/home" /> },
      { path: 'register',
        element: props.user.isGuest ? <Register onSignUp={props.handleSignUp} /> : <Navigate to="/app/home" /> },
      { path: '/',
        element: <Navigate to="/app/home" />},
    ]
  }
];

export default routes;

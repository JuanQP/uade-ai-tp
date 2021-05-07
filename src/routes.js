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

const routes = (props) => [
  {
    path: 'app',
    element: props.user ?
      <DashboardLayout
        user={props.user}
        products={props.products}
        onLogOut={props.handleLogOut}
      />
      : <Navigate to="/login" />,
    children: [
      { path: 'account', element: <Account user={props.user} onAccountDetailsSave={props.handleAccountDetailsSave} /> },
      { path: 'ABM', element: (
        <ABM
          productsdb={props.productsDB}
          onDeleteProduct={props.deleteProduct}
        />
      )},
      {
        path: 'add-product', element: <ABMAlta onNewProduct={props.insertProduct}/>
      },
      {
        path: 'change-product/:product_id', element: <ABMModificar onUpdateProduct={props.updateProduct} productsdb={props.productsDB}/>
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
          onAddProduct={props.handleAddProduct}
          onMinusProduct={props.handleMinusProduct}
          onRemoveProduct={props.handleRemoveProduct}
          onFinishedBuy={props.handleFinishedBuy}
        /> },
      { path: 'product/:product_id', element: <ProductDetail productsdb={props.productsDB} onAgregarClick={props.handleAddProduct} />},
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login',
        element: props.user ? <Navigate to="/app/home" /> : <Login onLogin={props.checkLogin} failedLogin={props.failedLogin} /> },
      { path: 'register',
        element: props.user ? <Navigate to="/app/home" /> : <Register onSignUp={props.handleSignUp} /> },
      { path: '/',
        element: props.user ? <Navigate to="/app/home" /> : <Navigate to="/login" /> },
    ]
  }
];

export default routes;

import React from "react";
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import About from 'src/pages/About';

const routes = (props) => [
  {
    path: 'app',
    element: props.user ? <DashboardLayout user={props.user} onLogOut={props.handleLogOut} /> : <Navigate to="/login" />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'home', element: <Home /> },
      { path: 'products', element: <ProductList /> },
      { path: 'about', element: <About /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: props.user ? <Navigate to="/app/home" /> : <Login onLogin={props.checkLogin} failedLogin={props.failedLogin} /> },
      { path: 'register', element: <Register /> },
      { path: '/', element: props.user ? <Navigate to="/app/home" /> : <Navigate to="/login" /> },
    ]
  }
];

export default routes;

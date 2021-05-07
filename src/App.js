import { useState } from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import ABMlist from 'src/__mocks__/ABMlist';
import { v4 as uuid } from 'uuid';

const usuarios = [
  {
    firstName: 'Juan Ignacio',
    lastName: 'Quinteros Parada',
    email: 'juanquinteros@uade.edu.ar',
    password: 'password',
    avatar: 'doge.png',
    isAdmin: true,
  },
  {
    firstName: 'Meme',
    lastName: 'Man',
    email: 'cliente@uade.edu.ar',
    password: 'password',
    avatar: 'stonks.png',
    isAdmin: false,
  },
];

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [failedLogin, setFailedLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsDB, setProductsDB] = useState(ABMlist.slice(0));
  const routing = useRoutes(routes({
    user: user,
    products: products,
    checkLogin: checkLogin,
    handleLogOut: handleLogOut,
    handleSignUp: handleSignUp,
    failedLogin: failedLogin,
    handleAccountDetailsSave: handleAccountDetailsSave,
    handleAddProduct: handleAddProduct,
    handleMinusProduct: handleMinusProduct,
    handleRemoveProduct: handleRemoveProduct,
    handleFinishedBuy: handleFinishedBuy,
    productsDB: productsDB,
    insertProduct,
    updateProduct,
    deleteProduct,
  }));

  function checkLogin(loginAttempt) {
    const loggedUser = usuarios.find(u => u.email === loginAttempt.email && u.password === loginAttempt.password)
    if (loggedUser) {
      setUser(loggedUser);
      setFailedLogin(false);
      setProducts([]);
    }
    else {
      setFailedLogin(true);
    }
  }

  function handleLogOut() {
    setUser(null);
    setProducts([]);
  }

  function handleSignUp(newUser) {
    usuarios.push(newUser);
    setProducts([]);
  }

  function handleAccountDetailsSave(data) {
    setUser({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  function handleAddProduct(product) {
    const addedProduct = products.find(p => product.id === p.product.id);
    if(addedProduct) {
      addedProduct.quantity++;
    }
    else {
      products.push({
        product,
        quantity: 1,
      });
    }
    // Hack medio feo de React para que se "entere" que un array mutó.
    setProducts(products.slice(0));
  }

  function handleMinusProduct(product) {
    const diminishedProduct = products.find(p => product.id === p.product.id);
    if(diminishedProduct) {
      diminishedProduct.quantity--;

      if(diminishedProduct.quantity === 0) {
        handleRemoveProduct(product);
        return;
      }
    }
    // Hack medio feo de React para que se "entere" que un array mutó.
    setProducts(products.slice(0));
  }

  function handleRemoveProduct(product) {
    const toBeDeletedProduct = products.find(p => product.id === p.product.id);
    if(toBeDeletedProduct) {
      // Hack medio feo de React para que se "entere" que un array mutó.

      setProducts(products.filter(p => p.product.id !== product.id));
    }
  }

  function insertProduct(newProduct) {
    setProductsDB([
      ...productsDB,
      {
        id: uuid(),
        ...newProduct,
      },
    ]);
    navigate("/app/ABM");
    alert("Producto agregado");
  }

  function updateProduct(updatedProduct) {
    const toBeUpdated = productsDB.findIndex(p => updatedProduct.id === p.id);
    if(toBeUpdated !== -1) {
      productsDB[toBeUpdated] = updatedProduct;
    }
    // Hack medio feo de React para que se "entere" que un array mutó.
    setProductsDB(productsDB.slice(0));
    navigate("/app/ABM");
    alert("Producto actualizado");
  }

  function deleteProduct(ids) {
    setProductsDB(productsDB.filter(p => !ids.includes(p.id)));
  }

  function handleFinishedBuy() {
    setProducts([])
    navigate("/app/home");
    alert("Compra realizada :D!");
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;

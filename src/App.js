import { useState } from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import ABMlist from 'src/__mocks__/ABMlist';
import ordersList from 'src/__mocks__/ordersList';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

const usuarios = [
  {
    firstName: 'Juan Ignacio',
    lastName: 'Quinteros Parada',
    email: 'juanquinteros@uade.edu.ar',
    password: 'password',
    avatar: 'doge.png',
    isAdmin: true,
    isGuest: false,
    address: {
      address1: 'Rivadavia 123',
      province: 'Buenos Aires',
      city: 'CABA',
      zip: '1999',
      saveAddress: true,
    },
    payment: {
      cardName: 'Juan ignacio Quinteros Parada',
      cardNumber: '1234 5678 9102 3456',
      expDate: '04/24',
      CVV: '999',
    },
  },
  {
    firstName: 'Cliente',
    lastName: 'Stonks',
    email: 'cliente@uade.edu.ar',
    password: 'password',
    avatar: 'stonks.png',
    isAdmin: false,
    isGuest: false,
    address: {
      address1: 'Evergreen 123',
      state: 'Masachusets',
      city: 'Springfield',
      zip: '1999',
      saveAddress: true,
    },
    payment: {
      cardName: 'Cliente Stonks',
      cardNumber: '1234 5678 9102 3456',
      expDate: '04/24',
      CVV: '999',
      address1: 'Evergreen 123',
      state: 'Masachusets',
      city: 'Springfield',
      zip: '1999',
    },
  },
];

const guestUser = {
  firstName: 'Visitante',
  lastName: 'Visitante',
  email: '',
  avatar: '',
  isAdmin: false,
  isGuest: true,
  address: {
    address1: '',
    state: '',
    city: '',
    zip: '',
    saveAddress: false,
  },
  payment: {
    cardName: '',
    cardNumber: '',
    expDate: '',
    CVV: '',
    address1: '',
    state: '',
    city: '',
    zip: '',
  },
}

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(guestUser);
  const [failedLogin, setFailedLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsDB, setProductsDB] = useState(ABMlist.slice(0).sort(() => Math.random() - 0.5));
  const [ordersDB, setOrdersDB] = useState(ordersList.slice(0));
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
    ordersDB: ordersDB,
    insertProduct,
    updateProduct,
    deleteProduct,
  }));

  function checkLogin(loginAttempt) {
    const loggedUser = usuarios.find(u => u.email === loginAttempt.email && u.password === loginAttempt.password)
    if (loggedUser) {
      setUser(loggedUser);
      setFailedLogin(false);
    }
    else {
      setFailedLogin(true);
    }
  }

  function handleLogOut() {
    setUser(guestUser);
    setProducts([]);
    navigate('/app/home');
    alert('Sesión cerrada');
  }

  function handleSignUp(newUser) {
    usuarios.push({
      ...newUser,
      isAdmin: false,
      isGuest: false,
    });
    setProducts([]);
  }

  function handleAccountDetailsSave(data) {
    setUser({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  function handleAddProduct(product, quantity = 1) {
    const addedProduct = products.find(p => product.id === p.product.id);
    if(addedProduct) {
      addedProduct.quantity += quantity ;
    }
    else {
      products.push({
        product,
        quantity: quantity,
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
    navigate("/admin/ABM");
    alert("Producto agregado");
  }

  function updateProduct(updatedProduct) {
    const toBeUpdated = productsDB.findIndex(p => updatedProduct.id === p.id);
    if(toBeUpdated !== -1) {
      productsDB[toBeUpdated] = updatedProduct;
    }
    // Hack medio feo de React para que se "entere" que un array mutó.
    setProductsDB(productsDB.slice(0));
    navigate("/admin/ABM");
    alert("Producto actualizado");
  }

  function deleteProduct(ids) {
    setProductsDB(productsDB.filter(p => !ids.includes(p.id)));
  }

  function handleFinishedBuy(buyOrder) {
    const lastCode = ordersDB[ordersDB.length - 1].cod;
    setOrdersDB([
      ...ordersDB,
      {
        id: uuid(),
        cod: lastCode + 1,
        buyOrder: buyOrder,
        cantidad: buyOrder.products.map(p => p.quantity).reduce((a,b) => (a+b), 0),
        fechacompra: moment().format("DD/MM/YYYY"),
        fechaentrega: moment().add(2, "days").format("DD/MM/YYYY"),
        total: buyOrder.products.map(p => p.quantity * p.product.precio).reduce((a,b) => (a+b), 0),
      }
    ]);
    setProducts([]);
    navigate("/app/home");
    if(!user.isGuest) {
      // Actualizamos los datos de pago del usuario
      // si clickeó en "Guardar tarjeta"...
      const payment = {
        ...user.payment,
      };
      Object.keys(payment).forEach((e) => {
        payment[e] = buyOrder.payment.saveCard ? buyOrder.payment[e] : user.payment[e];
      });
      // Ahora sí, seteamos la nueva data del usuario
      setUser({
        ...user,
        address: {
          ...user.address,
          saveAddress: buyOrder.address.saveAddress,
        },
        payment: {
          ...payment,
        }
      });
    }

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

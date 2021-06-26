import { useState } from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const guestUser = {
  firstName: 'Visitante',
  lastName: 'Visitante',
  email: '',
  avatar: '',
  isAdmin: false,
  isGuest: true,
  address: {
    address1: '',
    province: '',
    city: '',
    zip: '',
    useAddress: false,
  },
  payment: {
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    address1: '',
    province: '',
    city: '',
    zip: '',
  },
}

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(guestUser);
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);
  const routing = useRoutes(routes({
    user: user,
    products: products,
    onSuccessfulLogin: onSuccessfulLogin,
    handleLogOut: handleLogOut,
    handleSignUp: handleSignUp,
    handleAccountDetailsSave: handleAccountDetailsSave,
    handleAddProduct: handleAddProduct,
    handleMinusProduct: handleMinusProduct,
    handleRemoveProduct: handleRemoveProduct,
    handleFinishedBuy: handleFinishedBuy,
    insertProduct,
    updateProduct,
  }));

  function onSuccessfulLogin(user, newToken) {
    setUser(user);
    setToken(token);
    console.log("Token es: ", token);
  }

  function handleLogOut() {
    setUser(guestUser);
    setProducts([]);
    navigate('/app/home');
    alert('Sesión cerrada');
  }

  function handleSignUp(newUser) {
    // Creación de usuario
    // setProducts([]);
  }

  function handleAccountDetailsSave(data) {
    setUser({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  function handleAddProduct(product, quantity = 1) {
    const addedProduct = products.find(p => product._id === p.product._id);
    if(addedProduct) {
      addedProduct.quantity += quantity;
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
    const diminishedProduct = products.find(p => product._id === p.product._id);
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
    const toBeDeletedProduct = products.find(p => product._id === p.product._id);
    if(toBeDeletedProduct) {
      // Hack medio feo de React para que se "entere" que un array mutó.
      setProducts(products.filter(p => p.product._id !== product._id));
    }
  }

  function insertProduct(newProduct) {
    // TODO: Nuevo producto
    navigate("/admin/ABM");
    alert("Producto agregado");
  }

  function updateProduct(updatedProduct) {
    // TODO: Modificar producto
    navigate("/admin/ABM");
    alert("Producto actualizado");
  }

  function handleFinishedBuy(buyOrder) {
    setProducts([]);
    navigate("/app/home");
    if(!user.isGuest) {
      // Actualizamos los datos de pago del usuario
      // si clickeó en "Guardar tarjeta"...
      if(buyOrder.payment.saveCard) {
        console.log("Hay que actualizar los datos de pago del usuario!");
      }
    }
    alert("Compra realizada 😊");
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;

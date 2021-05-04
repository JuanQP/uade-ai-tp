import { useState } from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const usuarios = [
  {
    firstName: 'Juan Ignacio',
    lastName: 'Quinteros Parada',
    email: 'juanquinteros@uade.edu.ar',
    password: 'password',
  },
];

const App = () => {
  const [user, setUser] = useState(null);
  const [failedLogin, setFailedLogin] = useState(false);
  const routing = useRoutes(routes({
    user: user,
    checkLogin: checkLogin,
    handleLogOut: handleLogOut,
    handleSignUp: handleSignUp,
    failedLogin: failedLogin,
    handleAccountDetailsSave: handleAccountDetailsSave,
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
    setUser(null);
  }

  function handleSignUp(newUser) {
    usuarios.push(newUser);
  }

  function handleAccountDetailsSave(data) {
    setUser({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;

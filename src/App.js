import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { UserPage } from "./UserPage";
import Banner from "./components/IconLabelTabs";

const usuarios = [
  {
    firstName: 'Juan Ignacio',
    lastName: 'Quinteros Parada',
    email: 'juanquinteros@uade.edu.ar',
    password: 'password',
  },
];

function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = React.useState(0);

  function checkLogin(loginAttempt) {
    const loggedUser = usuarios.find(u => u.email === loginAttempt.email && u.password === loginAttempt.password)
    if (loggedUser) {
      setUser(loggedUser);
      setTab(0);
    }
  }

  function handleLogOut() {
    setUser(null);
    setTab(0);
  }

  function handleTabChanged(newValue) {
    setTab(newValue);
  }

  return (
    <Container maxWidth="lg">
      <Router>
        {/* Banner con las distintas secciones de la página */}
        <Banner activeTab={tab} user={user} onTabChanged={handleTabChanged}/>

        {/* Todas las páginas */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login onLogin={checkLogin}/>}
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
          <Route path="/user">
            {user ? <UserPage user={user} onLogout={handleLogOut}/> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

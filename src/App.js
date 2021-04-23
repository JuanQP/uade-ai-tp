import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import { Home } from "./Home";
import { About } from "./About";
import { Shop } from "./Shop";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import Banner from "./components/IconLabelTabs";

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
          {/* Banner con las distintas secciones de la página */}
          <Banner/>

          {/* Todas las páginas */}
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/sign-up">
              <SignUp/>
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

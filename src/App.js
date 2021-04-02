import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { Shop } from "./Shop";

function App() {
  return (
    <Router>
      {/* Este es el banner de navegación */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/admin">Administración</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

          </ul>
        </nav>

        {/* Todas las páginas */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

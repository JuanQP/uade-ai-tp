import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import ScrollToTop from './ScrollToTop';

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();

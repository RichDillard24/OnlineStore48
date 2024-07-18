
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import GlobalProvider from './state/globalProvider';
import Cart from './pages/cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/catalog" element={<Catalog></Catalog>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/cart" element={<Cart></Cart>} />
          </Routes>
          
          <Footer></Footer>

        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

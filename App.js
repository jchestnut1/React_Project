import logo from './logo.svg';
import './App.css';
import NavBar from './path/navBar';
import Footer from './path/footer';
import Catalog from './pages/catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <NavBar />
      
      <Catalog />

      <Footer />
    </div>
  );
}

export default App;

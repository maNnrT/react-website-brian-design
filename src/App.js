import './App.css';
import Navbar from './components/navbar/Navbar';
import{
  Routes,
  Route
}
from 'react-router-dom'
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Product from './pages/product/Product';
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;

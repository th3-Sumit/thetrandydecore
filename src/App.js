import logo from './logo.svg';
import './App.css';
import "./output.css";
import "./Assets/Css/style.css";
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrintedCup from './Components/Dashboard/Product/Products/PrintedCup';
import Navbar from './Components/Common/Navbar';
import ProductDetails from './Components/Dashboard/Product/ProductDetails';
function App() {
  return (
    <>
    
    <Navbar/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />  
          <Route path='/product/printed-cup' element={<PrintedCup/>} />
          <Route path='/product/printed-cup/:productName' element={<ProductDetails/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// css
import '../src/styles/App.css'

// Page imports
import Home from '../pages/Home.jsx';
import Menu from '../pages/Menu.jsx';
import Location from '../pages/Location.jsx'


const OrderRedirect = () => {
  window.location.href = "https://www.doordash.com/store/paan-hut-brampton-2855182/";
  return null;
};

function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/location' element={<Location />} />

        <Route path='/order' element={<OrderRedirect />} />

      </Routes>

    </BrowserRouter>
     )
} 






export default App

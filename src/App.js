import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Login from './componentes/Login/Login.jsx';
import Carrito from './componentes/carrito/Carrito';
import Error404 from './componentes/404/Error404';
import { checkout } from "./componentes/checkout/Checkout";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes,  Route, BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailCiontainer/ItemDetailContainer';
import CarritoProvider from './context/CarritoContext';
import { Checkout } from './componentes/checkout/Checkout';



function App() { 

  return (

        <CarritoProvider>
                  <BrowserRouter className="App">
                      <Navbar/>
                      <Routes>
                              <Route path='/' element={<ItemListContainer/>}/>
                              <Route path='/Login' element = {<Login/>} />
                              <Route path='/Carrito' element = {<Carrito/>} />
                              <Route path='*' element = {<Error404/>} />
                              <Route path='/Item/detail/:id' element = {<ItemDetailContainer/>} /> 
                              <Route path='/checkout' element = {<Checkout/>} />

                       </Routes>
                  </BrowserRouter>
        </CarritoProvider>

      );
    
}
 
export default App;  
import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CarritoItem from '../CarritoItem/CarritoItem';
import { Link } from 'react-router-dom';


const Carrito = () => {

  const {carrito, totalPrecio}  = useContext (CarritoContext);


  return carrito.length === 0 ? (
    <div className='textCarrito'>
      <p className='textoCarrito'>No hay productos aun</p>
      <button className='btnCarritoLink'><Link to='/'>Ir a la tienda</Link></button>    
    </div>

  ) : (
    <div>

<div className='cajaPrecio'>
          <p className='precio'>Total:  ${totalPrecio()} </p>
        </div>
        {carrito.map((item) => (
            <CarritoItem
                key={item.id}
                titulo={item.titulo}
                precio={item.precio}
                img={item.img}
            />
        ))};
    </div>
);

}

export default Carrito
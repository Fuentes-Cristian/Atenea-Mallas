import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CarritoItem from '../CarritoItem/CarritoItem';
import { Link } from 'react-router-dom';


const Carrito = () => {

  const {carrito, totalPrecio}  = useContext (CarritoContext);

  const orden = {
    persona : {
        email: "cristian@gmail.com",
        password: "123123"

    },
    items: Carrito,
    total: totalPrecio(),
}


  return carrito.length === 0 ? (
    <div className='textCarrito'>
      <p className='textoCarrito'>No hay productos aun</p>
      <button className='btnCarritoLink'><Link to='/'>Ir a la tienda</Link></button>    
    </div>

  ) : (
    <div>

<div className='cajaPrecio'>
          <div className="btnCompraCaja">
              <p className='precio'>Total:  ${totalPrecio()} </p>
              <button className="btnCompra">Realizar compra</button>
          </div>
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
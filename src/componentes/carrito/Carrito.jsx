import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CarritoItem from '../CarritoItem/CarritoItem';

const Carrito = () => {

  const {carrito}  = useContext (CarritoContext);


  return carrito.length === 0 ? (
    <div>No hay productos aún</div>
  ) : (
    <div>
        {carrito.map((item) => (
            <CarritoItem
                key={item.id}
                titulo={item.titulo}
                precio={item.precio}
                img={item.img}
            />
        ))}
        ;
    </div>
);

}

export default Carrito
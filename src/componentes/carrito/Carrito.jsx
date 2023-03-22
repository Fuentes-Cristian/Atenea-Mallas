import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CarritoItem from '../CarritoItem/CarritoItem';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Carrito = () => {

  const {carrito, totalPrecio}  = useContext (CarritoContext);

  const orden = {
    persona : {
        email: "cristian@gmail.com",
        password: "123123"

    },
    items: carrito,
    total: totalPrecio(),
}

const enviarCompra = () =>{
  //console.log("hola");
  const dataBase = getFirestore()
  const ordenColeccion = collection(dataBase, 'ordenes');
  addDoc(ordenColeccion, orden)
  .then(({id}) =>console.log(id))


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
              <button className="btnCompra" onClick={enviarCompra}><Link to={'/checkout'}>Finalizar compra</Link></button>
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
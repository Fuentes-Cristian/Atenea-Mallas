import React,  { createContext, useState  } from 'react'

export const CarritoContext = createContext('')

const CarritoProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

  const borrarItem = (id) =>{setCarrito(carrito.filter((itemCarrito) => itemCarrito.id !== id))}
  
  const vaciarCarro = () =>{ setCarrito([])}
  
  const enElCarro = (id) => carrito.find(Item => Item.id === id) ? true : false;


 const agregado = (contador, Datos) => {
  if (enElCarro(Datos.id)) {
      setCarrito(
          carrito.map((product) => {
              return product.id === Datos.id
                  ? { ...product, contador: product.contador + contador }
                  : product;
          })
      );
  } else {
      setCarrito([...carrito, { ...Datos, contador }]);   
       } 
    };



 const totalPrecio = () =>{
  return carrito.reduce((prev, act) => prev + act.contador * act.precio, 0)

}


 const totalProductos = () =>{
    carrito.reduce((acumulador, prodActual) => acumulador + prodActual.contador, 0)
 }

  const {guardarCarrito} = (Item) =>{
    setCarrito([...carrito, Item])
  }
  
  return (
    <CarritoContext.Provider value = {{
      carrito, 
      setCarrito, 
      agregado, 
      vaciarCarro, 
      borrarItem,
       totalPrecio, 
       guardarCarrito,
       totalProductos}}>
      {children}
    </CarritoContext.Provider>
  ) 
}

export default CarritoProvider 
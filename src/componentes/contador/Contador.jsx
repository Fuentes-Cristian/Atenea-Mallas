 import {useState} from 'react'
 
const Contador = ({agregadoAlCarrito}) => {

  const stock = 5
  const [contador, setContador]= useState(0);
  const sumar = () =>{
   setContador(contador + 1)
  }

  const restar = () =>{
   setContador(contador - 1)
  }

  const enElCarro = (contador) =>{
   console.log('compraste' +{contador} + 'unidades');
 }

  return (
   <div className='cajaGeneralContador'>
      <button  className='botones' disabled={contador >= stock} onClick = {() => sumar()}>+</button>
      <h1>{contador}</h1>
      <button className='botones' disabled={contador <= 1} onClick = {() => restar ()}>-</button>

      <button className='botonAgregar' disabled={stock <=0}  onClick={() =>{
         enElCarro(contador)
         agregadoAlCarrito (contador)

      } }> agregar </button>
   </div>
  )
} 

export default Contador
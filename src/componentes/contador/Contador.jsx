 import {useState, useEffect} from 'react'
 
const Contador = ({agregadoAlCarrito, inicio, stock}) => {

  const [contador, setContador]= useState(parseInt(inicio));
  const sumar = () =>{
   setContador(contador + 1)
  }

  const restar = () =>{
   setContador(contador - 1)
  }

  useEffect(() =>{
   setContador(parseInt (inicio))
  }, [inicio])

 

  return (
   <div className='cajaGeneralContador'>
      <button  className='botones' disabled={contador >= stock} onClick = {() => sumar()}>+</button>
      <h1>{contador}</h1>
      <button className='botones' disabled={contador <= 1} onClick = {() => restar ()}>-</button>

      <button className='botonAgregar' disabled={stock <=0}  onClick={() =>{
         agregadoAlCarrito (contador)

      } }> agregar </button>
   </div>
  )
} 

export default Contador
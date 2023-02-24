 import {useState} from 'react'
 
const Contador = ({agregadoAlCarrito}) => {


  const [contador, setContador]= useState(1);
  const sumar = () =>setContador( contador + 1)
  const restar = () => setContador( contador - 1)
  //const select = () => setContador(contador === select)

  return (
   <div>
      <button  className='botones' onClick = {() => sumar()}>+</button>
      <h1>{contador}</h1>
      <button className='botones' onClick = {() => restar ()}>-</button>

      <button onClick={() =>{

         agregadoAlCarrito (contador)

      } }> agregar </button>
   </div>
  )
} 

export default Contador
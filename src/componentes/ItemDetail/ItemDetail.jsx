import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"
import { useState } from "react"


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);

  const [enElCarrito, setEnElCarrito] = useState(false);

  const agregadoAlCarrito =  (contador) => {
    agregado (  contador, Datos )

    setEnElCarrito(true)

    console.log('compraste ' + {contador} + ' unidades ');
  }

  return ( 
    <div className="cajaDetailgeneral">
            <h1 className="h1Titulo" style={{textAlign: "center"}}>{Datos.titulo}</h1>
            <h2 className="h1Titulo" style={{textAlign: "center"}}>precio: $ {Datos.precio}</h2>

            <div className="cajaContador">
                  {
                    enElCarrito
                    ? <link to={'/Carrito'}> terminar compra</link>
                    :   <Contador agregadoAlCarrito = {agregadoAlCarrito} inicio = {0} stock = {5} />
                  }
            </div>
     
            <div className="cajaImgDetail">
              <div className="cajaImg">
                  <img className="imgDetail" src={Datos.img} alt="{Datos.titulo}" />
              </div>
            </div>    
    </div>
  )
}

export default ItemDetail
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);

  const agregadoAlCarrito =  (cantidad) => {
    agregado (  cantidad, Datos )


    console.log('compraste ' + {cantidad} + ' unidades ');
  }

  return ( 
    <div className="cajaDetailgeneral">
            <h1 className="h1Titulo" style={{textAlign: "center"}}>{Datos.titulo}</h1>
            <h2 className="h1Titulo" style={{textAlign: "center"}}>precio: $ {Datos.precio}</h2>

            <div className="cajaContador">
                    <Contador agregadoAlCarrito = {agregadoAlCarrito} inicio = {0} stock = {5} />
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
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);

  const agregadoAlCarrito =  (contador) => {
    agregado (  contador, Datos )
  }



  return ( 
    <div className="cajaDetailgeneral">
            <h1 className="h1Titulo" style={{textAlign: "center"}}>{Datos.titulo}</h1>
            <h2 className="h1Titulo" style={{textAlign: "center"}}>precio: $ {Datos.precio}</h2>

            <div className="cajaContador">
                    <Contador agregadoAlCarrito = {agregadoAlCarrito} />
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
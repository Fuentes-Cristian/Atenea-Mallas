import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Contador from "../contador/Contador"
import { Link } from "react-router-dom"
import { useState } from "react"


const ItemDetail = ({Datos } ) => {

  const {agregado} = useContext(CarritoContext);
  
  const [prodCarrito, setProdCarrito] = useState(false)

  const agregadoAlCarrito =  (cantidad) => {
    agregado (  cantidad, Datos )
    setProdCarrito(true)
  }
  

  return ( 
    <div className="cajaDetailgeneral">
            <h1 className="h1Titulo" style={{textAlign: "center"}}>{Datos.titulo}</h1>
            <h2 className="h1Titulo" style={{textAlign: "center"}}>precio: $ {Datos.precio}</h2>

            <div className="cajaContador">
                    {
                      prodCarrito
                      ?
                      <div className="cajaLinkDetalle">
                        <button className='linkCompraDetalle'><Link to={'/carrito'}>terminar compra</Link></button>
                      </div>

                      :<Contador agregadoAlCarrito = {agregadoAlCarrito} inicio = {0} stock = {5} />
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
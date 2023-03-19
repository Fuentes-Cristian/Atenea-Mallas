import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Carrito from "../carrito/Carrito";


const CarritoItem = ({ id, titulo, precio, img , itemCarrito}) => {

    const {borrarItem, totalprecio} = useContext(CarritoContext)
    

   

    return (
        <div className='card, divCarritoItem' style={{ width: "100%" }}>
            <img  src={img} className='imgCarritoItem' alt='...' />
            <div className='card-body, divCarritoItem2'>
                <h5>{titulo}</h5>
                <p>Precio: ${precio}</p>
                <button className="btnEliminar" onClick={() => borrarItem(itemCarrito.id)} >Eliminar</button>
            </div>
        </div>
    );
};

export default CarritoItem;
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";


const CarritoItem = ({ id, titulo, precio, img , itemCarrito}) => {

    const {borrarItem} = useContext(CarritoContext)

    return (
        <div className='card, divCarritoItem' style={{ width: "100%" }}>
            <img  src={img} className='imgCarritoItem' alt='...' />
            <div className='card-body, divCarritoItem2'>
                <h5>{titulo}</h5>
                <p>Precio: ${precio}</p>
                <button onClick={() => borrarItem(itemCarrito.id)} >Eliminar</button>
            </div>
        </div>
    );
};

export default CarritoItem;
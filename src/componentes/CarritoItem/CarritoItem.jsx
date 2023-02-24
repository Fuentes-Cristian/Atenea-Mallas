const CarritoItem = ({ id, titulo, precio, img }) => {

    return (
        <div className='card, divCarritoItem' style={{ width: "100%" }}>
            <img  src={img} className='imgCarritoItem' alt='...' />
            <div className='card-body, divCarritoItem2'>
                <h5>{titulo}</h5>
                <p>Precio: ${precio}</p>
            </div>
        </div>
    );
};

export default CarritoItem;
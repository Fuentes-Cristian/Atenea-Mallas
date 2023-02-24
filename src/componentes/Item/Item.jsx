import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {

  const {titulo,precio, btnSubmit, img,id} = producto;

  return (
    <div>
         <div className="card" style = {{width: "18rem", margin:"2rem"}}>
                 <img src={img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{titulo}</h5>
                   <p className="card-text">$ {precio}</p>
                   <Link  to = {`/Item/detail/${id}`} className='btnSubmit' type='submit'>{btnSubmit}</Link>
                 </div>  
         </div>
</div>
  )
}

export default Item
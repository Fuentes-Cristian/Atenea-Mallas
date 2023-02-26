import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'


const Navbar = () => {

  const { carrito } = useContext(CarritoContext);


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <div className='cajaLogo'>
                <div className='logo'>
                     <a className="navbar-brand" href=""><img className='logoAtenea' src='../img/logo.png' /></a>
                </div>
                 
                 <button className="navbar-toggler botonBurger" type="button" data-bs-toggle="collapse"             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
                        <span className="navbar-toggler-icon"></span>.
                 </button>

              </div>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    <form className="d-flex">

                      <div className='cajaBotonLogin'>
                        
                          <button className='botonLogin' type='submit'><NavLink to="/Login" style={{color: "#373737"}}>Login</NavLink></button>

                          <div className='cajaBotonCarrito'>

                              <button className='botonCarrito'><NavLink to="/Carrito">{carrito.length}<img src="https://e7.pngegg.com/pngimages/603/776/png-clipart-shopping-cart-shopping-cart.png" alt="" style={{width: "65px"}} /></NavLink></button>
                             
                          </div>

                      </div>

                    </form>

              </div>

              
            </div>
      </nav>
    </div>
  )
}

export default Navbar
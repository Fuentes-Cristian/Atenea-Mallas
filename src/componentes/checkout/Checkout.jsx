import React from 'react'

export const Checkout = () => {
    
  return (
    <div className='checkout'>
        <div className='formCheck'>
            <div>
                <input type="text" name="" id="nombre" placeholder='Nombre y Apellido' />
            </div>
            <div>
                <input type="text" placeholder='E-mail' />
            </div>
            <div>
                <input type="text"  placeholder='Clave'/>
            </div>

            <div>
                <button type='submit' id='enviar'>Finalizar</button>
            </div>
        </div>
    </div>
  )
}

import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState } from 'react';

const login = (props) => {

  return (
    <form className='form'>

      <div className='cajaGeneral1'>

      <h2 className='tituloForm'>¿Deseas iniciar sesion?</h2>
              <div className='cajaInput1'>
                <input className='input2' type="text" placeholder='Usuraio' />
              </div>

              <div className='cajaInput1'>
                <input className='input2' type="password" placeholder='Clave' />
              </div>

              <div className='btnIniciar'>
                <button className='btnSubmit' type='submit'>Iniciar</button>
              </div>

              <div>
                <p>¿Aun no estas registrado?<a href=''>Registrate </a></p>
              </div>
      </div>

    </form>
  )
}

export default login
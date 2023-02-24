import React from 'react'

const Select = (options, onSelect) => {
    const [] = document.getElementById("1")
  return (
    <select onChange={(evt) => onSelect(evt.target.value)}>
        {options.map(o =><option value={o.value} >seleccionar </option>)}
    </select>
  )
}

export default Select
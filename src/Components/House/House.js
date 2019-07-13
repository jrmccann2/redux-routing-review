import React from 'react'

export default function House (props) {
  const { house: { id, name, address, city, state, zip, image, mortgage, rent }, deleteHouse } = props
  return (
    <div>
      <h1>{name}</h1>
      <h4>{address}</h4>
      <h4>{city}</h4>
      <h4>{state}</h4>
      <h4>{zip}</h4>
      <img src={image} alt='' />
      <h4>{mortgage}</h4>
      <h4>{rent}</h4>
      <button onClick={() => deleteHouse(id)}>Delete</button>
    </div>
  )
}
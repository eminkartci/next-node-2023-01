import React from 'react'

function Urun({id,isim,fiyat,gorsel="AMEAN Logo Golgeli.png"}) {
  return (
    <div>

      <h4> {isim}</h4>

      <p> Fiyat: {fiyat}</p>

      <img width="200px" src={gorsel}/>


    </div>
  )
}

export default Urun
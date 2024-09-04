import React from 'react'
import turkeyIcon from '/turkey.png'

// Sol üst köşedeki şehir seçme butonuna ait komponent
const SelectCity = ({toggleModal}) => {
  return (
    <>
        <button onClick={toggleModal} className='openMapBtn'><img src={turkeyIcon}/></button>
    </>
  )
}

export default SelectCity

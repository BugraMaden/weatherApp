import React from 'react'
import "./CityCelcius.css"
// Celcius cinsinden dereceyi ekranda gösterir ve şehrin adını ekrana yazar.

const CityCelcius = ({refreshInfo,weatherData}) => {
  return (
    <div className={`cityAndCelcius ${refreshInfo ? 'fade-in' : ''}`}>
            <div>
            <h1>{weatherData&&weatherData.current.temp_c}°C</h1>
            <h1 style={{color:"white"}}>{weatherData&&weatherData.location.name}</h1> 
            </div>
    </div>
  )
}

export default CityCelcius

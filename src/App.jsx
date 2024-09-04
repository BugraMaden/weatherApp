import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import TurkeyMap from './components/TurkeyMap/Turkeymap.jsx';
import CityCelcius from './components/CityCelcius/CityCelcius.jsx';
import SelectCity from './components/SelectCity/SelectCity.jsx';
import VideoElement from './components/VideoElement/VideoElement.jsx';

//Your api key kısmına "weatherapi.com" sitesinden alacağınız size özel api anahtarını yazarak bağlantıyı gerçekleştirebilirsiniz.

function App() {

  const[weatherData,setWeatherData]=useState("");
  const[city,setCity]=useState("istanbul");
  const[isModalOpen, setIsModalOpen] = useState(false);
  const[refreshInfo,setRefreshInfo]=useState(false);
  const[haveVideo,setHaveVideo]=useState(false);


  useEffect(()=>{
    const fetchWeather=async()=>{
      try {
      const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`)
      const result = await response.json();
      setWeatherData(result);
      } catch (error) {
      console.log(error);
      }
    }
    if(citiesWithVideo.includes(city)){
      setHaveVideo(true)
    }else{
        setHaveVideo(false);
    }
  
    fetchWeather();
  },[city])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const citiesWithVideo=["ankara","izmir","adana","istanbul","bursa","antalya"];


  return (
    <>
      <div>
      <VideoElement city={city} haveVideo={haveVideo} refreshInfo={refreshInfo}/>
       <div style={{position:"relative"}}>
          <SelectCity city={city} toggleModal={toggleModal}/>
          <CityCelcius weatherData={weatherData}/>
          {isModalOpen &&
          <TurkeyMap setRefreshInfo={setRefreshInfo} setCity={setCity} setIsModalOpen={setIsModalOpen}/>}
        </div>
      </div>
    </>
  )
}

export default App

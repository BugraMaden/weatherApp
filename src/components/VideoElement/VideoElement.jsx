import React, { useEffect } from 'react'

//Şehir adı ile eklenmiş video veya resimler arka planda yerini alacaktır.Bu komponent gerekli kontrol işlemlerini sağlar.
//Eklenecek öğe eğer video ise App.jsx içerisindeki dizi içerisinde şehir ismi adlandırılmalıdır.

const VideoElement = ({refreshInfo,haveVideo,city}) => {
 
  return (
    <>
      {haveVideo?
      <video loop muted playsInline src={`/${city}.mp4`} className={`${refreshInfo ? 'fade-in-short' : ''}`} autoPlay style={{position:"absolute", border:"none",boxSizing:"border-box", width:"1364px"}}></video>
      :<img src={`/${city}.jpg`} style={{width:"100%",position:"absolute",height:"100%"}} className={`${refreshInfo ? 'fade-in-short' : ''}`}/>}
    </>
  )
}

export default VideoElement

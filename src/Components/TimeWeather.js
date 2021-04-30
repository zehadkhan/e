import React from 'react'
import '../App.css';
import CachedIcon from '@material-ui/icons/Cached';
import CloudIcon from '@material-ui/icons/Cloud';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
export default function TimeWeather() {

   // const weatherNews =()=>{

   //    let weatherMin = 25;
   //    let weatherMax = 26;
   //    let weatherextream = 56; 
   //    let weatherNews = weatherMin < 25 ? ' Foggy': weatherMin > weatherMax ? 'Sunny': weatherextream > 33 && weatherextream < 55 ? 'extream':'no';
   //    console.log(weatherNews);
   //}
   return (
     
    <>
         <div id="shows" />
            <div className="times">
               <div className="weather">
                {/* <a className="weatherCel" href="http://zehadkhan.com"> */}
                  {/* <a className="sunnymode"> <em><WbSunnyIcon /></em></a> */}
                  <a className="Rainymode"> <em><CloudIcon /></em></a>
                  <i className="fas fa-cloud-sun-rain" /> <span>Sunny</span>
                {/* </a> */}
               <div className="weather_sec">
               <p>00°C </p> 
               {/* <a href="http://zehadkhan.com" className="weather_re">  */}

               <CachedIcon/> <i id="loading" className="fas fa-redo" /><span />
               {/* </a> */}
               </div>
            </div>
         </div>
    </>
   )
}

// export default Time_Weather

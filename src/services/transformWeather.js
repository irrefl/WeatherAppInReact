import {
    SUN,
 } from './../constans/Weathers';

  const  getWeatherState = weather_data =>  SUN;

const getTemp = kelvin =>{
   
   return 0;
}


  const transformWeather = weather_data => {
      const {humidity, temp} = weather_data.main;
      const {speed} = weather_data.wind;
      const weatherState = getWeatherState(weather_data);

      const data = {
         humidity,
         temperature: temp,
         weatherState,
         wind:`${speed} m/s`
      }

      return data;
   }
export default transformWeather;



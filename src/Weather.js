/* 
Author(s):            Tyler Paddock
Last Date Modified:   2020/06/27
History:
                      2020/06/27 - Tyler Paddock - 
*/



import React, { Component } from 'react';

export const PaddockianWeather = () => {

  const weatherAPI = {
    key: "13063f39c6f45fff8be8df807e562beb",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  function getWeatherByCoords(lat, lon) {
    //Coordinates are provided and the API is called
    console.log(weatherAPI.base + "/weather?lat=" + lat + "&lon=" + lon + "&appid=" + weatherAPI.key);
    //fetch(weatherAPI.base + "/weather?lat=" + lat + "&lon=" + lon + "&appid=" + weatherAPI.key)
    //.then(result => result.json())
    //.then((data) => {
    //  this.setState
    //})

  }//End of function getWeatherByCoords

  function getWeatherByCity() {
    //City is provided and the API is called
    
  }//End of function getWeatherByCity

  return (
    //Displaying results go here
    <div>
      <h2>Current weather conditions in </h2>
    </div>
  )
}

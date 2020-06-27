/* 
Author(s):            Tyler Paddock
Last Date Modified:   2020/06/27
History:
                      2020/06/27 - Tyler Paddock - This si the base of the project, used to call into every other supporting file as needed. This is the top level.
*/
import React from 'react';
import './App.css';

import { Disposition } from './Disposition.js'
import { PaddockianWeather } from './Weather.js'


const weatherAPI = {
  key: "13063f39c6f45fff8be8df807e562beb",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {

  //Coordinates are stored here
  state = {
    coords:{
      latitude:null,
      longitude:null
    }
  }

  componentDidMount() {
    // Gather the location for an initial display of weather data
    //Assume that the user wants to look at the weather in their area first.
    console.log("Component has mounted");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((currentLocation) =>{

          var newCoords = {
            latitude:currentLocation.coords.latitude,
            longitude:currentLocation.coords.longitude
          }
          this.setState({coords: newCoords});

        //Perform an API call based on coordinate location
        console.log(weatherAPI.base + "weather?lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude + "&appid=" + weatherAPI.key);
        //PaddockianWeather.getWeatherByCoords(this.state.coords.latitude, this.state.coords.longitude);

        fetch(weatherAPI.base + "weather?lat=" + this.state.coords.latitude + "&lon=" + this.state.coords.longitude + "&appid=" + weatherAPI.key)
       .then(result => result.json())
       .then(data => console.log(data));
      })
      }
    }


  render () {
    return(
    <div className="App">
      <main>
        <Disposition />

        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Location (City,Country)"/>
        </div>
      </main>
    </div>
    )
  }

}

export default App;

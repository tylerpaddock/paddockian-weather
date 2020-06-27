import React from 'react';


/* TODO replace this with a proper DFS */
const api = {
  key: "13063f39c6f45fff8be8df807e562beb", /* Demo applciation key provided by openweathermap.org */
  base: "https://apiopenweather.org/data/2.5/"
}

function App() {

  ComponentDidMount(){
    console.log("Mounted");
  }

  return (
    <div className="App">
      <main>
        <Disposition />

        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Location (City,Country)"/>
        </div>
      </main>
    </div>
  );
}

export default App;

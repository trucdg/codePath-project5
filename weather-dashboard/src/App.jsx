import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import ForecastList from "./components/ForecastList";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [zipCode, setZipCode] = useState("10036"); // default to New York city zipCode
  const [currentWeatherList, setCurrentWeatherList] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "",
    timeZone: "",
    temp: "",
    clouds: "",
    weatherDes: "",
  });

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&key=${API_KEY}`
      );

      const json = await response.json();
      console.log(json);
      setCurrentWeatherList(json);
      setWeatherInfo({
        cityName: json.data[0]["city_name"],
        timeZone: json.data[0]["timezone"],
        temp: json.data[0]["temp"],
        clouds: json.data[0]["clouds"],
        weatherDes: json.data[0]["weather"].description,
      });
    };

    fetchCurrentWeatherData().catch(console.error);
  }, [zipCode]);

  return (
    <div className="whole-page">
      <div className="header">
        <h4>
          <i className="fa-solid fa-cloud-sun-rain"></i> The Weather App
        </h4>
      </div>
      <div className="main-page">
        <h2> Welcome to the Weather App!</h2>
        <CardList
          cityName={weatherInfo.cityName}
          timeZone={weatherInfo.timeZone}
          temp={weatherInfo.temp}
          weatherDes={weatherInfo.weatherDes}
          clouds={weatherInfo.clouds}
        />
        <ForecastList />
      </div>
    </div>
  );
}

export default App;

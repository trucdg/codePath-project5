import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import ForecastList from "./components/ForecastList";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [zipCode, setZipCode] = useState("10036"); // default to New York city zipCode
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "",
    timeZone: "",
    temp: "",
    clouds: "",
    weatherDes: "",
  });

  const [forecastList, setForecastList] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipCode}&key=${API_KEY}`
      );
      const json = await response.json();
      setForecastList(json);
    };
    fetchForecastData().catch(console.error);
  }, [zipCode]);

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&key=${API_KEY}`
      );

      const json = await response.json();
      console.log(json);
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

  const changedZipCodeHandler = (event) => {
    if (event.target.value == "") {
      setZipCode("10036");
    }
    setZipCode(event.target.value);
  };

  return (
    <div className="whole-page">
      <div className="header">
        <h4>
          <i className="fa-solid fa-cloud-sun-rain"></i> The Weather App
        </h4>
        <label>Enter zipCode</label>
        <br />
        <input
          type="text"
          placeholder="zipcode ..."
          onChange={changedZipCodeHandler}
        />
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
        <ForecastList list={forecastList} />
      </div>
    </div>
  );
}

export default App;

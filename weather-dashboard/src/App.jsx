import { useState } from "react";
import CardList from "./components/CardList";
import ForecastList from "./components/ForecastList";
import "./App.css";

function App() {
  return (
    <div className="whole-page">
      <div className="header">
        <h4>
          <i className="fa-solid fa-cloud-sun-rain"></i> The Weather App
        </h4>
      </div>
      <div className="main-page">
        <h2> Welcome to the Weather App!</h2>
        <CardList />
        <ForecastList />
      </div>
    </div>
  );
}

export default App;

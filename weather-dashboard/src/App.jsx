import { useState } from "react";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h2>
          <i className="fa-solid fa-cloud-sun-rain"></i> The Weather App
        </h2>
      </header>
      <div className="main-page">
        <h1> Welcome to the Weather App!</h1>
        <CardList />
      </div>
    </div>
  );
}

export default App;

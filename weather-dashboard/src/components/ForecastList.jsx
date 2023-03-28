import React from "react";
import TableRow from "./TableRow";

const ForecastList = ({ list }) => {
  console.log(list);
  let headings = ["Date", "Min Temp", "Max Temp", "Avg Clouds", "Weather Des"];
  let body = [];

  if (list != null) {
    for (let i = 0; i < 7; i++) {
      body.push([
        list.data[i]["valid_date"],
        list.data[i]["min_temp"],
        list.data[i]["max_temp"],
        list.data[i]["clouds_mid"],
        [list.data[i].weather.description],
      ]);
    }
    console.log(body);
  }

  return (
    <div className="forecast-cont">
      <h2>Weather Forecast for the next 7 days</h2>
      <table>
        <thead>
          <tr>
            {headings.map((head, headID) => (
              <th key={headID}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow key={rowID} rowContent={rowContent} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastList;

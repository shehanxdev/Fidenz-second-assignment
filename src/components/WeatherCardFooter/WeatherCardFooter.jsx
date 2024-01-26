import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function WeatherCardFooter(weatherData) {
  const customBorderStyles = {
    border: "1px solid #383B47",
  };
  return (
    <div>
      <div className="d-flex justify-content-center gap-3 p-4 bg-dark">
        <div className="d-flex flex-column">
          <span>Pressure: 1018hPa</span>
          <span>Humidity: 78%</span>
          <span>Visibility: 8.0km</span>
        </div>
        <div style={customBorderStyles}></div>
        <div className="d-flex flex-column justify-content-center">
          <FontAwesomeIcon icon={faLocationArrow} style={{ color: "white" }} />
          <span>4.0m/s 120 Degree</span>
        </div>
        <div style={customBorderStyles}></div>
        <div className="d-flex flex-column justify-content-center">
          <span>Sunrise: 6:05am</span>
          <span>Sunset: 6:05am</span>
        </div>
      </div>
    </div>
  );
}

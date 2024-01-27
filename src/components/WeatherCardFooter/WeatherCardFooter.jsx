import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CARD_COLORS } from "../../constants";

export function WeatherCardFooter({ weatherData }) {
  const customBorderStyles = {
    border: `1px solid ${CARD_COLORS.grey}`,
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center gap-3 p-4 "
        style={{ backgroundColor: "#383B47" }}
      >
        <div className="d-flex flex-column">
          <span>{`Pressure: ${weatherData.pressure}hPa`}</span>
          <span>{`Humidity: ${weatherData.humidity}%`}</span>
          <span>{`Visibility: ${(weatherData.visibility / 1000).toFixed(
            0
          )}km`}</span>
        </div>
        <div style={customBorderStyles}></div>
        <div className="d-flex flex-column justify-content-center gap-2">
          <FontAwesomeIcon
            icon={faLocationArrow}
            size="2x"
            style={{ color: "white" }}
          />
          <span>{`${weatherData.speed.toFixed(1)}m/s ${
            weatherData.deg
          } Degree`}</span>
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

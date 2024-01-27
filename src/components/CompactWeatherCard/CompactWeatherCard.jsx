import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utilities";
import { CARD_COLORS } from "../../constants";
import { CARDBACKGROUND } from "../../images";
import { WeatherCardFooter } from "../WeatherCardFooter";

export function CompactWeatherCard({ weatherData, bgColor }) {
  const customCardStyles = {
    backgroundColor: bgColor,
    backgroundImage: `url(${CARDBACKGROUND})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
  };
  const navigateToExpandedCardView = () => {
    alert("hello");
  };

  return (
    <div
      className=" text-light d-flex flex-column rounded-3 overflow-hidden"
      onClick={navigateToExpandedCardView}
    >
      <div className="p-2" style={customCardStyles}>
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon icon={faClose} style={{ color: "white" }} />
        </div>
        <div className="m-1 m-md-4 px-1 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
              <span className="fs-3">
                {" "}
                {`${weatherData.name}, ${weatherData.country}`}{" "}
              </span>
              <span className="align-self-center">{formatDate()}</span>
            </div>
            <div className="align-self-center fs-5">
              {weatherData.description}
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between ">
            <span className="d-flex flex-column display-1 ">
              <strong>{weatherData.temp.toFixed(0)}&deg;c</strong>
            </span>
            <div>
              <span className="d-block">
                Temp Min: {weatherData.temp_min}&deg;c
              </span>
              <span className="d-block">
                Temp Max: {weatherData.temp_max}&deg;c
              </span>
            </div>
          </div>
        </div>
      </div>

      <WeatherCardFooter weatherData={weatherData} />
    </div>
  );
}

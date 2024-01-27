import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utilities";
import { CARD_COLORS } from "../../constants";
import { CARDBACKGROUND } from "../../images";
import { WeatherCardFooter } from "../WeatherCardFooter";

import { Navigate, useNavigate } from "react-router-dom";

export function ExpandedWeatherCard({ weatherData, bgColor }) {
  const navigate = useNavigate();
  const customCardStyles = {
    backgroundColor: bgColor,
    backgroundImage: `url(${CARDBACKGROUND})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
  };
  const customBorderStyles = {
    border: `1px solid ${CARD_COLORS.white}`,
  };

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <div className=" text-light d-flex flex-column rounded-3 overflow-hidden">
      <div className="p-3" style={customCardStyles}>
        <div className="d-flex justify-content-start">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "white" }}
            onClick={() => handleBackNavigation()}
          />
        </div>
        <div className="d-flex flex-column align-items-center my-4">
          <span className="fs-3">
            {" "}
            {`${weatherData.name}, ${weatherData.country}`}{" "}
          </span>
          <span>{formatDate()}</span>
        </div>
        <div className="m-5 px-1 d-flex flex-column-reverse flex-lg-row justify-content-center gap-5">
          <div className="d-flex flex-column justify-content-center align-items-center fs-5">
            <img
              className="w-50"
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt="weather-icon"
            />
            {weatherData.description}
          </div>
          <div style={customBorderStyles}></div>
          <div className="d-flex flex-column justify-content-between align-items-center">
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

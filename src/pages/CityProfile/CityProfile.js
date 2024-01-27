import React from "react";
import { useLocation } from "react-router-dom";
import { CompactWeatherCard, ExpandedWeatherCard } from "../../components";

export function CityProfile() {
  const { state } = useLocation();
  const weatherData = state.weatherData;
  const bgColor = state.bgColor;

  return (
    <div className="w-75 w-md-50 m-auto my-5">
      <ExpandedWeatherCard weatherData={weatherData} bgColor={bgColor} />
    </div>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utilities";
import { COLORS } from "../../constants";
import { CARDBACKGROUND } from "../../images";
import { WeatherCardFooter } from "../WeatherCardFooter";

const sampleData = {
  city: "Colombo, LK",
  date: Date.now(),
  status: "Cloudy",
  temp: 27,
  min: 20,
  max: 30,
  pressure: 1018,
  humidity: 78,
  visibility: 10,
  windSpeed: 4,
  windDir: 120,
  sunrise: 6,
  sunset: 6,
};
export function CompactWeatherCard(weatherData) {
  const customCardStyles = {
    backgroundColor: COLORS[0],
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
      className=" text-light d-flex flex-column rounded"
      onClick={navigateToExpandedCardView}
    >
      <div className="p-2" style={customCardStyles}>
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon icon={faClose} style={{ color: "white" }} />
        </div>
        <div className="my-4 mx-5 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
              <span className="h3">{sampleData.city}</span>
              <span className="align-self-center">{formatDate()}</span>
            </div>
            <div className="align-self-center">{sampleData.status}</div>
          </div>
          <div className="d-flex flex-column justify-content-between gap-3">
            <span className="display-1 align-self-center">
              <strong>{sampleData.temp}&deg;c</strong>
            </span>
            <div>
              <span className="d-block">Temp Min: {sampleData.min}&deg;c</span>
              <span className="d-block">Temp Max: {sampleData.max}&deg;c</span>
            </div>
          </div>
        </div>
      </div>

      <WeatherCardFooter weatherData={sampleData} />
    </div>
  );
}

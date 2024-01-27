import { useEffect, useState } from "react";
import { CompactWeatherCard, SearchBar } from "../../components";
import { HttpService, localStorageService } from "../../services";
import cityData from "./cities.json";
import { extractCityCodes, extractWeatherData } from "../../utilities";
import { CARD_COLORS_ARRAY } from "../../constants";

export const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const { List: cityList } = cityData;
  const cityIds = extractCityCodes(cityList);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cachedData = localStorageService.getCachedData();

      if (cachedData) {
        const extracteddata = extractWeatherData(cachedData);
        setWeatherData(extracteddata);
      } else {
        try {
          const data = await HttpService.getWeatherDataForCities(cityIds);
          const extracteddata = extractWeatherData(data.list);
          setWeatherData(extracteddata);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, []);

  const renderWeatherTiles = () => {
    const numRows = Math.ceil(weatherData.length / 2);
    let tempColorIndex = 0;

    return Array.from({ length: numRows }, (_, rowIndex) => {
      return (
        <div key={rowIndex} className="d-xl-flex gap-5 ">
          {weatherData
            .slice(rowIndex * 2, rowIndex * 2 + 2)
            .map((cityWeatherData, colIndex) => {
              const selectedColor =
                CARD_COLORS_ARRAY[tempColorIndex % CARD_COLORS_ARRAY.length];
              tempColorIndex++;
              return (
                //* Note: tempColorIndex is the same as the cities position on citie list.
                <div key={tempColorIndex} className="my-4">
                  <CompactWeatherCard
                    weatherData={cityWeatherData}
                    bgColor={selectedColor}
                  />
                </div>
              );
            })}
        </div>
      );
    });
  };

  if (weatherData) {
    return (
      <div className="my-4 my-md-5">
        <SearchBar />
        <div className="d-flex justify-content-center px-5 d-md-block w-100 my-md-5">
          <div className="my-5 m-md-auto" style={{ width: "fit-content" }}>
            {renderWeatherTiles()}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

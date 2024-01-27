import { useEffect, useState } from "react";
import { CompactWeatherCard } from "../../components";
import { HttpService, localStorageService } from "../../services";
import cityData from "./cities.json";
import { extractCityCodes } from "../../utilities";
export const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const { List: cityList } = cityData;
  const cityIds = extractCityCodes(cityList);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cachedData = localStorageService.getCachedData();

      if (cachedData) {
        setWeatherData(cachedData);
      } else {
        try {
          const data = await HttpService.getWeatherDataForCities(cityIds);
          setWeatherData(data.list);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, []);

  if (weatherData) {
    return (
      <div>
        <CompactWeatherCard />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

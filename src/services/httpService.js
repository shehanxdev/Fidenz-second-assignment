// HttpService.js

import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const HttpService = {
  getWeatherDataForCities: async (cityIds) => {
    console.log(API_KEY);
    try {
      const response = await axios.get(`${BASE_URL}/group`, {
        params: {
          id: cityIds.join(","),
          units: "metric",
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

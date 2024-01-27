// HttpService.js

import axios from "axios";
import { localStorageService } from "./localStorageService";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export class HttpService {
  static async getWeatherDataForCities(cityIds) {
    try {
      const response = await axios.get(`${BASE_URL}/group`, {
        params: {
          id: cityIds.join(","),
          units: "metric",
          appid: API_KEY,
        },
      });

      localStorageService.storeCachedData(response.data.list);

      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
}

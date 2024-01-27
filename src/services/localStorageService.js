import { LOCAL_STORAGE_KEY, expirationTime } from "../constants";
export class localStorageService {
  static storeCachedData(weatherDataList) {
    const timestamp = new Date().getTime();
    const cachedData = { timestamp, weatherDataList };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cachedData));
  }

  static getCachedData() {
    const cachedDataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cachedDataString) {
      const cachedData = JSON.parse(cachedDataString);
      const currentTime = new Date().getTime();

      if (currentTime - cachedData.timestamp < expirationTime) {
        return cachedData.weatherDataList;
      }
    }

    return null;
  }
}

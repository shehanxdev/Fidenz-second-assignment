export function formatDate() {
  const currentDate = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  let period = "am";

  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  }

  hours = hours.toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes} ${period}`;
  const data = currentTime + ", " + monthName + " " + date;
  return data;
}

export function extractCityCodes(cityArray) {
  const cityIds = [];

  for (const city of cityArray) {
    cityIds.push(city.CityCode);
  }

  return cityIds;
}

export function extractWeatherData(weatherDataArray) {
  const extractedData = weatherDataArray.map((data) => {
    const {
      coord,
      sys: { sunrise, sunset, country },
      weather: [{ description, icon }],
      main: { temp, pressure, humidity, temp_min, temp_max },
      visibility,
      wind: { speed, deg },
      clouds: { all },
      dt,
      id,
      name,
    } = data;

    return {
      coord,
      sunrise,
      sunset,
      country,
      description,
      icon,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      visibility,
      speed,
      deg,
      all,
      dt,
      id,
      name,
    };
  });

  return extractedData;
}
//*NOTE: this fucntion has not yet been used
// export function extractTime(milliseconds) {
//   const date = new Date(milliseconds);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const ampm = hours >= 12 ? "pm" : "am";
//   const formattedHours = hours % 12 || 12;

//   return `${formattedHours}:${String(minutes).padStart(2, "0")} ${ampm}`;
// }

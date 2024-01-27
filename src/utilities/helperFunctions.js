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

import { CompactWeatherCard } from "../../components";
import { HttpService } from "../../services";
export const Home = () => {
  try {
    const res = HttpService.getWeatherDataForCities(["1248991"]);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      <CompactWeatherCard />
    </div>
  );
};

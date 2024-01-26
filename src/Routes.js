import {
  BrowserRouter as Router,
  Routes as BaseRoutes,
  Route,
} from "react-router-dom";
import { Home } from "./pages";
const Routes = () => (
  <Router>
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/city/:cityCode" element={<WeatherData />} /> */}
    </BaseRoutes>
  </Router>
);

export default Routes;

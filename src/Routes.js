import {
  BrowserRouter as Router,
  Routes as BaseRoutes,
  Route,
} from "react-router-dom";
import { CityProfile, Home } from "./pages";
const Routes = () => (
  <Router>
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:cityCode" element={<CityProfile />} />
    </BaseRoutes>
  </Router>
);

export default Routes;

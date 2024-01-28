import React from "react";
import renderer from "react-test-renderer";
import { WeatherCardFooter } from "../WeatherCardFooter";
import { mockWeatherData } from "../../../mocks";
describe("WeatherCardFooter component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<WeatherCardFooter weatherData={mockWeatherData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

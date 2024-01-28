import React from "react";
import renderer from "react-test-renderer";
import { mockWeatherData } from "../../../mocks";
import { ExpandedWeatherCard } from "./../ExpandedWeatherCard";
import { CARD_COLORS_ARRAY } from "../../../constants";
import { MemoryRouter } from "react-router-dom";

describe("WeatherCardFooter component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ExpandedWeatherCard
            weatherData={mockWeatherData}
            bgColor={CARD_COLORS_ARRAY[0]}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

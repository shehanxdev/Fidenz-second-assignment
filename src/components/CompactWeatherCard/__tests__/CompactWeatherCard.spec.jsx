import React from "react";
import renderer from "react-test-renderer";
import { mockWeatherData } from "../../../mocks";
import { CARD_COLORS_ARRAY } from "../../../constants";
import { MemoryRouter } from "react-router-dom";
import { CompactWeatherCard } from "./../CompactWeatherCard";

describe("WeatherCardFooter component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <CompactWeatherCard
            weatherData={mockWeatherData}
            bgColor={CARD_COLORS_ARRAY[0]}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

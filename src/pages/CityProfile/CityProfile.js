import React from "react";
import { useLocation } from "react-router-dom";

export function CityProfile() {
  const location = useLocation();
  console.log(location);
  return <div>CityProfile</div>;
}

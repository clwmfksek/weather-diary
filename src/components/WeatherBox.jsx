import React from "react";

function WeatherBox({ weather }) {
  return (
    <div>
      <p>현재 날씨: {weather}</p>
    </div>
  );
}

export default WeatherBox;

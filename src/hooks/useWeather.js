import { useEffect, useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const apiKey = "YOUR_API_KEY";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data.weather[0].main + " / " + data.main.temp + "°C");
    });
  }, []);

  return weather;
}

export default useWeather;

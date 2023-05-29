import { useState } from "react";
import { toFarenheit } from "./utils/temp";

const weatherImages = {
  "01d": "/images/weather/clear-sky.png",
  "01n": "/images/weather/Nclear-sky.png",
  "02d": "/images/weather/few-clouds.png",
  "02n": "/images/weather/Nfew-clouds.png",
  "03d": "/images/weather/scattered-clouds.png",
  "03n": "/images/weather/Nscattered-clouds.png",
  "04d": "/images/weather/broken-clouds.png",
  "04n": "/images/weather/Nbroken-clouds.png",
  "09d": "/images/weather/shower-rain.png",
  "09n": "/images/weather/Nshower-rain.png",
  "10d": "/images/weather/raining.png",
  "10n": "/images/weather/Nraining.png",
  "11d" : "/images/weather/thunderstorm.png",
  "11n" : "/images/weather/Nthunderstorm.png",
  "13d" : "/images/weather/snow.png",
  "13n" : "/images/weather/snow.png",
  "50d" : "/images/weather/mist.png",
  "50n" : "/images/weather/mist.png"
};

const Weather = ({ weatherInfo }) => {
  console.log(weatherInfo);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangeTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="text-center grid gap-6">
      <h2 className="font-bold text-2xl">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
        {/* Seccion arriba */}

        <article className="bg-gray/70 p-2 rounded-3xl grid grid-cols-2 items-center">
          <h3 className="col-span-2 capitalize">
            {weatherInfo?.weather[0].description}
          </h3>

          <span className="text-4xl">
            {isCelsius
              ? `${weatherInfo?.main.temp.toFixed(1)}°C`
              : toFarenheit(weatherInfo?.main.temp)}
          </span>

          <div className="w-44 h-48 p-2">
            <img
              src={weatherImages[weatherInfo?.weather[0].icon]}
              alt=""
            />
          </div>
        </article>

        {/* Sección abajo */}

        <section className="bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-items-start sm:grid-cols-1 sm:items-center">
          <article className="flex gap-2 sm:items-center">
            <div className="h-[26px] w-[26px]">
              <img src="/images/wind.png" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 sm:items-center">
            <div className="h-[26px] w-[26px]">
              <img src="/images/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 sm:items-center">
            <div className="h-[26px] w-[26px]">
              <img src="/images/pressure.png" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure} hPa</span>
          </article>
        </section>
      </section>
      <div className="items-center">       
      <button className="button-47 items-center"
      onClick={handleChangeTemperature}>Change °F / °C</button>
      </div> 
    </section>
  );
};
export default Weather;

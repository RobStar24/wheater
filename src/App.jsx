import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWetherInfo] = useState(null);

  const getBgImage = (weatherCode) => {
    if (weatherCode === '01d') {
      return '/images/bgImages/clear-sky.jpg'
    } else if (weatherCode === '01n') {
      return '/images/bgImages/Nclear-sky.jpg'
    } else if (weatherCode === '02d') {
      return '/images/bgImages/few-clouds.jpg'
    } else if (weatherCode === '02n') {
      return '/images/bgImages/Nfew-clouds.jpg'
    } else if (weatherCode === '03d') {
      return '/images/bgImages/scatterd-clouds.jpg'
    } else if (weatherCode === '03n') {
      return '/images/bgImages/Nscatterd-clouds.jpg'
    } else if (weatherCode === '04d') {
      return '/images/bgImages/Nbroken-clouds.jpg'
    } else if (weatherCode === '04n') {
      return '/images/bgImages/Nbroken-clouds.jpg'
    }  else if (weatherCode === '09d') {
      return '/images/bgImages/shower-rain.jpg'
    } else if (weatherCode === '09n') {
      return '/images/bgImages/shower-rain.jpg'
    }  else if (weatherCode === '10d') {
      return '/images/bgImages/rain.jpg'
    } else if (weatherCode === '10n') {
      return '/images/bgImages/Nrain.jpg'
    }  else if (weatherCode === '11d') {
      return '/images/bgImages/thunderstorm.jpg'
    } else if (weatherCode === '11n') {
      return '/images/bgImages/Nthunderstorm.jpg'
    } else if (weatherCode === '13d') {
      return '/images/bgImages/snow.jpg'
    } else if (weatherCode === '13n') {
      return '/images/bgImages/Nsnow.jpg'
    } else if (weatherCode === '50d') {
      return '/images/bgImages/mist.jpg'
    } else if (weatherCode === '50n') {
      return '/images/bgImages/mist.jpg'
    } else {
      return null
    }
  };

  const backgroundImage = weatherInfo?.weather && weatherInfo?.weather[0]?.icon ? getBgImage(weatherInfo.weather[0].icon) : null;

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "39462de7a1967580e4ad25c00ae821d1";

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    axios
      .get(URL)
      .then(({ data }) => setWetherInfo(data))
      .catch((err) => console.log('error con la API'));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className={`min-h-screen bg-black bg-cover bg-center text-white flex justify-center items-center font-principal-font p-2 bgrd`}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : { backgroundColor: "black" }}>

        <Weather weatherInfo={weatherInfo} />

    </main>
  );
}

export default App;

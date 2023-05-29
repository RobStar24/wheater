import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWetherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '39462de7a1967580e4ad25c00ae821d1'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    axios.get(URL)
      .then(({data}) => setWetherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  return (
    <main className='bg-black min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
      
      <Weather weatherInfo={weatherInfo} />

    </main>
  )
}

export default App

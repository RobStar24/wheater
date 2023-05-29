import { useState } from "react"

const Weather = ({weatherInfo}) => {
  
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemperature = () => {
        setIsCelsius(!isCelsius)
    }
  
  
    return (
    <section className="text-center grid gap-6">

        <h2 className="font-bold text-2xl">{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">

            {/* Seccion arriba */}

            <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">

                <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

                <span className="text-4xl">{isCelsius ? `${(weatherInfo?.main.temp).toFixed(1)}°C` : `${(((weatherInfo?.main.temp) * 1.8) + 32).toFixed(1)} °F`}</span>

                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>

            </article>

            {/* Sección abajo */}

            <section className="bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">

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

        <button onClick={handleChangeTemperature}>Change F / C</button>

    </section>
  )
}
export default Weather
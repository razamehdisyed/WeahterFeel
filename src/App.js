import { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperaturesAndDetails from './components/TemperaturesAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/WeatherService'


function App() {

  const [query, setQuery] = useState({q: "najaf"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units}).then((data) => {
        setWeather(data)

      })
    }

    fetchWeather()
  }, [query, units])


  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700"
    const threshold = units === "metric" ? 20:60
    if (weather.temp <threshold) return "from-cyan-600 to-blue-700"
    if (weather.details === 'Clouds') return "from-gray-400 to-blue-500"
    if (weather.details === 'Haze') return "from-gray-800 to-black-800"

    return "from-yellow-600 to-orange-800"
  }

  return (
    <div className={` mx-auto max-w-screen-md mt-4 py-6 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-200 ${formatBackground()}`}>
    <TopButtons setQuery = {setQuery}/>
    <Inputs setQuery={setQuery} units = {units} setUnits = {setUnits} />

    {weather && (
      <div>
        <TimeAndLocation weather={weather}/>
        <TemperaturesAndDetails weather = {weather}/>

        <Forecast title="Hourly Forecast" items = {weather.hourly}/>
        <Forecast title="Daily Forecast" items = {weather.daily}/>
      </div>
    )}

    </div>
  );
}

export default App;

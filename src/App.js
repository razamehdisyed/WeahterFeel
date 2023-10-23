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

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-6 px-32 bg-gradient-to-br from bg-cyan-600 to to-blue-700 h-fit shadow-xl shadow-gray-400">
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

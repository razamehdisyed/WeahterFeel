import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperaturesAndDetails from './components/TemperaturesAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';


function App() {

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-6 px-32 bg-gradient-to-br from bg-cyan-600 to to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons />
    <Inputs />

    <TimeAndLocation />
    <TemperaturesAndDetails />

    <Forecast title="Hourly Forecast"/>
    <Forecast title="Daily Forecast"/>
    </div>
  );
}

export default App;

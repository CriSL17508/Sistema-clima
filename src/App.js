import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
function App() {

  const [temperature,setTemperature]  = useState(0)
  const [region,setRegion]  = useState("")
  const [ciudad,setCiudad]  = useState("")
  const [tiempo,setTiempo]  = useState("")
  const [estado,setEstado]  = useState("")
  const [viento,setViento]  = useState("")
  const [humedad,setHumedad]  = useState("")
  const [visibilidad,setVisibilidad]  = useState("")

  const FetchApiWheater = () => {
    axios({
      method: "get",
      url:"http://api.weatherstack.com/current?access_key=ffa88a06c106edb24a0699a6eeefcf73& query=La Libertad Chepen"
    }).then(function (response) {
      setRegion(response.data.location.name)
      setCiudad(response.data.location.region)
      setTiempo(response.data.location.localtime)
      setTemperature(response.data.current.temperature)
      setEstado(response.data.current.weather_descriptions)
	  setViento(response.data.current.wind_speed)
	  setHumedad(response.data.current.humidity)
	  setVisibilidad(response.data.current.visibility)
      console.log(response)
    }).catch(function () {
    });
  }

  useEffect(() => {
    FetchApiWheater()
  },[])


  return (
    <div className="App">
      <div class="min-h-screen flex items-center justify-center">
<div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
						<div class="font-bold text-xl">{region}-{ciudad}</div>
						<div class="text-sm text-gray-500">{tiempo}</div>
						<div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
<svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
						</div>
						<div class="flex flex-row items-center justify-center mt-6">
							<div class="font-medium text-6xl">{temperature}°</div>
							<div class="flex flex-col items-center ml-6">
								<div>{estado}</div>
							</div>
						</div>
						<div class="flex flex-row justify-between mt-6">
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Viento</div>
								<div class="text-sm text-gray-500">{viento}k/h</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Humedad</div>
								<div class="text-sm text-gray-500">{humedad}%</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Visibilidad</div>
								<div class="text-sm text-gray-500">{visibilidad}km</div>
							</div>
						</div>
					</div>
</div>
    </div>
  );
}

export default App;

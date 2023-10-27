import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import WeatherPage from "../WeatherPage/WeatherPage";
import WeatherDetailPage from "../WeatherDetailPage/WeatherDetailPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [weatherData,setWeatherData] = useState(null);

  return (
    <>
    <header>
      <NavBar user={user} setUser={setUser} />
    </header>
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<WeatherPage setWeatherData={setWeatherData} weatherData={weatherData}/>}/>
        <Route path="/detail" element={<WeatherDetailPage weatherData={weatherData}/>}/>
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
    </>
  );
}


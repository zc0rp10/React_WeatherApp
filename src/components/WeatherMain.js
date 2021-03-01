import React, { useState, useEffect } from "react";
import WeatherTable from "./WeatherTable";
import CityForm from "./CityForm";

export default function WeatherMain() {
    const [weatherArr, setWeatherArr] = useState([]);
    const [text, setText] = useState("Stockholm");
    const [location, setLocation] = useState({
        lon: 18.0649,
        lat: 59.3326,
    });

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat.toString()}&lon=${location.lon.toString()}&units=metric&appid=df42ff5a2aa0320c6a0c55aff741ee92`
        )
            .then((response) => response.json())
            .then((data) => setWeatherArr(data.hourly));
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&APPID=df42ff5a2aa0320c6a0c55aff741ee92`
        )
            .then((response) => response.json())
            .then((data) => setLocation(data.coord));
    };

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <main className="container">
            <CityForm handleSubmit={handleSubmit} handleChange={handleChange} text={text} />
            <WeatherTable weatherArr={weatherArr} />
        </main>
    );
}

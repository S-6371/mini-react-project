import Searchbox from "./searchbox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelslike: 37.13,
        temp: 30.13,
        humidity: 90,
        tempMax: 30.13,
        tempMin: 30.13,
        weather: "overcast clouds",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }  
    
    return (
        <div style={{ textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <Searchbox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
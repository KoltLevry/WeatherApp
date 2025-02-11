import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainhBox, Resultbox, SearchBox } from "./styles";
import { appWeatherActions, appWeatherSelectors } from "store/redux/appWeather/appWeatherSlice";
import { AppDispatch } from "store/store";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Weather() {

    const [city, setCity] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const {data, status, error} = useSelector(appWeatherSelectors.weatherData);

    const handleSearch = () => {
        if(city.trim()) {
            dispatch(appWeatherActions.getWeather(city));
        }
    }

    return(
        <MainhBox>
            <SearchBox>
                <Input placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)}></Input>
                <Button name="Search" onClick={handleSearch}></Button>
            </SearchBox>
            

            {error && <p style={{ color: "red" }}>{error}</p>}
            {data && (
                <Resultbox>
                    <h2>{data.name}</h2>
                    <p>Температура: {data.main.temp}°C</p>
                    <p>Вологість: {data.main.humidity}%</p>
                    {/* <p>Опис: {data.weather[0]}</p> */}
                </Resultbox>
            )}
        </MainhBox>
    )
}

export default Weather;
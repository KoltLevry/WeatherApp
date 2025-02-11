import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CityName, ErrorDescription, ErrorMessage, MainBox, MainErrorInfo, MainInfoBox, Resultbox, SearchBox, TemperatureNumber, WeatherIcon, WeatherIconBox } from "./styles";
import { appWeatherActions, appWeatherSelectors } from "store/redux/appWeather/appWeatherSlice";
import { AppDispatch } from "store/store";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";

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
        <MainBox>
            <SearchBox>
                <Input placeholder="Enter city name" value={city} onChange={(e) => setCity(e.target.value)}></Input>
                <Button name="Search" onClick={handleSearch}></Button>
            </SearchBox>
            
            {error && (
                <Resultbox>
                    <MainErrorInfo>API Error</MainErrorInfo>
                    <ErrorDescription>Something went wrong with API data</ErrorDescription>
                    <ErrorMessage>{error}</ErrorMessage>
                </Resultbox>
            )}
            {status === 'loading' ? <Spinner /> : data && (
                <Resultbox>
                    <MainInfoBox>
                        <TemperatureNumber>{data.main.temp} °C</TemperatureNumber>
                        <CityName>{data.name}</CityName>
                    </MainInfoBox>
                    <WeatherIconBox>
                        <WeatherIcon src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather" />
                    </WeatherIconBox>
                </Resultbox>
            )}
        </MainBox>
    )
}

export default Weather;
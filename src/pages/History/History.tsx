import { useDispatch, useSelector } from "react-redux"
import { appWeatherActions, appWeatherSelectors } from "store/redux/appWeather/appWeatherSlice"
import {
  Resultbox,
  MainInfoBox,
  TemperatureNumber,
  CityName,
  WeatherIconBox,
  WeatherIcon,
  ResultBoxAll,
  ResultWrapper,
  TitleH1,
} from "./styles"
import Button from "components/Button/Button";

function History() {
  const dispatch = useDispatch();
  const history = useSelector(appWeatherSelectors.weatherData).history;

  const removeAllData = () => {
    dispatch(appWeatherActions.resetWeather());
  }

  return (
    <ResultWrapper>
        <ResultBoxAll>
          {history.length === 0 ? (
            <TitleH1>No search history yet.</TitleH1>
          ) : (
            history.map((weather, index) => (
              <div key={index}>
                <Resultbox>
                  <MainInfoBox>
                    <TemperatureNumber>{weather.main.temp} °C</TemperatureNumber>
                    <CityName>{weather.name}</CityName>
                  </MainInfoBox>
                  <WeatherIconBox>
                    <WeatherIcon
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                      alt="Weather"
                    />
                  </WeatherIconBox>
                </Resultbox>
              </div>
            ))
          )}
        </ResultBoxAll>
        {history.length > 0 && (
           <Button name="Delete all cards" onClick={removeAllData} />
        )}
    </ResultWrapper>
  )
}

export default History;

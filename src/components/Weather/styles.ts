import styled from '@emotion/styled';

export const Resultbox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
padding: 40px;
height: 180px;
border-radius: 20px;
/* background-color: #010c4979; */
background-color: #0005225f;
backdrop-filter: blur(4px);
`

export const MainBox = styled.div`
display: flex;
flex-direction: column;
gap: 100px;
`

export const SearchBox = styled.div`
display: flex;
gap: 20px;
`

export const MainInfoBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 30px;
`

export const TemperatureNumber = styled.p`
font-size: 60px;
color: white;
font-weight: bold;
`

export const CityName = styled.p`
font-size: 2rem;
color: white;
font-weight: bold;
`

export const WeatherIconBox = styled.div`
`

export const WeatherIcon = styled.img`
height: 180px;
width: 180px;
`

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`

export const MainErrorInfo = styled.div`
  height: 38px;
  color: red;
`

export const ErrorDescription = styled.div`
  height: 18px;
  color: whitesmoke;
`


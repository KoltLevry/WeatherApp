import styled from '@emotion/styled';

export const ResultWrapper = styled.div``

export const TitleH1 = styled.h1`
font-size: 3rem;
color: white;
`

export const ResultBoxAll = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
height: 650px;
padding: 0 40px;
overflow-y: scroll; 

&::-webkit-scrollbar {
    width: 8px;
}

&::-webkit-scrollbar-track {
background-color: transparent;
}

&::-webkit-scrollbar-thumb {
    background: #0005225f;
    border-radius: 20px;
    border: 2px solid rgba(255,255,255,0.2);
}

&::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 5, 34, 0.6);
}
`

export const Resultbox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
padding: 40px;
height: 180px;
border-radius: 20px;
background-color: #0005225f;
backdrop-filter: blur(4px);
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

export const ResultErrorBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding: 40px;
height: 180px;
border-radius: 20px;
background-color: #0005225f;
backdrop-filter: blur(4px);
`
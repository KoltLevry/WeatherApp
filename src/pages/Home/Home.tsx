import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { MainhBox, Resultbox, SearchBox } from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Home() {

    const [city, setCity] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSearch = () => {
        if(!city.trim()) return;
        dispatch(fetchWeather(city));
    }

    return (
        <MainhBox>
            <SearchBox>
                <Input placeholder="Enter city name" onChange={handleInputChange}></Input>
                <Button name="Search"></Button>
            </SearchBox>
            <Resultbox>
                <div>taskCard</div>
            </Resultbox>
        </MainhBox>
    );
}

export default Home;
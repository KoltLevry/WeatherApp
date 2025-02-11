import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { MainhBox, Resultbox, SearchBox } from "./styles";

function Home() {
    return (
        <MainhBox>
            <SearchBox>
                <Input placeholder="Enter city name"></Input>
                <Button name="Search"></Button>
            </SearchBox>
            <Resultbox>
                <div>taskCard</div>
            </Resultbox>
        </MainhBox>
    );
}

export default Home;
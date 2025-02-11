import { useNavigate } from "react-router-dom";
import { LayoutProps } from "./types";
import { 
    LayoutWrapper,
    Header,
    AppTitle,
    NavContainer,
    StyledNavLink,
    Main,
    
} from "./styles";

function Layout({children}: LayoutProps) {
    const navigate = useNavigate();
    
    const goToHomePage = () => navigate("/home");

    return (
        <LayoutWrapper>
            <Header>
                <AppTitle onClick={goToHomePage}>Weather App</AppTitle>
                <NavContainer>
                    <StyledNavLink
                    style={({isActive}) => ({fontWeight: isActive ? "700" : "400"})} to={"/home"}>Home</StyledNavLink>
                    <StyledNavLink 
                    style={({isActive}) => ({fontWeight: isActive ? "700" : "400"})} to={"/history"}>History</StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
        </LayoutWrapper>
    );

}

export default Layout;
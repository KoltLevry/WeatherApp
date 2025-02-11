import { useNavigate } from "react-router-dom";
import { LayoutProps } from "./types";
import { 
    LayoutWrapper,
    Header,
    
} from "./styles";

function Layout({children}: LayoutProps) {
    const navigate = useNavigate();
    
    return (
        <LayoutWrapper>
            {/* <button onClick={() => navigate('/about')}>Go to About</button> */}
            <Header>
                <h1>My App</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>History</li>
                    </ul>
                </nav>
            </Header>
            <main>{children}</main>
        </LayoutWrapper>
    );

}

export default Layout;
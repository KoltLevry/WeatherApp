import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
background-image: url('https://s3-alpha-sig.figma.com/img/8b93/6aad/1a8a9bb19893d9b0ef5acb10326ff9b1?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CPSTsoTyhWOaTu8mDiKnG1iK4sU9PIB1Q4d7T3BpjUCn3teRUFzV9~7h~c3OZg7sn5VzQoGc52pIItWuU7M3fkImvfGEBd3n2JUK2JlCoJiakI0VPhEZXfmIYnVRsjINVaud-cZMmu9l-aYktAC1hgVS6yJr~AFn-7hcfYNdgTYahj3A1KH1c4jOmHmMH3QRYfK6LTDcOOmZZeiog0Y5vpcr9zQjbz6EaYeo5m6Ac3Z2oF6o5Cdd1kb06GZxFSgvh9ZScxJO-KyvgXHEdarIEnBnkaPLk9TLTga6T~LFUV6WO6OzRTf2BMqLNa2YbDzHhwm9NRw~ycSXvX9YrGcaEA__');
background-size: cover;
`

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
height: 80px;
color: #FFFFFF;
font-weight: 700;
background-color: #122D4D80;
`

export const AppTitle = styled.p`
position: relative;
left: 85px;
color: #FFFFFF;
font-size: 24px;
font-weight: 700;
cursor: pointer;
`

export const NavContainer = styled.nav`
display: flex;
gap: 80px;
margin-right: 100px;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  padding: 2px;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
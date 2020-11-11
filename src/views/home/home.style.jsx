import styled from 'styled-components';

export const HomeViewContainer = styled.div`
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.darkMode ? 'black' : 'white'};
`;

export const NavBar = styled.nav`
width: 100%;
height: 60px;
display:flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 15px 2px rgba(121,121,121,0.49);

`;
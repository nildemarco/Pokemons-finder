import styled from 'styled-components';

export const CardStyle = styled.article`
width: 350px;
border: ${props => props.darkMode ? '2px solid white' : '2px solid black'};
border-radius: 20px;
margin: 10px;
padding: 10px;
box-shadow: 4px 4px 16px 0px rgba(50, 50, 50, 0.4);
a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h2 {
    color: ${props => props.darkMode ? 'white' : 'black'};
}
a:link {
    text-decoration: none;
}
p {
    color: black;
}

`;


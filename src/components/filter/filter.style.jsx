import styled from 'styled-components';

export const FilterContainer = styled.div`
display: flex;
`;

export const SearchInput = styled.input`
width: 250px;
height: 40px;
font-size: 23px;
border-radius: 20px;
padding: 5px;
@media (max-width: 430px) {
    width: 150px;
    height: 35px;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
border-radius: 20px;
border: none;
width: 100px;
height: 40px;
margin-right: 50px;
@media (max-width: 430px) {
    width: 80px;
    height: 35px;
    font-size: 18px;
  }

`;
import React, { useState } from 'react';
import CardContainer from '../../components/cardContainer/card-container';
import Filter from '../../components/filter/filter';
import { HomeViewContainer, NavBar } from './home.style';
import DarkModeToggle from "react-dark-mode-toggle";
import DarkModeContext from '../../context/DarkModeContext';


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [pokemonSelected, setPokemonSelected] = useState('');

    const handleChange = () => {
        setDarkMode(!darkMode)
    };

    return (
        <DarkModeContext.Provider value={darkMode}>
            <HomeViewContainer darkMode={darkMode}>
                <NavBar >
                    <Filter setPokemonSelected={setPokemonSelected} />
                    <DarkModeToggle onChange={handleChange} checked={darkMode} />
                </NavBar>
                <CardContainer pokemonSelected={pokemonSelected} />
            </HomeViewContainer>
        </DarkModeContext.Provider>

    );
}

export default Home;
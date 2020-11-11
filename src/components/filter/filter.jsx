import React, { useState } from 'react';
import { FilterContainer, SearchButton, SearchInput } from './filter.style';


const Filter = ({ setPokemonSelected }) => {

    const [pokemonToSearch, setPokemonToSearch] = useState('');

    const handleChange = (e) => {
        setPokemonToSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonSelected(pokemonToSearch);
        setPokemonToSearch('');
    }

    window.onkeypress = e => {
        if (e.keyCode === 13) {
            setPokemonSelected(pokemonToSearch);
        }

    }


    return (
        <FilterContainer>
            <SearchInput
                type="text"
                placeholder="Buscar"
                onChange={handleChange}
                value={pokemonToSearch}
            />
            <SearchButton onClick={handleSubmit}>Buscar</SearchButton>
        </FilterContainer>
    );
}

export default Filter;
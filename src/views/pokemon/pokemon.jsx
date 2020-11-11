import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BtnGoHome, ContainerPokemon } from './pokemon.style';
import Card from '../../components/card/card';
import useAxios from '../../hook/useAxios/useAxios';



const PokemonView = () => {
    const params = useParams();

    const history = useHistory();

    const pokemon = useAxios(params.name, '');

    const handleClick = () => {
        history.push('/')
    };

    return (
        <>
            <ContainerPokemon>
                {pokemon &&
                    <Card pokemon={pokemon} />
                }
                <BtnGoHome onClick={handleClick}>Volver</BtnGoHome>
            </ContainerPokemon>
        </>
    );
}

export default PokemonView;
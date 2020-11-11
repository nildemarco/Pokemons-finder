import React, { useContext } from 'react';
import { CardStyle } from './card.style';
import { Link, useLocation } from 'react-router-dom';
import DarkModeContext from '../../context/DarkModeContext';


const Card = ({ pokemon }) => {

    const darkMode = useContext(DarkModeContext);

    const location = useLocation();

    const toUpperCaseFL = (name) => {
        const newName = name.charAt(0).toUpperCase() + name.slice(1)
        return newName;

    };

    const getType = (objecto, i) => {
        let arrType = []
        for (const type in objecto) {
            if (type === 'type') {
                arrType = arrType.concat(objecto[type].name)
                // const typeStrings = arrType.join(',')
                return <span key={i}>{arrType}</span>
            }
        }
    };

    const CardContainer = () => {
        if (location.pathname !== '/') {
            return (
                <CardStyle darkMode={darkMode} >
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <h2>{toUpperCaseFL(pokemon.name)}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <div>
                            <p>El pokemon se llama {pokemon.name},
                             mide {(pokemon.height * 30).toFixed()}
                             cm y pesa {(pokemon.weight / 2.2).toFixed()} kg </p>
                            <p>Tipo: {pokemon.types.map((item, i) => getType(item, i))}</p>
                        </div>
                    </Link>
                </CardStyle>

            );
        } else {
            return (<CardStyle darkMode={darkMode} >
                <Link to={`/pokemon/${pokemon.name}`}>
                    <h2>{toUpperCaseFL(pokemon.name)}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </Link>
            </CardStyle>)
        }
    };


    return (
        <CardContainer />
    );
}

export default Card;
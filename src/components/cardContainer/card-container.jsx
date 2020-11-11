import React, { useEffect, useState, useRef } from 'react';
import Card from '../card/card';
import { Container } from './card-container.style';
import { pokemonApi } from '../../hook/useAxios/useAxios';


const CardContainer = ({ pokemonSelected }) => {

    const [pokemonInfo, setPokemonInfo] = useState([]);

    const [offSet, setOffSet] = useState(0);

    let pokemonFiltered = [];

    const loader = useRef(null);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "15px",
            threshold: 1.0
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }

    }, []);

    useEffect(() => {
        pokemonApi.get(`/pokemon/?limit=20&offset=${offSet.toString()}`).then(res => {
            Promise.all(res.data.results.map(each => pokemonApi.get(each.url)))
                .then(data => {
                    const newPagePokemons = data.map(item => item.data)
                    setPokemonInfo((pokemonInfo) => pokemonInfo.concat(newPagePokemons))
                })
        })
    }, [offSet]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setOffSet((offSet) => offSet + 20)
        }
    };

    const CardPresenter = ({ pokemonInfo }) => {
        if (pokemonSelected) {
            pokemonFiltered = pokemonInfo.filter(pokemon => pokemon.name === pokemonSelected.toLowerCase())

            return pokemonFiltered && <Card pokemon={pokemonFiltered[0]} />
        }

        return pokemonInfo.length ? pokemonInfo.map((item, i) => {
            if (pokemonInfo.length === (i + 1)) {
                return (
                    <Card key={i} pokemon={item} />
                );
            } else {
                return <Card key={i} pokemon={item} />
            }
        }) :
            <div>Cargando..</div>

    };

    return (
        <Container>
            <CardPresenter pokemonInfo={pokemonInfo} />
            <div ref={loader}></div>
        </Container>
    );
}

export default CardContainer;
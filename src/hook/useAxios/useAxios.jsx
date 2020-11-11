import { useEffect, useState } from 'react';
import axios from 'axios'

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

const useAxios = (name, query) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const setEndPoint = () => {
            let endpoint = '/pokemon'

            if (name) {
                return endpoint = `/pokemon/${name}`;
            }
            else if (query) {
                return endpoint = `/pokemon/${query}`;
            }
            return endpoint

        }
        pokemonApi.get(setEndPoint())
            .then(res => setData(res.data))
    }, [name, query]);

    return data;
}

export default useAxios;
import { Card } from "../../components/card/Card";
import './Pokemon.css'
import { useEffect, useState } from "react";
import Axios from 'axios'
import search from '../../assets/search.svg';

export default function Pokemon()  {
    const [pokemon, setPokemon] = useState([]);
    const [name, setName] = useState('');
    const [isLoading, setLoading] = useState(true);
    const hp = pokemon?.stats?.length ? pokemon?.stats[0]?.base_stat : null;
    const moves = [pokemon?.moves?.slice(0, 4)]
    const moveName = moves[0]?.map((m: string) => m.move.name);
    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`,  {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            setLoading(false);
            setPokemon(res.data);
            })
    },[name]);

    const handleChange = (e: any) => {
        setName(e.target.value);
    }
   
    return (
       <>
            <h1>Pokemon</h1>
            <div className="container">
                <div className="searchField">
                    <img src={search} height='20px' width='20px'></img>
                    <input  onChange={handleChange} onKeyDown={handleChange} className={'input'} placeholder='Search Pokemon Name'></input>
                </div>
                {name ? <Card header={pokemon?.name} url={pokemon?.sprites?.front_default} hp={hp} move={moveName}></Card> : ''}
            </div>
       </>
    ) 
}

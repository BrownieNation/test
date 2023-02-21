import { Card } from "../../components/card/Card";
import './Pokemon.css'
import { useEffect, useState } from "react";
import Axios from 'axios'
import search from '../../assets/search.svg';
import { Button } from "../../components/button/Button";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Pokemon()  {
    const [pokemon, setPokemon] = useState([]);
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');
    const onePokemon: any = [];

    onePokemon.push({
        name: pokemon?.name,
        image: pokemon?.sprites?.front_default,
        hp: pokemon?.stats?.length ? pokemon?.stats[0]?.base_stat : null,
        moves:[pokemon?.moves?.slice(0, 4)][0]?.map((m: string) => m.move.name)
    });

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${submitted}`,  {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            setTimeout(() => {
                setPokemon(res.data);
                setLoading(false);
                setError('')
            }, 200);
            }).catch(() => {
                setError('Pokemon Doesnt exist');        
            }).finally(() => {
                setLoading(true);
            });
        },[submitted, error]);

    const handleChange = (e: any) => {
        setName(e.target.value);
    }

    function handleSubmit(e: any) {
        setSubmitted(name);
        if(error.length !== 0) {
            toast.error(error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
      }
   
    return (
       <>
            <h1>Pokemon</h1>
            <div className="container">
                <div className="searchField">
                    <img src={search} height='20px' width='20px'></img>
                    <input onChange={handleChange} value={name} className={'input'} placeholder='Search Pokemon Name'></input>
                    <Button onClick={handleSubmit}>{isLoading ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner> : 'Search' }
                    </Button>
                </div>
                {submitted ? onePokemon.map((poke: any, index: number) => {
                    return (
                        <Card key={index} header={poke.name} url={poke.image} hp={poke.hp} move={poke.moves}></Card>
                    )
                }) : ''}
            </div>
            {error.length !== 0 ? <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                /> : ''}
       </>
    ) 
}

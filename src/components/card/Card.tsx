import './Card.css'
import { PropsWithChildren } from 'react';

interface CardProps {
    url?: string;
    alt?: string;
    move?: string[];
    header?: string;
    onClick?: () => void;
    hp?: number;
} 

export const Card: React.FC<CardProps> = ({children, ...props}: PropsWithChildren<CardProps>) => {
    return (
        <div className='card' onClick={props.onClick}>
            <div className='top'>
            <h4>{props.header}</h4>
            <div className='hp'>
                <p style={{margin:0}}>HP: {props.hp}</p>
            </div>
            </div>
            <img className='pokeimg' width='250px' height="250px" src={props.url} alt={props.alt}></img>
            <div className='move'>
            {props.move?.map((m:string) => {
                return (
                    <span className='move-single'>{m}</span>
                );
            })}

            </div>
        </div>
    ) 
}


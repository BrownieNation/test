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
            <h5>{props.header}</h5>
            <p>HP: {props.hp}</p>
            </div>
            <img width='150px' height="150px" style={{objectFit:'cover'}} src={props.url} alt={props.alt}></img>
            <div className='move'>
            {props.move?.map((m:string) => {
                return (
                    <span>{m}</span>
                );
            })}

            </div>
        </div>
    ) 
}


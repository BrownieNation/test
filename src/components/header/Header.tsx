import { PropsWithChildren } from 'react';
import './Header.css'
import pokemonLogo from '../../assets/pokemon.svg';
import { Link} from 'react-router-dom';

interface HeaderProps {
    
} 

export const Header: React.FC<HeaderProps> = ({children}: PropsWithChildren<HeaderProps>) => {
    return (
        <nav className='header'>
            <div>
                <Link to="/">                  
                    <img src={pokemonLogo} style={{objectFit:'cover'}}  className="logo" alt="logo" />
                </Link>
            </div>
            <div>
                <Link to="/pokemon" className='links'>Pokemon</Link>
                <Link  className='links' to={'/about'}>About</Link>
            </div>
        </nav>
    ) 
}



import { PropsWithChildren } from 'react';
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    
} 

export const Button: React.FC<ButtonProps> = ({children, ...props}: PropsWithChildren<ButtonProps>) => {
    return <>
        <button {...props} className="button">{children}</button>
    </>
}


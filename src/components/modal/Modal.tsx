import './Modal.css'
import { Modal} from 'react-bootstrap';
import { Button } from '../button/Button';
import { useRef } from 'react';


interface PopupProps {
    show: boolean;
    onHide: () => void;
    title: string;
    btnOnClick: () => void;
    dogArray: {key:string, value:any}[];
    imagelink: string;
} 

export const Popup: React.FC<PopupProps> = (props: PopupProps) => {
    return (
        <>
        <Modal className="modal" show={props.show} onHide={props.onHide} >
                <Modal.Header >
                    <Modal.Title as={'h3'}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: '100%'}}>
                    <img src={props.imagelink} height='200px' width='200px' style={{objectFit:'cover'}}></img>
                    <ul>
                       {props.dogArray.map((dog, index) => { 
                        return(
                            <li key={index}>{dog.key}: {dog.value}</li>
                        )
                        }
                       )} 
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.btnOnClick}>Close</Button>
                </Modal.Footer>
        </Modal>
        {props.show ? <div className='overlay' onClick={props.btnOnClick}></div> : ''}
        </>
    );
}
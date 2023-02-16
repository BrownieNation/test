import vitus from '../../assets/vitus.jpg';
import './About.css';
import linkedin from '../../assets/linkedin.svg';
import email from '../../assets/email.svg';
import phone from '../../assets/phone.svg';

export default function Dog() {
    return (
       <>
       <h1>Vitus Thayalan</h1>
       <img src={vitus} height='800px' style={{objectFit:'cover'}}></img>
       <div className='info'>
        <div className='social'>
            <a href='https://www.linkedin.com/in/vithushan-thayalan-874434161' target={'_blank'} className='links' style={{display:'flex', alignItems:'center'}}>
                <img src={linkedin} height='40px' style={{objectFit:'cover', padding:'0', margin:'0'}} ></img>
            </a>
            <a href='mailto:vithush2809@gmail.com' target={'_blank'} className='links'>
                <div style={{display:'flex', alignItems:'center'}}>   
                    <img src={email} height='40px' style={{objectFit:'cover', padding:'0', margin:'0'}} ></img>
                    <p>vithush2809@gmail.com</p>
                </div>
            </a>
            <a href='tel:53549472' target={'_blank'} className='links'>
                <div style={{display:'flex', alignItems:'center'}}>                  
                    <img src={phone} height='40px' style={{objectFit:'cover', margin:'5px'}} ></img>
                    <p>53549472</p>
                </div>
            </a>
        </div>
        <div>
            <p>@copyright VitusThayalan</p>
        </div>
       </div>
       </>
    ) 
}

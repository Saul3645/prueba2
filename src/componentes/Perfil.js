import React from 'react';
import Cards from './Cards';
import './Perfil.css';


function Perfil() {
  return (
    <>
   <div className='perfil'>
       <img className='avatar' src='https://ubicalas.com/v2/image.php?image=/uploads/3cb546195f28f6f2801d2c9bf608cdfa.png'></img>
       <h1 className='user-name'>Similares</h1>
   </div>
    
    <div className='cards__container'>
        <h1>
            ACERCA DE
        </h1>
        <p>
            lorem ismous bla a akd a aj djad le parllete deux hello
        </p>
    </div>

    <ul className='botones'>
       <li>
       <button className="btn" role="button">
                     Ubicación
        </button>
        </li>
        <li>
        <button className="btn" role="button">
                 Mensaje
        </button>
        </li> 
        
       
    </ul>
    
    <Cards/>
    </>
  );
}
export default Perfil;
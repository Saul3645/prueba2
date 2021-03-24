import React from 'react';
import './Contenido.css';


function Contenido() {
  return (
    <>
      <div className='cards__container'>
        <h1>
          ¿Cómo funciona?
        </h1>
        <br></br>
        <p>
          lorem ipsum
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
        </p>
        <p>
          lorem ipsum
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
        </p>
        <p>
          lorem ipsum
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
        </p>
        <p>
          lorem ipsum
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
          lorem ipsum 
        </p>
        
      </div>

      <section class="container">
        <section class="one">
          <div class="logo">
            <img src="https://image.flaticon.com/icons/svg/143/143361.svg"></img>
          </div>
          <h2 class="heading">
            Suscribete para obtener mas promociones
  </h2>
          <p> Introduce tu email
  </p>
          <form>
            <input className="suscribete" type='text' placeholder="introduce tu email"></input><br />
            <button class="btn" role="button">
              Subscribete
    </button>
          </form>
        </section>
        <section class="two">
          <h3>
            Gracias por suscribirse  !
    </h3>
          <div class="close">
          </div>
        </section>
      </section>


    </>
  );
}
export default Contenido;
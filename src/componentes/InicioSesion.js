import React from 'react';
import './InicioSesion.css';

function InicioSesion() {
   return (
      <>
         <section className="containerlog">
            <section className="one">

               <h2 className="heading">
                  Inicia sesion
               </h2>
               <form>
                  <input className="login" type='text' placeholder="Introduce tu email"></input><br />
                  <input className="loginp" type='password' placeholder="Introduce tu contraseña"></input><br />

                  <button className="btn" role="button">
                     iniciar sesion
                  </button><br />
                  <p  className="a_reg">
                     No tienes cuenta.
                  </p>  
                  <a href ="/registro" >
                     Registrate
                  </a>
               </form>
            </section>

         </section>


      </>
   );
}
export default InicioSesion;
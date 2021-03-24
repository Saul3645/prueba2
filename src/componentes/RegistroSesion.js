import React from 'react';
import './InicioSesion.css';

function RegistroSesion() {
   return (
      <>
         <section className="containerreg">
            <section className="one">

               <h2 className="heading">
                  Registrate
               </h2>
               <form >
                  <input className="login" type='text' placeholder="Introduce tu email"></input><br />
                  <input className="loginp" type='password' placeholder="Introduce tu contraseña"></input><br />
                  <input className="loginp" type='password' placeholder="Confirma tu contraseña"></input><br />
                  <input className="login" type='number' placeholder="Introduce tu edad"></input><br />
                  <input className="login" type='text' placeholder="Introduce tu dirección"></input><br />

                  <button className="btn" role="button">
                     Registrarse
                  </button><br />
                  <p  className="a_reg">
                     ¿Ya tienes cuenta?
                  </p>  
                  <a href ="/log-in" >
                     Inicia sesión
                  </a>
               </form>
            </section>

         </section>


      </>
   );
}
export default RegistroSesion;
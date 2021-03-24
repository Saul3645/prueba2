import React from 'react'
import './DetallesP.css'

function DetallesP() {
    return (
        <div class="principal">
            <div class="row">
                <div class="col-md-4">
                    <div class="contenedor">
                        <br />
                        <h1 class="titulo-producto">Glucophage</h1>
                        <br></br>
                        <div class="contenedorimg">
                            <img src="images/gracophage.png" alt="" width="400px"></img>
                        </div>
                    </div>
                    <div class="contenedor">
                        <h1 class="nombre">Glucophage con 60 Tabletas (500 mg)</h1>
                        <br></br>
                        <h4 class="subtitulo">Glucophage con 60 tabletas metformina (500 mg)</h4>
                        <br></br>
                        <h2>Comparado en 2 Tiendas.</h2>
                        <h3 class="precio"><i>$420.00 Ahorra.</i></h3>
                        <br></br>
                        <br></br>
                        <div class="aviso">
                            <h4>¡Ups! Este producto no está disponible para comprar en las farmacias afiliadas a FarmApp. Te sugerimos que visites la página de las farmacias que aparecen abajo.</h4>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="boton">
                            <a href="" className="boton_1"><i>Ver Otros Productos</i></a>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <p class="avisoP">* Los precios pueden variar respecto al tiempo de promocion o descuento del producto, pueden variar en el establecimiento físico. FarmApp no comercializa los productos de su página de manera directa sino a través de sus comercios afiliados.</p>
                        </div>
                        <br />
                        <br></br>
                    </div>
                </div>
            </div>

            {/* <div>
                <div class="relevantes">
                    <h3>Comparado en las siguientes Farmacias:</h3>
                    <div class="farmacias">
                        <h2>Farmacia IZZA</h2>
                    </div>
                    <div class="farmacias">
                        <h2>Farmacia Similares</h2>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default DetallesP

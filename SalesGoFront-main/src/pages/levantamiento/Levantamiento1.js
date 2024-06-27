
import Tab from '../../components/Tab';
import Tabs from '../../components/Tabs';
import React, { useState } from 'react';
import NavbarPage from '../../components/NavbarPage';
import '../../styles/Home.scss';
const Tab1Content = () => (
    <div class="mb-3 row">
        <label for="" class="col-sm-6 col-form-label"><strong>Nombre</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Fono</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Correo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Dirección</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Ciudad</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Cargo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

    </div>
);

const Tab2Content = () => (
    <div class="mb-3 row">
        <label for="" class="col-sm-4 col-form-label"><strong>Nombre</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label">Carlos Vilches</label>
        </div>

        <label for="" class="col-sm-4 col-form-label"><strong>Fono</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label">97645345 </label>
        </div>

        <label for="" class="col-sm-4 col-form-label"><strong>Correo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label">cvilches@gmail.com </label>
        </div>

        <label for="" class="col-sm-4 col-form-label"><strong>Dirección</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label">Providencia#14000</label>
        </div>

        <label for="" class="col-sm-4 col-form-label"><strong>Ciudad</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label">Santiago</label>
        </div>

        <label for="" class="col-sm-4 col-form-label"><strong>Cargo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label"></label>
        </div>

    </div>
);

const Tab3Content = () => (
    <div class="mb-3 row">
        <label for="" class="col-sm-6 col-form-label"><strong>Nombre</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Fono</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Correo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Dirección</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Ciudad</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Cargo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

    </div>
);

const Tab4Content = () => (
    <div class="mb-3 row">
        <label for="" class="col-sm-6 col-form-label"><strong>Nombre</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Fono</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Correo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"> </label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Dirección</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-7 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Ciudad</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

        <label for="" class="col-sm-6 col-form-label"><strong>Cargo</strong></label>
        <div class="col-sm-6">
            <label for="" class="col-sm-6 col-form-label"></label>
        </div>

    </div>
);

const Timeline = () => (
    <div className='containerbar'>
      <ul className='progressbar'>
          <li className='active'>Reunión Agendada</li>
          <li className='active'>Trato Creado</li>
          <li className='active'>Primera Reunión</li>
          <li className='active'>Levantamiento o Preventa</li>
          <li>Propuesta Enviada/ Negociación</li>
          <li>Piloto</li>
          <li>Listo para Cierre</li>
          <li>Implementando</li>
          <li>Facturando</li>
          <li>Congelado</li>
          <li>Cerrado Pedido</li>
          <li>Pedido Realizado</li>
      </ul>
    </div>
  );
  



function LevantamientoForm() {

    <CardContent>
    <Grid container columns={24}  >


      <Grid item xs={4}>
      <Typography  sx={{  fontSize:10 , fontWeight:'bold', mb:0.2}} align="left">
      Tipo Empresa
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold', mb:0.1}} align="left">
Pais
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Razón Social
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
RUT
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Dirección
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Giro
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Rubro
</Typography>
      </Grid>
      <Grid item xs={7} >
      <Typography  sx={{  fontSize:10 ,  borderBottom: 0.1, ml:0.5 }} align="left">
      Holding
</Typography>

<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Chile
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Mline SPA
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
76.605.374-2
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Talca 537
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Desarrollos
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Informática TI
</Typography>
      </Grid>
      <Grid item xs={4} sx={{   ml:1 }}>
      <Typography  sx={{  fontSize:10 , fontWeight:'bold', mb:0.2}} align="left">
      Tipo Empresa
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold', mb:0.1}} align="left">
Pais
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Razón Social
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
RUT
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Dirección
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Giro
</Typography>
<Typography  sx={{  fontSize:10 , fontWeight:'bold' , mb:0.1}} align="left">
Rubro
</Typography>
      </Grid>
      <Grid item xs={8} >
      <Typography  sx={{  fontSize:10 ,  borderBottom: 0.1, ml:0.5 }} align="left">
      Holding
</Typography>

<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Chile
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Mline SPA
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
76.605.374-2
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Talca 537
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Desarrollos
</Typography>
<Typography  sx={{  fontSize:10,  borderBottom: 0.5, ml:0.5 }} align="left">
Informática TI
</Typography>
      </Grid>
    </Grid>
   </CardContent>

    return (

        <div>
<NavbarPage/> 
<div className="container ">
<div className='form-content'>
                <div className="row" >

                    <div className="col-sm g-3 align-items-center">
                        <h5>Datos Cliente</h5>

                        <div class="mb-3 row">
                            <label for="" class="col-sm-6 col-form-label"><strong>Tipo Empresa</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Holding </label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>Pais</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Chile </label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>Razón Social</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Mline SPA </label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>RUT</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-7 col-form-label">76.605.374-2 </label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>Dirección</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Talca 537 </label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>Giro</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Desarrollos</label>
                            </div>

                            <label for="" class="col-sm-6 col-form-label"><strong>Rubro</strong></label>
                            <div class="col-sm-6">
                                <label for="" class="col-sm-6 col-form-label">Informatica TI</label>
                            </div>

                        </div>




                    </div>


                    <div className="col-sm g-3 align-items-center">
                        <h5>Empresas Holding</h5>




                    </div>

                    <div className="col-sm g-3 align-items-center">
                        <h5>Contactos</h5>

                        <Tabs>
                            <Tab label="Comercial">
                                <Tab1Content />
                            </Tab>
                            <Tab label="Facturación">
                                <Tab2Content />
                            </Tab>
                            <Tab label="Contraparte">
                                <Tab3Content />
                            </Tab>
                            <Tab label="Despachos">
                                <Tab4Content />
                            </Tab>
                        </Tabs>


                    </div>
                </div>
                </div>

                {/* mitad */}
<div>
    <Timeline></Timeline>
</div>




<div className='form-content'>
                <form>
                    <div className="row" >

                        <div className="col-sm g-3 align-items-center">
                            <h5>Conoce tu empresa</h5>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-6 col-form-label">Cual es su actividad</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Existe Ppto para control</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Quienes evaluan Ppto </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Tienen sucursales</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Tienen sucursales</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Que registro de controles tienen</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Que software de sueldo tienen</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-10 col-form-label">Levanta dolores</label>
                                <input type="text" style={{ width: '395px', height: '400px' }} class="form-control" id="" />
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-10 col-form-label">Como se imaginan la solución de sus dolores</label>
                                <input type="text" style={{ width: '395px', height: '400px' }} class="form-control" id="" />
                            </div>
                        </div>


                        <div className="col-sm g-3 align-items-center">
                            <h5>Servicios</h5>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-5 col-form-label">Seleccionar servicio</label>

                                <div class="col-sm-4">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>seleccion</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>

                                <div class="col-sm-3">
                                    <button type="button" class="btn btn-success">Success</button>
                                </div>
                            </div>


                            <br></br>
                            <h6>Servicios seleccionados</h6>


                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Control de asistencia</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='Tipo reloj' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Dotación sucursales</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Dotación matriz</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Dotación terceros</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <br></br>
                            <h6>Solicitar apertura centros / suc</h6>


                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Acceso a internet</label>
                                <div class="col-sm-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="accesointernet" id="accesointernet" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="accesointernet" id="accesointernet" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Necesita bateria</label>
                                <div class="col-sm-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="bateria" id="bateria" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="bateria" id="bateria" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <h6>Accesorios adicionales</h6>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-4 col-form-label">Impresora</label>
                                <div class="col-sm-4">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="impresora" id="impresora" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="impresora" id="impresora" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-4 col-form-label">Lector CI</label>
                                <div class="col-sm-4">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorCI" id="LectorCI" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorCI" id="LectorCI" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-4 col-form-label">Lector HDI</label>
                                <div class="col-sm-4">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorHDI" id="LectorHDI" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorHDI" id="LectorHDI" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>


                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Desarrollo </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Integracio ERP </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <h6>Control acceso</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Cantidad Torniquetes </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Cantidad Puerta imantada </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Cantidad Puerta chapa EL. </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Tarjeta acceso</label>
                                <div class="col-sm-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="tarjetaacceso" id="tarjetaacceso" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">ID</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="tarjetaacceso" id="tarjetaacceso" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">HID</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Servicio app acceso</label>
                                <div class="col-sm-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="servicioacceso" id="servicioacceso" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="servicioacceso" id="servicioacceso" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>

                            <h6>Control de visitas</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Estimación de visitas </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <h6>Embarcados 686</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Dotación embarcados </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <h6>Servicio de comedor</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Cantidad de equipos </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                        </div>

                        <div className="col-sm g-3 align-items-center">
                            <h5>Acciones compromisos</h5>
                            <h6>Enviar cotizaciones</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Cotizar </label>
                                <div class="col-sm-6">
                                    <label for="" class="col-sm-6 col-form-label">Fecha </label>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Enviar a </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Comentarios</label>

                                <input type="text" style={{ width: '395px', height: '400px' }} class="form-control" placeholder='' id="" />
                            </div>

                            <h6>Enviar documentos</h6>
                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Correo servicios </label>
                                <div class="col-sm-6">
                                    <label for="" class="col-sm-6 col-form-label">Fecha </label>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Correo Certificación </label>
                                <div class="col-sm-6">
                                    <label for="" class="col-sm-6 col-form-label">Fecha </label>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Correo ficha tecnica </label>
                                <div class="col-sm-6">
                                    <label for="" class="col-sm-6 col-form-label">Fecha </label>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="" class="col-sm-6 col-form-label">Comentarios</label>

                                <input type="text" style={{ width: '395px', height: '400px' }} class="form-control" placeholder='' id="" />
                            </div>

                            <div class="mb-3 row">
                                <div class="col-sm-10">
                                    <button type="button" class="btn btn-primary">Guardar</button>

                                    <button type="button" class="btn btn-success">Guardar y cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
     
        </div >
       

    );
}

export default LevantamientoForm;
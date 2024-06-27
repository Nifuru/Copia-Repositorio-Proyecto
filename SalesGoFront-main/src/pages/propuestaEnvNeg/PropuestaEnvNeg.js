import React from 'react';
import '../../styles/PropuestaEnvNeg.scss'
import NavbarPage from '../../components/NavbarPage';


function PropuestaEnvNegform() {
    return (
      
<div >
<NavbarPage/> 
        <div style={{ display: 'flex', padding: '10px' }}>
        <div class="container">
            <div class='form-content h-100'>
                <form class='h-100'>
                    <div class="row h-100" >

                        <div class="col-lg-3 g-3 align-items-center">
                            <h5>Servicios</h5>
                            <h6>Servicios seleccionados</h6>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Control de asistencia</label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" placeholder='Tipo reloj' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Dotación sucursales</label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" id="" placeholder='Ingrese Dígito/s' />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Dotación matriz</label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" id="" placeholder='Ingrese Dígito/s' />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Dotación terceros</label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" id="" placeholder='Ingrese Dígito/s' />
                                </div>
                            </div>

                            <br></br>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Acceso a internet</label>
                                <div class="col-lg">
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

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Necesita bateria</label>
                                <div class="col-lg">
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
                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Accesorios Adicional</label>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Impresora</label>
                                <div class="col-sm-5">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="impresora" id="impresora" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="impresora" id="impresora" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Lector CI</label>
                                <div class="col-sm-5">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorCI" id="LectorCI" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorCI" id="LectorCI" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Lector HDI</label>
                                <div class="col-sm-5">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorHDI" id="LectorHDI" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Si</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="LectorHDI" id="LectorHDI" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Desarrollo </label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Integracio ERP </label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Control de Acceso</label>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Cantidad Torniquetes </label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" placeholder='Ingrese Cantidad' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Cantidad Puerta imantada </label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" placeholder='Ingrese Cantidad' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Cantidad Puerta chapa EL. </label>
                                <div class="col-lg">
                                    <input type="text" class="form-control" placeholder='Ingrese Cantidad' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Tarjeta acceso</label>
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

                            <div class="mb-2 row">
                                <label for="" class="col-sm-5 col-form-label">Servicio app acceso</label>
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

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Control de Visitas</label>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Estimación de visitas </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Embarcados 686</label>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Dotación embarcados </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label labelNegrita" >Servicio de Comedor</label>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Cantidad de equipos </label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 g-3 align-items-center">
                            <h5>Crear Cotización</h5>
                            <br>
                            </br>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">CMR Cliente Cuenta </label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control" placeholder='' id="" value={1} />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">Fecha Emisión </label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">Fecha Vencimiento</label>
                                <div class="col-sm-2">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Datos Facturación</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Razón Social </label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Giro </label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">RUT </label>
                                <div class="col-lg-3">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Datos de Formulario</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">Territorio(País) </label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" placeholder='' id="" value={3} />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg col-form-label">Nombre Cotización </label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" placeholder='Ingrese el Nombre' id="" />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-5 col-form-label">Vendedor </label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder='' id="" value={17} />
                                </div>
                            </div>

                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Selección de Prodcuto</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Servicio de Asistenica</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Módulos Adicionales</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Venta de Equipos(Hardware)</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Desarrollo(s)</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Capacitaciones</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Servicio de Comedor</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Servicio de Acceso</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Arriendo de Equipos/Chips</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Visita Técnica</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Configuración Cobro de Asistencia</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-2 row">
                                <label htmlFor="" className="col-lg-4 col-form-label">Periocidad de Servicio</label>
                                <div className="col-lg-2">
                                    <input type="text" className="form-control" placeholder='' value={20} />
                                </div>
                                <div className="col-sm-3 d-flex align-items-center">
                                    <label htmlFor="" className="col-form-label text-right">Plantilla Tabla de Cobro</label>
                                </div>
                                <div className="col-lg-2">
                                    <input type="text" className="form-control" placeholder='' value={21} />
                                </div>
                            </div>

                            {/* Mensual */}
                            <div className="mb-2 row">
                                <label htmlFor="" className="col-lg-4 col-form-label text-center">Mensual</label>
                                <div className="col-lg-2">
                                    <div className="form-check d-flex align-items-center">
                                        <input className="form-check-input mr-5" type="checkbox" value="" id="flexCheckDefault1" />
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center">
                                <label htmlFor="moneda" className="col-form-label" style={{ marginRight: '100px' }}>Moneda</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="moneda"
                                        placeholder=""
                                        value={14}
                                        style={{ width: '60px' }}
                                    />
                                </div>
                            </div>

                            <div className="mb-2 row">
                                <label htmlFor="" className="col-lg-4 col-form-label text-center">Semestral</label>
                                <div className="col-lg-2">
                                    <div className="form-check d-flex align-items-center">
                                        <input className="form-check-input mr-5" type="checkbox" value="" id="flexCheckDefault1" />
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center">
                                <label htmlFor="modalidad" className="col-form-label" style={{ marginRight: '80px' }}>Modalidad de Cobro</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modalidad"
                                        placeholder=""
                                        value={19}
                                        style={{ width: '60px' }}
                                    />
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-4 col-form-label text-center">Anual</label>
                                <div class="col-lg-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Potencial de Usuarios</label>

                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Usuarios que Marcan(Valor de Referencia)</label>

                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder='' id="" />
                                </div>
                            </div>



                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Términos y Condiciones</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Agregar Término y Condiciones</label>
                                <div class="col-lg">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="mb-2 row">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-1 labelNegrita">Opciones</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Recibir PDF por Correo</label>
                                <div class="col-lg">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-6 col-form-label">Mostrar Tablas de Cobro en PDF</label>
                                <div class="col-lg">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-sm-9 col-form-label">Comentarios</label>

                                <div class="col-sm-3">
                                    <label for="" class="col-form-label text-right">Fecha de Valor de UF/USD</label>
                                </div>
                                <di v class="col-lg-9">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        placeholder="Escribe tus comentarios aquí"
                                    ></textarea>
                                </di>
                                <div class="col-lg-3">
                                    <input type="text" class="form-control" id="" placeholder='' />
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="" class="col-sm-9 col-form-label">Notas</label>

                                <div class="col-lg-9">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        placeholder="Ejecutivo Comercial:
                                        Teléfono:
                                        La presente cotización tendrá una vigencia de 30
                                        días contadas a partir de la fecha indicada al"
                                    ></textarea>
                                    <br></br>
                                </div>
                            </div>
                            <label for="" class="col- col-form-label">La fecha y valor de la UF vienen incluidos siempre en las Notas, por lo que no es necesario agregarlos
                                manualmente.</label>
                            <br></br>
                            <br></br>
                            <div class="mb-2 row">
                                <label for="" class="col-lg-4 col-form-label">Cotización Lista</label>
                                <div class="col-lg">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label class="form-check-label" for="flexCheckDefault1">

                                        </label>
                                    </div>
                                </div>
                            </div>
                            <br></br>



                            <div class="mb-2 row">
                                <div class="col-sm-10">
                                    <button type="button" class="btn btn-primary">Guardar</button>

                                    <button type="button" class="btn btn-success">Guardar y cerrar</button>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-5 g-3 align-items-center">
                            <h5>Resumen Cotizaciones</h5>
                            <br>
                            </br>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td class="col-sm-1 labelNegrita">Fecha</td>
                                        <td class="col-sm-2 labelNegrita">ID Folio</td>
                                        <td class="col-sm-4 labelNegrita">Nombre Cotización</td>
                                        <td class="col-sm-1 labelNegrita">Estado</td>
                                        <td class="col-sm-1 labelNegrita">Alerta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </form>
            </div>
        </div >
    </div >
    </div>
);
}

export default PropuestaEnvNegform;
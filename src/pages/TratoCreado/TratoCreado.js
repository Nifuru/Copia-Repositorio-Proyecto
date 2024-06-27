import React, { useState } from 'react';
import { Form, Button, Container, Table, Card, Row, Col } from 'react-bootstrap';
import NavbarPage from '../../components/NavbarPage';
import clienteAxios from '../config/clienteAxios';
const TratoContactoForm = ({ onSubmit }) => {
  const [contactoNombre, setContactoNombre] = useState('');
  const [contactoFono, setContactoFono] = useState('');
  const [contactoCorreo, setContactoCorreo] = useState('');
  const [contactoDireccion, setContactoDireccion] = useState('');
  const [contactoCiudad, setContactoCiudad] = useState('');
  const [contactoCargo, setContactoCargo] = useState('');

  const handleContactoSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      contactoNombre,
      contactoFono,
      contactoCorreo,
      contactoDireccion,
      contactoCiudad,
      contactoCargo,
    });
  };

  return (
    
    <Container fixed className="datocontacto">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contacto</Card.Title>
              <Form onSubmit={handleContactoSubmit}>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Contacto Comercial</td>
                    </tr>
                    <tr>
                      <td>Nombre</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese nombre del contacto"
                          value={contactoNombre}
                          onChange={(e) => setContactoNombre(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Fono</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese teléfono del contacto"
                          value={contactoFono}
                          onChange={(e) => setContactoFono(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Correo</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese correo del contacto"
                          value={contactoCorreo}
                          onChange={(e) => setContactoCorreo(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Dirección</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese dirección del contacto"
                          value={contactoDireccion}
                          onChange={(e) => setContactoDireccion(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Ciudad</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese ciudad del contacto"
                          value={contactoCiudad}
                          onChange={(e) => setContactoCiudad(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Cargo</td>
                      <td colSpan="3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese cargo del contacto"
                          value={contactoCargo}
                          onChange={(e) => setContactoCargo(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const TratocreadoForm = () => {
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [pais, setPais] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [rut, setRut] = useState('');
  const [direccion, setDireccion] = useState('');
  const [giro, setGiro] = useState('');
  const [rubro, setRubro] = useState('');

  const handleClienteSubmit = async (clienteData) => {
    console.log(clienteData);
    console.log(tipoEmpresa)

    try {
    
      const { data1 } = await clienteAxios.post('/clientes', {

        holding: "prueba",
        tipo_cliente: "Nuevo",
        razon_social: razonSocial,
        nombre_fantasia: "prueba NombreFantasia",
        rut: rut,
        pais: pais,
        direccion: direccion,
        ciudad: "prueba",
        region_o_zona: "prueba",
        giro: giro,
        industria: rubro,
        sector: "unico",
        nombre_representante: clienteData.contactoNombre,
        fono_representante: clienteData.Fono,
        correo_representante: clienteData.contactoCoreeo,
        dueno_cuenta: "admin"
//        nombres: (dataform.get('nombreProyecto')),
//        apellidos: (dataform.get('codigoProyecto')),
//        cedula: (dataform.get('descripcion')),
//        correo: dataform.get('email'),
//        telefono: dataform.get('textmask'),
//        //fnacimiento:new Date(selectedDate).toLocaleDateString('es-ES') ,
//        ocupacion: dataform.get('ocupacion'),
//        direccion: dataform.get('direccion'),
      })
      .then(function (response) {
          //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
          //setAuth(data)
          //event.target.reset();
       
     })
     .catch(function (error) {
//        event.preventDefault();
      
    
//        console.log('error')
//       // document.getElementById(":r7:").value=''; 
     });

     console.log(data1)
    
 } catch (error) {
    
  }

  };

  return (
    <div>
    <NavbarPage/> 
    <div className="container ">
    <div className="row" >
      <Container fixed className="datocliente">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Datos Cliente</Card.Title>
                <Form onSubmit={(e) => handleClienteSubmit(e)}>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Tipo Empresa</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese tipo de empresa"
                            value={tipoEmpresa}
                            onChange={(e) => setTipoEmpresa(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>País</td>
                        <td>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese país"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>RUT</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese RUT"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Giro</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese giro"
                            value={giro}
                            onChange={(e) => setGiro(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Razón Social</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese razón social"
                            value={razonSocial}
                            onChange={(e) => setRazonSocial(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Dirección</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese dirección"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Rubro</td>
                        <td colSpan="3">
                          <Form.Control
                            type="text"
                            placeholder="Ingrese rubro"
                            value={rubro}
                            onChange={(e) => setRubro(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </Container>
      <div> <TratoContactoForm onSubmit={handleClienteSubmit} /></div>
      
      
    </div>
    </div>
    </div>
  );
};

export default TratocreadoForm;

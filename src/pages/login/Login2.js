import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from '../config/clienteAxios';
import logo from "../../assets/Logo_SaleGo.png";
function Login2() {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [isValidated, setIsValidated] = useState(true);

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(contraseña)
    console.log(user)
    setIsValidated(true);
    if (isValidated) {
      try {

        const { data } = await clienteAxios.post('/login/usuario/', {
          email: user,
          password: contraseña
        })
          .then(function (response) {
            // setAlerta({})
            console.log(response.data.idToken)
            localStorage.setItem('token', JSON.stringify(response.data))
            //setAuth(data
            navigate("/home");
          })
          .catch(function (error) {
            console.log(error);
            //     setAlerta(true);
            //     setTimeout(function(){
            //     setAlerta(false);
            // }, 3000);
            //   setAlerta(false);
          });

        // setAlerta({})
        console.log(data)

      } catch (error) {
        // setAlerta({
        //     msg: 'errr',
        //     error: true
        // })

      }
    }



  };

  return (

    <section className="vh-100">
      <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdb-ui-kit/css/mdb.min.css" />

      </header>

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card border-radius: 1rem; box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); ">
              <div className="row g-0" >
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img className="imglogin" src={logo}
                    alt="login form" style={{ width: '80%', height: '50%', objectFit: 'cover', marginLeft: 20, marginTop: 80 }} />
                </div>
                <div className="col-md-6 col-lg-5 d-flex align-items-center" >
                  <div className="card-body p-4 p-lg-6 text-black">
                    {/* para cambiar el tamaño de la imagen (logo)
                 */}
                    <form className={`needs-validation ${isValidated ? "was-validated" : ""}`}  onSubmit={handleSubmit}>

                      <div className="d-flex align-items-center mb-3 pb-1" >
                        <i className="fas fa-cubes fa-2x me-3 " />
                        <img src="" alt="" />
                        <span className="h1 fw-bold mb-1">Bienvenido</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3 letter-spacing: 1px;">Ingresa a tu Cuenta</h5>

                      <div className="form-floating mb-3"  >
                        <input type="text" name="user" id="user" className="form-control" placeholder="usuario" onChange={e => setUser(e.target.value)} required />
                        <label htmlFor="floatingInput">Correo</label>
                        {/* <div className="valid-feedback">¡Ok válido!</div>
                    <div className="invalid-feedback">Completa el campo</div> */}
                      </div>
                      <br></br>

                      <div className="form-floating mb-3">
                        <input type="password" name="contraseña" id="contraseña" className="form-control" placeholder="Contraseña" onChange={e => setContraseña(e.target.value)} required />
                        <label htmlFor="floatingInput">Contraseña</label>
                        {/* <div className="valid-feedback">¡Ok válido!</div>
                    <div className="invalid-feedback">Completa el campo</div> */}
                      </div>
                      <br></br>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Ingresar</button>
                      </div>

                      <a className="small text-muted" href="/NavbarNav">¿Olvidaste la contraseña?</a>
                      <p className="mb-5 pb-lg-2 color: #393f81;">¿No tienes una cuenta? <a href="/Registrar">Registrate aquí</a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )

}

export default Login2;

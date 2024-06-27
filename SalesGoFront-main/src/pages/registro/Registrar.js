import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from "react-router-dom";
function Registrar() {

  const [valueName, setValueName] = useState("");
  const [valueApellido, setValueApellido] = useState("");
  const [valueCedula, setValueCedula] = useState("");
  const [valueDireccion, setValueDireccion] = useState("");
  const [valueCorreo, setValueCorreo] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerta, setAlerta] = useState('')
  const [alertaF, setAlertaF] = useState('')
  const handleSubmit = async (event)=>{

    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    let text1 = password;
    let text2 = confirmPassword;
    let result = text1.localeCompare(text2);
console.log(valueName)
console.log(valueCorreo)
console.log(password)
    console.log(result);
    if (result == 0) {
      setAlerta(true);
      setAlertaF(false);
      try {
      
        const { data1 } = await clienteAxios.post('/perfil/usuario/', {  
         password:password,
           nombre_usuario:valueName,
          correo_usuario:valueCorreo
       
        
        })
        .then(function (response) {
          navigate("/");
           
        })
        .catch(function (error) {
          console.log(error)
         // document.getElementById(":r7:").value='';  
        });
      
        
       
        
    } catch (error) {
         
    }
   console.log('son iguales')
   }else{
    setAlerta(false);
    setAlertaF(true);
    console.log(' no son iguales')
   }
 
  
}
  return (
    <section className="vh-100">
      <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdb-ui-kit/css/mdb.min.css" />
      </header>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card border-radius: 1rem; box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); ">
              <div class="row g-0" >
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img className="imglogin" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center" >
                  <div class="card-body p-4 p-lg-7 text-black">

                    <form className='align-items-center needs-validate' >
                      <div class="d-flex align-items-center mb-3 pb-1" >

                        <img src="" alt="" />
                        <span class="h1 fw-bold mb-0">Registrar</span>
                      </div>
                      <div>
                        <h5 class="fw-normal mb-3 pb-3 letter-spacing: 1px;">Ingresa a tus datos</h5>
                      </div>

                      <div class="form-floating mb-4">
                      <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  sx={{ bgcolor: 'white'}}
                  value={valueName}
                  onChange={event => setValueName(event.target.value)}
                />
                      </div>

                      <div class="form-floating mb-4">
                      <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  sx={{ bgcolor: 'white'}}
                  value={valueCorreo}
                  onChange={event => setValueCorreo(event.target.value)}
                />
                      </div>


                      <div class="form-floating mb-4">
                      <TextField
              margin="normal"
              
              error ={ alertaF? true : false}
              required
              fullWidth
              id="password"
              label= { alertaF? "Contraseña no Coincide" : 'Contraseña'}
              name="password"
              type={showPassword ? 'text' : 'password'}
              sx={{ mt: 3, bgcolor:'white' }}
              value={password}
                onChange={ e => setPassword(e.target.value)}
                autoComplete="current-password"
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Cambiar visibilidad de la contraseña"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
            />

           <TextField
              margin="normal"
              required
              fullWidth
              error ={ alertaF? true : false}
              id="confirmPass"
              label={ alertaF? "Contraseña no Coincide" : ' Confirmar Contraseña'}
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              sx={{ mt: 3, bgcolor:'white' }}
              value={confirmPassword}
                onChange={ e => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Cambiar visibilidad de la contraseña"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
            />
            
                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-primary btn-lg btn-block" onClick={handleSubmit} >Registrar</button>
                      </div>
                      <div>

                        <a class="small text-muted " href="/">Volver al inicio</a>
                      </div>
                      <a href="#!" class="small text-muted">Terms of use.</a>
                      <a href="#!" class="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registrar;

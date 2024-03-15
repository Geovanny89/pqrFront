import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Logo from '../../assets/ctc-logo.png';
import './login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/action'; // Importa la acción de login

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(login(formData));
  
      if (response.data.user.role === "admin") {
        // Almacena el token de sesión en las cookies
        Cookies.set('session', response.data.token, { expires: 2 });  // Configura la expiración según tus necesidades
        navigate('/home');
      } else if (response.data.user.role === "user") {
        Cookies.set('session', response.data.token, { expires: 2 });
        navigate('/homeUser');
      } else {
        setIsUserRegistered(false);
      }
    } catch (error) {
      setIsUserRegistered(false);
      console.error('Error al iniciar sesión:', error.message);
    }
  };


  return (
    <Container component="main" maxWidth="xs" className="container-login">
      <div className="login-content">
        <div className="logo-container">
          <img src={Logo} alt="Img Not Found" />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Iniciar Sesión
          </Button>
        </form>
        
      </div>
      {!isUserRegistered && (
          <Typography variant="body2" color="error">
            No estás registrado. Por favor, comunícate con el administrador.
          </Typography>
        )}
    </Container>
  );
}

// import React, { useState } from 'react';
// import { TextField, Button, Container } from '@mui/material';
// import Logo from '../../assets/ctc-logo.png';
// import './login.css';
// import { useDispatch } from 'react-redux';
// import { setSession } from '../../Redux/action';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import axios from 'axios';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loginSucces, setLoginSucces] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!e.target.checkValidity()) {
//       console.log('No enviar');
//     } else {
//       setLoginSucces(true);
//       try {
//         const response = await axios.post('/login', formData, {
//           withCredentials: true,
//         });
//         if (response.status === 200) {
//           const expiresIn = 2 / 24;
//           Cookies.set('session', response.data.token, { expires: expiresIn });
//           dispatch(setSession(response.data.user));
//           setFormData({
//             email: '',
//             password: '',
//           });
//           navigate('/home'); // Redirige a la página correcta después del inicio de sesión
//         } else {
//           console.log('Invalid server response:', response);
//           setFormData({
//             email: '',
//             password: '',
//           });
//         }
//       } catch (error) {
//         setFormData({
//           email: '',
//           password: '',
//         });
//         console.log(error);
//         if (error.response && error.response.status === 401) {
//           window.alert('Contraseña incorrecta.');
//         } else if (error.response && error.response.status === 404) {
//           window.alert('Usuario no existe, por favor regístrese.');
//         } else {
//           window.alert('Error de servidor, por favor inténtelo nuevamente.');
//         }
//       }
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" className="container-login">
//       <div className="login-content">
//         <div className="logo-container">
//           <img src={Logo} alt="Img Not Found" />
//         </div>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <Button type="submit" fullWidth variant="contained" color="primary">
//             Iniciar Sesión
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// }

// e.preventDefault();
// try {
//   dispatch(login(formData));
//   setLoginSucces(true);
  
//   navigate('/home'); 
// } catch (error) {
//   console.log('Error al iniciar sesion', error.message);
//   setLoginSucces(false);
// }
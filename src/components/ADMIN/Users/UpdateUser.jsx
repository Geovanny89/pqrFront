import React, { useState } from 'react'
import { TextField, Button, Container, Typography, Grid, Snackbar } from '@mui/material';

import { useDispatch } from 'react-redux';
import './updateUser.css'
import { updateUser } from '../../../Redux/action';

export default function UpdateUser({id,onClose}) {
    const dispatch=useDispatch();
    const [input, setInput]=useState({
      name:'',
      lastName:'',
      userName:'',
      email:''
    })

    const [success,setSuccess]= useState(false);
    const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit =async (e) => {
      e.preventDefault();
      try {
        await dispatch(updateUser(id,input))
        setSuccess(true);
        onClose();
      } catch (error) {
        console.log(error)
        throw(error)
      }
    }
    const handleSnackbarClose = () => {
      setSuccess(false);
    };
  return (
    <Container component="main" maxWidth="lg" className='contenedor-register'>
      {/* {updateUser && (
        <div className="success-alert">
          <Typography variant="body1">Usuario registrado correctamente.</Typography>
        </div>
      )}
      {emailExists && (
        <div className="error-alert">
          <Typography variant="body1">El correo electrónico ya está registrado.</Typography>
        </div>
      )} */}
      <div>
      
        <form onSubmit={handleSubmit}>
        <Typography variant="h5">Actualizar Usuario</Typography>
          <Grid container spacing={2} maxHeight="auto">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Last Name"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Username"
                name="userName"
                value={input.userName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={input.email}
                onChange={handleChange}
              />
            </Grid>
           
            <Grid item xs={6}>
              <Button type="submit" fullWidth variant="outlined" color="primary">
                Actualizar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button href='/home'  variant="outlined" color="secondary"  style={{ fontSize: '14px', marginTop:'15px'}}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="¡El Tipo de PQR se actualizó exitosamente!"
        sx={{ bottom: '50px' }}
      />
      </div>
    </Container>
  )
}

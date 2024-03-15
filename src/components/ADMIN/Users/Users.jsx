import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

import { useDispatch } from 'react-redux';
import { createUser } from '../../../Redux/action/index';

export default function Users() {
  const dispatch = useDispatch();
  const [createUsers, setCreateusers] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value === '')) {
        alert('Todos los campos son obligatorios');
        return;
      }
  
    try {
      await dispatch(createUser(formData));
      console.log(formData);
      setCreateusers(true);
      setEmailExists(false);
      setFormData({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === 'El correo electrónico ya está registrado') {
        setEmailExists(true);
        setCreateusers(false);
      } else {
        console.error('Error during registration:', error.message);
        setCreateusers(false);
        setEmailExists(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="lg" className='contenedor-register'>
      {createUsers && (
        <div className="success-alert">
          <Typography variant="body1">Usuario registrado correctamente.</Typography>
        </div>
      )}
      {emailExists && (
        <div className="error-alert">
          <Typography variant="body1">El correo electrónico ya está registrado.</Typography>
        </div>
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} maxHeight="auto">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
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
                value={formData.lastName}
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
                value={formData.userName}
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
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" fullWidth variant="outlined" color="primary">
                Register
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button href='/home'  variant="outlined" color="secondary"  style={{ fontSize: '14px', marginTop:'15px'}}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

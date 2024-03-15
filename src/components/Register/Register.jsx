import React, { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux'
import { register } from '../../Redux/action';
import Logo from '../../assets/ctc-logo.png';
import './register.css'


export default function Register() {
    const dispatch = useDispatch();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    });
    console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Dispatches the register action with the form data
            await dispatch(register(formData));
            console.log('Registration successful');
            setRegistrationSuccess(true);
            setEmailExists(false);
            setFormData({
                name: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
            });
            // You can redirect the user or show a success message here
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === 'El correo electrónico ya está registrado') {
                setEmailExists(true);
                setRegistrationSuccess(false);
            } else {
                console.error('Error during registration:', error.message);
                // Handle other registration errors (display an error message, etc.)
                setRegistrationSuccess(false);
                setEmailExists(false);
            }
        }

    };
    return (
        <Container component="main" maxWidth="xs" className='contenedor-register'>
            {registrationSuccess && (
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
                <Typography component="h1" variant="h5">
                    <a href="/login"><img src={Logo} alt="Img Not Found" width="100px" /></a>
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Username"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
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
                    <div className="button-register">
                    <Button type="submit" fullWidth variant="contained" id='register' color="primary">
                        Register
                    </Button>
                    <Button href='/login' id='login'  variant="contained" color="secondary">
                        Volver
                    </Button>
                    </div>
                </form>
                
            </div>
        </Container>
    )
}

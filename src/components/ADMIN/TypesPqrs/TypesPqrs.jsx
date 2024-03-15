
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { typePqr } from '../../../Redux/action';
import './typespqrs.css';


export default function TypesPqrs() {
  const dispatch = useDispatch();
  const [typeName, setTypeName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true); // Nuevo estado para controlar la apertura/cierre del formulario

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!typeName.trim()) {
      setError('El nombre del tipo de PQRS no puede estar vacío');
      return;
    }

    try {
      const response = await dispatch(typePqr({ name: typeName }));
      console.log('Respuesta del servidor:', response);

      if (response.error) {
        setError(response.error); // Manejar el mensaje de error específico
        setSuccessMessage('');

      } else {
        setTypeName('');
        setError('');
        setSuccessMessage('Tipo de PQRS creado exitosamente');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setError('Error al crear el tipo de PQRS');
      setSuccessMessage('');
    }
  };
  const handleCancel = () => {
    // Cerrar el formulario al hacer clic en Cancelar
    setIsFormOpen(false);
  };

  return (
    isFormOpen && (
      <Box component="form" className="formContainer" onSubmit={handleSubmit}>
        
        <TextField
          label="Nombre del tipo de PQRS"
          variant="outlined"
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <div className='botones-tipes'>
          <Button type="submit" >
            Crear
          </Button>
          <Button type="button" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
        <div className='mesaje-conf'>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

      </Box>
    )
  )
}

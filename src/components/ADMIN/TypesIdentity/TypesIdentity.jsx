import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTipeIdentity } from '../../../Redux/action/index';
import { TextField, Button, Snackbar } from '@mui/material';

export default function TypesIdentity() {
  const dispatch = useDispatch();
  const [tipeDocument, setTipeDocument] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTipeDocument(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tipeDocument) {
      setError('El tipo de documento no puede estar vacío');
      return;
    }

    try {
      // Dispatch la acción para crear el tipo de identidad
      await dispatch(createTipeIdentity({ tipeDocument }));
      setSuccess(true);
      setTipeDocument(''); // Limpiar el campo después de la creación exitosa
    } catch (error) {
      console.error('Error al crear el tipo de identidad:', error);
      setError('Error al crear el tipo de identidad');
    }
  };

  const handleSnackbarClose = () => {
    setSuccess(false);
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Tipo de Documento"
          variant="outlined"
          fullWidth
          value={tipeDocument}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Crear Tipo de Identidad
        </Button>
      </form>
      <Snackbar
        open={success || !!error}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={success ? 'Tipo de Identidad creado exitosamente' : error}
        sx={{ top: '-350px', }}
        style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
      />
    </div>
  );
}

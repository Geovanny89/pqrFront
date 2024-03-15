
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { updateTipePqrs } from '../../../Redux/action/index';
import { TextField, Button, Snackbar } from '@mui/material';

export default function UpdatePqrs({ id, onClose }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!input.name) {
      alert('Por favor, completa todos los campos');
      return;
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(input.name)) {
      alert('Por favor, ingresa un nombre válido (solo letras)');
      return;
    }
    try {
      // Dispatch la acción de actualización
      await dispatch(updateTipePqrs(id, input));
      setSuccess(true);
      onClose(); // Cerrar el componente después de la actualización
    } catch (error) {
      console.error('Error al actualizar el tipo PQRS:', error);
      // Manejar el error, mostrar un mensaje de error, etc.
    } // Cerrar el componente después de la actualización
  };

  const handleSnackbarClose = () => {
    setSuccess(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Tipo de PQRS"
          variant="outlined"
          fullWidth
          name="name"
          value={input.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Actualizar
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Cancelar
        </Button>
      </form>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="¡El Tipo de PQR se actualizó exitosamente!"
        sx={{ bottom: '50px' }}
      />
    </div>
  );
}

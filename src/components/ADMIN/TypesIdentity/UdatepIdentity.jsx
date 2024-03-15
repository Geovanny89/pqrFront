import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { updateTipeDocument } from '../../../Redux/action/index';
import { TextField, Button, Snackbar } from '@mui/material';

export default function UdatepIdentity({id,onClose}) {
    const dispatch=useDispatch();
    const [input,setInput]=useState({
        tipeDocument:'',
    })
    const [success,setSuccess]=useState(false)
    const handleChange=(e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = async(e)=> {
        e.preventDefault();
        if(!input.tipeDocument){
            alert('Por favor, completa todos los campos');
            return;
        }
        try {
            await dispatch(updateTipeDocument(id,input))
            setSuccess(true)
            
        } catch (error) {
            console.error('Error al actualizar el tipo de Documento:', error);
        }
    }
    const handleSnackbarClose = () => {
        console.log('Cerrando Snackbar');
        setSuccess(false);
        onClose();
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Tipo de PQRS"
          variant="outlined"
          fullWidth
          name="tipeDocument"
          value={input.tipeDocument}
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
        message="¡El Tipo de Identidad se actualizó exitosamente!"
        sx={{ bottom: '50px' }}
      />
    </div>
  )
}

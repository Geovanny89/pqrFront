import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Container, Grid, Typography, FormControlLabel, Checkbox, Select, MenuItem, InputLabel } from '@mui/material';

import InstructionModal from '../../Modal/Instruction/InstructionModal';
import Terminos from '../../Modal/Terminos/Terminos';
import { allTipesDocument, alltipePqr, createUserPqr } from '../../../Redux/action';


const PqrsCreate = () => {
    const dispatch = useDispatch();
    const pqrsTypes = useSelector((state) => state.allTipePqrs);
    const tipesIdentity = useSelector((state) => state.allTipeIdentity);
    console.log(tipesIdentity)
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        identity: '',
        address: '',
        phone: '',
        email: '',
        description: '',
        typeId: '',
        typeDocument: '',
        file: null,
        anonymous: false, // Nuevo campo para anonimato
    });
    const [fileName, setFileName] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files, checked } = e.target;
        const file = name === 'file' ? files[0] : null;
        setFileName(file ? file.name : '');
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'anonymous' ? checked : value,
            file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        try {
            // Verificar si se ha seleccionado un archivo
            

            // Llamada a la acción para crear la PQR
            await dispatch(createUserPqr(formData));

            // Restablecer el formulario o redirigir si es necesario
            setFormData({
                name: '',
                lastName: '',
                identity: '',
                address: '',
                phone: '',
                email: '',
                description: '',
                typeId: '',
                typeDocument: '',
                file: null,
                anonymous: false,
            });
            // if (!formData.file) {
            //     console.error('Debes seleccionar un archivo');
            //     // Puedes agregar código aquí para mostrar un mensaje al usuario indicando que debe seleccionar un archivo.
            //     return;
            // }
            // Puedes agregar código aquí para mostrar un mensaje de éxito o redirigir al usuario después de enviar la PQR.
        } catch (error) {
            console.error('Error al crear la PQR:', error);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const showTerms = () => {
        setShowTermsModal(true);
    };

    const acceptTerms = () => {
        setTermsAccepted(true);
        setShowTermsModal(false);
    };

    useEffect(() => {
        dispatch(alltipePqr());
        dispatch(allTipesDocument())
        setModalIsOpen(true);
    }, [dispatch]);

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Formulario de PQR
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox name="anonymous" checked={formData.anonymous} onChange={handleChange} />}
                            label="Enviar de forma anónima"
                        />
                    </Grid>
                    {!formData.anonymous && (
                        <>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Apellido"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="tipoDocumentoLabel">Tipo de Documento</InputLabel>
                                <Select
                                    labelId="tipoDocumentoLabel"
                                    id="tipoDocumento"
                                    name="typeDocument"
                                    value={formData.typeDocument}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    {tipesIdentity.map((identity) => (
                                        <MenuItem key={identity.id} value={identity.id}>
                                            {identity.tipeDocument
                                            }
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Identidad"
                                    name="identity"
                                    value={formData.identity}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Dirección"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Teléfono"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Correo Electrónico"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>

                        </>
                    )}
                    <Grid item xs={12}>
                        <InputLabel id="tipoSolicitudLabel">Tipo de Solicitud</InputLabel>
                        <Select
                            labelId="tipoSolicitudLabel"
                            id="tipoSolicitud"
                            name="typeId"
                            value={formData.typeId}
                            onChange={handleChange}
                            fullWidth
                        >
                            {pqrsTypes.map((pqrsType) => (
                                <MenuItem key={pqrsType.id} value={pqrsType.id}>
                                    {pqrsType.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Descripción"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Grid>

                    <InstructionModal isOpen={modalIsOpen} onRequestClose={closeModal} />

                    {/* Modal de Términos y Condiciones */}
                    {showTermsModal && (
                        <Terminos isOpen={showTermsModal} onRequestClose={() => setShowTermsModal(false)} onAccept={acceptTerms} />
                    )}

                    {/* Enlace para ver los términos y condiciones */}
                    {!termsAccepted && (
                        <Typography variant="body2" color="textSecondary">
                            Para continuar, por favor{' '}
                            <button onClick={showTerms} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                ver los términos y condiciones
                            </button>
                            .
                        </Typography>
                    )}
                    <Grid item xs={12}>
                        <input
                            accept=".pdf, .doc, .docx"
                            type="file"
                            name="file"
                            onChange={handleChange}
                        />
                        {fileName && (
                            <Typography variant="body2" color="textSecondary">
                                {fileName}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default PqrsCreate;

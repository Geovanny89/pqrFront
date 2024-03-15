import React, { useEffect, useState } from 'react';
import { allTipesDocument, allUsers, alltipePqr, deletePqrs, deleteTypeIdentity, deleteUser } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewListIcon from '@mui/icons-material/ViewList';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';

import './home.css'
import TypesPqrs from '../ADMIN/TypesPqrs/TypesPqrs';


import UpdatePqrs from '../ADMIN/TypesPqrs/UpdatePqrs';
import TypesIdentity from '../ADMIN/TypesIdentity/TypesIdentity';
import UdatepIdentity from '../ADMIN/TypesIdentity/UdatepIdentity';
import Users from '../ADMIN/Users/Users';
import Detail from '../ADMIN/Users/Detail';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import UpdateUser from '../ADMIN/Users/UpdateUser';

export default function Home() {
  const dispatch = useDispatch();

  const tipePqrs = useSelector((state) => state.allTipePqrs);
  const allIdentity = useSelector((state) => state.allTipeIdentity);
  const usersAll = useSelector((state) => state.user);

  const [showTiposPqrs, setShowTiposPqrs] = useState(false);
  const [showCreateTypeForm, setShowCreateTypeForm] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [showCreateDocument, setShowCreateDocument] = useState(false);
  const [showTiposIdentiti, setShowTiposIdentity] = useState(false);
  const [seletDocument, setSeletDocument] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false)
  const [showAllUser, setShowAllUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectUser, setSelectUser] = useState(false);
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);


  //  console.log("allIdentity:", usersAll)

  useEffect(() => {
    // Dispatch la acción cuando el componente se monta
    dispatch(alltipePqr());
    dispatch(allTipesDocument())
    dispatch(allUsers())
  }, [dispatch]);
  // ver tipos 
  const handleVerTiposClick = () => {
    setShowTiposPqrs(true);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);
  };
  // crear tipos pqrs
  const handleCrearTipoClick = () => {
    setShowTiposPqrs(false);
    setShowCreateTypeForm(true);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);
  };
  //Actualizar los tipos de pqrs
  const handleUpdateClick = (type) => {
    setSelectedType(type);
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);

  };

  // Elminar tipo
  const handleDeleteTipe = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar el tipo? ");
    if (confirmDelete) {
      await dispatch(deletePqrs(id));
      dispatch(alltipePqr());
    }
  }

  //docuementos de identidad 
  const handleTipes = () => {
    setShowTiposIdentity(true)
    setShowCreateDocument(false)
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateUser(false);
    setShowAllUser(false);
  }
  //aculaizar docuemntos 
  const handleUpdateDocument = (document) => {
    setSeletDocument(document)
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);
  }
  // crear tipos de documentos 
  const handlerCreateDocument = () => {
    setShowCreateDocument(true)
    setShowTiposIdentity(false)
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);

  }
  //ELIMINAR
  const handleDeleteTypeDocument = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar el tipo de documento?");
    if (confirmDelete) {
      try {
        await dispatch(deleteTypeIdentity(id));
        dispatch(allTipesDocument()); // Actualiza la lista después de eliminar
      } catch (error) {
        console.error(error);
        // Maneja el error según tus necesidades
      }
    }
  };

  //users 
  const handleCreateUser = () => {
    setShowCreateUser(true)
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowAllUser(false);
  }
  //ver todos los usuarios
  const handleVerUsers = () => {

    setShowAllUser(true);
    dispatch(allUsers())
  }
  // ver detalle del usuario
  const hanldeDetailUser = async (user) => {
    setSelectedUser(user);
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);

  }
  //eliminar usuario
  const handleDeleteUser = async (id) => {
    const confirmDeleteUser = window.confirm("¿Estás seguro de que deseas eliminar el Usuario? ");
    if (confirmDeleteUser) {
      await dispatch(deleteUser(id))
      dispatch(allUsers())
    }
  }
  const handleUpdateUser = (user) => {
    setSelectUser(user);
    setShowUpdateUserForm(true);
    setShowTiposPqrs(false);
    setShowCreateTypeForm(false);
    setShowCreateDocument(false);
    setShowTiposIdentity(false);
    setShowCreateUser(false);
    setShowAllUser(false);

  }
  const handleCancelUpdateUser = () => {
    setSelectUser(null);
    setShowUpdateUserForm(false);
  };
  return (
    <Grid container spacing={2}>

      {/* Sección roja arriba */}
      <Grid item xs={12} >
        <NavbarAdmin />

      </Grid>
      {/* Menú en el lado izquierdo */}
      <Grid item xs={3}>
        <Paper style={{ padding: 16 }}>

          <Typography variant="h5">Menú</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><ViewListIcon /> Tipos PQRS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              
              <Typography onClick={handleCrearTipoClick}>
                <a style={{ textDecoration: 'none', color: 'inherit' }}href="#crear_tipo_pqrs">Crear Tipo</a>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography onClick={handleVerTiposClick}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="#ver_tipos_pqrs">Ver Tipos</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Menú desplegable para Tipos de Identidad */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><CreateIcon /> Tipos de Identidad</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handlerCreateDocument}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="#Crear">Crear Tipo Identidad</a>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography onClick={handleTipes}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="#ver_tipos_identidad">Ver Tipos Identidad</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Menú desplegable para Usuarios */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><PersonIcon /> Usuarios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handleCreateUser}>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="#crear_usuario">Crear Usuario</a>
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="#ver_usuarios" onClick={handleVerUsers}>Ver Usuarios</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>

      {/* Información en el lado derecho */}
      <Grid item xs={9}>
        <Paper style={{ padding: 16 }}>

          {showTiposPqrs && (

            <Grid container spacing={2}>

              {tipePqrs
                .slice() // Crear una copia para no modificar el array original
                .sort((a, b) => a.name.localeCompare(b.name)) // Ordenar por el nombre
                .map((tipe) => (
                  <Grid item key={tipe.id} xs={12}>
                    <Paper style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="subtitle1">
                        {tipe.name}
                      </Typography>
                      <div>
                        <Button style={{ marginLeft: 8 }} onClick={() => handleUpdateClick(tipe)}>Actualizar</Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => handleDeleteTipe(tipe.id)}>Eliminar</Button>
                      </div>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          )}

          {showTiposIdentiti && (
            <Grid container spacing={2}>
              {Array.isArray(allIdentity) && allIdentity.length > 0 ? (
                allIdentity.map((identity) => {
                  console.log("identity:", identity);
                  return (
                    <Grid item key={identity.id} xs={12}>
                      <Paper style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1">
                          {identity.tipeDocument}
                        </Typography>
                        <div>
                          <div>
                            <Button style={{ marginLeft: 8 }} onClick={() => handleUpdateDocument(identity)}>Actualizar</Button>
                            <Button style={{ marginLeft: 8 }} onClick={() => { handleDeleteTypeDocument(identity.id) }}>Eliminar</Button>
                          </div>
                        </div>
                      </Paper>
                    </Grid>
                  );
                })
              ) : (
                <Typography>No hay identidades para mostrar</Typography>
              )}
            </Grid>
          )};
          {/* {
            showAllUser && (
              <Grid container spacing={2}>
                {
                  usersAll.slice() // Crear una copia para no modificar el array original
                    .sort((a, b) => a.name.localeCompare(b.name)).map((user) => (
                      <Grid item key={user.id} xs={12}>
                        <Paper style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">
                            {user.name} {user.lastName}
                          </Typography>
                          <div>
                            <Button style={{ marginLeft: 8 }} onClick={() => hanldeDetailUser(user)}>Ver</Button>

                            <Button style={{ marginLeft: 8 }} >Eliminar</Button>
                          </div>
                        </Paper>
                      </Grid>
                    ))
                }

              </Grid>
            )
          } */}
          {showAllUser && !showUpdateUserForm && Array.isArray(usersAll) && (
            // Renderizar el listado de usuarios
            <Grid container spacing={2}>
              {usersAll
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((user) => (
                  <Grid item key={user.id} xs={12}>
                    <Paper style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="subtitle1">
                        {user.name} {user.lastName}
                      </Typography>
                      <div>
                        <Button href='#detail' style={{ marginLeft: 8 }} onClick={() => hanldeDetailUser(user)}>Ver</Button>
                        <Button href='#update' style={{ marginLeft: 8 }} onClick={() => handleUpdateUser(user)}>Actualizar</Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
                      </div>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          )}

          {showUpdateUserForm && selectUser && (
            // Renderizar el formulario de actualización de usuarios
            <UpdateUser id={selectUser.id} onClose={handleCancelUpdateUser} />
          )}


          {showAllUser && selectedUser && (
            <Detail userId={selectedUser.id} />
          )}
          {showCreateTypeForm && (
            <Grid item xs={12}>
              {/* Renderizar el formulario de creación */}
              <TypesPqrs />

            </Grid>
          )}
          {selectedType && (
            <UpdatePqrs id={selectedType.id} onClose={() => setSelectedType(null)} />
          )}
          {showCreateDocument && (
            <Grid item xs={12}>
              <TypesIdentity />

            </Grid>
          )}
          {seletDocument && (
            <UdatepIdentity id={seletDocument.id} onClose={() => {
              setSeletDocument(null)
            }} />
          )}
          {
            showCreateUser && (
              <Grid item xs={12}>
                <Users />
              </Grid>
            )
          }


        </Paper>
      </Grid>


    </Grid>
  );
}

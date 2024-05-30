import axios from 'axios'
import { getAuthToken, setAuthToken } from '../../Auth/Auth';


//---- funcion para registrar usuarios
export function register(newUser) {
    return async function (dispatch) {
        // const response = await axios.post("http://localhost:3001/api/register", newUser);
        const response = await axios.post("/register", newUser);
      
        dispatch({
            type: 'REGISTER',
            payload: response.data
        })

    }

}
export function login(formData) {
    console.log(formData)
    return async function (dispatch) {
        try {
            // const responseLogin = await axios.post("http://localhost:3001/api/login", formData)
            const responseLogin = await axios.post("/login", formData)
            console.log("hola soy el login ",responseLogin)
            const token = responseLogin.data.token;
          

            setAuthToken(token);

            dispatch({
                type: 'LOGIN',
                payload: responseLogin.data
            })
            return responseLogin;
        } catch (error) {
            console.log('Error al iniciar sesion:', error.message);
            if (error.response) {
                console.log('Error de respuesta:', error.response.data);
            }
            throw error;
        }
    }
}
export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

// ADMIN acciones para tipos de pqrs
export function typePqr(newTipe) {
    return async function (dispatch) {
      try {
        const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
  
      
        // const tipePqr = await axios.post('http://localhost:3001/api/typePqr', newTipe,config)
        const tipePqr = await axios.post('/typePqr', newTipe,config)
        
        dispatch({
          type: 'TIPE_PQRS',
          payload: tipePqr.data
        })
        return tipePqr;
      } catch (error) {
        console.log(error)
        throw error;
      }
    }
  }
export function alltipePqr(){
  return async function (dispatch){
    try {
      // const token = getAuthToken();
      
      // // Configura los encabezados de la solicitud con el token
      // const config = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //   },
      // };
      
      // var json = await axios.get('http://localhost:3001/api/types')
      var json = await axios.get('/types')
      return dispatch({
        type: 'GET_TIPQRS',
        payload:json.data
      })
    } catch (error) {
      console.log(error)
        throw error;
      
    }
  }
}
export function updateTipePqrs(id,data){
  return async function(dispatch){
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const updateTipe =await axios.put(`http://localhost:3001/api/types/${id}`,data,config)
      const updateTipe =await axios.put(`/types/${id}`,data,config)
      dispatch({
        type:'UPDATETYPE',
        payload: updateTipe.data
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
export function deletePqrs(id){
  return async function(dispatch){
    try {
      const token = getAuthToken();

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const response =await axios.delete(`http://localhost:3001/api/typesDelete/${id}`,config)
      const response =await axios.delete(`/typesDelete/${id}`,config)
      

      dispatch({
        type:'DELETE_TIPQR',
        payload:response.id
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
// Acciones para Crear tipos de identidad

export function createTipeIdentity (newIdentity) {
  return async function (dispatch){
    try {
      const token = getAuthToken();
       
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const tipeIdentity =await axios.post("http://localhost:3001/api/createdIdentity",newIdentity,config)
      const tipeIdentity =await axios.post("/createdIdentity",newIdentity,config)

      dispatch(allTipesDocument());
      
      dispatch({
        type: 'TIPE_IDENTITY',
        payload: tipeIdentity.data
      })
      return tipeIdentity;
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
export function allTipesDocument(){
  return async function (dispatch){
    try {
      // const token = getAuthToken();
       
      // // Configura los encabezados de la solicitud con el token
      // const config = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //   },
      // };
      // const allDocuments =await axios.get("http://localhost:3001/api/all")
      const allDocuments =await axios.get("/all")

      
      
      dispatch({
        type: 'GET_TYPE_DOCUMENT',
        payload: allDocuments.data
      })
      
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
export function updateTipeDocument(id,data){
  return async function(dispatch){
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const updateTipe =await axios.put(`http://localhost:3001/api/update/${id}`,data,config)
      const updateTipe =await axios.put(`/update/${id}`,data,config)

      dispatch({
        type:'UPDATE_DOCUMENT',
        payload: updateTipe.data,
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}

export function deleteTypeIdentity(id){
  return async (dispatch) => {
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // Realiza la solicitud para eliminar el tipo de documento
      // await axios.delete(`http://localhost:3001/api/delete/${id}`,config);
      await axios.delete(`/delete/${id}`,config);


      // Despacha la acción DELETE_TYPE_IDENTITY con el ID del tipo eliminado
      dispatch({
        type: 'DELETE_TYPE_IDENTITY',
        payload: id,
      });
    } catch (error) {
      console.error(error);
      throw error; // Puedes manejar el error de la manera que prefieras
    }
  };
};

//Usuarios 

export function createUser(newUsers){
  return async function(dispatch){
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const newUser = await axios.post("http://localhost:3001/api/user",newUsers,config)
      const newUser = await axios.post("/user",newUsers,config)

      console.log("HOlassss",newUser)
      dispatch({
        type:'POST_USERS',
        payload:newUser.data
      })
      return newUser;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}
export function allUsers(){
  return async function(dispatch){
    try {
      const token = getAuthToken();
      
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const usersAll = await axios.get("http://localhost:3001/api/users",config)
      const usersAll = await axios.get("/users",config)

      return dispatch({
        type: 'GET_ALL_USERS',
        payload:usersAll.data
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
export function getDetail(id){
  return async function(dispacth){
    try {
      console.log('User ID:', id);
      if (!id) {
        throw new Error('ID de usuario no válido');
      }
      const token = getAuthToken();
      
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // const detalle = await axios.get(`http://localhost:3001/api/user/${id}`,config)
      const detalle = await axios.get(`/user/${id}`,config)

      console.log(detalle)
      return dispacth({
        type:'GET_DETAIL_USER',
        payload:detalle.data
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}
export function deleteUser (id){
  return async (dispacth)=>{
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:3001/api/users/${id}`,config)
      dispacth({
        type:'DELETE_USER',
        payload:id,
      })
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
export function updateUser(id,data){
  return async function(dispacth){
    try {
      const token = getAuthToken();
        
      // Configura los encabezados de la solicitud con el token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      console.log("ID:", id);
      // const updateuser = await axios.put(`http://localhost:3001/api/users/${id}`,data,config);
      const updateuser = await axios.put(`/users/${id}`,data,config);

      dispacth({
        type: 'UPDATE_USER',
        payload:updateuser.data
      })
    } catch (error) {
      console.log(error)
        throw error;
    }
  }
}


//Usuario externo 


// http://localhost:3001/api/createPqr
export function createUserPqr(formData) {
  return async function (dispatch) {
    try{
      // const pqrsNew = await axios.post('http://localhost:3001/api/createPqr', newTipe)
      const pqrsNew = await axios.post('/createPqr', formData)
      console.log("Holasssss",pqrsNew)
      
      dispatch({
        type: 'PQRS_CREATE_USER',
        payload: pqrsNew.data
      })
      return pqrsNew;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}
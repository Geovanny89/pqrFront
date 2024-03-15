import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['x-user-session'] = `Bearer ${token}`;
      // Almacena el token JWT en el almacenamiento local (localStorage)
      
      localStorage.setItem('token', token);
      console.log("este es el token : " + token)
    } else {
      delete axios.defaults.headers.common['x-user-session'];
      // Elimina el token JWT del almacenamiento local
      localStorage.removeItem('token');
    }
  };
  
  export const getAuthToken = () => {
    // Obtiene el token JWT almacenado en el almacenamiento local
    return localStorage.getItem('token');
    
  };
  
import Cookies from "js-cookie";
const initialState = {
    session: null,
    user: [],
    users: [],
    details: [],
    tipePqrs: [],
    allTipePqrs: [],
    allTipeIdentity: [],
    createPqrs:[],
    rol: ""
}

function rootreducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                users: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                session: action.payload,
                rol: action.payload
            }
        case 'LOGOUT':
            Cookies.remove('session')
            return {
                ...state,
                session: null,
                user: {},
                rol: ""
            };
        // tipos de pqrs 
        case 'TIPE_PQRS':
            return {
                ...state,
                tipePqrs: [...state.tipePqrs, action.payload]

            }
        case 'GET_TIPQRS':
            return {
                ...state,
                allTipePqrs: action.payload

            }
        case 'UPDATETYPE':
            const updatedType = action.payload; // Supongo que el payload contiene el tipo de PQRS actualizado

            // Actualiza el tipo de PQRS en la lista
            const updatedTipePqrs = state.tipePqrs.map(tipe => {
                if (tipe.id === updatedType.id) {
                    return updatedType;
                }
                return tipe;
            });

            return {
                ...state,
                tipePqrs: updatedTipePqrs
            };
        case 'DELETE_TIPQR':
            const filterTipePqr = state.tipePqrs.filter((pqrTipe) => pqrTipe.id !== action.payload);
            return {
                ...state,
                tipePqrs: filterTipePqr
            }
        // tipos de identidades
        case 'TIPE_IDENTITY':
            return {
                ...state,
                allTipeIdentity: action.payload
            }
        case 'GET_TYPE_DOCUMENT':

            return {
                ...state,
                allTipeIdentity: action.payload
            }
        case 'UPDATE_DOCUMENT':
            const updatedTypeDocument = action.payload;

            // Actualiza el tipo de PQRS en la lista
            const updatedTipeDoc = state.allTipeIdentity.map(document => {
                if (document.id === updatedTypeDocument.id) {
                    return updatedTypeDocument;
                }
                return document;
            });

            return {
                ...state,
                allTipeIdentity: updatedTipeDoc
            };
        case 'DELETE_TI_DOCUMENT':
            const filterTipeDocument = state.allTipeIdentity.filter((document) => document.id !== action.payload);
            return {
                ...state,
                allTipeIdentity: filterTipeDocument
            };
        // USers desde el admin
        case 'POST_USERS':
            return {
                ...state,
                user: action.payload
            };
        case 'GET_ALL_USERS':
            return {
                ...state,
                user: action.payload

            };
        case 'GET_DETAIL_USER':
            return {
                ...state,
                details: action.payload
            };
        case 'DELETE_USER':
            const filterUser = state.user.filter((users) => users.id !== action.payload);
            return {
                ...state,
                user: filterUser
            };
        case 'UPDATE_USER':
            const updateUsers =action.payload;
            const userUpdate= state.user.map((use =>{
                if(use.id === updateUsers.id){
                    return updateUsers
                }
                return use
            }))
            return{
                ...state,
                user:userUpdate
            }
    //-----------USUARIO EXTERNO -----//
        case 'PQRS_CREATE_USER':
            return{
                ...state,
                createPqrs:action.payload
            }
        

        default:
            return state;
    }
}
export default rootreducer;
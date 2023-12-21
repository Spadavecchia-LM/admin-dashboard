import { createContext, useReducer } from "react";

export const GlobalContext = createContext()


const Context = ({ children }) => {



    const initialValue = {
        edificios: [
            {
                id: 1,
                nombre: "Maconda I",
                direccion: "calle falsa 123",
                razonSocial: "ASOCIADOS S.A",
                cuit: 20444555670
            },
            {
                id: 2,
                nombre: "Maconda II",
                direccion: "calle inventada 123",
                razonSocial: "ASOCIADOS S.A",
                cuit: 20444555670
            },
            {
                id: 3,
                nombre: "Maconda III",
                direccion: "calle inexistente 123",
                razonSocial: "ASOCIADOS S.A",
                cuit: 20444555670
            }
        ],
        usuarios: [
            {
                id: 1,
                nombre: "Leonardo",
                apellido: "spadavecchia",
                email: "leo@gmail.com",
                tipoUsuario: "INQUILINO",
                edificio: "Maconda I"
            },
            {
                id: 2,
                nombre: "Brian",
                apellido: "Mermel",
                email: "brian@gmail.com",
                tipoUsuario: "INQUILINO",
                edificio: "Maconda II"
            },
            {
                id: 3,
                nombre: "Gonzalo",
                apellido: "Pena",
                email: "gonza@gmail.com",
                tipoUsuario: "PROPIETARIO",
                edificio: "Maconda III"
            },
        ],
        archivos: [
            {
                id: 1,
                nombre: "expensas noviembre.pdf",
                categoria: "expensas",
                fecha: "20/11/2023",
                destinatario: "INQUILINO",
                edificio: "Maconda I"
            },
            {
                id: 2,
                nombre: "ARREGLOS GENERALES.pdf",
                categoria: "notificaciones",
                fecha: "15/10/2023",
                destinatario: "PROPIETARIO",
                edificio: "Maconda III"
            },
            {
                id: 3,
                nombre: "expensas diciembre.pdf",
                categoria: "expensas",
                fecha: "2/01/2024",
                destinatario: "INQUILINO",
                edificio: "Maconda I"
            }
        ],
        usuarioEdit: null,
        edificioEdit: null
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ELIMINAR_USUARIO":
                return { ...state, usuarios: state.usuarios.filter(u => u.id != action.payload) }
            case "ELIMINAR_EDIFICIO":
                return { ...state, edificios: state.edificios.filter(u => u.id != action.payload) }
            case "EDITAR_USUARIO":
                return { ...state, usuarioEdit: action.payload };
            case "EDITAR_EDIFICIO":
                return { ...state, edificioEdit: action.payload };
            case "GUARDAR_USUARIO_EDITADO":
                return {
                    ...state,
                    usuarios: state.usuarios.map((u) =>
                        u.id === action.payload.id ? action.payload : u
                    ),
                    usuarioEdit: null,
                };
            case "GUARDAR_EDIFICIO_EDITADO":
                return {
                    ...state,
                    edificios: state.edificios.map((e) =>
                        e.id === action.payload.id ? action.payload : e
                    ),
                    edificioEdit: null,
                };
            case "AGREGAR_EDIFICIO":
                return {
                    ...state,
                    edificios: [...state.edificios, action.payload],
                };
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Context
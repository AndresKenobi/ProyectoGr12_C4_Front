import { createContext } from "react";
//import { useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    /*
    const [auth, setAuth] = useState(true); // actualmente login quemado con "true"
    */
    const handleAuth = (objUser) => {
        console.log("Llamando handleAuth del Contex...")
        console.log("Se logio ->", objUser)

        // ATENTO AQUI. TOCA REVISAR LA DIRECCION PETICION DE BACK PANDAZA
        fetch("http://localhost:3000/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        })
    }
    //const data = { auth, handleAuth };


    const handleRegister = (objUser) => {
        // confirmacion captura datos por parte del contexto
        console.log("Registrar ->", objUser);
        // Realizamos peticion al servidor Back
        // ATENTO AQUI. TOCA REVISAR LA DIRECCION PETICION DE BACK PANDAZA
        fetch("http://localhost:3000/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        })
    }

    const data = { handleRegister, handleAuth };




    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;
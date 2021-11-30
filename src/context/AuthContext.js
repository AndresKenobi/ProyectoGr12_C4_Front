import { createContext } from "react";
import { useState } from "react";
import { apiLogin, apiRegister } from "./Api";

const AuthContext = createContext();



const AuthProvider = ({ children }) => {

    /*
    const [auth, setAuth] = useState(true); // actualmente login quemado con "true"
    */
    //const data = { auth, handleAuth };


    /**************************************************** 
        // ============================   REGISTRO   ================================
    **********************************************************************************/
    const handleRegister = (objUser) => {
        // confirmacion captura datos por parte del contexto
        console.log("Registrar ->", objUser);

        // Realizamos peticion al servidor Back
        // ATENTO AQUI. TOCA REVISAR LA DIRECCION PETICION DE BACK PANDAZA
        fetch(apiRegister, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        }).then(async (resp) => {
            if (resp.status === 201) {
                let json = await resp.json();
                console.table(json)
                // ALERTA: Aca se tuvo se ajustar como entrega datos nuestro BACK
                let token = json.data.password; // password encriptado que me devuelve back
                console.log("verificacion token:", token);
                // Guardar token en local storage (espacio en memoria navegador)
                localStorage.setItem("token", token);
                console.log("verifi LocalStorage: ", localStorage);

            } else {
                console.log("NO se registro");
            }

        }).catch(error => {
            console.log(error);
        });
    }

    // ============================   AUTENTICACION DE LOGIN   ================================

    const handleLogin = async (objUser) => {
        console.log("Llamando handleLogin del Contex...")
        console.log("Se logio ->", objUser)

        // ATENTO AQUI. TOCA REVISAR LA DIRECCION PETICION DE BACK PANDAZA
        const resp = await fetch(apiLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        })
        return resp;

    }





    //const data = { user, handleRegister, handleAuth, handleLogin };
    const data = { handleRegister, handleLogin };




    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;
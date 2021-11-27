import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    /*
    const [auth, setAuth] = useState(true); // actualmente login quemado con "true"

    const handleAuth = () => {
        console.log("Llamando handleAuth del Contex...")
    }
    const data = { auth, handleAuth };
    */

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
        });
    }

    const data = { handleRegister };




    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;
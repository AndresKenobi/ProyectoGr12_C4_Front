import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    const handleAuth = () => {
        console.log("Llamando handleAuth del Contex...")
    }
    const data = { auth, handleAuth };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;
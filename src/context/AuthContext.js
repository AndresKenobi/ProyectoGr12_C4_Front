import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); // actualmente login quemado con "true"

    const handleAuth = (user, pass) => {
        console.log("Llamando handleAuth del Context...")
        if(user === 'admin' && pass === '12345'){
            setAuth(true);
        }
        
    }
    const data = { auth, handleAuth };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;
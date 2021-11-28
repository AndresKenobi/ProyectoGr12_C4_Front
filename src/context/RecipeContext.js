import { createContext } from "react";
//import { apiProduct } from "./Api";

const RecipeContext = createContext();

const RecipeProvider = ({children})=>{

    const handleCreate = async (objProduct)=>{
        const token = localStorage.getItem('token');
        const resp = await fetch("http://localhost:3000/api/recetas", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        return resp;
    }

    const data = {handleCreate};

    return <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
}

export {RecipeProvider};
export default RecipeContext;

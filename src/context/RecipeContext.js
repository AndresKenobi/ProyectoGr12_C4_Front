import { createContext } from "react";
//import { apiProduct } from "./Api";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {

    const handleConsultas = async (objProduct) => {
        console.log("Llamando a handleConsultas y los Autobots por una consulta de receta");
        console.log("Se consiguio ->", objProduct);

        // ATENTO AQUI. TOCA REVISAR LA DIRECCION PETICION DE BACK PANDAZA
        fetch(`http://localhost:3000/api/recetas/${objProduct.nameReceta}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            //body: JSON.stringify(objProduct) // CON GET NO USAR BODY DE DATOS
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        })
    }

    
    const handleCreate = async (objProduct) => {

        const token = localStorage.getItem('token');
        const resp = await fetch("http://localhost:3000/api/recetas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        return resp;
    }
   

    //const data = { handleConsultas, handleCreate };
    const data = { handleConsultas, handleCreate };

    return <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
}

export { RecipeProvider };
export default RecipeContext;

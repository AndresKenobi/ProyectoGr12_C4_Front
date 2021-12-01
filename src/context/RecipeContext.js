import { createContext, useState, useEffect } from "react";
import { apiProduct } from "./Api";


const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    /***********************************************************************
     *                     SECCION  CONSULTAR RECETA
     **************************************************************************/
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


    /**********************************************************************
     *               SECCION CREAR RECETA
     * ************************************************************************* */
    const handleCreate = async (objProduct) => {

        const token = localStorage.getItem('token');
        const resp = await fetch(apiProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        return resp;
    }

    /**********************************************************************
         *               SECCION OBTENER RECETAS
         * ************************************************************************* */

    const getProducts = async () => {
        const token = localStorage.getItem('token');
        let resp = await fetch("http://localhost:3000/api/recetas", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (resp.status === 200) {
            let json = await resp.json();
            console.log("captura JSON recetas:", json)
            setProducts(json);
            console.log("Cambio estado Products:", products)


        }
        return resp.status;
    }

    //const data = { handleConsultas, handleCreate };
    const data = { handleConsultas, handleCreate, getProducts, products };

    return <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
}

export { RecipeProvider };
export default RecipeContext;

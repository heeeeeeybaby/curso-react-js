// Consulta toda la base de datos 

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams(); 

    // LÓGICA: Me manejo con un if, si existe 

    useEffect(() => {

        if(idCategoria){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                console.log(products)
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = ItemList({products}) //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            }, 
        )
        }
    }, [])
    return (
        <div className="row p-5">
            {productos}
        </div>
    )
}

/* import { useState, useEffect } from "react"
export const Dolar = () =>{
    const [dolar, setDolar] = useState([]);
    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
        // Como una promesa asincrónica no tiene un tiempo determinado, utilizo then.
        .then(response => response.json()) //conversión de datos
        .then(dolar => console.log(dolar))
    }, [])

        const{blue, oficial, solidario, mep} = dolar; 
        .then(({blue, oficial, solidario, mep}) =>{
        console.log(blue, oficial, solidario, mep); 

        const esqueleto =
            <>
            <p>Dolar Blue: ${blue}</p>
            <p>Dolar Oficial: ${oficial}</p>
            <p>Dolar Solidario: ${solidario}</p>
            <p>Dolar MEP: ${mep}</p>
            </>
            setDolar(esqueleto)
        })
        .catch(error => console.error(error))
    , []; 

    return(
        <></>
    );
} //Fin export */
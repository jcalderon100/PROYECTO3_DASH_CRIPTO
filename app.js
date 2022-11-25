import { paintResult } from "./funciones.js";
// Evento que llame funcion 

const render = document.querySelector('#render');

document.addEventListener('DOMContentLoaded', getCripto);

async function getCripto(){
    const respuesta = await fetch ('https://api.coincap.io/v2/assets');
    const resultado = await respuesta.json();
    paintResult (resultado.data, render)
}


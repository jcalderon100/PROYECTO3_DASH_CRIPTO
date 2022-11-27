

import { paintResult } from "./funciones.js";
// Evento que llama a funcion 

const table = document.querySelector('#render');

document.addEventListener('DOMContentLoaded', getCripto);

async function getCripto(){
    const respuesta = await fetch ('https://api.coincap.io/v2/assets');
    const resultado = await respuesta.json();
    paintResult (resultado.data, render)
}



var ctx = document.getElementById('Grafica').getContext('2d');

fetch('https://api.coincap.io/v2/assets')
    .then(respuesta => respuesta.json())
    .then(resultado => {

        const nombre = resultado.data.map((dato) => dato.name)
        const precio = resultado.data.map((dato) => Number(dato.priceUsd))
        

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nombre,
                datasets: [{
                    label: 'Precio',
                    data: precio,
                    backgroundColor: [
                        '#008000',
                        '#0000FF',
                        '#00FFFF',
                        '#FF00FF',
                        '#FFFF00',
                        '#800000'
                    ],
                    borderColor: [
                        '#FFFFFF',
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
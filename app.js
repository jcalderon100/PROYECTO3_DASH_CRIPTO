

import { paintResult } from "./funciones.js";
// Evento que llama a funcion 

const render = document.querySelector('#render');

document.addEventListener('DOMContentLoaded', getCripto);

async function getCripto(){
    const respuesta = await fetch ('https://api.coincap.io/v2/assets');
    const resultado = await respuesta.json();
    paintResult (resultado.data, render)
}



var ctx = document.getElementById('myChart').getContext('2d');

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
                    label: 'valor',
                    data: precio,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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
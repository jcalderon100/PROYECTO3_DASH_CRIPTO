import { paintResult } from "./funciones.js";
// Evento que llame funcion 

const render = document.querySelector('#render');

document.addEventListener('DOMContentLoaded', getCripto);

async function getCripto(){
    const respuesta = await fetch ('https://api.coincap.io/v2/assets');
    const resultado = await respuesta.json();
    paintResult (resultado.data, render)
}

var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{ 
                data: [86,114,106,106,107,111,133],
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
              }, { 
                data: [70,90,44,60,83,90,100],
                label: "Accepted",
                borderColor: "#3cba9f",
                backgroundColor: "#71d1bd",
                fill: false,
              }, { 
                data: [10,21,60,44,17,21,17],
                label: "Pending",
                borderColor: "#ffa500",
                backgroundColor:"#ffc04d",
                fill: false,
              }, { 
                data: [6,3,2,2,7,0,16],
                label: "Rejected",
                borderColor: "#c45850",
                backgroundColor:"#d78f89",
                fill: false,
              }
            ]
          },
        });
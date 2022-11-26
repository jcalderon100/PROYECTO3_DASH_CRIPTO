 
 export function paintResult(datos, render){
    datos.forEach(dato => {
        // nombre = [];
        // precio = [];

        // nombres.push(dato.name);
        // precios.push(dato.priceUsd);



        console.log(dato)
        render.innerHTML += `
        <div class='card'>
            Moneda <p>${dato.name}</p> Precio USD <p>${dato.priceUsd}</p>

        </div>
        `
    })
}

// const API_URL = "https://api.coincap.io/v2/assets";

// const HTMLResponse = document.querySelector("#app");


// fetch(`${API_URL}/data`)
//     .then((response) => response.json())
//     .then((data) => {
//         const template = data.map((data) => `<li>${data.id } correo: ${data.priceUsd}</li>`)
//         HTMLResponse.innerHTML = `<ul>${template}</ul>`;

//     });


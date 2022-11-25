 
 export function paintResult(datos, render){
    datos.forEach(dato => {
        // nombre = [];
        // precio = [];

        // nombres.push(dato.name);
        // precios.push(dato.priceUsd);



        console.log(dato)
        render.innerHTML += `
        <div class='card'>
            <p>${dato.name}</p>
            <p>${dato.priceUsd}</p>
        </div>
        `
    })
}
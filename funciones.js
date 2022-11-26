 
 export function paintResult(datos, render){
    datos.forEach(dato => {
        console.log(dato)
        render.innerHTML += `
        <div class='card'>
            Moneda <p>${dato.name}</p> Precio USD <p>${dato.priceUsd}</p>

        </div>
        `
    })
}

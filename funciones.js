 
 export function paintResult(datos, render){
    datos.forEach(dato => {
        console.log(dato)
        render.innerHTML += `
        <div class='card'>
            Moneda <p>${dato.name}</p> 
            Precio USD <p>$${dato.priceUsd}</p>
            Market Cap USD <p>$${dato.marketCapUsd}</p>
            Volumen 24 Hrs USD <p>$${dato.volumeUsd24Hr}</p>
        </div>
        `
    })
}

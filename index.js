let numero_cuadros = 0;
let columna1 = document.getElementById("columna1");

function sumarCuadro() {
 let nuevoDiv = document.createElement("div")
 numero_cuadros = numero_cuadros + 1;
 nuevoDiv.textContent = "nuevo div" + numero_cuadros

 nuevoDiv.classList.add("cuadro")

 columna1.appendChild(nuevoDiv);

}
for(let contador = 0; contador < 16; contador = contador + 1 ) {
  sumarCuadro();

}




let columna2 = document.getElementById("columna2");

function producto() {
    let nuevoDiv = document.createElement("div")
    numero_cuadros = numero_cuadros + 1;
    nuevoDiv.textContent = "nuevo div" + numero_cuadros
   
    nuevoDiv.classList.add("cuadro")
   
    columna1.appendChild(nuevoDiv);
}

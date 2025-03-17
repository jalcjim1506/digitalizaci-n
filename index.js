let numero_cuadros = 0;
let columna1 = document.getElementById("columna1");

function sumarCuadro() {
  let nuevoDiv = document.createElement("div")
  let Nombres=["Agua", "Cafe", "Aceite","Fanta de Naranja", "Te", "Nestea", "Coca-Cola", "Aquarius", "Leche", "Manzana", "Huevos (12)", "Arroz", "Patatas", "Lechuga", "sal", "Azucar" ] Precios=["1.5$","2$","5,5$","1,75$","1,25$ ,"2,5$"]  
  nuevoDiv.textContent = Nombres[numero_cuadros]
 
  nuevoDiv.classList.add("cuadro")
 nuevoDiv.addEventListener("click", sumarCarrito.bind(null,numero_cuadros))
  columna1.appendChild(nuevoDiv);
  numero_cuadros = numero_cuadros + 1;

}
for(let contador = 0; contador < 16; contador = contador + 1 ) {
  sumarCuadro();


}




let columna2 = document.getElementById("columna2");

function sumarCarrito(num) {
    let nuevoDiv = document.createElement("div")
    let Nombres=["Agua", "Cafe", "Aceite","Fanta de Naranja", "Té", "Nestea", "Coca-Cola", "Aquarius", "Leche", "Manzana", "Huevos (12)", "Arroz", "Patatas", "Lechuga", "sal", "Azucar" ]
    
    console.log(Nombres[num])
    nuevoDiv.textContent = Nombres[num]
   
    nuevoDiv.classList.add("cuadro")
   
    columna2.appendChild(nuevoDiv);
    numero_cuadros = numero_cuadros + 1;
    
    
}

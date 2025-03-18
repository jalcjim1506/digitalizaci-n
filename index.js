let numero_cuadros = 0;
let columna1 = document.getElementById("columna1");

function sumarCuadro() {
  let Nombres=["Agua", "Cafe", "Aceite","Fanta de Naranja", "Te", "Nestea", "Coca-Cola", "Aquarius", "Leche", "Manzana", "Huevos (12)", "Arroz", "Patatas", "Lechuga", "sal", "Azucar" ];
  let Precios=[1.5,2,5.5,1.75,1.25,2,2,2,3.5,3,,4.5,2.5,6,3,5 ]; 


  let nuevoDivTarjeta = document.createElement("div")


 let nuevoDivNombre = document.createElement("div");
 nuevoDivTarjeta.appendChild(nuevoDivNombre);
  nuevoDivNombre.textContent = Nombres[numero_cuadros];

  let nuevoDivPrecios
 
 
  nuevoDiv.classList.add("cuadro")
 nuevoDiv.addEventListener("click", sumarCarrito.bind(null,numero_cuadros))
  columna1.appendChild(nuevoDiv);
  numero_cuadros = numero_cuadros + 1;

  nuevoDivTarjeta.classList.add("tarjeta")

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
   let Precios=[1.5,2,5.5,1.75,1.25,2,2,2,3.5,3,,4.5,2.5,6,3,5 ];
    nuevoDiv.classList.add("cuadro")
   
    columna2.appendChild(nuevoDiv);
    numero_cuadros = numero_cuadros + 1;
    
    
    
}

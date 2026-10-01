/* asigne variables para el stock de los productos ya que cambian de valor, tanto el nombre como el precio no se modifica
 asi que los puse en una constante  */
const zapatillas = "zapatillas";
let stockZapatillas = 10;
const precioZapatillas = 150;

const remeras = "remeras";
let stockRemeras = 5;
const precioRemeras = 80;

const pelotas = "pelotas";
let stockPelotas = 15;
const precioPelotas = 50;
// asigne producto sin valor ya que se lo asigna el usuario con el prompt
let producto;
// puse el valor de 0 en la variable ya se hace la suma total de los productos al finalizar 
let totalCompra = 0;

let seguirComprando = true

console.log("===================================");
console.log("Bienvenido a la tienda de deportes!");
console.log("===================================");
console.log("--------opcion 1: zapatillas-------");
console.log("--------opcion 2: remeras----------");
console.log("--------opcion 3: pelotas----------");
console.log("--------opcion 0: finalizar compra-");


while (seguirComprando) {
    producto = prompt("Ingrese una opcion del menu: ");
    // meti un switch dentro del while para que le pregunte al usuario varias veces hasta que decida salir del programa 
    switch (producto) {
        case "1":
            let cantidadZapatillas = parseInt(prompt("ingrese la cantidad de zapatillas que desea comprar: "));
            if (cantidadZapatillas <= stockZapatillas) {
                let totalZapatillas = cantidadZapatillas * precioZapatillas;
                console.log("El total a pagar por " + cantidadZapatillas + " " + zapatillas + " es: $" + totalZapatillas);
                stockZapatillas -= cantidadZapatillas;
                totalCompra += totalZapatillas;
            }
            else {
                console.log("No hay stock suficiente de " + zapatillas + ". Stock disponible: " + stockZapatillas);
            }
            break;
        case "2":
            let cantidadRemeras = parseInt(prompt("ingrese la cantidad de remeras que desea comprar:"));
            if (cantidadRemeras <= stockRemeras) {
                let totalRemeras = cantidadRemeras * precioRemeras;
                console.log("El total a pagar por " + cantidadRemeras + " " + remeras + " es: $" + totalRemeras);
                stockRemeras -= cantidadRemeras;
                totalCompra += totalRemeras;
            }
            else {
                console.log("No hay stock suficiente de " + remeras + ". Stock disponible: " + stockRemeras);
            }
            break;
        case "3":
            let cantidadPelotas = parseInt(prompt("ingrese la cantidad de pelotas que desea comprar: "));
            if (cantidadPelotas <= stockPelotas) {
                let totalPelotas = cantidadPelotas * precioPelotas;
                console.log("El total a pagar por " + cantidadPelotas + " " + pelotas + " es: $" + totalPelotas);
                stockPelotas -= cantidadPelotas;
                totalCompra += totalPelotas;
            }
            else {
                console.log("No hay stock suficiente de " + pelotas + ". Stock disponible: " + stockPelotas);
            }
            break;
        //  en el case 0 consulto al usuario si quiere finalizar la compra asi termina el bucle de while 
        case "0":
            let finalizar = prompt("desea finalizar la compra? (si/no)");
            if (finalizar == "si") {
                console.log("el total de su compra es: $" + totalCompra);
                console.log("Gracias por elegirnos! Hasta luego!");
                seguirComprando = false
            }
            break;
    }

}

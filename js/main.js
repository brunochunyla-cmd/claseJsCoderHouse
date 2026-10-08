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
let totalAnterior = 0;
// puse el valor de 0 en la variable ya se hace la suma total de los productos al finalizar 
let totalCompra = 0;

let seguirComprando = true;

let descuento = 0;

const subTotal = (cantidad, precio) => cantidad * precio;


function restaStock(stock, cantidad) {
    return stock - cantidad;
}

const sumaCompra = function (total, subtotal) {
    return total + subtotal;
}

const aplicarDescuento = (total, descuento) => total - (total * descuento);


console.log("===================================");
console.log("=====Bienvenido a CoderSport!======");
console.log("===================================");
console.log("--------opcion 1: zapatillas-------");
console.log("--------opcion 2: remeras----------");
console.log("--------opcion 3: pelotas----------");
console.log("--------opcion 4: cupon------------");
console.log("--------opcion 0: finalizar compra-");


while (seguirComprando) {
    producto = prompt("Ingrese una opcion del menu: ");
    // meti un switch dentro del while para que le pregunte al usuario varias veces hasta que decida salir del programa 
    switch (producto) {
        case "1":
            // solicito al usuario la cantidad que desea comprar
            let cantidadZapatillas = parseInt(prompt("ingrese la cantidad de zapatillas que desea comprar: "));
            // el if funciona si la cantidad de stock es mayor a la cantidad de productos que solicito
            if (cantidadZapatillas <= stockZapatillas) {
                // se modifico la forma de calcular el subtotal de los productos, ahora se hace con una funcion flecha que recibe precio y cantidad y retorna el valor totall
                let totalZapatillas = subTotal(cantidadZapatillas, precioZapatillas);
                //          concateno el mensaje     con la cantidad,           el nombre    y         el valor total de los productos
                console.log("El total a pagar por " + cantidadZapatillas + " " + zapatillas + " es: $" + totalZapatillas);
                // modifico el stock de zapatillas con la funcuion restaStock que recibe la cantidad de stock y la resta por la cantidad de productos solicitados
                stockZapatillas = restaStock(stockZapatillas, cantidadZapatillas);
                // tambien se modifico el total de la compra con la funcion de sumaCompra que recibe el total de la compra y los suma por el subtotal de los producto pedidos
                totalCompra = sumaCompra(totalCompra, totalZapatillas);
            }
            else {
                // este es el mensaje por si se solicitan mas producto de los que hay en stock 
                console.log("No hay stock suficiente de " + zapatillas + ". Stock disponible: " + stockZapatillas);
            }
            // el resto se repite en los otros casos
            break;
        case "2":
            let cantidadRemeras = parseInt(prompt("ingrese la cantidad de remeras que desea comprar:"));
            if (cantidadRemeras <= stockRemeras) {
                let totalRemeras = subTotal(cantidadRemeras, precioRemeras);
                console.log("El total a pagar por " + cantidadRemeras + " " + remeras + " es: $" + totalRemeras);
                stockRemeras = restaStock(stockRemeras, cantidadRemeras);
                totalCompra = sumaCompra(totalCompra, totalRemeras);
            }
            else {
                console.log("No hay stock suficiente de " + remeras + ". Stock disponible: " + stockRemeras);
            }
            break;
        case "3":
            let cantidadPelotas = parseInt(prompt("ingrese la cantidad de pelotas que desea comprar: "));
            if (cantidadPelotas <= stockPelotas) {
                let totalPelotas = subTotal(cantidadPelotas, precioPelotas);
                console.log("El total a pagar por " + cantidadPelotas + " " + pelotas + " es: $" + totalPelotas);
                stockPelotas = restaStock(stockPelotas, cantidadPelotas);
                totalCompra = sumaCompra(totalCompra, totalPelotas);
            }
            else {
                console.log("No hay stock suficiente de " + pelotas + ". Stock disponible: " + stockPelotas);
            }
            break;
        // se agrego un case 4 para no dejar el codigo casi igual al trabajo enviado para la clase 2 
        case "4":
            let cupon = prompt("ingrese cupon de descuento: ");
            if (cupon == "coder") {
                totalAnterior = totalCompra;
                descuento = 0.1;
                totalCompra = aplicarDescuento(totalCompra, descuento);
                console.log("Se aplico un descuento del 10% que vera reflejado en el total de su compra al finalizar.");
            }
            break;

        //  en el case 0 consulto al usuario si quiere finalizar la compra asi termina el bucle de while 
        case "0":
            let finalizar = prompt("desea finalizar la compra? (si/no)");
            if (finalizar == "si") {
                //                                        agregue el parseInt para que el valor del descuento no tenga decimales ya que es un valor monetario
                if (descuento > 0) {
                    console.log("Obtuvo un descuento de: $" + parseInt(totalAnterior - totalCompra));
                }
                console.log("el total de su compra es: $" + totalCompra);
                console.log("Gracias por elegirnos! Hasta luego!");
                seguirComprando = false
            }
            break;
        // Agregue un default tal y como me marcaron en la devolucion de la clase 2, para que el codigo quede como corresponde.
        default:
            console.log("opcion no valida, por favor ingrese una opción del menú >:(");
    }

}



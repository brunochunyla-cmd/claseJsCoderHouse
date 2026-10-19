const productos = ["zapatillas", "remeras", "pelotas", "shorts", "medias"];
let stockZapatillas = 10;
const precioZapatillas = 150;

let stockRemeras = 5;
const precioRemeras = 80;

let stockPelotas = 15;
const precioPelotas = 50;

let stockShorts = 20;
const precioShorts = 45;

let stockMedias = 25;
const precioMedias = 25;

const cupones = ["coder", "pipzas", "caballedo", "pefeto"];

let totalAnterior = 0;

let totalCompra = 0;

let seguirComprando = true;

let descuento = 0;

productos.splice(0, 1, "botines");
// no sabia como agregar estos metodos para que queden bien dentro del simulador, lo que hice fue agregarlo, avisar que se agreg...
productos.push("cordones");
console.log("Nuevo producto agregado: " + productos[productos.length - 1]);
// ... y luego eliminarlo y avisar que se elemino, para que quede claro que se pueden agregar y eliminar productos del catalogo
let productoEliminado = productos.pop();
console.log("Producto eliminado del catálogo: " + productoEliminado);
/* se agrego la funcion de procesoCompra que recibe el nombre del producto, precio y stock, realiza el mismo proceso que las funciones caseZapatillas, caseRemeras y casePElotas,
pero ahorrandome muchas lineas de codigo, ya que ahora se llama unicamente a la funcion agregandole los parametros correspondientes y retornando el stock modificado en cada caso */
function procesoCompra(producto, precio, stock) {
    let cantidadProductos = parseInt(prompt("ingrese la cantidad de " + producto + " que desea comprar:"));
    if (cantidadProductos <= stock) {
        let totalProductos = subTotal(cantidadProductos, precio);
        console.log("El total a pagar por " + cantidadProductos + " " + producto + " es: $" + totalProductos);
        stock = restaStock(stock, cantidadProductos);
        totalCompra = sumaCompra(totalCompra, totalProductos);
        return stock;
    }
    else {
        console.log("No hay stock suficiente de " + producto + ". Stock disponible: " + stock);
        return stock;

    }
}
function restaStock(stock, cantidad) {
    return stock - cantidad;
}

const sumaCompra = function (total, subtotal) {
    return total + subtotal;
}

const subTotal = (cantidad, precio) => cantidad * precio;

const aplicarDescuento = (total, descuento) => total - (total * descuento);

function checklist() {
    for (const producto of productos) {
        console.log("✅" + producto)
    }
}
function caseCupon() {
    let cupon = prompt("ingrese cupon de descuento: ");
    if (cupones.includes(cupon)) {
        totalAnterior = totalCompra;
        descuento = 0.1;
        totalCompra = aplicarDescuento(totalCompra, descuento);
        console.log(cupon + " es el cupon n°" + (cupones.indexOf(cupon) + 1) + " de nuestra lista de cupones!");
        console.log("Se aplico un descuento del 10% que vera reflejado en el total de su compra al finalizar.");
    }
    else {
        console.log("cupon invalido!!!")
    }
}
function caseFinalizar() {
    let finalizar = prompt("desea finalizar la compra? (si/no)");
    if (finalizar == "si") {
        if (descuento > 0) {
            console.log("Obtuvo un descuento de: $" + parseInt(totalAnterior - totalCompra));
        }
        console.log("el total de su compra es: $" + totalCompra);
        console.log("Gracias por elegirnos! Hasta luego!");
        seguirComprando = false
    }
}


console.log("===================================");
console.log("=====Bienvenido a CoderSport!======");
console.log("===================================");
console.log("--------opcion 1: Botines----------");
console.log("--------opcion 2: Remeras----------");
console.log("--------opcion 3: Pelotas----------");
console.log("--------opcion 4: Shorts-----------");
console.log("--------opcion 5: Medias-----------");
console.log("--------opcion 6: c̶o̶r̶d̶o̶n̶e̶s̶---------");
console.log("--------opcion 7: Cupon------------");
console.log("--------opcion 8: Checklist--------");
console.log("--------opcion 0: Finalizar compra-");


while (seguirComprando) {
    producto = prompt("Ingrese una opcion del menu: ");
    switch (producto) {
        case "1":
            stockZapatillas = procesoCompra(productos[0], precioZapatillas, stockZapatillas);
            break;
        case "2":
            stockRemeras = procesoCompra(productos[1], precioRemeras, stockRemeras);
            break;
        case "3":
            stockPelotas = procesoCompra(productos[2], precioPelotas, stockPelotas);
            break;
        case "4":
            stockShorts = procesoCompra(productos[3], precioShorts, stockShorts);
            break;
        case "5":
            stockMedias = procesoCompra(productos[4], precioMedias, stockMedias);
            break;
        case "6":
            console.log("El producto " + productoEliminado + " no se encuentra disponible, ya que fue eliminado");
            break;
        case "7":
            caseCupon();
            break;
        case "8":
            checklist();
            break;
        case "0":
            caseFinalizar();
            break;
        default:
            console.log("opcion no valida, por favor ingrese una opción del menú >:(");
    }

}
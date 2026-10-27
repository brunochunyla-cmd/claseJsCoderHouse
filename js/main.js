class Producto {
    constructor(producto, stock, precio, categoria) {
        this.producto = producto;
        this.stock = stock;
        this.precio = precio;
        this.categoria = categoria;
    }

    vender(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            console.log("la cantidad ingreada no es valdia.");
            return false;
        }

        if (cantidad > this.stock) {
            console.log("no hay stock suficiente de " + this.producto)
            return false;
        }

        this.stock = this.stock - cantidad;
        return true;
    }
}

const zapatilla = new Producto("Zapatillas", 10, 150, "calzado");
const remeras = new Producto("Remeras", 5, 80, "indumentaria");
const pelotas = new Producto("Pelotas", 15, 50, "accesorio");
const shorts = new Producto("Shorts", 20, 45, "indumentaria");
const medias = new Producto("Medias", 25, 25, "medias");
const productos = [zapatilla, remeras, pelotas, shorts, medias];

const cupones = ["coder", "pipzas", "caballedo", "pefeto"];

let totalAnterior = 0;
let totalCompra = 0;
let seguirComprando = true;
let descuento = 0;

function procesoCompra(producto) {
    let cantidadProductos = parseInt(prompt("ingrese la cantidad de " + producto.producto + " que desea comprar:"));
    if (producto.vender(cantidadProductos)) {
        let totalProductos = subTotal(cantidadProductos, producto.precio);
        console.log("El total a pagar por " + cantidadProductos + " " + producto.producto + " es: $" + totalProductos);
        totalCompra = sumaCompra(totalCompra, totalProductos);

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
    console.log("Productos con sus categorias:");
    for (const p of productos) {
        console.log("✅" + p.producto + "-" + p.categoria);
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
        console.log("cupon invalido!!!");
    }
}
function buscarProducto() {
    let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
    let resultado = productos.find(p => p.producto === productoBuscado);
    if (resultado) {

        console.log("El producto " + resultado.producto + " se encuentra disponible.");

    } else {
        console.log("El producto " + productoBuscado + " no se encuentra en el catálogo.");
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
console.log("--------opcion 1: Zapatillas-------");
console.log("--------opcion 2: Remeras----------");
console.log("--------opcion 3: Pelotas----------");
console.log("--------opcion 4: Shorts-----------");
console.log("--------opcion 5: Medias-----------");
console.log("--------opcion 6: Cupon------------");
console.log("--------opcion 7: Checklist--------");
console.log("--------opcion 8: Buscar producto--");
console.log("--------opcion 0: Finalizar compra-");

let producto;
while (seguirComprando) {
    producto = prompt("Ingrese una opcion del menu: ");
    switch (producto) {
        case "1":
            zapatilla.stock = procesoCompra(zapatilla);
            break;
        case "2":
            remeras.stock = procesoCompra(remeras);
            break;
        case "3":
            pelotas.stock = procesoCompra(pelotas);
            break;
        case "4":
            shorts.stock = procesoCompra(shorts);
            break;
        case "5":
            medias.stock = procesoCompra(medias);
            break;
        case "6":
            caseCupon();
            break;
        case "7":
            checklist();
            break;
        case "8":
            buscarProducto();
            break;
        case "0":
            caseFinalizar();
            break;
        default:
            console.log("opcion no valida, por favor ingrese una opción del menú >:(");
    }

}

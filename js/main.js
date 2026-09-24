// en este apartado se solicitan los datos al usuario
const nombre = prompt("ingresa tu nombre:");
const fechaNacimiento = parseInt(prompt("ingresa tu año de nacimiento:"));
const fechaActual = parseInt(prompt("ingresa el año actual:"));

// aca se calcula la edad del usuario y se muestra en un alert y en la consola
alert("hola " + nombre + " tu edad es de " + (fechaActual - fechaNacimiento) + " años");
console.log("hola " + nombre + " tu edad es de " + (fechaActual - fechaNacimiento) + " años");
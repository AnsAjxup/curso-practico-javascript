//Variables y operadores
// 2 y 3
let nombre = "Juanito";
let apellido = "Hernández";
let usuario = "Juancho"
let edad = 20;
let correo = "ejemplo@gmail.com"
let mayorEdad = true;
let dineroAhorrado = 1000;
let deuda = 500;

// 4
let nombreCompleto = `${nombre} ${apellido}`;
let dineroReal = dineroAhorrado - deuda;

//funciones
// 2
function presentacion(name, lastName, nickname){
	let completeName = `${name} ${lastName}`;
	console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
}

presentacion("Juan David", "Castro Gallego","juandc");

//condicionales
// 2
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi");
}

//3
if (tipoDeSuscripcion === 'Free') {
  console.log('Solo puedes tomar los cursos gratis');
} else {
  if (tipoDeSuscripcion === 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
  } else {
    if (tipoDeSuscripcion === 'Expert') {
      console.log(
        'Puedes tomar casi todos los cursos de Platzi durante un año'
      );
    } else {
      if (tipoDeSuscripcion === 'Expert+') {
        console.log(
          'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
        );
      }
    }
  }
}

//Ciclos
// 2
let i = 0;
while(i < 5){
    console.log(`El valor de i es: ${i}`);
    i++;
}

i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

let solucion = 0;
do{
    solucion = Number(prompt('Cuanto es 2+2?'));
}while(solucion!==4)

//listas
// 2
let mascotas = [
    "perro",
    "gato",
    "hamster",
    "loro"
];

function primerElemento(array){
    console.log(`El primer elemento es: ${array[0]}`);
}

primerElemento(mascotas);

// 3
function listarElementos(array){
    for(i = 0; i < mascotas.length; i++){
        console.log(`En posicion ${i}, el elemento es: ${array[i]}`);

    }
}

listarElementos(mascotas);

// 4
let perro = {
    nombre: "Max",
    raza: "Husky",
    edad: 4,
    colorPelaje: "Negro y blanco"
};

function listarObjeto(perro){
    for (let propiedad in perro){
        console.log(`la propiedad es ${propiedad}, tiene el valor: ${perro[propiedad]}`);
    }
}

listarObjeto(perro);
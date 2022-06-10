// Código del cuadrado
/* console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);
console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd(); */

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


// Código del triangulo
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.group("Triangulo");
console.log(`Los lados del cuadrado miden:
    -lado 1: ${ladoTriangulo1}cm,
    -lado 2: ${ladoTriangulo2}cm,
    -base: ${baseTriangulo}cm,
    -altura: ${alturaTriangulo}cm`
);
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`);
console.log(`El área del triangulo es: ${areaTriangulo}cm`);
console.groupEnd(); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Código circulo
/* const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
const perimetroCirculo = diametro * pi;
const areaCirculo = pi * (radio * radio)

console.group("Circulo");
console.log(`el diametro del circulo es: ${diametro}cm
el radio del circulo es: ${radio}cm
PI es: ${pi}`
);
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);
console.log(`El área del circulo es: ${areaCirculo}cm^2`);
console.groupEnd(); */
const pi = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return  diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

//Aquí interactuamos con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1Triangulo");
    const valueLado1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2Triangulo");
    const valueLado2 = Number(lado2.value);
    const base = document.getElementById("baseTriangulo");
    const valueBase = Number(base.value);
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);

}
function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const valueBase = Number(base.value);
    const altura = document.getElementById("alturaTriangulo");
    const valueAltura = Number(altura.value);
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}

function calcularDiametroCirculo(){
    const radio = document.getElementById("inputCirculo");
    const valueRadio = Number(radio.value);
    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo");
    const valueRadio = Number(radio.value);
    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo");
    const valueRadio = Number(radio.value);
    const area = areaCirculo(valueRadio);
    alert(area);
}

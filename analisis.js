//Helpers o Utils
function esPar (numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        mediana = lista[mitad];
        return mediana;
    }
}

//mediana general
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

/* //metodo 1 para sacar el top 10, el problema que tiene es que al sacar el 10% del array
//este se elimina, entonces en caso de que necesitemos utilizar de nuevo el array original
//a este le faltaran los elementos que sacamos
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount); */

//metodo 2: esto se puede solucionar con ".slice", es similar a .splice pero solo copia los
//elementos del array sin eliminarlos. En otras palabra no afecta al array original
const salariosColTop10 = salariosColSorted.slice(spliceStart,salariosColSorted.length);


const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log(medianaGeneralCol, medianaTop10Col);
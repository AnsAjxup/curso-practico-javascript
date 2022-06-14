function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista = [
    100,
    200,
    500,
    400,
    300,
    800,
    10000,
    50
];

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista){

    const mitadLista = parseInt(lista.length / 2);
    //el metodo sort nos ayuda a ordenar los elementos del arreglo pero solo toma encuenta el primer digito
    //para solucionar esto se usa la sig. funcion flecha "(a,b)=>{return a-b}"
    //mediante una resta compara si a < b o a > b y dependiendo del resultado ordena el array
    lista.sort((a,b)=>{return a-b})
    console.log(lista);

    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista];
    }
    return mediana;
}



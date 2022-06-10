function alturaTrianguloIsosceles(ladoA, ladoB, base){
    if(ladoA === ladoB && ladoA != base){
        const raiz = ((ladoA * ladoB)-((base * base)/4))
        const altura = Math.sqrt(raiz);
        console.log(`La altura del triangulo isosceles es: ${altura}`);
    }else{
        console.log("no es un Triangulo Isosceles");
    }
}

alturaTrianguloIsosceles(6,6,4);
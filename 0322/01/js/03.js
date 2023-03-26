console.log(" ");
console.log("03.js enlasado");
console.log("Actividad 3");
console.log("Se muestra un arreglo de 15 elementos");
var numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numeros);

console.log("Aqui se muestran los numeros pares conmprendidos entre 1 y 15");

function numPar(){
    var result=[];
    for (let index = 0; index <= numeros.length; index++) {
        const element = numeros[index];
        var pares=numeros[index];
        if(pares%2 == 0){
            result.push(pares);
        }
        
    }
    return result;
}
console.log(numPar());
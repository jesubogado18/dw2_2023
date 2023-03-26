console.log("01.js enlasado");

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma=0;
function sumaArray(){
    for (let index = 0; index <= array.length; index++) {
        const element = array[index];
        suma=suma+=index;
        
    }
    return suma;
}
console.log(sumaArray());
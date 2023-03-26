console.log(" ");
console.log("02.js enlasado");
console.log("Actividad 2");
console.log("Escrebe una palabra para ver si es un Palindromo");

palabra=prompt("Ingrese la palabra");
function reverse(str){
    let arrStr = str.split("");

    return arrStr.reverse().join("");
}
x=reverse(palabra);
if(x==palabra){
    console.log("La palabra '"+palabra+"' es un palindromo");
}else{
    console.log("La palabra '"+palabra+"' no es un palindromo");
}


console.log(" ");
console.log("04.js enlasado");
console.log("Actividad 4");
console.log("En el arreglo de abajo aparecen los 3 mejores jugadores del mundo");
var jugadores=["Cristiano", "Messi", "Neymar"]
console.log(jugadores);

cambiar= jugadores.indexOf("Neymar");

jugadores[cambiar]= "Benzema";
console.log("En el arreglo de abajo sacamos a Neymar que no esta en su mejor nivel, y colocamos al actual balon de oro:");
console.log(jugadores);
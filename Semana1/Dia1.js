//Codigo Dia 1 JS
/*Se realiza la declaracion de variales*/

console.log ("Hola, Mundo");

console.log ("Crear variables de diferentes tipos y mostrar sus valores en la consola. \n");

var myName = "Yerard";
console.log (myName);
console.log (typeof myName);

var myAge = 32;
console.log (myAge);
console.log (typeof myAge);

let myCity ="Bogota";
console.log (myCity);
console.log (typeof myCity);

let myBool = true;
console.log (myBool);
console.log (typeof myBool);

const MY_ID = "1022365525";
console.log (MY_ID);
console.log (typeof MY_ID);

//Operaciones Artimeticas

console.log ("\nRealizar operaciones aritméticas básicas:\n");

var Sum = 300 + 800
console.log ("Suma :" + Sum);
//console.log (typeof MY_ID);

var Produc = 30 * 80
console.log ("Multiplicacion :" + Produc);
//console.log (typeof MY_ID);

var Div = 30 / 80
console.log ("Division :" + Div);
//console.log (typeof MY_ID);

//Cadenade texto

console.log ("\n Determinar si una cadena de texto es igual a otra ignorando mayúsculas/minúsculas:\n");

var myName = "Yerard";
if (myName == "Yerard" || myName == "yerard")
    {
        console.log ("la cadena de caracteres es igual a : " + myName);
    }else{
        console.log ("la cadena de caracteres diferente");
    }

/*Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
*/
import CL_ingreso from "./CL_ingreso.js";
import CL_todoingreso from "./CL_todoingreso.js";

let ingreso1 = new CL_ingreso ( "Mary",150 );
let ingreso2 = new CL_ingreso ( "jose",135);
let ingreso3 = new CL_ingreso ( "carlos",160 );
let ingreso4 = new CL_ingreso ( "pedro",75 );

let todoingreso = new CL_todoingreso ();
todoingreso.procesar (ingreso1);
todoingreso.procesar (ingreso2);
todoingreso.procesar (ingreso3);
todoingreso.procesar (ingreso4);

let salida = document.getElementById ("salida"); 
salida.innerHTML+=" <br> monto del ingreso menor: "+todoingreso.menoringre;
salida.innerHTML+=" <br>ingreso promedio: "+todoingreso.promedio();
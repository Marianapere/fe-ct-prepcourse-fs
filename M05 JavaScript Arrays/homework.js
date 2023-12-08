/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
               // let valor= array.shift();
               // return valor;
            //   return array.at(0)
            return array[0]

}

console.log(devolverPrimerElemento([1,2,3,4,5]))

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
            //   return array.pop()
            return array[array.length-1]
}

console.log(devolverUltimoElemento([1,2,3,4,7]))


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

console.log(obtenerLargoDelArray([1,2,3,4,7]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
              let results =[]
              array.forEach(function (element) {

                     element=element + 1;
                     results.push(element);
               
              });
              return results;
            // -------------------------------------------------------------
            // array.forEach(element => {
            //    element = element + 1;
            //    results.push(element);
            // });
            // return results;     
}
console.log(incrementarPorUno([1,2,3,4,7]))


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
               array.push(elemento);
               return array
}
console.log(agregarItemAlFinalDelArray(["perro","vaca","loro"],"gato"))



function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}
console.log( agregarItemAlComienzoDelArray(["perro","vaca","loro"],"gato"))


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
              
            return palabras.join(" ")
}
console.log(dePalabrasAFrase(["Hola","cómo","estás"]))



function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
                  return array.includes(elemento);
}
console.log(arrayContiene(["Hola","cómo","estás"],"estás"))



function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
                  return arrayOfNums.reduce(function(acum,element){
                     acum = acum + element;
                     return acum
                  })
    
           
   }

console.log(agregarNumeros([2,4,3,5,7,8]))


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
     return agregarNumeros(resultadosTest)/obtenerLargoDelArray(resultadosTest);
   // ---------------------------------------------------------------------------
   // var suma = 0; 
   // var cont =0;
   // for( i = 0; i < resultadosTest.length; i++){ 
   //    suma += resultadosTest[i]; 
   //    cont++
   // } 
   // var promedio = suma / cont;
   // return promedio;
}
console.log(promedioResultadosTest([2,4,3,5,7,8]))



function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
         let num = -Infinity
         // for (let elemento of arrayOfNums){
         //    if (elemento > num)
         //       num=elemento;
         // }
         // return num
         // -------------------------------------------------

         arrayOfNums.forEach(function(elem){
            if (elem >num) 
            num=elem;
         }) 
         return num
        

}
console.log(numeroMasGrande([2,4,3,-40,39,7,8]))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
               // const valores =[...arguments]
               // return valores.reduce ((acum,valorActual) => {
                     
               //       return acum * valorActual
               // })
               if (arguments.length === 0) return 0
               else {let total =1;
               for (const elem of arguments) {
                  total = total * elem
               }
               return total }
               
}
console.log(multiplicarArgumentos(1,2,4,5,8,1)) //320

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
        let sumFiltrados = array.filter( function(elem){
             if(elem > 18) return elem
        })
        return sumFiltrados.length
}
console.log(cuentoElementos([2,15,25,40,18,23]))


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
            //   if (typeof numeroDeDia !== number) throw Error("Solo números")
               if (numeroDeDia === 7 || numeroDeDia ===1)
                  return "Es fin de semana"
                else if ( numeroDeDia > 1 && numeroDeDia <7) 
                  return "Es dia laboral"
                  else return "Error"
}
console.log(diaDeLaSemana(4))


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
               if(num.toString()[0]==9) return true 
               else return false
}
console.log(empiezaConNueve(952))


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
            //  var elemReferencia= array[0];
               
            //  return array.every(function (elem){
            //       elem === elemReferencia;
            //      return elem;
            //    })
            return array.every(elem => elem === array[0])
             
}
console.log(todosIguales([9,9,9,9,9,9]))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

            let filtrados= array.filter(function (elem){
               if (elem ==="Enero" || elem ==="Marzo" || elem==="Noviembre" )
               return elem
             })

            console.log(filtrados)
            let conjunto = new Set(filtrados)
            if(conjunto.size < 3) return "No se encontraron los meses pedidos"
            else return filtrados
             
                 
}
console.log(mesesDelAño(["Junio","Noviembre","Mayo","Abril","Enero","Marzo","Noviembre","Febrero"]))
console.log(mesesDelAño(["Junio","Mayo","Abril","Febrero"]))


   
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
                var tabla = [];
                for (let index = 0; index <= 10; index++) {
                  tabla.push( 6 * index);
                  
                }
                return tabla
               
}
console.log(tablaDelSeis());


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
        
                var mayorCien= array.filter(function (element) {
                           if (element > 100) return element 
               })
               return mayorCien
}
console.log(mayorACien([0,200,158,64,179,13]))

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
            let array=[] 
               for(var i=0 ; i < 10 ; i++)
               {
                  array.push(num +2)
                  num=num +2
                  if(num === i) {return "Se interrumpió la ejecución";break;}
               }
               return array

}
console.log(breakStatement(-2))
console.log(breakStatement(2))


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
               let array=[] 
               for(var i=0 ; i < 10 ; i++)
               {  
                  if(i===5) {
                     num=num; 
                     continue;}
                  else {
                  array.push(num +2)
                  num=num +2
                  }
                  
               }
               return array

}
console.log(continueStatement(2))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

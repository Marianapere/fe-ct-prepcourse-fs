/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
               
                  var arrayPadre=[];

                  for (var clave in objeto) {
                     var arrayHijo = [clave,objeto[clave]]; // le doy del objeto el valor de la clave 
                                                            // para el 1er elem y el valor del objeto en 
                                                            // esa posición para el segundo elemento 
                     arrayPadre.push(arrayHijo)
                  }
                  return arrayPadre
                
}
// objeto= {D: 1, B: 2, C: 3} 

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoLetrasCantidad={};

   for (let index = 0; index < string.length; index++) {
     
      var letra = string[index];
      if ( objetoLetrasCantidad.hasOwnProperty(letra) )
      {
         objetoLetrasCantidad[letra] ++;
      }
      else{
         objetoLetrasCantidad[letra]=1;
      }
 
   }
          return objetoLetrasCantidad;
      
}

//console.log( numberOfCharacters('lacasadepapel'))
     


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      var letrasMinus = '';
      var letrasMayus='';
      for (var element of string) {
                 
         if(element === element.toUpperCase())
         {
            letrasMayus=letrasMayus + element;
         }
         else 
            letrasMinus=letrasMinus + element;
                
      }
      return  letrasMayus + letrasMinus ;
   }
console.log(capToFront('soyHENRY'));



function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

         function invertir (palabra){
           return palabra.split('').reverse().join('');
           
         }

         var arregloDePalabras = frase.split(' ');

         var arregloDeInvertidas= arregloDePalabras.map(function(element){
            return invertir(element)

         })
           return arregloDeInvertidas.join(' ');    
}
console.log(asAmirror('The Henry Challenge'))


// FUncion que da vuelta una palabra
// function invertir (string){
//                   return string.split('').reverse().join('');

//                }



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
    var stringNumero= numero.toString();
   var stringInvertido = stringNumero.split('').reverse().join('');

   if(stringInvertido === stringNumero){
      return "Es capicua";
   } 
   else return "No es capicua"
}
console.log(capicua('25888888287852'));



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
       var stringResultado='';

      for (var letra of string) {
        
          if (letra !== 'a' && letra !== 'b' && letra !== 'c' )
          {
              stringResultado = stringResultado + letra;
          }

      }
      return stringResultado;
}
console.log(deleteAbc('calabaza'))





function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var auxiliar='';

   for (let i = 0; i < arrayOfStrings.length-1 ; i++) {

      for (let j = i+1; j < arrayOfStrings.length; j++) {
         if ( arrayOfStrings[i].length > arrayOfStrings[j].length )
     {
         auxiliar=arrayOfStrings[i];
         arrayOfStrings[i] = arrayOfStrings [j];
         arrayOfStrings[j] = auxiliar; 
     }
   }
   }
   return arrayOfStrings;
}
console.log(sortArray(["You", "are", "beautiful","a","mine", "looking"] ))



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
    var interseccion = [];

    for (var num1 of array1) {

      for (var num2 of array2) {
         if(num1===num2) {
            interseccion.push(num1)
         }
         
      }
      
    }
    return interseccion;
}
console.log(buscoInterseccion([1,2,3],[2,3,4]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

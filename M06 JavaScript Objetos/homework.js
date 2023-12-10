/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// Crear objeto con una propiedad  funcion
function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
    let objetoGato = {
      nombre,
      edad,
      meow:  function() {return "Meow!"}
      }
      return objetoGato
    }
console.log(crearGato("Michi",1))
let gato=crearGato("Haru",2);
console.log(gato.meow())


// crear objeto con valores pasado por parametro
function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
                  let objetoUsuario ={
                           nombre, 
                           email, 
                           password
                  }
                  return objetoUsuario
}
console.log(nuevoUsuario("Mariana","mariana@gmail.com","xxxx"))


// Agregar propiedad al objeto y asignar valor con =
function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
                  objeto[propiedad]=null;
                  return objeto
}
console.log(agregarPropiedad({},"nombre"))



// Invocar metodo dentro de un objeto
function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
               //  console.log(objeto,metodo) ; 
                  objeto[metodo]();
                  
}

let objeto = {nombre:"Julia", saludar : function () { return "Hola!"+" "+this.nombre} };
console.log(objeto.saludar());
console.log(invocarMetodo(objeto,"saludar"));


// Multiplicar por 5 valor recibido en un objeto por parametro
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
                  return objetoMisterioso.numeroMisterioso * 5

}

let obj  = { numeroMisterioso:5}
console.log(multiplicarNumeroDesconocidoPorCinco(obj))


// Eliminar propiedad con delete
function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
                  delete objeto[propiedad];
                  return objeto
}

let objeto1 ={nombre:"Thiago",edad:11}
console.log(eliminarPropiedad(objeto1,"edad"))



// Verificar si una propiedad tiene un valor definido o no
function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
                   return objetoUsuario.email? true:false
}
let objeto2= {nombre:"Juan", edad:25, email:"mariana@gmail.com"}
console.log(tieneEmail(objeto2))


// Verificar si el objeto recibido tiene una propiedad con el método hasOwnProperty
function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
                  // return objeto[propiedad]? true:false
                  if(objeto.hasOwnProperty(propiedad)) return true;
                  else return false;

}
let objeto3= {nombre:"Juan", edad:25, email:"mariana@gmail.com"}
console.log(tienePropiedad(objeto3,"saludo"))



// Evaluar una condicion en un valor de una propiedad de un objeto
function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // // Tu código: 
   //              console.log(password)
   //             console.log(objetoUsuario.password)
                 return (objetoUsuario.password == password) ?true:false

}
let objeto4= {nombre:"Juan", password:"secreto",edad:25, email:"mariana@gmail.com"}
console.log(objeto4.password)
console.log(verificarPassword(objeto4,objeto4.password))


// Modificar el valor de una propiedad de un objeto 
function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
                  objetoUsuario.password= nuevaPassword;
                  return objetoUsuario
}
let objeto5= {nombre:"Juan", password:"secreto",edad:25, email:"mariana@gmail.com"}
console.log(actualizarPassword(objeto5,"sanguche"))


// Agregar valor a una propiedad de un objeto con push
function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
                  objetoUsuario.amigos.push(nuevoAmigo);
                  return objetoUsuario
}

let objeto6= {nombre:"Juan", password:"secreto",edad:25, email:"mariana@gmail.com",amigos:["Pedro","Lili","Rami"]}
console.log(agregarAmigo(objeto6,"Mili"))


// Recorrer un arreglo de objetos con for each para cambiar una propiedad en cada uno de los objetos.
function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
               console.log(objetoMuchosUsuarios);
               
               objetoMuchosUsuarios.forEach(element => {
                  element.esPremium= true
               });
               console.log(objetoMuchosUsuarios);
               return objetoMuchosUsuarios
}
let usuario1= {nombre:"Cacho",email:"cacho@gmail.com",password:"tango",esPremium:false};
let usuario2= {nombre:"Mirta",email:"mirta@gmail.com",password:"vida",esPremium:null};
let usuario3= {nombre:"Franco",email:"franco@gmail.com",password:"guitarra",esPremium:null};
let usuarios= [usuario1,usuario2,usuario3]

console.log(pasarUsuarioAPremium(usuarios,usuario1))


//Acceder a un elemento de un array que está dentro de arreglo y el arreglo dentro de un objeto.
function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
                  return objetoUsuario.posts.reduce(function (acum,element) {
                           acum = acum + element.likes;
                           return acum
                  },0)
}
let usuario = {   nombre:"Feli", 
                  posts:[
                     {descripcion:"JS es lo mejor",likes:5},
                     {descripcion:"Nextflix es lo mejor" , likes:8},
                     {descripcion:"Java es lo mejor" ,likes:70},
                     {descripcion:"Python es lo mejor" ,likes:70}
               ]}
console.log(sumarLikesDeUsuario(usuario))


//Agregar una propiedad que es función a un arreglo que ya existe.
function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
                  objetoProducto.calcularPrecioDescuento = function() {
                        
                       return   this.precio - (this.precio * this.porcentajeDeDescuento);
                        
                  }
                  return objetoProducto
                  
}
let producto = {precio:100,
   porcentajeDeDescuento:0.2};
let nuevoProducto= agregarMetodoCalculoDescuento(producto);
console.log(nuevoProducto.calcularPrecioDescuento());




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};

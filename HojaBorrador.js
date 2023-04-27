// La función recibe un arreglo con enteros entre 0 y 200.
// Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
// Tu código:

let array = [0, 25, 100, 140, 159, 199, 200]

let arrayNuevo = []


for(let i = 0; array[i] < 201; i++){

   if(array[i] > 100){
      arrayNuevo.push(array[i])
   }
}

console.log(arrayNuevo)
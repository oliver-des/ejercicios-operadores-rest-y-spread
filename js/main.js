
// // 1. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.

// const sumEveryOther = (...numeros) => {

//     let suma = 0;

//     numeros.forEach((elemento) => {
//         suma += elemento

//     });
//     return suma;
// }


// console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
// console.log(sumEveryOther(11, 3, 12)); //26



// // 2. Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.

// const addOnlyNums = (...array) => {

//     let suma = 0;

//     array.forEach((elemento) => {

//         if (typeof elemento === 'number') {
//             suma += elemento
//         };
//     });

//     return suma

// }

// console.log(addOnlyNums(1, "perro", 2, 4)); //7



// 3. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

// countTheArgs("gato", "perro"); //2
// countTheArgs("gato", "perro", "pollo", "oso"); //4



// 4. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// combineTwoArrays(array1, array2); // [1, 2, 3, 4, 5, 6]



// 5. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]



// 6. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]



// 7. Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

// sumAndSquare(1, 2, 3); // 1^2 + 2^2 + 3^2 = 14
// sumAndSquare(4, 5); // 4^2 + 5^2 = 41
// sumAndSquare(1, 2, 3, 4); // 1^2 + 2^2 + 3^2 + 4^2 = 30


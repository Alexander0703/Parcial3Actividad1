📂 Proyecto de Ejercicios con Arreglos en JavaScript
Este proyecto contiene una serie de ejercicios prácticos en JavaScript que trabajan con arreglos (arrays), demostrando diferentes operaciones comunes como filtrado, iteración, manipulación de strings y cálculos básicos.

📁 Estructura del Proyecto
text
📂 proyecto-arrays/
├── arrego.js          # Suma de elementos de un arreglo
├── arrego2.js         # Separación de números pares e impares
├── invertiArr.js      # Inversión de una palabra
├── palabras.js        # Búsqueda de la palabra más larga
├── numeros.js         # Filtrado de números mayores a un límite
└── README.md          # Este archivo
📋 Descripción de los Archivos
1. arrego.js - Suma de Elementos
Propósito: Calcula la suma total de todos los elementos numéricos en un arreglo.

Entrada: [1, 2, 3, 4, 5, 6, 7]

Salida: "La suma es: 28"

Lógica: Recorre el arreglo y acumula la suma de cada elemento.

2. arrego2.js - Separación de Pares e Impares
Propósito: Clasifica los números de un arreglo en dos categorías: pares e impares.

Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Salida:

"Numeros pares: 2, 4, 6, 8, 10"

"Numeros inpares: 1, 3, 5, 7, 9"

Lógica: Usa el operador módulo (%) para determinar la paridad de cada número.

3. invertiArr.js - Inversión de Palabra
Propósito: Invierte el orden de los caracteres de una palabra.

Entrada: ["refrigerador"]

Salida: "La palabra es: rodarefriger"

Lógica: Convierte la cadena en un arreglo de caracteres, los recorre en orden inverso y los vuelve a unir.

4. palabras.js - Palabra Más Larga
Propósito: Encuentra la palabra más larga dentro de un arreglo de strings.

Entrada: ["autobus", "casa", "carro", "computadora"]

Salida: "La palabra mas larga es: computadora"

Nota: Este código tiene un pequeño error de lógica que compara strings incorrectamente. Se recomienda corregirlo para que compare longitudes.

5. numeros.js - Filtrado por Límite
Propósito: Filtra y muestra los números mayores a un valor límite definido.

Entrada: [5, 12, 8, 130, 44, 3, 25] con límite 10

Salida: "Numeros mayores que 10 son: 12,130,44,25"

Lógica: Compara cada elemento con el límite y almacena los que son mayores.

🚀 Cómo Ejecutar
Asegúrate de tener Node.js instalado en tu sistema.

Navega hasta la carpeta del proyecto en tu terminal.

Ejecuta cualquiera de los archivos con el comando:

bash
node nombre_del_archivo.js
Por ejemplo:

bash
node arrego.js
🛠️ Habilidades Practicadas
Iteración sobre arreglos con bucles for

Manipulación de strings y conversión a arrays

Uso de condicionales (if/else)

Métodos básicos de arrays: push(), join(), split()

Operaciones matemáticas y comparaciones

Lógica de programación básica

📝 Notas
El archivo palabras.js contiene un error común al comparar strings directamente en lugar de comparar sus longitudes. Una versión corregida sería:

javascript
if(larg[0].length < arreglo[i].length){
    larg[0] = arreglo[i]
}
En arrego2.js, "impares" está escrito como "inpares", lo cual es un pequeño error ortográfico.

✨ Posibles Mejoras
Refactorizar usando métodos modernos de arrays como filter(), reduce(), map().

Convertir en funciones reutilizables que reciban parámetros.

Agregar validación de tipos de datos.

Crear una interfaz de usuario simple con HTML/CSS.

Agregar pruebas unitarias para cada ejercicio.

Autor: Alexander
Tecnologías: JavaScript (ES6+), Node.js
Propósito: Educativo - Práctica de manipulación de arreglos

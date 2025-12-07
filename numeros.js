const arreglo = [5, 12, 8, 130, 44, 3, 25];
const limite = 10;
let mayores = [];
for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i]>limite){
        mayores.push(arreglo[i])
    }
}
console.log("Numeros mayores que "+limite + " son: "+mayores);
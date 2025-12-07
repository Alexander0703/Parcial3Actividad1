const arreglo = [1,2,3,4,5,6,7,8,9,10];
let par = [];
let inpar = [];
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]%2==0) {
        par.push(arreglo[i]);
    }
    else{
        inpar.push(arreglo[i]);
    }
}
console.log("Numeros pares: "+par.join(', '))
console.log("Numeros inpares: "+inpar.join(', '))
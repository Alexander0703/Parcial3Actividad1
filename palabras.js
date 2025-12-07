const arreglo = ["autobus", "casa", "carro", "computadora"]
let larg = [arreglo[0]]
for (let i = 0; i < arreglo.length; i++) {
    if(larg[0]<arreglo[i]){
        larg[0] = arreglo[i]
    }
}
console.log("La palabra mas larga es: "+larg)
const arreglo = ["refrigerador"];
let char = arreglo[0].split('');
let chari = [];
for (let i = char.length - 1; i >= 0; i--) {
        chari.push(char[i]);
};
let arregloi = chari.join('');
console.log("La palabra es: "+arregloi)
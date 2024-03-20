/*
47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
menor o si son iguales.
*/

let num, nums = []; 

for(let i = 0; i < 3; i++){
    num = parseFloat(prompt(`Ingrese el número #${i + 1}`))
    nums.push(num);
}

let maximo = nums[0], minimo = nums[0];
for(let i = 1; i < nums.length; i++){  
    if(maximo < nums[i]){
        maximo = nums[i];
    }
    if(minimo > nums[i]){
        minimo = nums[i];
    }
}

if(maximo === minimo){
    alert(`Son iguales`)
}
else{
    alert(`El número más grande es ${maximo}
El número más pequeño es ${minimo}`);
}
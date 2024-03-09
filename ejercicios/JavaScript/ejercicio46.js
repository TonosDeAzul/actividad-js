/*
46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.
*/

let num, nums = []; 

for(let i = 0; i < 3; i++){
    num = parseFloat(prompt(`Ingrese el número #${i + 1}`))
    nums.push(num);
}

let maximo = nums[0];

for(let i = 1; i < nums.length; i++){  
    if(maximo < nums[i]){
        maximo = nums[i];
    }
}

alert(`El número más grande es ${maximo}`);
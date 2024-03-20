/*
54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla.
*/

let num,
  nums = [],
  resta;

for (let i = 0; i < 2; i++) {
  num = parseFloat(prompt(`Ingrese el #${i + 1}`));
  nums.push(num);
}

if (nums[0] > nums[1]) {
  resta = nums[0] - nums[1];
  alert(`${nums[0]} - ${nums[1]} = ${resta}`);
} else {
  alert(`No es posible realizar la operación`);
}

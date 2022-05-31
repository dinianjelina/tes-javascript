let input = '9.86-A5.321';
let x = input.replace(/\D/g, '');
console.log(x);

let y = x.split('');
let output = y.length;

for (let i = 0; i < output; i++) {
  console.log(y[i].padEnd(output - i, '0'));
}

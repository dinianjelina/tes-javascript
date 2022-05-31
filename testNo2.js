let input = 'abcde';
let output = '';

for (let i = input.length; i <= input.length && i > 0; i--) {
  output += input[i - 1];
}

console.log(output);

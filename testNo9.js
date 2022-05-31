var angka = [4, 2, 6, 88, 3, 11];
let low;
let high;

let output = angka.sort(function (a, b) {
  return a - b;
});

low = output[0];
high = output[output.length - 1];

console.log(`low: ${low}, high: ${high}`);

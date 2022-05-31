var data1 = [1, 4, 7, 9, 12, 15, 18, 21, 23, 25, 28, 31, 34];
let low = 2;
let high = 25;

var data2 = data1.filter(function (x) {
  return x > low && x < high;
});

console.log(data2.join(' , '));

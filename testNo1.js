function faktorial(int) {
  let angka = 1;

  for (let index = 1; index <= int; index++) {
    angka = angka * index;
  }

  return angka;
}

console.log(faktorial(5));

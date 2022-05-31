var tanya = true;

while (tanya) {
  var angka = prompt('Input:');
  if (angka % 400 == 0) {
    alert(`Output: ${angka} adalah tahun kabisat`);
  } else if (angka % 100 == 0) {
    alert(`Output: ${angka} bukan tahun kabisat`);
  } else if (angka % 4 == 0) {
    alert(`Output: ${angka} adalah tahun kabisat`);
  } else {
    alert(`Output: ${angka} bukan tahun kabisat`);
  }

  tanya = confirm('coba lagi ?');
}

alert('Terima kasih');

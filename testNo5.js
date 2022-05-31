var tanya = true;

while (tanya) {
  let angka = prompt('Masukkan angka:');

  if (angka >= 1 && angka <= 100) {
    var sat = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    var bel = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    var pul = ['dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];

    function toWords(angka) {
      angka = angka.toString();
      angka = angka.replace(/[\, ]/g, '');

      var x = angka.indexOf('.');
      if (x == -1) x = angka.length;

      var n = angka.split('');

      var string = '';

      for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
          if (n[i] == '1') {
            string += bel[n[i + 1]] + ' ';
            i++;
          } else if (n[i] != 0) {
            string += pul[n[i] - 2] + ' ';
          }
        } else if (n[i] != 0) {
          string += sat[n[i]] + ' ';
          if ((x - i) % 3 == 0) string += 'ratus ';
        }
      }

      return string.replace(/\s+/g, ' ');
    }
    alert(toWords(angka));
  } else if (angka != parseInt(angka)) {
    alert('bukan sebuah angka');
  } else {
    alert(`Silakan masukkan angka 1-100!`);
  }

  tanya = confirm('coba lagi ?');
}

alert('Terima kasih');

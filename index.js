const readline = require("readline");
const konversiTanggal = require("./src/minitaskN1");
const konversiTanggal2 = require("./src/minitaskN2");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan tanggal (DD-MM-YYYY): ", function (tanggal) {
  const hasil = konversiTanggal(tanggal);

  console.log(hasil);

  rl.close();
});

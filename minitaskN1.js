const moment = require("moment");

function konversiTanggal(tanggal) {
  const cekTanggal = moment(tanggal, "DD-MM-YYYY", true);

  if (!cekTanggal.isValid()) {
    return "format tanggal salah";
  }
  return cekTanggal.format("DD/MM/YYYY");
}

module.exports = konversiTanggal;

function konversiTanggal2(tanggal) {
  const bagian = tanggal.split("-");

  if (bagian.length !== 3) {
    return "format tanggal salah";

    const hari = bagian[0];
    const bulan = bagian[1];
    const tahun = bagian[2];
  }
  if (hari.length !== 2 || bulan.length !== 2 || tahun.length !== 4) {
    return "format tanggal salah";
  }
  if (isNaN(hari) || isNaN(bulan) || isNaN(tahun)) {
    return "Format tanggal salah";
  }

  return hari + "/" + bulan + "/" + tahun;
}

module.exports = konversiTanggal2;

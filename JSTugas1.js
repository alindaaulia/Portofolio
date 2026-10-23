// ===== DATA (edit bagian ini saja) =====
const biodata = {
  nama: "Alinda Aulia Arniati",
  jurusan: "Mahasiswa Teknik Informatika",
  detail: {
    "Tempat, Tgl Lahir": "Bekasi, 7 Juni 2004",
    "Alamat": "Bandung, Jawa Barat",
    "Semester": "5",
    "Program Studi": "Teknik Informatika",
    "Email": "alindaaulia0706@gmail.com",
    "No Telp" : "0831-8887-1277",
    "Hobi": "Fotografi, Editing, Bernyanyi"
  }
};

// ===== TAMPILKAN KE HALAMAN (DOM) =====
const elNama = document.getElementById("nama");
const elJurusan = document.getElementById("jurusan");
const elTabel = document.getElementById("tabel-biodata");
const elFooter = document.getElementById("nama-footer");

if (elNama) elNama.textContent = biodata.nama;
if (elJurusan) elJurusan.textContent = biodata.jurusan;
if (elFooter) elFooter.textContent = biodata.nama;

if (elTabel) {
  for (const label in biodata.detail) {
    const baris = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = label;

    const td = document.createElement("td");
    td.textContent = biodata.detail[label];

    baris.appendChild(th);
    baris.appendChild(td);
    elTabel.appendChild(baris);
  }
}

// ===== TOMBOL PESAN =====
// ===== POP-UP =====
const btnPesan = document.getElementById("btn-pesan");
const modal = document.getElementById("modal");
const btnTutup = document.getElementById("modal-tutup");

if (btnPesan && modal) {
  // buka pop-up
  btnPesan.addEventListener("click", function () {
    modal.classList.add("tampil");
  });

  // tutup lewat tombol X
  btnTutup.addEventListener("click", function () {
    modal.classList.remove("tampil");
  });

  // tutup kalau klik area gelap di luar kotak
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.remove("tampil");
  });

  // tutup dengan tombol Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") modal.classList.remove("tampil");
  });
}
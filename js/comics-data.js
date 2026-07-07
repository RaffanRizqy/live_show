/* =========================================================
   DATA KOMIK
   Edit file ini untuk menambah/mengganti komik.

   - "title"   : judul komik
   - "pages"   : daftar halaman, urut dari awal sampai akhir
   - "src"     : path/URL gambar halaman.
                 Simpan gambar di dalam folder assets/comics/,
                 contoh: "assets/comics/komik-1/hal1.jpg"
                 Kosongkan (null) untuk memakai placeholder nomor halaman.
   - "caption" : teks kecil yang muncul di pojok kiri bawah halaman (opsional)
========================================================= */
const comics = [
  {
    title: "Trash to Treasure",
    pages: [
      { src: "assets/comics/komik-1/1.png", caption: "Page 1" },
      { src: "assets/comics/komik-1/2.png", caption: "Page 2" },
      { src: "assets/comics/komik-1/3.png", caption: "Page 3" },
      { src: "assets/comics/komik-1/4.png", caption: "Page 4" },
    ]
  },
  
];

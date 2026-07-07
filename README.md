# 📚 Kotak Belajar

Website statis sederhana untuk menampilkan **game Scratch** dan **komik edukasi** yang bisa digeser (swipe) per halaman. Dibuat murni dengan HTML, CSS, dan JavaScript — tanpa framework, tanpa proses build, siap langsung dipublikasikan lewat **GitHub Pages**.

## 🌐 Live demo
Setelah publish, situs akan tersedia di:
```
https://<username-kamu>.github.io/<nama-repo>/
```

## 📁 Struktur folder

```
kotak-belajar/
├── index.html            # halaman utama
├── css/
│   └── style.css         # semua styling
├── js/
│   ├── comics-data.js    # data komik (judul & daftar halaman) — edit di sini
│   └── script.js         # logic tampilan komik & swipe
└── assets/
    ├── comics/           # taruh gambar-gambar halaman komik di sini
    │   ├── komik-1/
    │   └── komik-2/
    └── img/              # gambar pendukung lain (favicon, dll)
```

## ✏️ Cara menambah / mengganti game Scratch

Buka `index.html`, cari bagian `<div class="game-grid">`, lalu salin blok `.game-card` untuk menambah game baru:

```html
<div class="game-card">
  <div class="cabinet-top">
    <h3>Judul Game</h3>
    <div class="cabinet-dot-row"><span></span><span></span><span></span></div>
  </div>
  <div class="game-frame-wrap">
    <iframe src="https://scratch.mit.edu/projects/XXXXXXX/embed"
            allowtransparency="true" width="485" height="402"
            frameborder="0" scrolling="no" allowfullscreen></iframe>
  </div>
  <p class="desc">Deskripsi singkat game ini.</p>
</div>
```

Ganti `XXXXXXX` dengan ID project Scratch kamu (lihat di URL project Scratch: `scratch.mit.edu/projects/XXXXXXX`).

## 📖 Cara menambah / mengganti komik

1. Masukkan gambar halaman komik ke folder `assets/comics/nama-komik/` (format `.jpg`/`.png`, disarankan rasio potret 3:4).
2. Edit `js/comics-data.js`:

```js
const comics = [
  {
    title: "Judul Komik",
    pages: [
      { src: "assets/comics/nama-komik/hal1.jpg", caption: "Halaman 1" },
      { src: "assets/comics/nama-komik/hal2.jpg", caption: "Halaman 2" },
    ]
  }
];
```

Tambahkan objek baru di dalam array `comics` untuk membuat komik baru. Selama `src` masih `null`, halaman akan menampilkan placeholder bernomor sebagai penanda.

## 🚀 Publish ke GitHub Pages

1. Buat repository baru di GitHub, lalu upload/push seluruh isi folder ini.
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kotak Belajar"
   git branch -M main
   git remote add origin https://github.com/<username-kamu>/<nama-repo>.git
   git push -u origin main
   ```
2. Buka repo di GitHub → **Settings** → **Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu 1–2 menit, situs akan aktif di `https://<username-kamu>.github.io/<nama-repo>/`.

## 🛠️ Menjalankan di lokal

Cukup buka `index.html` langsung di browser, atau jalankan server lokal sederhana:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan edukasi.

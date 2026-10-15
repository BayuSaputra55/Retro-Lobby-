# Retro Lobby — Starter Project

Website pribadi bergaya retro untuk menyiapkan sesi mabar Pokémon Quetzal. Versi ini adalah **prototype front-end**: halaman berjalan, pilihan mode bekerja, dan tombol membuat kode undangan demo lokal. Kode tersebut belum menghubungkan dua perangkat.

## Isi folder

- `index.html` — struktur halaman.
- `style.css` — tampilan responsive untuk HP dan PC.
- `app.js` — interaksi demo untuk membuat dan menyalin teks undangan.
- `README.md` — panduan ini.

## Cara menjalankan di PC/laptop

1. Ekstrak ZIP ini.
2. Buka folder `retro_lobby_starter` dengan VS Code.
3. Pasang ekstensi **Live Server** di VS Code (opsional, memudahkan menjalankan website).
4. Klik kanan `index.html` → **Open with Live Server**.
5. Coba isi nama, pilih Trade/Battle, lalu klik **GENERATE INVITE CODE**.
6. Coba tombol **COPY INVITE TEXT**.

Bisa juga membuka `index.html` langsung di browser untuk menguji tampilan dan tombol. Untuk fitur browser yang memakai clipboard, jalankan melalui localhost/HTTPS.

## Cara menerbitkan website secara gratis dengan GitHub Pages

1. Buat akun GitHub jika belum punya: https://github.com/
2. Buat repository baru, misalnya `retro-lobby`.
3. Upload `index.html`, `style.css`, dan `app.js` ke root repository.
4. Buka **Settings → Pages**.
5. Pada bagian build/deployment, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu simpan.
7. Tunggu proses publikasi dan buka alamat yang ditampilkan GitHub Pages.

Dokumentasi resmi: https://docs.github.com/en/pages/getting-started-with-github-pages

GitHub Pages hanya meng-host file website statis. Itu **tidak** menyediakan room server, database, relay, atau koneksi multiplayer otomatis.

## Cara mabar Pokémon Quetzal yang disarankan untuk tahap awal

Gunakan panduan online resmi/komunitas Quetzal untuk konfigurasi RetroArch:

https://www.pkmnquetzal.top/en/online-tutorial/online-tutorial.html

Garis besar yang dijelaskan di sana:
1. Kedua pemain menggunakan versi game yang sama dan menyiapkan RetroArch.
2. Konfigurasikan core gpSP serta nama pemain.
3. Host aktifkan opsi netplay/relay dan password seperti dijelaskan panduan.
4. Teman mencari room host dari RetroArch Netplay dan bergabung.
5. Di dalam game, masuk ke area luar ruangan → Start → `COOP/MPLAYER` → `2J/2P`.
6. Pilih `Trade Center` untuk trade atau `Colosseum` untuk battle.

Menu dapat berbeda menurut versi RetroArch, core, versi Quetzal, dan perangkat. Ikuti dokumentasi terbaru jika nama menu berubah.

## Batasan yang perlu diketahui

- Kode undangan yang dibuat di website ini hanya demo lokal; kode itu bukan kode room Netplay yang sebenarnya.
- Website statis tidak dapat membuka port atau mengatur sesi RetroArch di perangkat teman.
- Koneksi real-time bergantung pada jaringan, NAT, relay, konfigurasi emulator, dan versi game. Gratis tidak berarti selalu mulus.
- Jangan mengunggah ROM Pokémon yang memiliki hak cipta ke repository publik. Siapkan file game secara terpisah sesuai hukum yang berlaku.
- Backup file save sebelum berpindah emulator. Format dan lokasi save bisa berbeda.

## Tahap pengembangan berikutnya

1. Uji RetroArch Netplay Quetzal pada satu PC dan satu Android.
2. Catat versi game, core, versi RetroArch, dan error jika gagal.
3. Baru rancang backend room/signaling untuk membuat website mengelola undangan secara online.
4. Tambahkan akun atau penyimpanan jika benar-benar diperlukan.

Referensi:
- Quetzal online tutorial: https://www.pkmnquetzal.top/en/online-tutorial/online-tutorial.html
- GitHub Pages: https://docs.github.com/en/pages

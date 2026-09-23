## Laporan Praktikum Pemrograman Mobile Pertemuan 3 ##
## Pengenalan core Component dan Styling ###

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
1. Memahami dan menggunakan **16 Core Components** React Native
2. Menerapkan **StyleSheet** untuk styling terpusat
3. Menggunakan **useState** untuk state management dasar
4. Membuat layout yang responsif dengan **Flexbox**
5. Menangani **interaksi pengguna** (tekan, input, scroll)

Langkah 1: Mengimpor Components
1. buka file app.js pada folder projek ptmn3
2. import 16 core component sebagai berikut:
3. konfirmasi bukti
![alt text](image-1.png)

Langkah 2: Menyiapkan data Objek dan Array
1. membuat objek untuk menyimpan data Profile
2. Buat Objek Array bernama PROFILE
3. konfirmasi bukti 
![alt text](image-2.png)

4. Membuat Objek Array SKILLS untuk menyimpan data SKILLS 
5. Buat Objek Array bernama SKILLS
6. konfirmasi bukti
![alt text](image-3.png)

7. membuat objek array SECTIONS untuk menyimpan riwayat pekerjaan
8. membuat objek array SOSIAL untuk menyimpan media SOSIAL
9. konfirmasi bukti SECTIONS
![alt text](image-4.png)
10. konfirmasi bukti SOSIAL
![alt text](image-5.png)

Langkah 3: Sub-Components (SkillCard & TimelineCard)
1. Membuat komponen kecil untuk merender satu item list (component reuse).
2. Menambahkan kode SkillCard dan TimelineCard di antara data dan fungsi App().
3. Konfirmasi bukti
![alt text](image-6.png)

Langkah 4: State Management dengan useState
1. Menambahkan state management untuk menyimpan data yang bisa berubah.
2. Konfirmasi bukti
![alt text](image-7.png)

Langkah 5: SafeAreaView, StatusBar & Header
1. Mengatur SafeAreaView, StatusBar, dan header bar dengan Switch.
2. Konfirmasi bukti
![alt text](image-8.png)

Langkah 6: ScrollView & Profil Section
1. Membungkus konten CV dengan ScrollView serta menampilkan foto profil dan data diri.
2. Konfirmasi bukti
![alt text](image-9.png)

Langkah 7: FlatList (Daftar Skills)
1. Menambahkan komponen FlatList untuk menampilkan daftar skill secara efisien.
2. Konfirmasi bukti
![alt text](image-10.png)

Langkah 8: SectionList (Pengalaman & Pendidikan)
1. Menambahkan SectionList untuk menampilkan riwayat pekerjaan dan pendidikan yang dikelompokkan.
2. Konfirmasi bukti
![alt text](image-11.png)

Langkah 9: TextInput, Button & ActivityIndicator
1. Membuat form kontak menggunakan TextInput, tombol kirim, dan indikator loading.
2. Konfirmasi bukti
![alt text](image-12.png)

Langkah 10: Modal (Popup Detail)
1. Menambahkan komponen Modal untuk menampilkan detail riwayat saat kartu ditekan.
2. Konfirmasi bukti
![alt text](image-13.png)

Langkah 11: StyleSheet (Styling Terpusat)
1. Menambahkan palet warna dan konfigurasi StyleSheet.create() di bagian bawah kode.
2. Konfirmasi bukti palet warna dan StyleSheet:
// ============================================
//  PALET WARNA (konstanta warna terpusat)
// ============================================
![alt text](image-14.png)

// ============================================
//  16. StyleSheet.create() → semua style
// ============================================
![alt text](image-16.png)

  // ── HEADER BAR ────────────────────────────
![alt text](image-17.png)

  // ── SECTION PROFIL ─────────────────────────
![alt text](image-18.png)

  // ── SOSIAL MEDIA ───────────────────────────
![alt text](image-19.png)

  // ── PRESSABLE DOWNLOAD ─────────────────────
![alt text](image-20.png)

  // ── SECTION BOX (wrapper kartu) ────────────
![alt text](image-21.png)

  // ── SECTION LIST HEADER ────────────────────
![alt text](image-22.png)

  // ── SKILL CARD ─────────────────────────────
![alt text](image-23.png)

  // ── TIMELINE CARD ──────────────────────────
![alt text](image-24.png)

  // ── TEXT INPUT ─────────────────────────────
![alt text](image-25.png)

  // ── LOADING ROW ────────────────────────────
![alt text](image-26.png)

  // ── MODAL ──────────────────────────────────
![alt text](image-27.png)

Langkah 12: Verifikasi & Pengujian
1. Melakukan pengujian seluruh fitur aplikasi sesuai tabel verifikasi di modul.
2. Konfirmasi hasil pengujian aplikasi berjalan dengan baik tanpa error.
![alt text](cv_lailatulqodariah.gif)

## 🏆 Tugas / Latihan
1. **Tugas Wajib:** Mengganti data profil dengan data pribadi, menambah 3 skill baru, serta menambah 1 pengalaman kerja dan 1 riwayat pendidikan baru.
2. **Tugas Pengembangan:** Menambahkan komponen pendukung dan improvisasi sesuai instruksi modul.
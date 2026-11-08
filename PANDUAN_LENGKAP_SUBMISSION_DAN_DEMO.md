# Panduan Lengkap Pengumpulan & Master Naskah Demo
## Technical Test Maganghub Batch 3 - 2026 | PT DOT Indonesia
**Posisi:** FullStack Engineer (TypeScript)  
**Kandidat:** Kerubim Serafim Mahanaim (`kerubimwork@gmail.com`)  
**Batas Akhir Pengumpulan:** Hari Senin, pukul **07.00 WIB**

---

## DAFTAR ISI
1. [Ringkasan & Alur Pengerjaan (Submission Roadmap)](#1-ringkasan--alur-pengerjaan-submission-roadmap)
2. [Panduan Pengisian Formulir Google Form PT DOT Indonesia](#2-panduan-pengisian-formulir-google-form-pt-dot-indonesia)
3. [Panduan Langkah Teknis (Git Push & Persiapan Lingkungan)](#3-panduan-langkah-teknis-git-push--persiapan-lingkungan)
4. [Master Naskah Video Demo (Word-for-Word Script & Visual Cue)](#4-master-naskah-video-demo-word-for-word-script--visual-cue)
   - [Setup & Checklist Sebelum Record](#setup--checklist-sebelum-record)
   - [Segmen 1: Pembukaan & Overview Proyek (00:00 - 00:45)](#segmen-1-pembukaan--overview-proyek-durasi-45-detik)
   - [Segmen 2: Live Demo Web Admin Panel (00:45 - 03:00)](#segmen-2-live-demo-web-admin-panel-durasi-2-3-menit)
   - [Segmen 3: Deep Dive Arsitektur MVC & Error Handling (03:00 - 04:30)](#segmen-3-deep-dive-arsitektur-mvc--error-handling-durasi-15-menit)
   - [Segmen 4: Live Testing RESTful API di Postman (04:30 - 05:45)](#segmen-4-live-testing-restful-api-di-postman-durasi-15-menit)
   - [Segmen 5: Penutup & Konfirmasi Pemenuhan Kriteria (05:45 - 06:15)](#segmen-5-penutup--konfirmasi-pemenuhan-kriteria-durasi-30-detik)
5. [Matriks Pemenuhan Kriteria Soal DOT (Poin 1 - 9f)](#5-matriks-pemenuhan-kriteria-soal-dot-poin-1---9f)
6. [Cheatsheet Wawancara Teknis & Tanya Jawab Penguji](#6-cheatsheet-wawancara-teknis--tanya-jawab-penguji)
7. [Panduan Sertifikasi HackerRank: Problem Solving (Basic)](#7-panduan-sertifikasi-hackerrank-problem-solving-basic)

---

## 1. Ringkasan & Alur Pengerjaan (Submission Roadmap)

```
[1. Buat Repo GitHub Baru & Public]
               │
               ▼
[2. Git Add, Commit & Push Kode ke GitHub]
               │
               ▼
[3. Jalankan Server Lokal & Buka Browser + VS Code + Postman]
               │
               ▼
[4. Rekam Video Demo 5-6 Menit via Loom / OBS (On-Cam + Share Screen)]
               │
               ▼
[5. Kerjakan Sertifikasi HackerRank Problem Solving (Basic)]
               │
               ▼
[6. Submit Formulir Google Form PT DOT Indonesia Sebelum Senin 07.00 WIB]
```

---

## 2. Panduan Pengisian Formulir Google Form PT DOT Indonesia

Berdasarkan struktur formulir `Technical Test Maganghub Batch 3 - 2026`, berikut data persis yang harus diisikan pada masing-masing bagian:

### Bagian 1 &ndash; Data Diri
- **Nama Lengkap:** `Kerubim Serafim Mahanaim`
- **Email:** `kerubimwork@gmail.com`

### Bagian 2 &ndash; Posisi Magang
- **Posisi Magang yang Ingin dimasuki:** Pilih radio button `FullStack Engineer`
- **Alasan memilih posisi magang di atas:**  
  *(Salin dan sesuaikan draf jawaban profesional berikut)*:
  > *"Saya memilih posisi FullStack Engineer karena memiliki ketertarikan mendalam dan keahlian praktis dalam ekosistem TypeScript dan modern web engineering, baik di sisi backend architecture (NestJS, RESTful API design, database modeling) maupun frontend rendering (SSR MVC, component lifecycle). Saya terbiasa membangun sistem yang terstruktur, menerapkan kaidah clean architecture, error handling terpusat, serta standardisasi RESTful API. Bergabung dengan PT DOT Indonesia melalui program Maganghub Batch 3 merupakan kesempatan luar biasa bagi saya untuk mengkontribusikan keahlian teknis saya, memperdalam best practice industri dalam software house berskala enterprise, dan berkolaborasi langsung bersama para software engineer profesional di DOT Indonesia."*

### Bagian 3 &ndash; Challenge Fullstack (Typescript)
- **Fullstack - Link Repository Pengerjaan:**  
  `https://github.com/<username-github-anda>/<nama-repo-anda>`  
  *(Pastikan repository berstatus **Public**, bukan Private)*.
- **Fullstack - Link Video Demo:**  
  `https://www.loom.com/share/<id-video>` *(atau link Google Drive / YouTube Unlisted jika menggunakan OBS. Pastikan hak akses disetel ke "Anyone with the link can view")*.

### Bagian 4 &ndash; [Khusus Posisi Programmer] Sertifikat Problem Solving (Basic)
- **Link Sertifikat hackerrank.com - Problem Solving (Basic):**  
  `https://www.hackerrank.com/certificates/<id-sertifikat-anda>`  
  *(Dapat diselesaikan secara langsung di [HackerRank Skills Verification](https://www.hackerrank.com/skills-verification/problem_solving_basic))*.

---

## 3. Panduan Langkah Teknis (Git Push & Persiapan Lingkungan)

### A. Push Source Code ke Repository GitHub Pribadi

1. Buka [GitHub](https://github.com/new) dan buat repository publik baru, misalnya diberi nama:  
   `maganghub-fullstack-technical-test` (biarkan opsi *"Initialize with README"* tidak dicentang karena project sudah memiliki README).
2. Jalankan rangkaian perintah berikut di terminal:

```bash
# Pastikan berada di folder project
cd "f:\Project Development\teknikal-test"

# Cek status git
git status

# Stage seluruh file (termasuk README.md, postman_collection.json, source code, dan views)
git add .

# Buat commit bersih
git commit -m "feat: complete FullStack Engineer Technical Test (NestJS MVC, 1:N relations, Dual-Response API)"

# Ubah remote repository ke repository GitHub pribadi Anda
# Ganti <username> dengan username GitHub Anda!
git remote set-url origin https://github.com/<username>/maganghub-fullstack-technical-test.git

# Pastikan nama branch adalah master atau main
git branch -M master

# Push kode ke GitHub
git push -u origin master
```

3. Buka repository Anda di browser dan pastikan:
   - File `README.md` tampil dengan rapi lengkap dengan diagram ERD Mermaid.
   - File `postman_collection.json` ada di root folder.
   - File `views/`, `src/`, dan konfigurasi tersimpan lengkap.

### B. Menyiapkan Lingkungan Sebelum Merekam Demo

1. **Jalankan Aplikasi:**
   ```bash
   npm run build
   node dist/main.js
   ```
   Aplikasi akan aktif di `http://localhost:3000`. Database SQLite otomatis siap dengan akun admin bawaan (`admin` / `admin123`).
2. **Siapkan 3 Jendela Aplikasi:**
   - **Google Chrome / Edge:** Buka `http://localhost:3000/login`
   - **VS Code:** Buka folder project `teknikal-test`
   - **Postman:** Buka Postman dan import file `postman_collection.json`
3. **Buka Aplikasi Perekam Layar (Loom.com / OBS Studio):**
   - Disarankan menggunakan **Loom Desktop App / Chrome Extension** sesuai petunjuk resmi DOT.
   - Pilih mode: **Screen + Cam** (*wajah kandidat terlihat di sudut layar dan suara jernih*).

---

## 4. Master Naskah Video Demo (Word-for-Word Script & Visual Cue)

> **Catatan Pengambilan Video:**
> - **Total Durasi:** 5 &ndash; 6 Menit (Efisien, tidak bertele-tele, runtut).
> - **Kamera:** *On-Camera* (Wajah terlihat jelas).
> - **Intonasi:** Tenang, percaya diri, lugas, dan terstruktur.

```
================================================================================
RANGKUMAN ALUR DEMO
--------------------------------------------------------------------------------
00:00 - 00:45 : Segmen 1 - Perkenalan Diri & Gambaran Umum Sistem
00:45 - 03:00 : Segmen 2 - Demo Antarmuka Web (Login, CRUD Kategori, CRUD Produk)
03:00 - 04:30 : Segmen 3 - Source Code Walkthrough (Pola MVC & Error Handling)
04:30 - 05:45 : Segmen 4 - Pengujian RESTful API via Postman (Dual Response)
05:45 - 06:15 : Segmen 5 - Penutup & Verifikasi Kelengkapan Challenge
================================================================================
```

---

### Segmen 1: Pembukaan & Overview Proyek (Durasi: ~45 Detik)

#### Visual di Layar:
- Tampilkan browser di halaman Login: `http://localhost:3000/login`.
- Wajah Anda terlihat di sudut layar (webcam on).

#### Kata-demi-Kata yang Diucapkan:
> *"Halo, selamat pagi/siang/sore kepada Bapak/Ibu tim penilai dan tim rekrutmen PT DOT Indonesia.*  
>  
> *Perkenalkan, nama saya **Kerubim Serafim Mahanaim**, kandidat peserta seleksi Maganghub Batch 3 tahun 2026 untuk posisi **FullStack Engineer (TypeScript)**.*  
>  
> *Pada video kali ini, saya akan mendemonstrasikan hasil pengerjaan technical test aplikasi **Admin Panel Manajemen Inventaris** yang dibangun menggunakan framework **NestJS** dengan pola arsitektur **MVC (Model-View-Controller)**.*  
>  
> *Sistem ini mengelola dua entitas data yang saling berelasi **One-to-Many**, yaitu tabel **Kategori** sebagai induk dan tabel **Produk** sebagai anak. Seluruh antarmuka dirender dari sisi server menggunakan Handlebars, dilengkapi sistem otentikasi sesi, pencarian dan filter data, error handling terpusat, serta arsitektur **Dual Response** yang mampu melayani request halaman web maupun request data JSON murni untuk Postman REST API."*

---

### Segmen 2: Live Demo Web Admin Panel (Durasi: ~2-3 Menit)

#### A. Login & Proteksi AuthGuard
#### Visual di Layar:
1. Klik salah satu menu navbar (misal Kategori atau Produk) saat belum login &rarr; Tunjukkan bahwa sistem langsung memproteksi dan mengarahkan kembali ke `/login`.
2. Masukkan Username: `admin` dan Password: `admin123`.
3. Klik tombol **Masuk**.
4. Sistem otomatis mengalihkan ke halaman **Dashboard**.

#### Kata-demi-Kata yang Diucapkan:
> *"Kita mulai dari fitur otentikasi. Seluruh halaman internal dilindungi oleh `AuthGuard` berbasis session cookie. Jika pengguna belum login, akses ke route data akan dicegah.*  
>  
> *Sekarang saya login menggunakan akun admin bawaan.*  
> *Setelah berhasil masuk, kita disambut oleh halaman **Dashboard** yang menyajikan ringkasan metrik Total Kategori dan Total Produk secara real-time, serta tabel 5 produk terbaru."*

---

#### B. CRUD Tabel 1: Kategori (Tabel Induk &ndash; One)
#### Visual di Layar:
1. Klik menu **Kategori** di navbar atas.
2. Klik tombol `+ Tambah Kategori`.
3. Isi data:
   - Nama Kategori: `Elektronik Kantor`
   - Deskripsi: `Perangkat penunjang produktivitas kerja karyawan`
4. Klik tombol **Simpan** &rarr; Tabel Kategori menampilkan data baru.
5. Uji pencarian: Ketik `Elektronik` di kolom cari &rarr; Klik **Cari**.
6. Klik tombol **Detail** pada kategori `Elektronik Kantor`. Tunjukkan bagian informasi kategori dan sub-tabel *"Daftar Produk Terkait"* yang membuktikan relasi 1:N.
7. Klik tombol **Edit** &rarr; Ubah nama menjadi `Elektronik & Hardware` &rarr; Klik **Simpan**.

#### Kata-demi-Kata yang Diucapkan:
> *"Sekarang kita masuk ke manajemen tabel pertama, yaitu tabel induk **Kategori**.*  
>  
> *Pertama, saya membuat kategori baru bernama 'Elektronik Kantor'. Data tersimpan ke database SQLite dan langsung muncul di list.*  
> *Fitur pencarian bekerja menyaring kategori berdasarkan nama maupun deskripsi.*  
> *Saat membuka halaman **Detail**, sistem menampilkan informasi kategori sekaligus sub-tabel produk yang terikat pada kategori tersebut.*  
> *Proses pengeditan dieksekusi secara modern menggunakan HTTP method PUT murni via Fetch API tanpa manipulasi hidden form field."*

---

#### C. CRUD Tabel 2: Produk (Tabel Anak &ndash; Many)
#### Visual di Layar:
1. Klik menu **Produk** di navbar atas.
2. Klik tombol `+ Tambah Produk`.
3. Isi data form:
   - SKU: `ELC-001`
   - Nama Produk: `Keyboard Mekanikal TKL`
   - Kategori: Pilih `Elektronik & Hardware` *(dropdown relasi FK)*
   - Harga: `750000`
   - Stok: `15`
   - Deskripsi: `Keyboard mekanikal dengan switch tactile`
4. Klik tombol **Simpan** &rarr; Produk muncul di daftar.
5. Uji filter: Pilih kategori pada dropdown filter dan ketik `Keyboard` di input pencarian &rarr; Klik **Filter**.
6. Klik tombol **Detail Produk** &rarr; Tunjukkan badge kategori, format harga mata uang Rupiah (`Rp 750.000`), dan status stok.
7. Klik tombol **Hapus** pada tabel &rarr; Muncul dialog konfirmasi browser &rarr; Klik **OK** &rarr; Produk berhasil dihapus via HTTP method DELETE.

#### Kata-demi-Kata yang Diucapkan:
> *"Selanjutnya kita beralih ke tabel kedua, yaitu entitas anak **Produk** yang memiliki foreign key ke Kategori.*  
>  
> *Pada form tambah produk, kita menghubungkan produk ke kategori induknya melalui pilihan dropdown.*  
> *Di halaman list produk, tersedia pencarian ganda: pencarian teks SKU/nama produk dikombinasikan dengan filter dropdown kategori.*  
> *Nilai harga otomatis diformat ke standar mata uang Rupiah, dan status stok ditampilkan dengan indikator visual.*  
> *Untuk operasi hapus, data dihapus menggunakan HTTP method DELETE murni setelah konfirmasi pengguna."*

---

### Segmen 3: Deep Dive Arsitektur MVC & Error Handling (Durasi: ~1.5 Menit)

#### Visual di Layar:
- Pindah ke jendela **VS Code**.
- Buka file-file berikut secara bergantian sesuai alur bicara:
  1. `src/categories/entities/category.entity.ts` & `src/products/entities/product.entity.ts`
  2. `views/layouts/main.hbs` & `views/products/index.hbs`
  3. `src/products/products.controller.ts`
  4. `src/common/filters/http-exception.filter.ts` & `src/products/dto/create-product.dto.ts`

#### Kata-demi-Kata yang Diucapkan:
> *"Sekarang saya akan menunjukkan implementasi pola arsitektur **MVC (Model-View-Controller)** pada struktur kode:*  
>  
> 1. ***Model:*** *Didefinisikan menggunakan **TypeORM**. Pada `category.entity.ts` terdapat relasi `@OneToMany` ke `Product`, dan sebaliknya pada `product.entity.ts` terdapat relasi `@ManyToOne` dengan foreign key `categoryId`.*  
> 2. ***View:*** *Menggunakan template engine **Handlebars (`hbs`)** yang dirender dari sisi server. Antarmuka menggunakan layout modular pada `views/layouts/main.hbs` dengan styling CSS mandiri tanpa CDN eksternal sehingga 100% reliable dan offline-friendly.*  
> 3. ***Controller:*** *Dikelola di `categories.controller.ts` dan `products.controller.ts`. Controller bertindak sebagai orkestrator yang menerima HTTP request, memvalidasi payload, memanggil business logic pada Service, dan merender view.*  
>  
> *Untuk aspek **Error Handling**:*  
> *Sistem dilengkapi **`HttpExceptionFilter`** global yang menangkap seluruh galat HTTP seperti 404 Not Found dan 500 Internal Error, lalu menampilkan halaman error khusus yang rapi.*  
> *Selain itu, integritas input dijaga ketat menggunakan **DTO Validator** dengan decorator `class-validator` seperti `@IsNotEmpty`, `@IsNumber`, dan `@Min` sebelum data menyentuh database."*

---

### Segmen 4: Live Testing RESTful API di Postman (Durasi: ~1.5 Menit)

#### Visual di Layar:
- Pindah ke jendela **Postman** pada collection `Maganghub Technical Test`.
- Jalankan dan tunjukkan respon dari beberapa request utama:
  1. `POST /login` &rarr; Send &rarr; Status `200 OK` (cookie session otomatis tersimpan di cookie jar Postman).
  2. `GET /categories` &rarr; Send &rarr; Status `200 OK` (output JSON array).
  3. `POST /categories` &rarr; Send &rarr; Status `201 Created` (data JSON berhasil dibuat).
  4. `GET /products` (dengan query `search` atau `categoryId`) &rarr; Send &rarr; Status `200 OK` (output JSON filter).
  5. `PUT /products/:id` & `DELETE /products/:id` &rarr; Send &rarr; Status `200 OK`.

#### Kata-demi-Kata yang Diucapkan:
> *"Poin menarik berikutnya adalah kapabilitas **Dual Response** yang memenuhi kriteria pengujian Postman.*  
>  
> *Aplikasi ini menggunakan helper cerdas: jika request datang dari browser, server merender halaman HTML. Namun jika request datang dari Postman dengan header `Accept: application/json`, server secara otomatis merespons dengan **data JSON murni** lengkap dengan HTTP Status Code standar RESTful.*  
>  
> *Mari kita uji pada Postman:*  
> *Pertama, `POST /login` mengembalikan respon JSON 200 OK dan menetapkan cookie session.*  
> *Selanjutnya, `GET /categories` mengembalikan daftar kategori dalam format JSON array.*  
> *Pembuatan data baru via `POST /categories` mengembalikan status 201 Created.*  
> *Dan seluruh endpoint produk, baik GET, PUT, maupun DELETE, berhasil dieksekusi dengan respon JSON yang bersih dan terstruktur."*

---

### Segmen 5: Penutup & Konfirmasi Pemenuhan Kriteria (Durasi: ~30 Detik)

#### Visual di Layar:
- Kembali ke browser di halaman Dashboard aplikasi.
- Tampilkan wajah Anda dengan jelas.

#### Kata-demi-Kata yang Diucapkan:
> *"Sebagai penutup, aplikasi ini telah memenuhi seluruh kriteria yang ditetapkan oleh PT DOT Indonesia:*  
> *Mulai dari fitur Login, CRUD 2 tabel berelasi One-to-Many, pencarian dan filter, Server-Side Rendering MVC, error handling terpusat, hingga pengujian Postman API.*  
>  
> *Seluruh source code, file koleksi Postman `postman_collection.json`, instruksi instalasi, dan diagram ERD Mermaid dapat dilihat secara terbuka pada file `README.md` di repository GitHub saya.*  
>  
> *Terima kasih atas waktu dan kesempatan yang diberikan oleh tim reviewer PT DOT Indonesia. Saya sangat antusias untuk melangkah ke tahap selanjutnya di Maganghub Batch 3. Selamat pagi/siang/sore."*

---

## 5. Matriks Pemenuhan Kriteria Soal DOT (Poin 1 - 9f)

| No | Kebutuhan Soal PT DOT | Status | File Implementasi | Penjelasan Teknis |
| :-: | :--- | :---: | :--- | :--- |
| **1** | Admin panel manajemen data 2 tabel + Login | **Selesai** | [`src/auth/`](file:///f:/Project%20Development/teknikal-test/src/auth/), [`src/dashboard/`](file:///f:/Project%20Development/teknikal-test/src/dashboard/) | Menggunakan Express Session + bcrypt untuk verifikasi password. |
| **2** | Relasi 2 tabel One-to-Many (1:N) | **Selesai** | [`src/categories/entities/category.entity.ts`](file:///f:/Project%20Development/teknikal-test/src/categories/entities/category.entity.ts), [`src/products/entities/product.entity.ts`](file:///f:/Project%20Development/teknikal-test/src/products/entities/product.entity.ts) | `@OneToMany` pada Kategori dan `@ManyToOne` dengan FK `categoryId` pada Produk. |
| **3** | Halaman List & Detail untuk kedua tabel | **Selesai** | [`views/categories/`](file:///f:/Project%20Development/teknikal-test/views/categories/), [`views/products/`](file:///f:/Project%20Development/teknikal-test/views/products/) | List & Detail terpisah untuk Kategori dan Produk. Detail Kategori menampilkan sub-tabel produk terkait. |
| **4** | Fitur Pencarian Data | **Selesai** | `CategoriesService.findAll(search)` & `ProductsService.findAll(search, categoryId)` | Search kategori berdasarkan nama/deskripsi; search produk berdasarkan SKU/nama/deskripsi + filter dropdown kategori. |
| **5** | Semua respon berbentuk Page (Browser) | **Selesai** | [`src/common/utils/response.helper.ts`](file:///f:/Project%20Development/teknikal-test/src/common/utils/response.helper.ts) | Request browser menghasilkan HTML via HBS; request API menghasilkan JSON murni. |
| **6** | Implementasi Pattern MVC | **Selesai** | Model (TypeORM), View (`views/*.hbs`), Controller (`*.controller.ts`) | Pemisahan tanggung jawab yang ketat dan modular. |
| **7** | Repository Git Publik | **Selesai** | GitHub Repository | Branch master/main, git commit rapi. |
| **8** | File `README.md` Lengkap | **Selesai** | [`README.md`](file:///f:/Project%20Development/teknikal-test/README.md) | Memuat deskripsi proyek, diagram ERD Mermaid, screenshot mockup, daftar dependensi, dan petunjuk instalasi. |
| **9a** | Video: Login | **Selesai** | Segmen 2A | Demo login & proteksi akses route rahasia. |
| **9b** | Video: CRUD 2 Tabel | **Selesai** | Segmen 2B & 2C | Create, Read, Update, Delete untuk Kategori dan Produk. |
| **9c** | Video: Testing API Postman | **Selesai** | Segmen 4 | Menguji 12 endpoint dengan koleksi [`postman_collection.json`](file:///f:/Project%20Development/teknikal-test/postman_collection.json). |
| **9d** | Video: Penjelasan Fitur & Pemilihan Data | **Selesai** | Segmen 1, 2B, 2C | Penjelasan skenario inventaris toko (Kategori Induk &rarr; Produk Varian). |
| **9e** | Video: Penjelasan Arsitektur MVC | **Selesai** | Segmen 3 | Bedah source code Model, View, Controller di VS Code. |
| **9f** | Video: Penjelasan Error Handling | **Selesai** | Segmen 3 | Bedah `HttpExceptionFilter` dan DTO `class-validator`. |

---

## 6. Cheatsheet Wawancara Teknis & Tanya Jawab Penguji

Jika pada tahap wawancara teknis reviewer PT DOT Indonesia menanyakan keputusan arsitektur project ini, gunakan jawaban kunci berikut:

### Q1: Mengapa memilih NestJS SSR dengan Handlebars, bukan SPA (React/Vue)?
> *"Instruksi soal poin 5 mensyaratkan 'Semua respon berbentuk Page' dan menggunakan 'pattern MVC'. Dalam arsitektur web klasik yang kokoh, Model-View-Controller sejati diimplementasikan melalui Server-Side Rendering (SSR) di mana Controller merender View template (Handlebars) secara langsung di server, sehingga memangkas overhead bundle client dan ramah SEO."*

### Q2: Bagaimana cara kerja fitur Dual Response (Web Page vs RESTful JSON)?
> *"Diatur oleh helper `sendResponse()` pada `src/common/utils/response.helper.ts`. Helper ini memeriksa HTTP Header `Accept` atau `X-Requested-With`. Jika request berasal dari Postman atau Fetch API dengan `Accept: application/json`, server mengembalikan payload JSON murni beserta HTTP status code yang relevan. Jika berasal dari browser biasa, server mengeksekusi `res.render(view, data)`."*

### Q3: Mengapa tidak memakai hidden input `_method` untuk PUT dan DELETE?
> *"Penggunaan `<input type="hidden" name="_method" value="PUT">` adalah teknik *method spoofing* warisan masa lalu ketika form HTML hanya mendukung GET dan POST. Pada aplikasi ini, seluruh operasi update dan delete pada form ditangani menggunakan native **Fetch API** modern di JavaScript klien. Hal ini menghasilkan HTTP request PUT dan DELETE murni tanpa dependensi library `method-override`."*

### Q4: Bagaimana penanganan relasi One-to-Many pada TypeORM dengan ESM?
> *"Karena project ini berjalan pada Node.js ECMAScript Module (`"type": "module"`), circular dependency antar entitas saat runtime dihindari dengan merujuk nama relasi dalam bentuk string (`@OneToMany(() => 'Product', ...)` dan `@ManyToOne(() => 'Category', ...)`) serta memanfaatkan tipe `Relation<T>` dari TypeORM."*

---

## 7. Panduan Sertifikasi HackerRank: Problem Solving (Basic)

Sebagai syarat pada Bagian 4 Google Form bagi pelamar programmer, Anda wajib menyertakan link sertifikat HackerRank.

### Langkah-langkah:
1. Buka tautan: [https://www.hackerrank.com/skills-verification/problem_solving_basic](https://www.hackerrank.com/skills-verification/problem_solving_basic)
2. Login menggunakan akun HackerRank Anda (atau buat akun baru jika belum punya).
3. Klik tombol **Get Certified / Take Test**.
4. **Format Ujian:**
   - Durasi: 90 Menit.
   - Jumlah Soal: 2 Soal Algoritma / Problem Solving.
   - Bahasa Pemrograman: Bebas (disarankan menggunakan **JavaScript / TypeScript / Python** yang Anda kuasai).
5. **Topik yang Sering Keluar:**
   - Manipulasi Array & String (Subarray sum, anagram, string formatting).
   - Logika Sorting dan Filtering.
   - Hash Map / Frequency counter (mencari elemen yang paling sering muncul).
6. **Tips Lulus:**
   - Perhatikan batas kompleksitas waktu ($O(N)$ atau $O(N \log N)$), hindari nested loop $O(N^2)$ jika ukuran input $N \ge 10^5$.
   - Uji semua edge cases (array kosong, nilai negatif, angka terbesar).
7. Setelah lulus, salin URL publik sertifikat Anda (misal `https://www.hackerrank.com/certificates/abc123xyz`) dan tempelkan pada kolom Google Form.

---

**Selamat Merekam dan Semoga Sukses Lolos Seleksi PT DOT Indonesia!**

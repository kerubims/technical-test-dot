# Panduan Lengkap & Naskah Demo: Technical Test Maganghub Batch 3 - 2026
**Posisi:** FullStack Engineer (TypeScript) &mdash; **Perusahaan:** PT DOT Indonesia  
**Kandidat:** Kerubim Serafim Mahanaim (`kerubimwork@gmail.com`)

---

## DAFTAR ISI
1. [Langkah Persiapan & Git Push](#1-langkah-persiapan--git-push)
2. [Checklist Kebutuhan Layar Saat Merekam](#2-checklist-kebutuhan-layar-saat-merekam)
3. [Naskah Lengkap Video Demo (Word-for-Word Script)](#3-naskah-lengkap-video-demo)
   - [Segmen 1: Pembukaan & Gambaran Sistem](#segmen-1-pembukaan--gambaran-sistem-durasi-45-detik)
   - [Segmen 2: Demo Antarmuka Web (Login & CRUD 2 Tabel)](#segmen-2-demo-antarmuka-web-durasi-2-3-menit)
   - [Segmen 3: Penjelasan Arsitektur MVC & Error Handling](#segmen-3-penjelasan-arsitektur-mvc--error-handling-durasi-2-menit)
   - [Segmen 4: Pengujian RESTful API via Postman](#segmen-4-pengujian-restful-api-via-postman-durasi-15-menit)
   - [Segmen 5: Penutup](#segmen-5-penutup-durasi-30-detik)
4. [Pemenuhan Kriteria Penilaian DOT Indonesia (Poin 9a - 9f)](#4-pemenuhan-kriteria-penilaian-dot-indonesia)
5. [Panduan Akhir Submit Google Form](#5-panduan-akhir-submit-google-form)

---

## 1. Langkah Persiapan & Git Push

Sebelum memulai rekaman video demo, pastikan kode telah di-push ke repository GitHub/GitLab pribadi Anda:

```bash
# 1. Pastikan Anda berada di direktori project
cd "f:\Project Development\teknikal-test"

# 2. Tambahkan semua perubahan dan buat commit
git add .
git commit -m "feat: complete Technical Test Fullstack Engineer NestJS MVC"

# 3. Ganti remote origin ke repository GitHub pribadi Anda
# (Buat repository kosong baru di GitHub Anda terlebih dahulu, contoh: 'maganghub-technical-test')
git remote set-url origin https://github.com/<username-github-anda>/<nama-repo>.git

# 4. Push branch master ke repository GitHub pribadi
git push -u origin master
```

> **PENTING:** Pastikan repository GitHub Anda disetel ke **Public** agar reviewer dari PT DOT Indonesia dapat membuka dan memeriksa kode sumber beserta `README.md`.

---

## 2. Checklist Kebutuhan Layar Saat Merekam

Buka 3 aplikasi utama berikut di komputer Anda sebelum menekan tombol *Record*:

1. **Browser (Google Chrome / Edge)**:
   - Pastikan server backend sedang aktif (`npm run start:dev` atau `node dist/main.js`).
   - Buka `http://localhost:3000` (posisikan di halaman `/login`).
2. **VS Code**:
   - Buka project `teknikal-test`.
   - Siapkan file-file berikut agar mudah diklik:
     - Model: `src/categories/entities/category.entity.ts` & `src/products/entities/product.entity.ts`
     - Controller: `src/categories/categories.controller.ts` & `src/products/products.controller.ts`
     - View: `views/layouts/main.hbs` & `views/products/index.hbs`
     - Error Handling: `src/common/filters/http-exception.filter.ts` & `src/products/dto/create-product.dto.ts`
3. **Postman**:
   - Buka Postman dan pastikan koleksi `postman_collection.json` sudah di-import.
4. **Alat Perekam Layar (Screencast)**:
   - Gunakan **[Loom.com](https://www.loom.com)** (direkomendasikan dalam instruksi DOT) dengan mode **Screen + Cam** (*on-cam*), atau OBS Studio / Screenpresso.

---

## 3. Naskah Lengkap Video Demo

*Target Durasi Total: 5 &ndash; 7 Menit (Padat, Jelas, & Percaya Diri).*

---

### Segmen 1: Pembukaan & Gambaran Sistem (Durasi: ~45 Detik)
> **Tampilan Layar:** Browser menampilkan halaman Login (`http://localhost:3000/login`).

**Naskah yang Diucapkan:**
> *"Halo, selamat pagi/siang/sore kepada tim rekrutmen dan tim penilai PT DOT Indonesia.*  
> *Perkenalkan, nama saya **Kerubim Serafim Mahanaim**, peserta seleksi Maganghub Batch 3 tahun 2026 untuk posisi **FullStack Engineer (TypeScript)**.*  
>  
> *Pada video kali ini, saya akan mendemonstrasikan hasil pengerjaan technical test aplikasi web **Admin Panel** berbasis **NestJS** dengan pola arsitektur **MVC (Model-View-Controller)**.*  
>  
> *Sistem ini mengelola data inventaris dengan relasi **One-to-Many (1:N)** antara tabel **Kategori** sebagai entitas induk dan tabel **Produk** sebagai entitas anak, dilengkapi dengan sistem otentikasi login, pencarian data, Server-Side Rendering Handlebars, serta dukungan RESTful API murni."*

---

### Segmen 2: Demo Antarmuka Web (Durasi: ~2-3 Menit)
*(Memenuhi Poin 9a: Login, 9b: CRUD 2 Tabel, & 9d: Fitur & Pemilihan Data)*

#### A. Otentikasi & Proteksi Halaman (Login)
> **Tindakan di Layar:**
> 1. Tunjukkan form login yang bersih.
> 2. Masukkan Username: `admin` dan Password: `admin123`.
> 3. Klik tombol **Masuk**.
> 4. Layar otomatis dialihkan ke halaman **Dashboard**.

**Naskah yang Diucapkan:**
> *"Kita mulai dari fitur otentikasi. Sistem diproteksi menggunakan sesi admin dengan `AuthGuard`. Pengguna yang belum login otomatis dialihkan ke halaman ini.*  
> *Sekarang saya memasukkan kredensial admin dan menekan tombol Masuk.*  
> *Setelah otentikasi berhasil, kita langsung diarahkan ke Dashboard. Di sini terdapat ringkasan Total Kategori dan Total Produk yang terdaftar, serta tabel produk terbaru."*

#### B. CRUD Tabel Kategori (Tabel Induk &ndash; One)
> **Tindakan di Layar:**
> 1. Klik menu **Kategori** pada navbar atas.
> 2. Klik tombol `+ Tambah Kategori`.
> 3. Masukkan:
>    - Nama Kategori: `Elektronik & Gadget`
>    - Deskripsi: `Perangkat keras komputer dan aksesoris penunjang`
> 4. Klik tombol **Simpan** &rarr; Notifikasi berhasil muncul di tabel.
> 5. Uji fitur cari: Ketik `Elektronik` di kolom pencarian &rarr; Klik **Cari**.
> 6. Klik tombol **Detail** pada kategori `Elektronik & Gadget`.
> 7. Tunjukkan bahwa di halaman detail kategori terdapat sub-tabel **Daftar Produk** (bukti relasi 1:N).
> 8. Klik tombol **Edit** &rarr; Tambahkan kata `(Utama)` di belakang nama &rarr; Klik **Simpan**.

**Naskah yang Diucapkan:**
> *"Selanjutnya kita masuk ke manajemen **Kategori** sebagai tabel induk.*  
> *Pertama, saya membuat kategori baru bernama 'Elektronik & Gadget'. Data langsung tersimpan di database SQLite dan muncul di tabel.*  
> *Fitur pencarian juga bekerja secara real-time menyaring data berdasarkan kata kunci.*  
> *Saat kita membuka **Detail Kategori**, sistem menampilkan rincian kategori sekaligus sub-tabel yang berisi seluruh produk yang terhubung ke kategori ini.*  
> *Operasi update dieksekusi secara modern menggunakan HTTP method PUT murni tanpa manipulasi hidden field."*

#### C. CRUD Tabel Produk (Tabel Anak &ndash; Many)
> **Tindakan di Layar:**
> 1. Klik menu **Produk** pada navbar atas.
> 2. Klik tombol `+ Tambah Produk`.
> 3. Isi formulir:
>    - Kode SKU: `ELC-001`
>    - Nama Produk: `Mechanical Keyboard RGB`
>    - Kategori: Pilih `Elektronik & Gadget` *(Foreign Key 1:N)*
>    - Harga: `650000`
>    - Stok: `20`
>    - Deskripsi: `Keyboard mekanikal dengan switch linear`
> 4. Klik tombol **Simpan**.
> 5. Uji Filter: Pilih kategori pada dropdown & ketik `Keyboard` &rarr; Klik **Filter**.
> 6. Klik tombol **Detail** pada produk. Tunjukkan harga berformat Rupiah (`Rp 650.000`), badge stok, dan tautan kembali ke kategori induknya.
> 7. Klik tombol **Hapus** &rarr; Konfirmasi alert dialog browser &rarr; Produk terhapus.

**Naskah yang Diucapkan:**
> *"Sekarang kita beralih ke tabel kedua, yaitu **Produk** yang berelasi One-to-Many dengan Kategori.*  
> *Saat menambahkan produk baru, kita menghubungkannya ke kategori induk melalui dropdown.*  
> *Pada tabel produk, tersedia fitur pencarian teks sekaligus filter dropdown kategori.*  
> *Format harga secara otomatis dikonversi ke format mata uang Rupiah, dan status stok diberi penanda visual yang jelas.*  
> *Terakhir, proses hapus data produk berjalan dengan aman melalui HTTP DELETE murni via Fetch API."*

---

### Segmen 3: Penjelasan Arsitektur MVC & Error Handling (Durasi: ~2 Menit)
*(Memenuhi Poin 9e: Implementasi Pattern MVC & Poin 9f: Error Handling)*
> **Tampilan Layar:** Pindah ke jendela **VS Code**.

#### A. Pola Arsitektur MVC (Model - View - Controller)
> **Tindakan di Layar:**
> 1. Buka folder `src/categories/entities/category.entity.ts` dan `src/products/entities/product.entity.ts`.
> 2. Tunjukkan baris `@OneToMany(() => 'Product', ...)` dan `@ManyToOne(() => 'Category', ...)`.
> 3. Buka folder `views/layouts/main.hbs` dan `views/products/index.hbs`.
> 4. Buka file `src/products/products.controller.ts`.

**Naskah yang Diucapkan:**
> *"Sekarang saya akan menjelaskan implementasi arsitektur **MVC** pada source code project ini:*  
>  
> 1. ***Model:*** *Didefinisikan menggunakan **TypeORM** dengan SQLite. Entitas `Category` memiliki relasi `@OneToMany` ke `Product`, dan entitas `Product` memiliki relasi `@ManyToOne` dengan foreign key `categoryId`.*  
> 2. ***View:*** *Menggunakan template engine **Handlebars (`hbs`)** dengan layout modular pada `views/layouts/main.hbs`. Seluruh komponen antarmuka menggunakan CSS mandiri tanpa dependensi CDN luar sehingga dapat berjalan 100% offline.*  
> 3. ***Controller:*** *Diatur pada `CategoriesController` dan `ProductsController`. Controller menerima request HTTP, memvalidasi input, memanggil Service untuk eksekusi database, lalu merender View melalui helper `sendResponse()`."*

#### B. Implementasi Error Handling & Validasi Data
> **Tindakan di Layar:**
> 1. Buka file `src/common/filters/http-exception.filter.ts`.
> 2. Buka file DTO `src/products/dto/create-product.dto.ts`.

**Naskah yang Diucapkan:**
> *"Untuk **Error Handling**, sistem menerapkan:*  
>  
> 1. ***Global Exception Filter (`HttpExceptionFilter`):*** *Menangkap seluruh galat sistem (seperti 404 Not Found dan 500 Internal Server Error) dan merendernya ke halaman web khusus yang rapi.*  
> 2. ***Validasi DTO:*** *Memanfaatkan `class-validator` seperti `@IsNotEmpty()`, `@IsNumber()`, dan `@Min()` untuk memastikan integritas data sebelum diproses oleh database.*  
> 3. ***AuthGuard:*** *Memastikan seluruh route master data terlindungi dari akses tanpa izin."*

---

### Segmen 4: Pengujian RESTful API via Postman (Durasi: ~1.5 Menit)
*(Memenuhi Poin 9c: Testing API di Postman Semua Endpoint)*
> **Tampilan Layar:** Pindah ke jendela **Postman** pada collection `Maganghub Technical Test`.

> **Tindakan di Layar:**
> 1. Klik request `POST /login` &rarr; Klik tombol **Send** &rarr; Tunjukkan status `200 OK` dan session cookie tersimpan.
> 2. Klik request `GET /categories` &rarr; Klik **Send** &rarr; Tunjukkan data JSON array.
> 3. Klik request `POST /categories` &rarr; Klik **Send** &rarr; Tunjukkan status `201 Created`.
> 4. Klik request `GET /products` (dengan query `search` atau `categoryId`) &rarr; Klik **Send** &rarr; Tunjukkan respon JSON.
> 5. Klik request `PUT /products/:id` dan `DELETE /products/:id` &rarr; Tunjukkan respon JSON sukses.

**Naskah yang Diucapkan:**
> *"Salah satu keunggulan dari arsitektur aplikasi ini adalah kapabilitas **Dual Response**.*  
> *Ketika diakses melalui browser web, server mengembalikan halaman antarmuka HTML. Namun saat diuji menggunakan Postman dengan header `Accept: application/json`, server secara cerdas mengembalikan respon **JSON murni** beserta status code HTTP standar RESTful (`200 OK`, `201 Created`, dll).*  
>  
> *Dapat kita lihat pada Postman, seluruh endpoint mulai dari otentikasi login/logout, CRUD kategori, hingga CRUD dan filter produk berhasil diuji dengan status sukses."*

---

### Segmen 5: Penutup (Durasi: ~30 Detik)
> **Tampilan Layar:** Kembali ke browser di halaman Dashboard admin.

**Naskah yang Diucapkan:**
> *"Demikian demonstrasi dari aplikasi Admin Panel NestJS MVC yang telah memenuhi seluruh kriteria challenge: fitur Login, CRUD 2 tabel berelasi One-to-Many, pencarian & filter data, implementasi pola MVC, error handling, serta pengujian menyeluruh pada Postman.*  
>  
> *Seluruh source code, file koleksi Postman `postman_collection.json`, diagram ERD database, dan dokumentasi lengkap telah saya sertakan pada file `README.md` di repository GitHub.*  
>  
> *Terima kasih banyak atas perhatian tim reviewer PT DOT Indonesia. Saya sangat antusias untuk dapat bergabung dan belajar lebih dalam pada program Maganghub Batch 3 ini. Selamat pagi/siang/sore."*

---

## 4. Pemenuhan Kriteria Penilaian DOT Indonesia

Berikut adalah matriks kesesuaian antara instruksi soal dan implementasi yang ada di codebase:

| No | Poin Soal DOT | Status | Letak Implementasi pada Codebase |
| :-: | :--- | :---: | :--- |
| **9a** | Login | Selesai | [`src/auth/`](file:///f:/Project%20Development/teknikal-test/src/auth/) & [`views/auth/login.hbs`](file:///f:/Project%20Development/teknikal-test/views/auth/login.hbs) |
| **9b** | CRUD 2 Tabel Berelasi (1:N) | Selesai | [`src/categories/`](file:///f:/Project%20Development/teknikal-test/src/categories/) & [`src/products/`](file:///f:/Project%20Development/teknikal-test/src/products/) |
| **9c** | Testing API di Postman Semua Endpoint | Selesai | File [`postman_collection.json`](file:///f:/Project%20Development/teknikal-test/postman_collection.json) di root project (12 requests) |
| **9d** | Penjelasan Fitur & Pemilihan Data | Selesai | Terangkum pada Segmen 1 & 2 naskah demo di atas |
| **9e** | Implementasi Pattern MVC dalam Source Code | Selesai | Model (TypeORM), View (`views/*.hbs`), Controller (`*.controller.ts`) |
| **9f** | Implementasi Error Handling | Selesai | [`src/common/filters/http-exception.filter.ts`](file:///f:/Project%20Development/teknikal-test/src/common/filters/http-exception.filter.ts) & DTO Validator |

---

## 5. Panduan Akhir Submit Google Form

Saat mengisi formulir pendaftaran **Technical Test Maganghub Batch 3 - 2026**:

1. **Bagian Challenge Fullstack (Typescript)**:
   - **Fullstack - Link Repository Pengerjaan**:  
     `https://github.com/<username-anda>/<nama-repo-anda>`
   - **Fullstack - Link Video Demo**:  
     Tautan rekaman video Anda (misal link Loom publik: `https://www.loom.com/share/...` atau link YouTube Unlisted / Google Drive).
2. **Bagian 4 - Sertifikat HackerRank Problem Solving (Basic)**:
   - Masukkan link sertifikat HackerRank Anda dari tautan:  
     `https://www.hackerrank.com/skills-verification/problem_solving_basic`


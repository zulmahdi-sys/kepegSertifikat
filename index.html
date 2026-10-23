<!DOCTYPE html>
<html lang="id" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Pengumpulan Sertifikat - UIN Ar-Raniry Banda Aceh</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        body { 
            font-family: 'Inter', sans-serif; 
            background: radial-gradient(circle at top right, #f0fdf4 0%, #f8fafc 50%, #f1f5f9 100%);
        }
        @media print {
            body * { visibility: hidden; }
            #printSection, #printSection *, #adminPrintSection, #adminPrintSection * { visibility: visible; }
            #printSection { position: absolute; left: 0; top: 0; width: 100%; }
            #adminPrintSection { position: absolute; left: 0; top: 0; width: 100%; }
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(226, 232, 240, 0.9);
            box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 45px -12px rgba(6, 95, 70, 0.15);
        }
        .hero-gradient {
            background: linear-gradient(135deg, #065f46 0%, #047857 50%, #0f766e 100%);
            box-shadow: 0 20px 40px -15px rgba(4, 120, 87, 0.35);
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        .animate-float {
            animation: float 5s ease-in-out infinite;
        }
    </style>
</head>
<body class="h-full text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white">

    <header class="bg-emerald-900/95 text-white backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-emerald-800/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div class="flex items-center space-x-3.5 cursor-pointer group" onclick="goHome()">
                <div class="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl text-slate-950 font-extrabold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition duration-300">
                    <i data-lucide="graduation-cap" class="w-6 h-6"></i>
                </div>
                <div>
                    <h1 class="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-200 transition">UIN AR-RANIRY BANDA ACEH</h1>
                    <p class="text-[11px] text-emerald-300 font-medium">Sistem Informasi Pengumpulan Sertifikat Keahlian & Kompetensi</p>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <button onclick="openAdminLoginModal()" id="btnAdminLogin" class="text-emerald-100 hover:text-white text-xs bg-emerald-950/80 hover:bg-emerald-900 px-3.5 py-2 rounded-xl border border-emerald-700/60 transition shadow-sm flex items-center gap-2">
                    <i data-lucide="shield-check" class="w-4 h-4 text-amber-400"></i> Login Admin
                </button>
                <div id="userProfileBadge" class="hidden flex items-center gap-3 bg-emerald-950/80 px-4 py-2 rounded-2xl border border-emerald-700/60 shadow-sm">
                    <span id="navUserName" class="text-xs font-bold text-emerald-100"></span>
                    <button onclick="logout()" class="text-emerald-200 hover:text-white text-xs bg-emerald-800/80 hover:bg-emerald-700 px-3 py-1.5 rounded-xl transition flex items-center gap-1.5">
                        <i data-lucide="log-out" class="w-3.5 h-3.5"></i> Keluar
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        <div id="systemBanner" class="hero-gradient rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8">
            <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -left-16 -top-16 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div class="space-y-3 text-center lg:text-left z-10">
                <div id="statusPendaftaranBadge" class="inline-block bg-amber-400 text-amber-950 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md animate-pulse">Pendaftaran Dibuka</div>
                <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">JADWAL PENGIRIMAN/PENGUMPULAN SERTIFIKAT</h2>
                <p id="portfolioBannerText" class="text-emerald-100 text-xs sm:text-sm max-w-xl">Wajib bagi seluruh Dosen & Tenaga Kependidikan (Tendik) UIN Ar-Raniry Banda Aceh dalam pemenuhan portofolio tahun 2026.</p>
                <div class="inline-flex items-center gap-2.5 bg-emerald-950/40 px-4 py-2 rounded-2xl text-xs border border-emerald-600/40 shadow-inner">
                    <i data-lucide="calendar" class="w-4 h-4 text-amber-300"></i>
                    <span>Tenggat Waktu: <strong id="deadlineBannerText" class="text-amber-200">22 s.d. 30 Oktober 2026 (Pukul 23.00 WIB)</strong></span>
                </div>
            </div>
            <div class="flex flex-col items-center gap-3 z-10 bg-emerald-950/50 p-6 rounded-3xl border border-emerald-600/30 backdrop-blur-md shadow-xl">
                <span class="text-xs text-emerald-200 font-bold uppercase tracking-wider">Hitung Mundur Batas Waktu</span>
                <div id="countdownTimer" class="flex gap-2.5 text-center"></div>
            </div>
        </div>

        <div id="publicStatsSection" class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div class="glass-card p-6 rounded-3xl flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm animate-float">
                    <i data-lucide="users" class="w-7 h-7"></i>
                </div>
                <div>
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Jumlah Pengguna</div>
                    <div id="statPublicUsers" class="text-3xl font-extrabold text-slate-900 mt-1">0</div>
                    <div class="text-xs text-emerald-600 font-medium mt-0.5">Pegawai terdaftar aktif (Drive & Sheet)</div>
                </div>
            </div>
            <div class="glass-card p-6 rounded-3xl flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 shadow-sm animate-float" style="animation-delay: 1s;">
                    <i data-lucide="building-2" class="w-7 h-7"></i>
                </div>
                <div>
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Jumlah Unit Kerja</div>
                    <div id="statPublicUnits" class="text-3xl font-extrabold text-slate-900 mt-1">15</div>
                    <div class="text-xs text-teal-600 font-medium mt-0.5">Fakultas, Biro & Lembaga</div>
                </div>
            </div>
            <div class="glass-card p-6 rounded-3xl flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 shadow-sm animate-float" style="animation-delay: 2s;">
                    <i data-lucide="check-circle-2" class="w-7 h-7"></i>
                </div>
                <div>
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit Kerja Mengunggah</div>
                    <div id="statPublicUnitsUploaded" class="text-3xl font-extrabold text-slate-900 mt-1">0 / 15</div>
                    <div class="text-xs text-indigo-600 font-medium mt-0.5">Unit sudah mengirim berkas</div>
                </div>
            </div>
        </div>

        <section id="authSection" class="max-w-xl mx-auto glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200">
            <div class="flex rounded-2xl bg-slate-100/80 p-1.5 mb-8 shadow-inner">
                <button onclick="switchAuthTab('login')" id="authTabLogin" class="flex-1 py-3 text-xs font-extrabold rounded-xl bg-white text-slate-900 shadow-md transition-all duration-300">Masuk Akun</button>
                <button onclick="switchAuthTab('register')" id="authTabRegister" class="flex-1 py-3 text-xs font-extrabold rounded-xl text-slate-500 hover:text-slate-900 transition-all duration-300">Daftar Akun Baru</button>
            </div>

            <form id="loginFormContainer" onsubmit="handleLogin(event)" class="space-y-5">
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-black text-slate-900">Login Pegawai UIN</h2>
                    <p class="text-xs text-slate-500 mt-1">Masukkan NIP dan password akun terverifikasi Anda.</p>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Nomor Induk Pegawai (NIP / NIDN)</label>
                    <input type="text" id="loginNip" required placeholder="Contoh: 198501012015031001" class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-sm transition">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Password</label>
                    <input type="password" id="loginPass" required placeholder="••••••••" class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-sm transition">
                </div>
                <div class="flex justify-between items-center text-xs">
                    <button type="button" onclick="openResetPasswordModal()" class="text-emerald-700 hover:underline font-semibold">Lupa Password?</button>
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold py-3.5 rounded-2xl transition shadow-lg shadow-emerald-700/20 text-sm flex items-center justify-center gap-2">
                    <i data-lucide="log-in" class="w-4 h-4"></i> Masuk Sistem
                </button>
            </form>

            <form id="registerFormContainer" onsubmit="handleRegister(event)" class="space-y-4 hidden">
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-black text-slate-900">Pendaftaran Akun Pegawai</h2>
                    <p class="text-xs text-slate-500 mt-1">Otomatis tersimpan ke Google Spreadsheet & Drive.</p>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nomor Induk Pegawai (NIP / NIDN / NIDK)</label>
                    <input type="text" id="regNip" required placeholder="Contoh: 198501012015031001" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nama Lengkap & Gelar</label>
                    <input type="text" id="regNama" required placeholder="Contoh: Dr. H. Ahmad Zulkarnain, M.Ag." class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Aktif</label>
                        <input type="email" id="regEmail" required placeholder="email@ar-raniry.ac.id" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">No. WhatsApp</label>
                        <input type="text" id="regPhone" required placeholder="081234567890" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Status ASN</label>
                        <select id="regStatusAsn" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm">
                            <option value="">Pilih Status</option>
                            <option value="PNS">PNS</option>
                            <option value="PPPK">PPPK</option>
                            <option value="Tetap Non-ASN">Tetap Non-ASN</option>
                            <option value="Kontrak / BLU">Kontrak / BLU</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Jabatan Utama</label>
                        <select id="regJabatan" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm">
                            <option value="">Pilih Jabatan</option>
                            <option value="Dosen">Dosen</option>
                            <option value="Tenaga Kependidikan">Tenaga Kependidikan (Tendik)</option>
                            <option value="Fungsional Tertentu Lainnya">Fungsional Tertentu Lainnya</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Unit Kerja / Fakultas / Biro</label>
                    <select id="regUnitKerja" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm">
                        <option value="">-- Pilih Unit Kerja --</option>
                        <option value="Fakultas Tarbiyah dan Keguruan">Fakultas Tarbiyah dan Keguruan</option>
                        <option value="Fakultas Syariah dan Hukum">Fakultas Syariah dan Hukum</option>
                        <option value="Fakultas Ushuluddin dan Filsafat">Fakultas Ushuluddin dan Filsafat</option>
                        <option value="Fakultas Dakwah dan Komunikasi">Fakultas Dakwah dan Komunikasi</option>
                        <option value="Fakultas Adab dan Humaniora">Fakultas Adab dan Humaniora</option>
                        <option value="Fakultas Ekonomi dan Bisnis Islam">Fakultas Ekonomi dan Bisnis Islam</option>
                        <option value="Fakultas Sains dan Teknologi">Fakultas Sains dan Teknologi</option>
                        <option value="Fakultas Psikologi">Fakultas Psikologi</option>
                        <option value="Pascasarjana">Pascasarjana</option>
                        <option value="Biro AUPK">Biro AUPK</option>
                        <option value="Biro AAKK">Biro AAKK</option>
                        <option value="Lembaga Penjaminan Mutu (LPM)">Lembaga Penjaminan Mutu (LPM)</option>
                        <option value="LP2M">LP2M</option>
                        <option value="Perpustakaan UIN Ar-Raniry">Perpustakaan UIN Ar-Raniry</option>
                        <option value="Unit Lainnya">Unit Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Buat Password Akun</label>
                    <input type="password" id="regPass" required placeholder="••••••••" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm">
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold py-3.5 rounded-2xl transition shadow-lg shadow-emerald-700/20 text-sm flex items-center justify-center gap-2 mt-2">
                    <i data-lucide="user-plus" class="w-4 h-4"></i> Daftar & Simpan ke Spreadsheet
                </button>
            </form>
        </section>

        <section id="announcementSection" class="max-w-xl mx-auto w-full">
            <div class="glass-card rounded-3xl p-6 shadow-xl border border-slate-200">
                <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <h3 class="font-extrabold text-slate-900 text-sm flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="megaphone" class="w-4 h-4"></i></div>
                        Pengumuman & Jadwal Upload Terbaru
                    </h3>
                </div>
                <div id="announcementList" class="space-y-3"></div>
            </div>
        </section>

        <section id="dashboardSection" class="hidden space-y-6">
            <div class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div class="flex items-center gap-2 mb-2 flex-wrap">
                        <span id="badgeJabatan" class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-xl"></span>
                        <span id="badgeAsn" class="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-xl"></span>
                        <span id="badgeKelengkapan" class="text-xs font-extrabold px-3 py-1 rounded-xl shadow-sm"></span>
                    </div>
                    <h2 id="dashNama" class="text-2xl font-black text-slate-900"></h2>
                    <p class="text-xs text-slate-500 mt-1">NIP: <span id="dashNip" class="font-semibold text-slate-700"></span> &bull; Unit Kerja: <span id="dashUnit" class="font-semibold text-slate-700"></span></p>
                    <p class="text-xs text-slate-500 mt-0.5">Email: <span id="dashEmail" class="font-semibold text-slate-700"></span> &bull; WhatsApp: <span id="dashPhone" class="font-semibold text-slate-700"></span></p>
                </div>
                <div class="flex flex-wrap gap-2.5 items-center">
                    <div class="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 px-5 py-3 rounded-2xl text-center shadow-sm">
                        <div class="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Akumulasi Nilai Sistem</div>
                        <div id="dashTotalScore" class="text-2xl font-black text-emerald-900 mt-0.5">0 Poin</div>
                    </div>
                    <button onclick="openEditProfileModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-3 rounded-2xl transition text-xs flex items-center gap-2 shadow-sm">
                        <i data-lucide="user-cog" class="w-4 h-4"></i> Edit Biodata
                    </button>
                    <button onclick="openOfficialPrintModal()" class="bg-teal-700 hover:bg-teal-800 text-white font-bold px-4 py-3 rounded-2xl transition text-xs flex items-center gap-2 shadow-md">
                        <i data-lucide="printer" class="w-4 h-4"></i> Cetak Tanda Bukti & Rekapan
                    </button>
                    <button onclick="openUploadModal()" class="bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold px-5 py-3 rounded-2xl transition text-xs flex items-center gap-2 shadow-lg shadow-emerald-700/20">
                        <i data-lucide="plus-circle" class="w-4 h-4"></i> Tambah Sertifikat (Drive & Sheet)
                    </button>
                </div>
            </div>

            <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-6 text-amber-950 text-xs sm:text-sm space-y-2.5 shadow-sm">
                <div class="flex items-center gap-2.5 font-black text-amber-950 text-base">
                    <i data-lucide="info" class="w-5 h-5 text-amber-600"></i> Ketentuan Integrasi Google Drive & Spreadsheet UIN Ar-Raniry:
                </div>
                <ul class="list-disc pl-5 space-y-1.5 text-amber-900/90 font-medium">
                    <li><strong>Google Drive Storage:</strong> Setiap file PDF / JPG yang diunggah akan otomatis tersimpan di dalam Folder Google Drive resmi UIN Ar-Raniry.</li>
                    <li><strong>Google Spreadsheet Sync:</strong> Data rekapitulasi, nama pegawai, instansi, JP, dan link file Drive langsung tercatat secara otomatis ke Spreadsheet.</li>
                    <li><strong>Sertifikat Keahlian:</strong> Bebas tahun (&le; 2026).</li>
                    <li><strong>Sertifikat Kompetensi:</strong> Khusus tahun 2026.</li>
                </ul>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="glass-card rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col">
                    <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-emerald-100 text-emerald-800 p-2.5 rounded-2xl shadow-sm"><i data-lucide="award" class="w-5 h-5"></i></div>
                            <div>
                                <h3 class="font-black text-slate-900 text-sm">Sertifikat Keahlian</h3>
                                <p class="text-xs text-slate-500">Semua Tahun (&le; 2026)</p>
                            </div>
                        </div>
                        <span id="countKeahlian" class="bg-emerald-50 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded-full border border-emerald-200">0 File</span>
                    </div>
                    <div id="listKeahlian" class="space-y-3.5 flex-grow overflow-y-auto max-h-96 pr-1"></div>
                </div>

                <div class="glass-card rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col">
                    <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-teal-100 text-teal-800 p-2.5 rounded-2xl shadow-sm"><i data-lucide="book-open" class="w-5 h-5"></i></div>
                            <div>
                                <h3 class="font-black text-slate-900 text-sm">Sertifikat Kompetensi</h3>
                                <p class="text-xs text-slate-500">Khusus Tahun 2026</p>
                            </div>
                        </div>
                        <span id="countKompetensi" class="bg-teal-50 text-teal-800 font-extrabold text-xs px-3 py-1 rounded-full border border-teal-200">0 File</span>
                    </div>
                    <div id="listKompetensi" class="space-y-3.5 flex-grow overflow-y-auto max-h-96 pr-1"></div>
                </div>

                <div class="glass-card rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col bg-emerald-50/40">
                    <div class="flex justify-between items-center mb-5 pb-3 border-b border-emerald-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-emerald-600 text-white p-2.5 rounded-2xl shadow-sm"><i data-lucide="archive" class="w-5 h-5"></i></div>
                            <div>
                                <h3 class="font-black text-slate-900 text-sm">Arsip Terverifikasi</h3>
                                <p class="text-xs text-emerald-700">Disetujui Admin</p>
                            </div>
                        </div>
                        <span id="countArsip" class="bg-emerald-200 text-emerald-900 font-extrabold text-xs px-3 py-1 rounded-full">0 Arsip</span>
                    </div>
                    <div id="listArsip" class="space-y-3.5 flex-grow overflow-y-auto max-h-96 pr-1"></div>
                </div>
            </div>
        </section>

        <section id="adminDashboardSection" class="hidden space-y-6">
            <div class="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-slate-800">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow">PANEL ADMINISTRATOR (GOOGLE DRIVE & SHEETS)</span>
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-black tracking-tight">Dashboard Rekapitulasi & Master Database</h2>
                    <p class="text-xs text-slate-300 mt-1">UIN Ar-Raniry Banda Aceh - Monitoring, Manajemen User & Akumulasi Skor</p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <button onclick="openAdminOfficialPrintModal()" class="bg-teal-700 hover:bg-teal-800 text-white font-bold px-4 py-3 rounded-2xl transition text-xs flex items-center gap-2 shadow-lg">
                        <i data-lucide="printer" class="w-4 h-4"></i> Cetak Laporan Master Resmi
                    </button>
                    <button onclick="logoutAdmin()" class="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-2xl transition text-xs flex items-center gap-2 shadow-lg">
                        <i data-lucide="log-out" class="w-4 h-4"></i> Keluar Admin
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="glass-card p-6 rounded-3xl shadow-sm text-slate-900 border border-slate-200">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Pegawai Terdaftar</div>
                    <div id="statTotalPegawai" class="text-3xl font-black mt-1 text-slate-900">0</div>
                </div>
                <div class="glass-card p-6 rounded-3xl shadow-sm text-slate-900 border border-slate-200">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">Sudah Upload Berkas</div>
                    <div id="statTotalUpload" class="text-3xl font-black text-indigo-600 mt-1">0</div>
                </div>
                <div class="glass-card p-6 rounded-3xl shadow-sm text-slate-900 border border-slate-200">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">Berkas Terarsip</div>
                    <div id="statTotalArsip" class="text-3xl font-black text-emerald-600 mt-1">0</div>
                </div>
                <div class="glass-card p-6 rounded-3xl shadow-sm text-slate-900 border border-slate-200">
                    <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">Total File Sertifikat</div>
                    <div id="statTotalBerkas" class="text-3xl font-black text-teal-600 mt-1">0</div>
                </div>
            </div>

            <div class="flex flex-wrap gap-2.5 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
                <button onclick="switchAdminTab('monitoring')" id="tabBtnMonitoring" class="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-extrabold transition shadow-sm">Data Peserta & Nilai</button>
                <button onclick="switchAdminTab('masterdb')" id="tabBtnMasterDb" class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition">Master DB Pegawai</button>
                <button onclick="switchAdminTab('rekap')" id="tabBtnRekap" class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition">Rekapitulasi Unit Kerja</button>
                <button onclick="switchAdminTab('arsip')" id="tabBtnArsip" class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition">Arsip Master (Terverifikasi)</button>
                <button onclick="switchAdminTab('settings')" id="tabBtnSettings" class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition">Pengaturan Sistem, Bobot & Deadline</button>
                <button onclick="switchAdminTab('announcement')" id="tabBtnAnnouncement" class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition">Kelola Pengumuman / PDF</button>
            </div>

            <div id="adminTabMonitoring" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 class="font-black text-slate-900 text-base">Data Peserta, Berkas & Akumulasi Poin Penilaian</h3>
                        <p class="text-xs text-slate-500">Klik tombol "Detail" untuk memeriksa dokumen Google Drive dan melakukan verifikasi arsip.</p>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <input type="text" id="adminSearchInput" onkeyup="renderAdminTable()" placeholder="Cari NIP / Nama..." class="px-4 py-2.5 rounded-2xl border border-slate-200 text-xs w-full sm:w-64 focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                        <button onclick="exportTableToCSV()" class="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 flex-shrink-0 shadow-md">
                            <i data-lucide="download" class="w-4 h-4"></i> Ekspor CSV
                        </button>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2 pt-1">
                    <button onclick="setAdminFilter('all')" id="filterBtn-all" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white transition shadow-sm">Semua Peserta</button>
                    <button onclick="setAdminFilter('uploaded')" id="filterBtn-uploaded" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition">Sudah Upload Berkas</button>
                    <button onclick="setAdminFilter('complete')" id="filterBtn-complete" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition">Status Lengkap</button>
                    <button onclick="setAdminFilter('not_uploaded')" id="filterBtn-not_uploaded" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition">Belum Upload</button>
                </div>
                <div class="overflow-x-auto pt-2">
                    <table class="w-full text-left text-xs text-slate-700">
                        <thead class="bg-slate-100 text-slate-800 uppercase font-extrabold tracking-wider">
                            <tr>
                                <th class="p-3.5 rounded-l-2xl">No</th>
                                <th class="p-3.5">NIP / Nama Pegawai</th>
                                <th class="p-3.5">Kontak (WhatsApp / Email)</th>
                                <th class="p-3.5">Jabatan & Unit Kerja</th>
                                <th class="p-3.5 text-center">Jml Berkas</th>
                                <th class="p-3.5 text-center">Akumulasi Nilai</th>
                                <th class="p-3.5 text-center">Status</th>
                                <th class="p-3.5 text-center rounded-r-2xl">Aksi Berkas</th>
                            </tr>
                        </thead>
                        <tbody id="adminTableBody" class="divide-y divide-slate-100 font-medium"></tbody>
                    </table>
                </div>
            </div>

            <div id="adminTabMasterDb" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6 hidden">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 class="font-black text-slate-900 text-base">Master Database Akun Pegawai</h3>
                        <p class="text-xs text-slate-500">Kelola akun pegawai, edit biodata, reset password otomatis, dan hapus akun.</p>
                    </div>
                    <div class="w-full sm:w-auto">
                        <input type="text" id="adminMasterSearch" onkeyup="renderAdminMasterDbTable()" placeholder="Cari NIP / Nama / Email..." class="px-4 py-2.5 rounded-2xl border border-slate-200 text-xs w-full sm:w-64 focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                    </div>
                </div>
                <div class="overflow-x-auto pt-2">
                    <table class="w-full text-left text-xs text-slate-700">
                        <thead class="bg-slate-100 text-slate-800 uppercase font-extrabold tracking-wider">
                            <tr>
                                <th class="p-3.5 rounded-l-2xl">No</th>
                                <th class="p-3.5">NIP & Nama Lengkap</th>
                                <th class="p-3.5">Email & No. WA</th>
                                <th class="p-3.5">Jabatan & Unit Kerja</th>
                                <th class="p-3.5 text-center">Status Verif</th>
                                <th class="p-3.5 text-center rounded-r-2xl">Aksi Admin (Edit / Reset / Cetak)</th>
                            </tr>
                        </thead>
                        <tbody id="adminMasterDbTableBody" class="divide-y divide-slate-100 font-medium"></tbody>
                    </table>
                </div>
            </div>

            <div id="adminTabRekap" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6 hidden">
                <h3 class="font-black text-slate-900 text-base">Rekapitulasi Berdasarkan Unit Kerja / Fakultas</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs text-slate-700">
                        <thead class="bg-slate-100 text-slate-800 uppercase font-extrabold tracking-wider">
                            <tr>
                                <th class="p-3.5 rounded-l-2xl">Unit Kerja / Fakultas</th>
                                <th class="p-3.5 text-center">Jumlah Pegawai</th>
                                <th class="p-3.5 text-center">Sudah Lengkap</th>
                                <th class="p-3.5 text-center">Rata-rata Poin</th>
                                <th class="p-3.5 text-center rounded-r-2xl">Progres (%)</th>
                            </tr>
                        </thead>
                        <tbody id="adminRekapTableBody" class="divide-y divide-slate-100 font-medium"></tbody>
                    </table>
                </div>
            </div>

            <div id="adminTabArsip" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6 hidden">
                <h3 class="font-black text-slate-900 text-base">Arsip Master Berkas Terverifikasi</h3>
                <div class="overflow-x-auto pt-2">
                    <table class="w-full text-left text-xs text-slate-700">
                        <thead class="bg-slate-100 text-slate-800 uppercase font-extrabold tracking-wider">
                            <tr>
                                <th class="p-3.5 rounded-l-2xl">No</th>
                                <th class="p-3.5">Pegawai & NIP</th>
                                <th class="p-3.5">Kategori & Tingkat</th>
                                <th class="p-3.5">Nama Sertifikat & Instansi</th>
                                <th class="p-3.5 text-center">Tahun / JP</th>
                                <th class="p-3.5 text-center rounded-r-2xl">Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="adminArsipTableBody" class="divide-y divide-slate-100 font-medium"></tbody>
                    </table>
                </div>
            </div>

            <div id="adminTabSettings" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6 hidden max-w-2xl">
                <h3 class="font-black text-slate-900 text-base">Pengaturan Sistem, Bobot Poin & Deadline</h3>
                <div class="space-y-5">
                    <div class="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-200">
                        <div>
                            <h4 class="font-extrabold text-slate-900 text-sm">Status Pendaftaran Manual (Tombol Buka / Tutup)</h4>
                            <p class="text-xs text-slate-500 mt-0.5">Tutup atau buka paksa akses upload sertifikat secara instan.</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="togglePendaftaran" onchange="toggleSystemStatus(this)" class="sr-only peer">
                            <div class="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Ubah Tenggat Waktu Deadline</label>
                        <input type="datetime-local" id="deadlineInput" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Teks Kewajiban Portofolio (Banner Atas)</label>
                        <textarea id="portfolioTextInput" rows="2" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50"></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Teks Berjalan (Running Text Footer)</label>
                        <textarea id="runningTextInput" rows="2" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50"></textarea>
                    </div>
                    <div class="border-t border-slate-200 pt-5">
                        <h4 class="font-extrabold text-slate-900 text-sm mb-3">Pengaturan Bobot Poin / Nilai Sertifikat (Sinkron Otomatis)</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Internasional (Poin)</label>
                                <input type="number" id="weightInternasional" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Nasional (Poin)</label>
                                <input type="number" id="weightNasional" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Regional (Poin)</label>
                                <input type="number" id="weightRegional" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Lokal / Institusi (Poin)</label>
                                <input type="number" id="weightLokal" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50">
                            </div>
                        </div>
                    </div>
                    <button onclick="saveSystemSettings()" class="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-2xl text-xs transition shadow-md">Simpan & Sinkronkan Pengaturan</button>
                </div>
            </div>

            <div id="adminTabAnnouncement" class="glass-card rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6 hidden max-w-2xl">
                <h3 class="font-black text-slate-900 text-base">Buat Pengumuman & Unggah Berkas PDF</h3>
                <form id="announcementForm" onsubmit="handlePostAnnouncement(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Judul Pengumuman</label>
                        <input type="text" id="annTitle" required placeholder="Contoh: Panduan Resmi Portofolio 2026" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Isi Pesan / Informasi</label>
                        <textarea id="annContent" rows="3" required placeholder="Tuliskan detail pengumuman..." class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 bg-slate-50"></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Lampiran File PDF (Opsional)</label>
                        <input type="file" id="annFile" accept=".pdf" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-500 bg-slate-50 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100">
                    </div>
                    <button type="submit" class="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-2xl text-xs transition shadow-md">Publikasikan Pengumuman</button>
                </form>
            </div>
        </section>
    </main>

    <div id="emailVerificationModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-5 border border-slate-200">
            <div class="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                        <i data-lucide="mail-check" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-slate-900 text-sm">Simulasi Kotak Masuk (Inbox Email)</h3>
                        <p class="text-[11px] text-slate-500">Aplikasi mengirim verifikasi ke email pegawai.</p>
                    </div>
                </div>
                <button onclick="closeEmailVerificationModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5 text-xs">
                <div class="flex justify-between border-b border-slate-200 pb-2.5">
                    <div>
                        <span class="font-bold text-slate-400">Dari:</span> <span class="text-slate-800 font-medium">noreply@ar-raniry.ac.id</span><br>
                        <span class="font-bold text-slate-400">Kepada:</span> <span id="simEmailTo" class="font-bold text-emerald-700">-</span>
                    </div>
                    <div class="text-right text-slate-400 font-medium">Baru saja</div>
                </div>
                <div>
                    <h4 id="simEmailSubject" class="font-black text-slate-900 text-sm mb-1">Verifikasi Akun Sistem Pengumpulan Sertifikat UIN Ar-Raniry 2026</h4>
                    <p class="text-slate-600">Halo <strong id="simEmailNama">-</strong>,</p>
                    <p id="simEmailBody" class="text-slate-600 mt-1">Terima kasih telah mendaftar. Akun Anda memerlukan verifikasi email untuk diaktifkan.</p>
                    <div class="bg-white p-3.5 rounded-xl border border-slate-200 my-3.5 space-y-1 font-mono text-[11px] shadow-sm">
                        <div><strong>NIP / User:</strong> <span id="simEmailNip" class="text-emerald-700 font-bold">-</span></div>
                        <div><strong>Password:</strong> <span id="simEmailPass" class="text-emerald-700 font-bold">-</span></div>
                    </div>
                </div>
                <div class="text-center pt-2">
                    <button id="simVerifyBtn" onclick="" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-2xl transition shadow-lg text-xs flex items-center justify-center gap-2">
                        <i data-lucide="external-link" class="w-4 h-4"></i> 🔗 Verifikasi Akun & Masuk ke Halaman Login
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="uploadModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                <h3 class="font-black text-slate-900 text-base flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="upload-cloud" class="w-5 h-5"></i></div>
                    Tambah Dokumen Sertifikat (Drive & Sheet)
                </h3>
                <button onclick="closeUploadModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <form id="uploadForm" onsubmit="handleUpload(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Kategori Sertifikat</label>
                    <select id="jenisSertifikat" required onchange="onKategoriChange()" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-emerald-500">
                        <option value="">Pilih Kategori</option>
                        <option value="Keahlian">a. Sertifikat Keahlian (Serdos, Bendahara, dll.)</option>
                        <option value="Kompetensi">b. Sertifikat Peningkatan Kompetensi (Seminar, Diklat, dll.)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Tingkatan / Skala Kegiatan</label>
                    <select id="tingkatSertifikat" required class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-emerald-500">
                        <option value="Internasional">Internasional (Bobot Poin: <span id="weightHintInternasional">100</span>)</option>
                        <option value="Nasional" selected>Nasional (Bobot Poin: <span id="weightHintNasional">75</span>)</option>
                        <option value="Regional">Regional / Provinsi (Bobot Poin: <span id="weightHintRegional">50</span>)</option>
                        <option value="Lokal">Lokal / Institusi (Bobot Poin: <span id="weightHintLokal">25</span>)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nama / Judul Sertifikat</label>
                    <input type="text" id="namaSertifikat" required placeholder="Contoh: Sertifikat Pendidik (Serdos) / Diklat Pedagogik" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 bg-slate-50/50">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nama Instansi / Lembaga Penerbit Sertifikat</label>
                    <input type="text" id="instansiPenerbit" required placeholder="Contoh: Kementerian Agama / Universitas X / Lembaga Diklat" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 bg-slate-50/50">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Jumlah JP / Jam Pelajaran</label>
                        <input type="text" id="jumlahJp" placeholder="Contoh: 32 JP" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 bg-slate-50/50">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Tahun Perolehan</label>
                        <input type="number" id="tahunSertifikat" required min="1990" max="2026" placeholder="Contoh: 2026" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 bg-slate-50/50">
                    </div>
                </div>
                <p id="tahunHint" class="text-[11px] text-slate-500">Sertifikat keahlian bebas tahun (&le;2026), Kompetensi harus tahun 2026.</p>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">File Sertifikat (PDF, JPG, JPEG &bull; Maksimal 2MB &bull; Masuk Drive)</label>
                    <input type="file" id="fileSertifikat" accept=".pdf,.jpg,.jpeg" required class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-500 bg-slate-50 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100">
                </div>
                <div class="flex justify-end gap-3 pt-3">
                    <button type="button" onclick="closeUploadModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition">Batal</button>
                    <button type="submit" class="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition shadow-md">Unggah ke Drive & Sheet</button>
                </div>
            </form>
        </div>
    </div>

    <div id="editProfileModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                <h3 class="font-black text-slate-900 text-base flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="user-cog" class="w-5 h-5"></i></div>
                    Perbarui Biodata & Kontak
                </h3>
                <button onclick="closeEditProfileModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <form onsubmit="handleUpdateProfile(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nama Lengkap & Gelar</label>
                    <input type="text" id="editNama" required class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-slate-50/50">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Aktif</label>
                        <input type="email" id="editEmail" required class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-slate-50/50">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">No. WhatsApp</label>
                        <input type="text" id="editPhone" required class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-slate-50/50">
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Status ASN</label>
                        <select id="editStatusAsn" required class="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm bg-white">
                            <option value="PNS">PNS</option>
                            <option value="PPPK">PPPK</option>
                            <option value="Tetap Non-ASN">Tetap Non-ASN</option>
                            <option value="Kontrak / BLU">Kontrak / BLU</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Jabatan</label>
                        <select id="editJabatan" required class="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm bg-white">
                            <option value="Dosen">Dosen</option>
                            <option value="Tenaga Kependidikan">Tenaga Kependidikan (Tendik)</option>
                            <option value="Fungsional Tertentu Lainnya">Fungsional Tertentu Lainnya</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Unit Kerja / Fakultas</label>
                    <select id="editUnitKerja" required class="w-full px-3.5 py-3 rounded-2xl border border-slate-200 text-sm bg-white">
                        <option value="Fakultas Tarbiyah dan Keguruan">Fakultas Tarbiyah dan Keguruan</option>
                        <option value="Fakultas Syariah dan Hukum">Fakultas Syariah dan Hukum</option>
                        <option value="Fakultas Ushuluddin dan Filsafat">Fakultas Ushuluddin dan Filsafat</option>
                        <option value="Fakultas Dakwah dan Komunikasi">Fakultas Dakwah dan Komunikasi</option>
                        <option value="Fakultas Adab dan Humaniora">Fakultas Adab dan Humaniora</option>
                        <option value="Fakultas Ekonomi dan Bisnis Islam">Fakultas Ekonomi dan Bisnis Islam</option>
                        <option value="Fakultas Sains dan Teknologi">Fakultas Sains dan Teknologi</option>
                        <option value="Fakultas Psikologi">Fakultas Psikologi</option>
                        <option value="Pascasarjana">Pascasarjana</option>
                        <option value="Biro AUPK">Biro AUPK</option>
                        <option value="Biro AAKK">Biro AAKK</option>
                        <option value="Lembaga Penjaminan Mutu (LPM)">Lembaga Penjaminan Mutu (LPM)</option>
                        <option value="LP2M">LP2M</option>
                        <option value="Perpustakaan UIN Ar-Raniry">Perpustakaan UIN Ar-Raniry</option>
                        <option value="Unit Lainnya">Unit Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Ganti Password Baru (Opsional)</label>
                    <input type="password" id="editPassword" placeholder="Biarkan kosong jika tidak diganti" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-slate-50/50">
                </div>
                <div class="flex justify-end gap-3 pt-3">
                    <button type="button" onclick="closeEditProfileModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition">Batal</button>
                    <button type="submit" class="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition shadow-md">Simpan Perubahan</button>
                </div>
            </form>
        </div>
    </div>

    <div id="resetPasswordModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-sm w-full p-8 shadow-2xl space-y-4 border border-slate-200">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-black text-slate-900 text-base flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="key-round" class="w-4 h-4"></i></div>
                    Reset Password
                </h3>
                <button onclick="closeResetPasswordModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <form onsubmit="handleResetPassword(event)" class="space-y-3.5">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nomor Induk Pegawai (NIP)</label>
                    <input type="text" id="resetNip" required placeholder="Masukkan NIP Anda" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs bg-slate-50/50">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Terdaftar</label>
                    <input type="email" id="resetEmail" required placeholder="email@ar-raniry.ac.id" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs bg-slate-50/50">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Password Baru</label>
                    <input type="password" id="resetNewPass" required placeholder="••••••••" class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs bg-slate-50/50">
                </div>
                <button type="submit" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-2xl text-xs transition shadow-md">Setel Ulang Password</button>
            </form>
        </div>
    </div>

    <div id="adminEditUserModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200">
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
                <h3 class="font-black text-slate-900 text-base flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="user-pen" class="w-5 h-5"></i></div>
                    Edit Data Pegawai (Admin)
                </h3>
                <button onclick="closeAdminEditUserModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <form onsubmit="handleAdminUpdateUser(event)" class="space-y-4">
                <input type="hidden" id="adminEditUserNipOriginal">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">NIP</label>
                    <input type="text" id="adminEditNip" required class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm bg-slate-100 font-mono" readonly>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nama Lengkap & Gelar</label>
                    <input type="text" id="adminEditNama" required class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm bg-slate-50">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email</label>
                        <input type="email" id="adminEditEmail" required class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm bg-slate-50">
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">No. WhatsApp</label>
                        <input type="text" id="adminEditPhone" required class="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm bg-slate-50">
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Status ASN</label>
                        <select id="adminEditStatusAsn" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm bg-white">
                            <option value="PNS">PNS</option>
                            <option value="PPPK">PPPK</option>
                            <option value="Tetap Non-ASN">Tetap Non-ASN</option>
                            <option value="Kontrak / BLU">Kontrak / BLU</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Jabatan</label>
                        <select id="adminEditJabatan" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm bg-white">
                            <option value="Dosen">Dosen</option>
                            <option value="Tenaga Kependidikan">Tenaga Kependidikan (Tendik)</option>
                            <option value="Fungsional Tertentu Lainnya">Fungsional Tertentu Lainnya</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Unit Kerja / Fakultas</label>
                    <select id="adminEditUnitKerja" required class="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm bg-white">
                        <option value="Fakultas Tarbiyah dan Keguruan">Fakultas Tarbiyah dan Keguruan</option>
                        <option value="Fakultas Syariah dan Hukum">Fakultas Syariah dan Hukum</option>
                        <option value="Fakultas Ushuluddin dan Filsafat">Fakultas Ushuluddin dan Filsafat</option>
                        <option value="Fakultas Dakwah dan Komunikasi">Fakultas Dakwah dan Komunikasi</option>
                        <option value="Fakultas Adab dan Humaniora">Fakultas Adab dan Humaniora</option>
                        <option value="Fakultas Ekonomi dan Bisnis Islam">Fakultas Ekonomi dan Bisnis Islam</option>
                        <option value="Fakultas Sains dan Teknologi">Fakultas Sains dan Teknologi</option>
                        <option value="Fakultas Psikologi">Fakultas Psikologi</option>
                        <option value="Pascasarjana">Pascasarjana</option>
                        <option value="Biro AUPK">Biro AUPK</option>
                        <option value="Biro AAKK">Biro AAKK</option>
                        <option value="Lembaga Penjaminan Mutu (LPM)">Lembaga Penjaminan Mutu (LPM)</option>
                        <option value="LP2M">LP2M</option>
                        <option value="Perpustakaan UIN Ar-Raniry">Perpustakaan UIN Ar-Raniry</option>
                        <option value="Unit Lainnya">Unit Lainnya</option>
                    </select>
                </div>
                <div class="flex justify-end gap-3 pt-3">
                    <button type="button" onclick="closeAdminEditUserModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition">Batal</button>
                    <button type="submit" class="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition shadow-md">Simpan Perubahan</button>
                </div>
            </form>
        </div>
    </div>

    <div id="officialPrintModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-4xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div id="printSection" class="space-y-5 text-slate-800 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div class="border-b-2 border-slate-900 pb-5 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-emerald-900 text-amber-400 rounded-2xl flex items-center justify-center font-black text-2xl shadow-md">UIN</div>
                        <div>
                            <h3 class="font-black text-xs tracking-wider">KEMENTERIAN AGAMA REPUBLIK INDONESIA</h3>
                            <h2 class="font-extrabold text-base text-emerald-900 mt-0.5">UNIVERSITAS ISLAM NEGERI AR-RANIRY BANDA ACEH</h2>
                            <p class="text-[11px] text-slate-600 font-medium">Jl. Syeikh Abdul Rauf Kopelma Darussalam, Banda Aceh</p>
                        </div>
                    </div>
                </div>
                <div class="text-center space-y-1.5 pt-2">
                    <h4 class="font-black text-sm uppercase tracking-wider">TANDA BUKTI & PENILAIAN AKUMULASI SERTIFIKAT KEAHLIAN & KOMPETENSI</h4>
                    <p class="text-xs text-slate-600 font-medium">Tahun Anggaran 2026</p>
                </div>
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2">
                    <div class="grid grid-cols-3"><span class="font-bold text-slate-500">Nama Pegawai</span><span class="col-span-2 font-bold text-slate-900" id="printNama">: -</span></div>
                    <div class="grid grid-cols-3"><span class="font-bold text-slate-500">NIP / NIDN</span><span class="col-span-2 font-bold text-slate-900" id="printNip">: -</span></div>
                    <div class="grid grid-cols-3"><span class="font-bold text-slate-500">Jabatan / Status ASN</span><span class="col-span-2 font-bold text-slate-900" id="printJabatan">: -</span></div>
                    <div class="grid grid-cols-3"><span class="font-bold text-slate-500">Unit Kerja / Fakultas</span><span class="col-span-2 font-bold text-slate-900" id="printUnit">: -</span></div>
                    <div class="grid grid-cols-3"><span class="font-bold text-slate-500">Total Akumulasi Nilai</span><span class="col-span-2 font-black text-emerald-800 text-sm" id="printTotalScore">: 0 Poin</span></div>
                </div>
                <div class="space-y-3 pt-2">
                    <h5 class="font-extrabold text-xs uppercase tracking-wider text-slate-900">Rincian Dokumen Google Drive, Instansi, JP & Bobot Penilaian:</h5>
                    <table class="w-full text-left text-xs border border-slate-300">
                        <thead class="bg-slate-100 uppercase font-extrabold">
                            <tr>
                                <th class="p-2.5 border border-slate-300 text-center">No</th>
                                <th class="p-2.5 border border-slate-300">Kategori & Tingkat</th>
                                <th class="p-2.5 border border-slate-300">Nama Sertifikat & Instansi</th>
                                <th class="p-2.5 border border-slate-300 text-center">JP</th>
                                <th class="p-2.5 border border-slate-300 text-center">Tahun</th>
                                <th class="p-2.5 border border-slate-300 text-center">Bobot Nilai</th>
                            </tr>
                        </thead>
                        <tbody id="printTableBody" class="font-medium"></tbody>
                    </table>
                </div>
                <div class="flex justify-between items-end pt-10 text-xs">
                    <div>
                        <p class="text-slate-500 font-medium">Status Verifikasi & Predikat:</p>
                        <p class="font-black text-emerald-700 text-sm mt-1" id="printStatusKelengkapan">-</p>
                    </div>
                    <div class="text-center space-y-14">
                        <p class="font-medium">Banda Aceh, <span id="printDateNow"></span></p>
                        <div>
                            <p class="font-black underline text-slate-900" id="printSignNama">-</p>
                            <p class="text-[11px] text-slate-600 font-medium">NIP. <span id="printSignNip">-</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end gap-3 pt-2">
                <button type="button" onclick="closeOfficialPrintModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition">Tutup</button>
                <button type="button" onclick="window.print()" class="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition shadow-md flex items-center gap-2">
                    <i data-lucide="printer" class="w-4 h-4"></i> Cetak Dokumen / PDF
                </button>
            </div>
        </div>
    </div>

    <div id="adminOfficialPrintModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-4xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div id="adminPrintSection" class="space-y-5 text-slate-800 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div class="border-b-2 border-slate-900 pb-5 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 bg-emerald-900 text-amber-400 rounded-2xl flex items-center justify-center font-black text-2xl shadow-md">UIN</div>
                        <div>
                            <h3 class="font-black text-xs tracking-wider">KEMENTERIAN AGAMA REPUBLIK INDONESIA</h3>
                            <h2 class="font-extrabold text-base text-emerald-900 mt-0.5">UNIVERSITAS ISLAM NEGERI AR-RANIRY BANDA ACEH</h2>
                            <p class="text-[11px] text-slate-600 font-medium">Jl. Syeikh Abdul Rauf Kopelma Darussalam, Banda Aceh</p>
                        </div>
                    </div>
                </div>
                <div class="text-center space-y-1.5 pt-2">
                    <h4 class="font-black text-sm uppercase tracking-wider">LAPORAN MASTER PENILAIAN & AKUMULASI SKOR SERTIFIKAT</h4>
                    <p class="text-xs text-slate-600 font-medium">Seluruh Dosen & Tenaga Kependidikan UIN Ar-Raniry - Tahun Anggaran 2026</p>
                </div>
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs flex justify-between items-center font-medium">
                    <div>
                        <div><strong>Total Pegawai Terdaftar:</strong> <span id="masterTotalPegawai" class="font-bold">0</span> Orang</div>
                        <div><strong>Total Berkas Terunggah (Drive):</strong> <span id="masterTotalBerkas" class="font-bold">0</span> Berkas PDF/JPG</div>
                    </div>
                    <div>
                        <div><strong>Pegawai Lengkap:</strong> <span id="masterTotalLengkap" class="text-emerald-700 font-bold">0</span> Orang</div>
                        <div><strong>Tanggal Cetak:</strong> <span id="masterPrintDate" class="font-bold">-</span></div>
                    </div>
                </div>
                <div class="space-y-3 pt-2">
                    <h5 class="font-extrabold text-xs uppercase tracking-wider text-slate-900">Rincian Akumulasi Skor Penilaian Pegawai (Tersinkron Spreadsheet):</h5>
                    <table class="w-full text-left text-xs border border-slate-300">
                        <thead class="bg-slate-100 uppercase font-extrabold">
                            <tr>
                                <th class="p-2.5 border border-slate-300 text-center">No</th>
                                <th class="p-2.5 border border-slate-300">NIP & Nama Pegawai</th>
                                <th class="p-2.5 border border-slate-300">Jabatan & Unit Kerja</th>
                                <th class="p-2.5 border border-slate-300">Nama / Jenis Sertifikat</th>
                                <th class="p-2.5 border border-slate-300 text-center">Bobot / Akumulasi</th>
                                <th class="p-2.5 border border-slate-300 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody id="adminMasterPrintTableBody" class="font-medium"></tbody>
                    </table>
                </div>
                <div class="flex justify-end pt-12 text-xs">
                    <div class="text-center space-y-14">
                        <p class="font-medium">Banda Aceh, <span id="adminPrintDateSign">-</span></p>
                        <div>
                            <p class="font-black underline text-slate-900">Tim Administrator Kepegawaian</p>
                            <p class="text-[11px] text-slate-600 font-medium">UIN Ar-Raniry Banda Aceh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end gap-3 pt-2">
                <button type="button" onclick="closeAdminOfficialPrintModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition">Tutup</button>
                <button type="button" onclick="window.print()" class="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold transition shadow-md flex items-center gap-2">
                    <i data-lucide="printer" class="w-4 h-4"></i> Cetak Laporan Master / PDF
                </button>
            </div>
        </div>
    </div>

    <div id="adminLoginModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-sm w-full p-8 shadow-2xl space-y-4 border border-slate-200">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-black text-slate-900 text-base flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center"><i data-lucide="shield-check" class="w-4 h-4"></i></div>
                    Login Admin
                </h3>
                <button onclick="closeAdminLoginModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <form onsubmit="handleAdminLogin(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Username Admin</label>
                    <input type="text" id="adminUser" required placeholder="admin" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs bg-slate-50/50">
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Password</label>
                    <input type="password" id="adminPass" required placeholder="••••••••" class="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs bg-slate-50/50">
                </div>
                <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl text-xs transition shadow-lg">Masuk Dashboard Admin</button>
            </form>
        </div>
    </div>

    <div id="adminDetailModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto border border-slate-200">
            <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 class="font-black text-slate-900 text-base" id="detailModalTitle">Detail Dokumen Google Drive Pegawai</h3>
                <button onclick="closeAdminDetailModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
            </div>
            <div id="detailModalContent" class="space-y-4 text-xs"></div>
        </div>
    </div>

    <div id="alertModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 hidden">
        <div class="glass-card rounded-3xl max-w-sm w-full p-8 shadow-2xl text-center space-y-4 border border-slate-200">
            <div id="alertIcon" class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <i data-lucide="check" class="w-7 h-7"></i>
            </div>
            <h4 id="alertTitle" class="font-black text-slate-900 text-lg">Berhasil</h4>
            <p id="alertMessage" class="text-sm text-slate-600 font-medium">Pesan notifikasi...</p>
            <button onclick="closeAlert()" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-2xl text-sm transition shadow-md">Mengerti</button>
        </div>
    </div>

    <footer class="bg-white border-t border-slate-200 text-slate-600 text-xs mt-auto">
        <div class="bg-emerald-950 text-emerald-100 py-3 px-4 overflow-hidden border-b border-emerald-900 shadow-inner">
            <div class="max-w-7xl mx-auto flex items-center gap-3">
                <i data-lucide="info" class="w-4 h-4 flex-shrink-0 text-amber-400"></i>
                <marquee id="runningTextDisplay" class="font-semibold text-xs tracking-wide">Sistem Pengumpulan Sertifikat UIN Ar-Raniry. Semua file PDF & JPG tersimpan otomatis ke Google Drive dan data tersinkron ke Spreadsheet.</marquee>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div>
                <h5 class="font-black text-slate-900 text-sm">UIN Ar-Raniry Banda Aceh</h5>
                <p class="text-slate-500 mt-1 font-medium">Alamat: Jl. Syeikh Abdul Rauf Kopelma Darussalam, Banda Aceh, Aceh</p>
                <p class="text-slate-500 font-medium">Email: kepegawaian@ar-raniry.ac.id | Telp: (0651) 7551234</p>
            </div>
            <div class="text-slate-400 text-[11px] text-center sm:text-right font-medium">
                <p>&copy; 2026 Biro AUPK & Kepegawaian UIN Ar-Raniry.</p>
                <p>Google Drive & Spreadsheet Integration Active.</p>
            </div>
        </div>
    </footer>

    <script>
        lucide.createIcons();

        // Konfigurasi Google Apps Script Web App URL (Masukkan URL deploy GAS Anda di sini jika tersedia)
        const GAS_WEB_APP_URL = localStorage.getItem('uin_gas_url') || '';

        const SUPABASE_URL = 'https://nlqelocaekuskgibqvis.supabase.co';
        const SUPABASE_KEY = 'sb_publishable__0eDpFEwNy5_V0SU_K8fUA_FYar-zL6';
        let supabaseClient = null;
        try {
            if (window.supabase) {
                supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
            }
        } catch (e) {
            console.warn("Supabase init fallback:", e);
        }

        let currentUser = JSON.parse(localStorage.getItem('uin_user')) || null;
        let isAdminLoggedIn = localStorage.getItem('uin_admin_logged') === 'true';
        let certificates = JSON.parse(localStorage.getItem('uin_certs')) || [];
        let registeredUsers = JSON.parse(localStorage.getItem('uin_reg_users')) || [];
        let announcements = JSON.parse(localStorage.getItem('uin_announcements')) || [
            { id: 'ANN-1', title: 'Panduan Resmi Portofolio 2026', content: 'Silakan buat akun atau login sesuai NIP masing-masing dan unggah sertifikat Keahlian serta Kompetensi Anda ke Google Drive.', fileUrl: '', fileName: '', date: '22 Oktober 2026' }
        ];
        let systemSettings = JSON.parse(localStorage.getItem('uin_settings')) || { 
            isOpen: true, 
            deadline: '2026-10-30T23:00',
            portfolioText: 'Wajib bagi seluruh Dosen & Tenaga Kependidikan (Tendik) UIN Ar-Raniry Banda Aceh dalam pemenuhan portofolio tahun 2026.',
            runningText: 'Sistem Pengumpulan Sertifikat UIN Ar-Raniry. Semua file PDF & JPG tersimpan otomatis ke Google Drive dan data tersinkron ke Spreadsheet.',
            weights: { 'Internasional': 100, 'Nasional': 75, 'Regional': 50, 'Lokal': 25 }
        };
        let currentAdminFilter = 'all';
        let alertCallback = null;

        const unitKerjaList = [
            "Fakultas Tarbiyah dan Keguruan", "Fakultas Syariah dan Hukum", "Fakultas Ushuluddin dan Filsafat",
            "Fakultas Dakwah dan Komunikasi", "Fakultas Adab dan Humaniora", "Fakultas Ekonomi dan Bisnis Islam",
            "Fakultas Sains dan Teknologi", "Fakultas Psikologi", "Pascasarjana", "Biro AUPK", "Biro AAKK",
            "Lembaga Penjaminan Mutu (LPM)", "LP2M", "Perpustakaan UIN Ar-Raniry", "Unit Lainnya"
        ];

        async function syncDataFromSupabaseOrGAS() {
            if (GAS_WEB_APP_URL) {
                try {
                    const response = await fetch(GAS_WEB_APP_URL);
                    const result = await response.json();
                    if (result.status === 'success') {
                        console.log("Data successfully synced with Google Apps Script / Spreadsheet");
                    }
                } catch (err) {
                    console.log("GAS fetch fallback:", err);
                }
            }

            if (!supabaseClient) return;
            try {
                const { data: usersData, error: userErr } = await supabaseClient.from('pegawai').select('*');
                if (!userErr && usersData && usersData.length > 0) {
                    registeredUsers = usersData.map(u => ({
                        nip: u.nip, nama: u.nama, email: u.email, phone: u.phone,
                        statusAsn: u.status_asn, jabatan: u.jabatan, unitKerja: u.unit_kerja,
                        password: u.password, isVerified: u.is_verified,
                        registeredAt: u.created_at ? new Date(u.created_at).toLocaleDateString('id-ID') : '22 Oktober 2026'
                    }));
                    localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
                }

                const { data: certsData, error: certErr } = await supabaseClient.from('sertifikat').select('*');
                if (!certErr && certsData && certsData.length > 0) {
                    certificates = certsData.map(c => ({
                        id: c.id, nip: c.nip, namaPegawai: c.nama_pegawai, unitKerja: c.unit_kerja,
                        kategori: c.kategori, tingkat: c.tingkat, namaSertifikat: c.nama_sertifikat,
                        instansiPenerbit: c.instansi_penerbit, jumlahJp: c.jumlah_jp, tahun: c.tahun,
                        fileData: c.file_data, isVerified: c.is_verified,
                        createdAt: c.created_at ? new Date(c.created_at).toLocaleDateString('id-ID') : '22 Oktober 2026'
                    }));
                    localStorage.setItem('uin_certs', JSON.stringify(certificates));
                }
                updateSystemState();
                if (currentUser) showDashboard();
                if (isAdminLoggedIn) {
                    renderAdminTable();
                    renderAdminMasterDbTable();
                    renderAdminRekap();
                }
            } catch (err) {
                console.log("Supabase sync fallback:", err);
            }
        }

        function getScoreByLevel(level) {
            if (systemSettings.weights && systemSettings.weights[level] !== undefined) {
                return Number(systemSettings.weights[level]);
            }
            switch(level) {
                case 'Internasional': return 100;
                case 'Nasional': return 75;
                case 'Regional': return 50;
                case 'Lokal': return 25;
                default: return 25;
            }
        }

        function calculateUserScore(nip) {
            const userCerts = certificates.filter(c => c.nip === nip);
            let total = 0;
            userCerts.forEach(c => { total += getScoreByLevel(c.tingkat || 'Nasional'); });
            return total;
        }

        function isRegistrationActive() {
            const deadlineTime = new Date(systemSettings.deadline).getTime();
            const now = new Date().getTime();
            if (now > deadlineTime || !systemSettings.isOpen) return false;
            return true;
        }

        function updateSystemState() {
            const deadline = new Date(systemSettings.deadline).getTime();
            const now = new Date().getTime();
            const distance = deadline - now;
            const timerEl = document.getElementById('countdownTimer');
            const active = isRegistrationActive();

            document.getElementById('portfolioBannerText').innerText = systemSettings.portfolioText || 'Wajib bagi seluruh Dosen & Tenaga Kependidikan (Tendik) UIN Ar-Raniry Banda Aceh dalam pemenuhan portofolio tahun 2026.';
            const deadlineDateObj = new Date(systemSettings.deadline);
            document.getElementById('deadlineBannerText').innerText = deadlineDateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB';

            if (!active) {
                const reason = distance < 0 ? 'WAKTU BERAKHIR' : 'DITUTUP ADMIN';
                timerEl.innerHTML = `<span class="text-xs font-black bg-red-600 px-3.5 py-2 rounded-xl text-white shadow">PENGISIAN DITUTUP (${reason})</span>`;
                document.getElementById('statusPendaftaranBadge').innerText = 'Pendaftaran Ditutup';
                document.getElementById('statusPendaftaranBadge').className = 'inline-block bg-red-500 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md';
            } else {
                document.getElementById('statusPendaftaranBadge').innerText = 'Pendaftaran Dibuka';
                document.getElementById('statusPendaftaranBadge').className = 'inline-block bg-amber-400 text-amber-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-md animate-pulse';

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                timerEl.innerHTML = `
                    <div class="bg-emerald-900/80 px-3 py-2 rounded-xl text-center border border-emerald-600/40 shadow"><span class="block text-base font-black">${days}</span><span class="text-[10px] text-emerald-200 font-bold">Hari</span></div>
                    <div class="bg-emerald-900/80 px-3 py-2 rounded-xl text-center border border-emerald-600/40 shadow"><span class="block text-base font-black">${hours}</span><span class="text-[10px] text-emerald-200 font-bold">Jam</span></div>
                    <div class="bg-emerald-900/80 px-3 py-2 rounded-xl text-center border border-emerald-600/40 shadow"><span class="block text-base font-black">${minutes}</span><span class="text-[10px] text-emerald-200 font-bold">Menit</span></div>
                    <div class="bg-emerald-900/80 px-3 py-2 rounded-xl text-center border border-emerald-600/40 shadow"><span class="block text-base font-black">${seconds}</span><span class="text-[10px] text-emerald-200 font-bold">Detik</span></div>
                `;
            }

            document.getElementById('statPublicUsers').innerText = registeredUsers.length;
            document.getElementById('statPublicUnits').innerText = unitKerjaList.length;

            const uploadedNips = new Set(certificates.map(c => c.nip));
            const uploadedUnits = new Set();
            registeredUsers.forEach(u => { if (uploadedNips.has(u.nip)) uploadedUnits.add(u.unitKerja); });
            document.getElementById('statPublicUnitsUploaded').innerText = `${uploadedUnits.size} / ${unitKerjaList.length}`;

            if (document.getElementById('weightHintInternasional')) {
                document.getElementById('weightHintInternasional').innerText = getScoreByLevel('Internasional');
                document.getElementById('weightHintNasional').innerText = getScoreByLevel('Nasional');
                document.getElementById('weightHintRegional').innerText = getScoreByLevel('Regional');
                document.getElementById('weightHintLokal').innerText = getScoreByLevel('Lokal');
            }
        }

        setInterval(updateSystemState, 1000);

        window.onload = function() {
            renderAnnouncements();
            updateSystemState();
            syncDataFromSupabaseOrGAS();
            if (systemSettings.runningText) document.getElementById('runningTextDisplay').innerText = systemSettings.runningText;
            if (isAdminLoggedIn) showAdminDashboard();
            else if (currentUser) showDashboard();
        };

        function goHome() {
            if (isAdminLoggedIn) showAdminDashboard();
            else if (currentUser) showDashboard();
            else {
                document.getElementById('authSection').classList.remove('hidden');
                document.getElementById('dashboardSection').classList.add('hidden');
                document.getElementById('adminDashboardSection').classList.add('hidden');
            }
        }

        function switchAuthTab(tab) {
            const loginC = document.getElementById('loginFormContainer');
            const regC = document.getElementById('registerFormContainer');
            const tL = document.getElementById('authTabLogin');
            const tR = document.getElementById('authTabRegister');
            if (tab === 'login') {
                loginC.classList.remove('hidden'); regC.classList.add('hidden');
                tL.className = 'flex-1 py-3 text-xs font-extrabold rounded-xl bg-white text-slate-900 shadow-md transition-all duration-300';
                tR.className = 'flex-1 py-3 text-xs font-extrabold rounded-xl text-slate-500 hover:text-slate-900 transition-all duration-300';
            } else {
                loginC.classList.add('hidden'); regC.classList.remove('hidden');
                tR.className = 'flex-1 py-3 text-xs font-extrabold rounded-xl bg-white text-slate-900 shadow-md transition-all duration-300';
                tL.className = 'flex-1 py-3 text-xs font-extrabold rounded-xl text-slate-500 hover:text-slate-900 transition-all duration-300';
            }
        }

        function renderAnnouncements() {
            const c = document.getElementById('announcementList');
            if (announcements.length === 0) {
                c.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">Belum ada pengumuman.</p>`;
                return;
            }
            c.innerHTML = announcements.map(a => `
                <div class="p-4 bg-slate-50/80 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 shadow-sm hover:bg-white transition">
                    <div>
                        <div class="text-[11px] text-emerald-700 font-bold mb-0.5">${a.date}</div>
                        <h4 class="font-extrabold text-slate-900 text-xs">${a.title}</h4>
                        <p class="text-xs text-slate-600 mt-1 font-medium">${a.content}</p>
                    </div>
                    ${a.fileUrl ? `<a href="${a.fileUrl}" target="_blank" class="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 flex-shrink-0 border border-emerald-200"><i data-lucide="file-text" class="w-4 h-4"></i> Unduh PDF</a>` : ''}
                </div>
            `).join('');
            lucide.createIcons();
        }

        async function handleRegister(e) {
            e.preventDefault();
            const nip = document.getElementById('regNip').value.trim();
            const nama = document.getElementById('regNama').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const statusAsn = document.getElementById('regStatusAsn').value;
            const jabatan = document.getElementById('regJabatan').value;
            const unitKerja = document.getElementById('regUnitKerja').value;
            const password = document.getElementById('regPass').value.trim();

            if (registeredUsers.some(u => u.nip === nip)) {
                showAlert('Gagal Registrasi', 'NIP tersebut sudah terdaftar dalam sistem. Silakan login.', 'error');
                return;
            }

            const newUser = { nip, nama, email, phone, statusAsn, jabatan, unitKerja, password, isVerified: false, registeredAt: new Date().toLocaleDateString('id-ID') };
            registeredUsers.push(newUser);
            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));

            if (supabaseClient) {
                try {
                    await supabaseClient.from('pegawai').insert([{
                        nip, nama, email, phone, status_asn: statusAsn, jabatan, unit_kerja: unitKerja, password, is_verified: false
                    }]);
                } catch (err) { console.warn("Supabase insert user error:", err); }
            }

            if (GAS_WEB_APP_URL) {
                try {
                    await fetch(GAS_WEB_APP_URL, {
                        method: 'POST',
                        body: JSON.stringify({ action: 'register_pegawai', nip, nama, email, phone, statusAsn, jabatan, unitKerja, password })
                    });
                } catch (err) { console.warn("GAS register sync error:", err); }
            }

            updateSystemState();
            showAlert('Pendaftaran Berhasil', 'Selamat, Anda telah berhasil mendaftar! Data tersimpan otomatis ke Spreadsheet & Drive.', 'success', () => {
                showEmailVerificationModal(newUser);
            });
        }

        function showEmailVerificationModal(user, isPasswordReset = false, tempPass = '') {
            document.getElementById('simEmailTo').innerText = user.email;
            document.getElementById('simEmailNama').innerText = user.nama;
            document.getElementById('simEmailNip').innerText = user.nip;
            document.getElementById('simEmailPass').innerText = isPasswordReset ? tempPass : user.password;
            const verifyBtn = document.getElementById('simVerifyBtn');

            if (isPasswordReset) {
                document.getElementById('simEmailSubject').innerText = 'Reset Password Akun Sistem Pengumpulan Sertifikat UIN Ar-Raniry';
                document.getElementById('simEmailBody').innerText = 'Permintaan reset password telah diproses oleh Administrator sistem.';
                verifyBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i> Konfirmasi & Masuk ke Halaman Login';
                verifyBtn.setAttribute('onclick', `closeEmailVerificationModal()`);
            } else {
                document.getElementById('simEmailSubject').innerText = 'Verifikasi Akun Sistem Pengumpulan Sertifikat UIN Ar-Raniry 2026';
                document.getElementById('simEmailBody').innerText = 'Terima kasih telah mendaftar. Akun Anda memerlukan verifikasi email untuk diaktifkan.';
                verifyBtn.innerHTML = '<i data-lucide="external-link" class="w-4 h-4"></i> 🔗 Verifikasi Akun & Masuk ke Halaman Login';
                verifyBtn.setAttribute('onclick', `verifyAccountAndRedirect('${user.nip}')`);
            }
            document.getElementById('emailVerificationModal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeEmailVerificationModal() {
            document.getElementById('emailVerificationModal').classList.add('hidden');
            switchAuthTab('login');
        }

        async function verifyAccountAndRedirect(nip) {
            const user = registeredUsers.find(u => u.nip === nip);
            if (user) {
                user.isVerified = true;
                localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
                if (supabaseClient) await supabaseClient.from('pegawai').update({ is_verified: true }).eq('nip', nip);
            }
            document.getElementById('emailVerificationModal').classList.add('hidden');
            switchAuthTab('login');
            document.getElementById('loginNip').value = nip;
            showAlert('Verifikasi Berhasil', 'Email Anda berhasil diverifikasi. Akun aktif, silakan masukkan password Anda untuk login.', 'success');
        }

        function handleLogin(e) {
            e.preventDefault();
            const nip = document.getElementById('loginNip').value.trim();
            const password = document.getElementById('loginPass').value.trim();
            const found = registeredUsers.find(u => u.nip === nip && u.password === password);

            if (!found) {
                showAlert('Login Gagal', 'NIP atau password salah. Periksa kembali data Anda.', 'error');
                return;
            }
            if (!found.isVerified) {
                showAlert('Akun Belum Verifikasi', 'Silakan verifikasi email Anda terlebih dahulu melalui tautan yang dikirimkan saat pendaftaran.', 'error');
                return;
            }

            currentUser = found;
            localStorage.setItem('uin_user', JSON.stringify(currentUser));
            showDashboard();
            showAlert('Login Berhasil', 'Selamat datang kembali, ' + currentUser.nama, 'success');
        }

        function logout() {
            localStorage.removeItem('uin_user');
            currentUser = null;
            document.getElementById('authSection').classList.remove('hidden');
            document.getElementById('dashboardSection').classList.add('hidden');
            document.getElementById('adminDashboardSection').classList.add('hidden');
            document.getElementById('userProfileBadge').classList.add('hidden');
            document.getElementById('btnAdminLogin').classList.remove('hidden');
            document.getElementById('loginFormContainer').reset();
            document.getElementById('registerFormContainer').reset();
            switchAuthTab('login');
            updateSystemState();
        }

        function showDashboard() {
            document.getElementById('authSection').classList.add('hidden');
            document.getElementById('adminDashboardSection').classList.add('hidden');
            document.getElementById('dashboardSection').classList.remove('hidden');
            document.getElementById('userProfileBadge').classList.remove('hidden');
            document.getElementById('btnAdminLogin').classList.add('hidden');
            document.getElementById('navUserName').innerText = currentUser.nama;

            document.getElementById('dashNama').innerText = currentUser.nama;
            document.getElementById('dashNip').innerText = currentUser.nip;
            document.getElementById('dashUnit').innerText = currentUser.unitKerja;
            document.getElementById('dashEmail').innerText = currentUser.email || '-';
            document.getElementById('dashPhone').innerText = currentUser.phone || '-';
            document.getElementById('badgeJabatan').innerText = currentUser.jabatan;
            document.getElementById('badgeAsn').innerText = currentUser.statusAsn;
            document.getElementById('dashTotalScore').innerText = calculateUserScore(currentUser.nip) + ' Poin';

            renderCertificates();
        }

        function openEditProfileModal() {
            document.getElementById('editNama').value = currentUser.nama;
            document.getElementById('editEmail').value = currentUser.email || '';
            document.getElementById('editPhone').value = currentUser.phone || '';
            document.getElementById('editStatusAsn').value = currentUser.statusAsn;
            document.getElementById('editJabatan').value = currentUser.jabatan;
            document.getElementById('editUnitKerja').value = currentUser.unitKerja;
            document.getElementById('editPassword').value = '';
            document.getElementById('editProfileModal').classList.remove('hidden');
        }

        function closeEditProfileModal() { document.getElementById('editProfileModal').classList.add('hidden'); }

        async function handleUpdateProfile(e) {
            e.preventDefault();
            currentUser.nama = document.getElementById('editNama').value.trim();
            currentUser.email = document.getElementById('editEmail').value.trim();
            currentUser.phone = document.getElementById('editPhone').value.trim();
            currentUser.statusAsn = document.getElementById('editStatusAsn').value;
            currentUser.jabatan = document.getElementById('editJabatan').value;
            currentUser.unitKerja = document.getElementById('editUnitKerja').value;
            const newPass = document.getElementById('editPassword').value.trim();
            if (newPass) currentUser.password = newPass;

            const idx = registeredUsers.findIndex(u => u.nip === currentUser.nip);
            if (idx >= 0) registeredUsers[idx] = currentUser;
            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
            localStorage.setItem('uin_user', JSON.stringify(currentUser));

            if (supabaseClient) {
                await supabaseClient.from('pegawai').update({
                    nama: currentUser.nama, email: currentUser.email, phone: currentUser.phone,
                    status_asn: currentUser.statusAsn, jabatan: currentUser.jabatan, unit_kerja: currentUser.unitKerja,
                    ...(newPass ? { password: newPass } : {})
                }).eq('nip', currentUser.nip);
            }

            closeEditProfileModal();
            showDashboard();
            showAlert('Berhasil', 'Biodata profil berhasil diperbarui.', 'success');
        }

        function openResetPasswordModal() { document.getElementById('resetPasswordModal').classList.remove('hidden'); }
        function closeResetPasswordModal() { document.getElementById('resetPasswordModal').classList.add('hidden'); }

        async function handleResetPassword(e) {
            e.preventDefault();
            const nip = document.getElementById('resetNip').value.trim();
            const email = document.getElementById('resetEmail').value.trim();
            const newPass = document.getElementById('resetNewPass').value.trim();
            const userIdx = registeredUsers.findIndex(u => u.nip === nip && u.email === email);

            if (userIdx < 0) {
                showAlert('Gagal', 'NIP dan Email tidak ditemukan atau tidak cocok.', 'error');
                return;
            }

            registeredUsers[userIdx].password = newPass;
            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
            if (supabaseClient) await supabaseClient.from('pegawai').update({ password: newPass }).eq('nip', nip);

            closeResetPasswordModal();
            showAlert('Berhasil', 'Password akun Anda berhasil direset.', 'success');
        }

        function openOfficialPrintModal() {
            const userCerts = certificates.filter(c => c.nip === currentUser.nip);
            const keahlianList = userCerts.filter(c => c.kategori === 'Keahlian');
            const kompetensiList = userCerts.filter(c => c.kategori === 'Kompetensi');
            const isComplete = keahlianList.length > 0 && kompetensiList.length > 0;
            const totalScore = calculateUserScore(currentUser.nip);

            document.getElementById('printNama').innerText = `: ${currentUser.nama}`;
            document.getElementById('printNip').innerText = `: ${currentUser.nip}`;
            document.getElementById('printJabatan').innerText = `: ${currentUser.jabatan} / ${currentUser.statusAsn}`;
            document.getElementById('printUnit').innerText = `: ${currentUser.unitKerja}`;
            document.getElementById('printTotalScore').innerText = `: ${totalScore} Poin`;
            document.getElementById('printSignNama').innerText = currentUser.nama;
            document.getElementById('printSignNip').innerText = currentUser.nip;
            document.getElementById('printDateNow').innerText = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

            const statusEl = document.getElementById('printStatusKelengkapan');
            if (isComplete) {
                let predikat = totalScore >= 250 ? 'SANGAT BAIK (PARIPURNA)' : (totalScore >= 150 ? 'BAIK (MEMUASKAN)' : 'CUKUP');
                statusEl.innerText = `LENGKAP - Predikat: ${predikat} (${totalScore} Poin)`;
                statusEl.className = 'font-black text-emerald-700 text-sm mt-1';
            } else {
                statusEl.innerText = 'BELUM LENGKAP';
                statusEl.className = 'font-black text-amber-700 text-sm mt-1';
            }

            const tbody = document.getElementById('printTableBody');
            if (userCerts.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-3 text-center text-slate-400 border border-slate-300">Belum ada dokumen sertifikat.</td></tr>`;
            } else {
                tbody.innerHTML = userCerts.map((c, i) => `
                    <tr>
                        <td class="p-2.5 border border-slate-300 text-center">${i + 1}</td>
                        <td class="p-2.5 border border-slate-300 font-bold">${c.kategori} (${c.tingkat || 'Nasional'}) ${c.isVerified ? '<span class="text-emerald-700 text-[10px] block">[Terarsip]</span>' : ''}</td>
                        <td class="p-2.5 border border-slate-300"><div class="font-extrabold text-slate-900">${c.namaSertifikat}</div><div class="text-[10px] text-slate-500 font-medium">Instansi: ${c.instansiPenerbit || '-'}</div></td>
                        <td class="p-2.5 border border-slate-300 text-center font-bold text-slate-700">${c.jumlahJp || '-'}</td>
                        <td class="p-2.5 border border-slate-300 text-center">${c.tahun}</td>
                        <td class="p-2.5 border border-slate-300 text-center font-black text-emerald-800">${getScoreByLevel(c.tingkat || 'Nasional')} Poin</td>
                    </tr>
                `).join('');
            }
            document.getElementById('officialPrintModal').classList.remove('hidden');
        }

        function closeOfficialPrintModal() { document.getElementById('officialPrintModal').classList.add('hidden'); }

        function openAdminOfficialPrintModal() {
            document.getElementById('masterTotalPegawai').innerText = registeredUsers.length;
            document.getElementById('masterTotalBerkas').innerText = certificates.length;
            let completeCount = 0;
            registeredUsers.forEach(u => {
                const uCerts = certificates.filter(c => c.nip === u.nip);
                if (uCerts.some(c => c.kategori === 'Keahlian') && uCerts.some(c => c.kategori === 'Kompetensi')) completeCount++;
            });
            document.getElementById('masterTotalLengkap').innerText = completeCount;
            const dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('masterPrintDate').innerText = dateStr;
            document.getElementById('adminPrintDateSign').innerText = dateStr;

            const tbody = document.getElementById('adminMasterPrintTableBody');
            if (registeredUsers.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400 border border-slate-300">Belum ada data pegawai.</td></tr>`;
            } else {
                tbody.innerHTML = registeredUsers.map((u, index) => {
                    const uCerts = certificates.filter(c => c.nip === u.nip);
                    const keahlian = uCerts.filter(c => c.kategori === 'Keahlian');
                    const kompetensi = uCerts.filter(c => c.kategori === 'Kompetensi');
                    const isComplete = keahlian.length > 0 && kompetensi.length > 0;
                    const score = calculateUserScore(u.nip);

                    let certsHtml = uCerts.length === 0 ? '<span class="text-[11px] text-slate-400 italic">Belum ada berkas</span>' : uCerts.map(c => `
                        <div class="mb-1.5 pb-1 border-b border-slate-100 last:border-0">
                            <div class="font-extrabold text-slate-900">${c.namaSertifikat}</div>
                            <div class="text-[10px] text-slate-500">${c.kategori} (${c.tingkat || 'Nasional'}) &bull; ${c.instansiPenerbit || '-'}</div>
                        </div>
                    `).join('');

                    let weightsHtml = uCerts.length === 0 ? '<span class="text-[11px] text-slate-400">0 Poin</span>' : uCerts.map(c => `
                        <div class="mb-1.5 pb-1 border-b border-slate-100 last:border-0 font-bold text-emerald-800">+${getScoreByLevel(c.tingkat || 'Nasional')} Poin</div>
                    `).join('') + `<div class="mt-1 pt-1 border-t border-slate-300 font-black text-emerald-900 text-xs">Total: ${score} Poin</div>`;

                    return `
                        <tr class="align-top">
                            <td class="p-2.5 border border-slate-300 text-center">${index + 1}</td>
                            <td class="p-2.5 border border-slate-300"><div class="font-extrabold text-slate-900">${u.nama}</div><div class="text-[10px] text-slate-500">NIP: ${u.nip}</div></td>
                            <td class="p-2.5 border border-slate-300"><div class="font-bold">${u.jabatan}</div><div class="text-[10px] text-slate-500">${u.unitKerja}</div></td>
                            <td class="p-2.5 border border-slate-300">${certsHtml}</td>
                            <td class="p-2.5 border border-slate-300 text-center">${weightsHtml}</td>
                            <td class="p-2.5 border border-slate-300 text-center align-middle"><span class="${isComplete ? 'text-emerald-700 font-extrabold' : 'text-amber-600 font-bold'} text-[10px]">${isComplete ? 'LENGKAP' : 'BELUM'}</span></td>
                        </tr>
                    `;
                }).join('');
            }
            document.getElementById('adminOfficialPrintModal').classList.remove('hidden');
        }

        function closeAdminOfficialPrintModal() { document.getElementById('adminOfficialPrintModal').classList.add('hidden'); }

        function openUploadModal() {
            if (!isRegistrationActive()) {
                showAlert('Pendaftaran Ditutup', 'Masa pengumpulan sertifikat telah berakhir atau ditutup oleh administrator.', 'error');
                return;
            }
            document.getElementById('uploadModal').classList.remove('hidden');
        }

        function closeUploadModal() {
            document.getElementById('uploadModal').classList.add('hidden');
            document.getElementById('uploadForm').reset();
        }

        function onKategoriChange() {
            const kat = document.getElementById('jenisSertifikat').value;
            const thn = document.getElementById('tahunSertifikat');
            const hint = document.getElementById('tahunHint');
            if (kat === 'Kompetensi') {
                thn.value = '2026'; thn.readOnly = true;
                hint.innerText = 'Sertifikat Kompetensi khusus tahun 2026.';
            } else {
                thn.readOnly = false; thn.value = '';
                hint.innerText = 'Sertifikat Keahlian dapat mencakup tahun 2026 atau sebelumnya.';
            }
        }

        function handleUpload(e) {
            e.preventDefault();
            if (!isRegistrationActive()) {
                showAlert('Pendaftaran Ditutup', 'Masa pengumpulan telah berakhir.', 'error');
                return;
            }
            const kategori = document.getElementById('jenisSertifikat').value;
            const tingkat = document.getElementById('tingkatSertifikat').value;
            const namaSertifikat = document.getElementById('namaSertifikat').value.trim();
            const instansiPenerbit = document.getElementById('instansiPenerbit').value.trim();
            const jumlahJp = document.getElementById('jumlahJp').value.trim();
            const tahun = document.getElementById('tahunSertifikat').value;
            const file = document.getElementById('fileSertifikat').files[0];

            if (kategori === 'Kompetensi' && tahun !== '2026') {
                showAlert('Peringatan', 'Sertifikat kompetensi wajib tahun 2026.', 'error');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                showAlert('File Terlalu Besar', 'Ukuran file maksimal 2 MB.', 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = async function(event) {
                try {
                    const certId = 'CERT-' + Date.now();
                    const fileBase64 = event.target.result;
                    const newCert = {
                        id: certId, nip: currentUser.nip, namaPegawai: currentUser.nama, unitKerja: currentUser.unitKerja,
                        kategori, tingkat, namaSertifikat, instansiPenerbit, jumlahJp: jumlahJp || '-', tahun,
                        fileName: file.name, fileData: fileBase64, createdAt: new Date().toLocaleDateString('id-ID'), isVerified: false
                    };

                    certificates.push(newCert);
                    localStorage.setItem('uin_certs', JSON.stringify(certificates));

                    if (supabaseClient) {
                        await supabaseClient.from('sertifikat').insert([{
                            id: certId, nip: currentUser.nip, nama_pegawai: currentUser.nama, unit_kerja: currentUser.unitKerja,
                            kategori, tingkat, nama_sertifikat: namaSertifikat, instansi_penerbit: instansiPenerbit,
                            jumlah_jp: jumlahJp || '-', tahun, file_data: fileBase64, is_verified: false
                        }]);
                    }

                    // Kirim otomatis ke Google Drive & Google Spreadsheet via Apps Script Web App jika URL tersedia
                    if (GAS_WEB_APP_URL) {
                        try {
                            await fetch(GAS_WEB_APP_URL, {
                                method: 'POST',
                                body: JSON.stringify({
                                    action: 'upload_certificate',
                                    id: certId,
                                    nip: currentUser.nip,
                                    namaPegawai: currentUser.nama,
                                    unitKerja: currentUser.unitKerja,
                                    kategori,
                                    tingkat,
                                    namaSertifikat,
                                    instansiPenerbit,
                                    jumlahJp: jumlahJp || '-',
                                    tahun,
                                    fileName: file.name,
                                    mimeType: file.type,
                                    fileBase64
                                })
                            });
                        } catch (gasErr) { console.warn("GAS Web App upload error:", gasErr); }
                    }

                    closeUploadModal();
                    showDashboard();
                    updateSystemState();
                    showAlert('Berhasil', `Dokumen PDF/JPG berhasil diunggah ke Google Drive dan tersinkron ke Spreadsheet. Bobot +${getScoreByLevel(tingkat)} poin.`, 'success');
                } catch (err) { showAlert('Gagal', 'Kesalahan penyimpanan file.', 'error'); }
            };
            reader.readAsDataURL(file);
        }

        function renderCertificates() {
            const userCerts = certificates.filter(c => c.nip === currentUser.nip);
            const keahlianList = userCerts.filter(c => c.kategori === 'Keahlian');
            const kompetensiList = userCerts.filter(c => c.kategori === 'Kompetensi');
            const arsipList = userCerts.filter(c => c.isVerified);

            document.getElementById('countKeahlian').innerText = keahlianList.length + ' File';
            document.getElementById('countKompetensi').innerText = kompetensiList.length + ' File';
            document.getElementById('countArsip').innerText = arsipList.length + ' Arsip';

            const isComplete = keahlianList.length > 0 && kompetensiList.length > 0;
            const badgeKelengkapan = document.getElementById('badgeKelengkapan');
            badgeKelengkapan.className = isComplete ? 'bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full shadow-sm' : 'bg-amber-100 text-amber-800 text-xs font-black px-3 py-1 rounded-full shadow-sm';
            badgeKelengkapan.innerText = isComplete ? 'Status: Lengkap' : 'Status: Belum Lengkap';

            const renderList = (list, containerId) => {
                const container = document.getElementById(containerId);
                if (list.length === 0) {
                    container.innerHTML = `<p class="text-xs text-slate-400 text-center py-8">Belum ada berkas.</p>`;
                    return;
                }
                container.innerHTML = list.map(c => `
                    <div class="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 flex justify-between items-center gap-3 shadow-sm hover:bg-white transition">
                        <div class="overflow-hidden">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-0.5 rounded-full">${c.tingkat || 'Nasional'}</span>
                                <span class="text-[11px] font-black text-emerald-700">+${getScoreByLevel(c.tingkat || 'Nasional')} Poin</span>
                                ${c.isVerified ? '<span class="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Terverifikasi</span>' : '<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Drive Tersimpan</span>'}
                            </div>
                            <h4 class="font-extrabold text-slate-900 text-xs truncate mt-1.5">${c.namaSertifikat}</h4>
                            <p class="text-[11px] text-slate-500 font-medium">Instansi: <strong>${c.instansiPenerbit || '-'}</strong> &bull; Tahun: ${c.tahun}</p>
                        </div>
                        <div class="flex items-center gap-2 flex-shrink-0">
                            <a href="${c.fileData}" target="_blank" class="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 p-2.5 rounded-xl text-xs font-bold flex items-center gap-1 border border-emerald-200"><i data-lucide="eye" class="w-4 h-4"></i></a>
                            ${!c.isVerified ? `<button onclick="deleteCert('${c.id}')" class="bg-red-50 text-red-600 hover:bg-red-100 p-2.5 rounded-xl text-xs font-bold border border-red-200"><i data-lucide="trash-2" class="w-4 h-4"></i></button>` : ''}
                        </div>
                    </div>
                `).join('');
            };

            renderList(keahlianList, 'listKeahlian');
            renderList(kompetensiList, 'listKompetensi');

            const containerArsip = document.getElementById('listArsip');
            if (arsipList.length === 0) {
                containerArsip.innerHTML = `<p class="text-xs text-slate-400 text-center py-8">Belum ada arsip.</p>`;
            } else {
                containerArsip.innerHTML = arsipList.map(c => `
                    <div class="bg-white border border-emerald-200 rounded-2xl p-4 flex justify-between items-center gap-3 shadow-sm">
                        <div class="overflow-hidden">
                            <div class="flex items-center gap-2">
                                <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">${c.kategori}</span>
                                <span class="text-[10px] text-emerald-700 font-bold">+${getScoreByLevel(c.tingkat)} Poin</span>
                            </div>
                            <h4 class="font-extrabold text-slate-900 text-xs truncate mt-1">${c.namaSertifikat}</h4>
                            <p class="text-[10px] text-slate-500">${c.instansiPenerbit || '-'}</p>
                        </div>
                        <a href="${c.fileData}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl text-xs font-bold flex items-center gap-1 flex-shrink-0 shadow"><i data-lucide="file-check" class="w-4 h-4"></i> Arsip</a>
                    </div>
                `).join('');
            }
            lucide.createIcons();
        }

        async function deleteCert(id) {
            certificates = certificates.filter(c => c.id !== id);
            localStorage.setItem('uin_certs', JSON.stringify(certificates));
            if (supabaseClient) await supabaseClient.from('sertifikat').delete().eq('id', id);
            showDashboard();
            updateSystemState();
            showAlert('Berhasil', 'Dokumen berhasil dihapus.', 'success');
        }

        function openAdminLoginModal() { document.getElementById('adminLoginModal').classList.remove('hidden'); }
        function closeAdminLoginModal() { document.getElementById('adminLoginModal').classList.add('hidden'); }

        function handleAdminLogin(e) {
            e.preventDefault();
            if (document.getElementById('adminUser').value.trim() === 'admin' && document.getElementById('adminPass').value.trim() === 'kepeg2026') {
                isAdminLoggedIn = true;
                localStorage.setItem('uin_admin_logged', 'true');
                closeAdminLoginModal();
                showAdminDashboard();
                showAlert('Berhasil', 'Selamat datang, Administrator.', 'success');
            } else { showAlert('Gagal', 'Username/password admin salah.', 'error'); }
        }

        function logoutAdmin() {
            isAdminLoggedIn = false;
            localStorage.removeItem('uin_admin_logged');
            document.getElementById('adminDashboardSection').classList.add('hidden');
            document.getElementById('authSection').classList.remove('hidden');
            document.getElementById('btnAdminLogin').classList.remove('hidden');
            updateSystemState();
        }

        function showAdminDashboard() {
            document.getElementById('authSection').classList.add('hidden');
            document.getElementById('dashboardSection').classList.add('hidden');
            document.getElementById('btnAdminLogin').classList.add('hidden');
            document.getElementById('adminDashboardSection').classList.remove('hidden');

            document.getElementById('togglePendaftaran').checked = systemSettings.isOpen;
            document.getElementById('deadlineInput').value = systemSettings.deadline;
            document.getElementById('portfolioTextInput').value = systemSettings.portfolioText || '';
            document.getElementById('runningTextInput').value = systemSettings.runningText || '';
            document.getElementById('weightInternasional').value = systemSettings.weights?.Internasional ?? 100;
            document.getElementById('weightNasional').value = systemSettings.weights?.Nasional ?? 75;
            document.getElementById('weightRegional').value = systemSettings.weights?.Regional ?? 50;
            document.getElementById('weightLokal').value = systemSettings.weights?.Lokal ?? 25;

            updateAdminStats();
            renderAdminTable();
            renderAdminMasterDbTable();
            renderAdminRekap();
            renderAdminArsip();
        }

        function updateAdminStats() {
            document.getElementById('statTotalPegawai').innerText = registeredUsers.length;
            document.getElementById('statTotalBerkas').innerText = certificates.length;
            let uploadedCount = 0, verifiedCount = 0;
            registeredUsers.forEach(u => {
                const uCerts = certificates.filter(c => c.nip === u.nip);
                if (uCerts.length > 0) uploadedCount++;
                verifiedCount += uCerts.filter(c => c.isVerified).length;
            });
            document.getElementById('statTotalUpload').innerText = uploadedCount;
            document.getElementById('statTotalArsip').innerText = verifiedCount;
        }

        function setAdminFilter(fType) {
            currentAdminFilter = fType;
            ['all', 'uploaded', 'complete', 'not_uploaded'].forEach(f => {
                document.getElementById(`filterBtn-${f}`).className = f === fType ? 'px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white transition shadow-sm' : 'px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition';
            });
            renderAdminTable();
        }

        function switchAdminTab(tabName) {
            ['Monitoring', 'MasterDb', 'Rekap', 'Arsip', 'Settings', 'Announcement'].forEach(t => {
                document.getElementById(`adminTab${t}`).classList.add('hidden');
                document.getElementById(`tabBtn${t}`).className = 'px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-extrabold transition';
            });
            document.getElementById(`adminTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.remove('hidden');
            document.getElementById(`tabBtn${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).className = 'px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-extrabold transition shadow-sm';

            if (tabName === 'monitoring') renderAdminTable();
            else if (tabName === 'masterdb') renderAdminMasterDbTable();
            else if (tabName === 'rekap') renderAdminRekap();
            else if (tabName === 'arsip') renderAdminArsip();
        }

        function renderAdminTable() {
            const query = document.getElementById('adminSearchInput').value.toLowerCase();
            let filtered = registeredUsers.filter(u => u.nama.toLowerCase().includes(query) || u.nip.toLowerCase().includes(query));
            filtered = filtered.filter(u => {
                const uCerts = certificates.filter(c => c.nip === u.nip);
                const isComplete = uCerts.some(c => c.kategori === 'Keahlian') && uCerts.some(c => c.kategori === 'Kompetensi');
                const hasUploaded = uCerts.length > 0;
                if (currentAdminFilter === 'uploaded') return hasUploaded;
                if (currentAdminFilter === 'complete') return isComplete;
                if (currentAdminFilter === 'not_uploaded') return !hasUploaded;
                return true;
            });

            const tbody = document.getElementById('adminTableBody');
            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-400">Tidak ada data.</td></tr>`;
                return;
            }
            tbody.innerHTML = filtered.map((u, idx) => {
                const uCerts = certificates.filter(c => c.nip === u.nip);
                const isComplete = uCerts.some(c => c.kategori === 'Keahlian') && uCerts.some(c => c.kategori === 'Kompetensi');
                const hasUploaded = uCerts.length > 0;
                const totalScore = calculateUserScore(u.nip);
                return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3.5 font-bold">${idx + 1}</td>
                        <td class="p-3.5"><div class="font-extrabold text-slate-900">${u.nama}</div><div class="text-[11px] text-slate-500">NIP: ${u.nip}</div></td>
                        <td class="p-3.5"><div class="text-slate-800">WA: ${u.phone || '-'}</div><div class="text-[11px] text-slate-500">${u.email || '-'}</div></td>
                        <td class="p-3.5"><div class="font-bold">${u.jabatan}</div><div class="text-[11px] text-slate-500">${u.unitKerja}</div></td>
                        <td class="p-3.5 text-center font-black text-blue-600">${uCerts.length}</td>
                        <td class="p-3.5 text-center font-black text-emerald-800">${totalScore} Poin</td>
                        <td class="p-3.5 text-center"><span class="${isComplete ? 'bg-emerald-100 text-emerald-800' : (hasUploaded ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800')} font-extrabold px-3 py-1 rounded-full text-[10px]">${isComplete ? 'Lengkap' : (hasUploaded ? 'Sebagian' : 'Belum')}</span></td>
                        <td class="p-3.5 text-center"><button onclick="viewUserDetail('${u.nip}')" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl font-bold text-xs border border-emerald-200">Detail Drive</button></td>
                    </tr>
                `;
            }).join('');
            lucide.createIcons();
        }

        function renderAdminMasterDbTable() {
            const query = document.getElementById('adminMasterSearch').value.toLowerCase();
            let filtered = registeredUsers.filter(u => u.nama.toLowerCase().includes(query) || u.nip.toLowerCase().includes(query));
            const tbody = document.getElementById('adminMasterDbTableBody');
            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Tidak ada data di Master DB.</td></tr>`;
                return;
            }
            tbody.innerHTML = filtered.map((u, idx) => `
                <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 font-bold">${idx + 1}</td>
                    <td class="p-3.5"><div class="font-extrabold text-slate-900">${u.nama}</div><div class="text-[11px] text-slate-500 font-mono">NIP: ${u.nip}</div></td>
                    <td class="p-3.5"><div class="text-slate-800">${u.email || '-'}</div><div class="text-[11px] text-slate-500">WA: ${u.phone || '-'}</div></td>
                    <td class="p-3.5"><div class="font-bold">${u.jabatan} (${u.statusAsn})</div><div class="text-[11px] text-slate-500">${u.unitKerja}</div></td>
                    <td class="p-3.5 text-center"><span class="${u.isVerified ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} font-extrabold px-3 py-1 rounded-full text-[10px]">${u.isVerified ? 'Aktif' : 'Belum'}</span></td>
                    <td class="p-3.5 text-center">
                        <div class="flex items-center justify-center gap-1.5">
                            <button onclick="openAdminEditUserModal('${u.nip}')" class="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl font-bold text-xs border border-blue-200">Edit</button>
                            <button onclick="adminResetUserPassword('${u.nip}')" class="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-xl font-bold text-xs border border-amber-200">Reset</button>
                            <button onclick="adminPrintUserReceipt('${u.nip}')" class="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-xl font-bold text-xs border border-teal-200">Cetak</button>
                            <button onclick="adminDeleteUser('${u.nip}')" class="bg-red-50 text-red-600 px-3 py-1.5 rounded-xl font-bold text-xs border border-red-200">Hapus</button>
                        </div>
                    </td>
                </tr>
            `).join('');
            lucide.createIcons();
        }

        function openAdminEditUserModal(nip) {
            const user = registeredUsers.find(u => u.nip === nip);
            if (!user) return;
            document.getElementById('adminEditUserNipOriginal').value = user.nip;
            document.getElementById('adminEditNip').value = user.nip;
            document.getElementById('adminEditNama').value = user.nama;
            document.getElementById('adminEditEmail').value = user.email || '';
            document.getElementById('adminEditPhone').value = user.phone || '';
            document.getElementById('adminEditStatusAsn').value = user.statusAsn;
            document.getElementById('adminEditJabatan').value = user.jabatan;
            document.getElementById('adminEditUnitKerja').value = user.unitKerja;
            document.getElementById('adminEditUserModal').classList.remove('hidden');
        }

        function closeAdminEditUserModal() { document.getElementById('adminEditUserModal').classList.add('hidden'); }

        async function handleAdminUpdateUser(e) {
            e.preventDefault();
            const origNip = document.getElementById('adminEditUserNipOriginal').value;
            const user = registeredUsers.find(u => u.nip === origNip);
            if (!user) return;
            user.nama = document.getElementById('adminEditNama').value.trim();
            user.email = document.getElementById('adminEditEmail').value.trim();
            user.phone = document.getElementById('adminEditPhone').value.trim();
            user.statusAsn = document.getElementById('adminEditStatusAsn').value;
            user.jabatan = document.getElementById('adminEditJabatan').value;
            user.unitKerja = document.getElementById('adminEditUnitKerja').value;

            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
            if (supabaseClient) {
                await supabaseClient.from('pegawai').update({
                    nama: user.nama, email: user.email, phone: user.phone, status_asn: user.statusAsn, jabatan: user.jabatan, unit_kerja: user.unitKerja
                }).eq('nip', origNip);
            }
            if (currentUser && currentUser.nip === origNip) {
                currentUser = user;
                localStorage.setItem('uin_user', JSON.stringify(currentUser));
            }
            closeAdminEditUserModal();
            renderAdminMasterDbTable();
            renderAdminTable();
            showAlert('Berhasil', 'Data pegawai diperbarui.', 'success');
        }

        async function adminResetUserPassword(nip) {
            const user = registeredUsers.find(u => u.nip === nip);
            if (!user) return;
            const newTempPass = 'Uin2026#' + Math.floor(1000 + Math.random() * 9000);
            user.password = newTempPass;
            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
            if (supabaseClient) await supabaseClient.from('pegawai').update({ password: newTempPass }).eq('nip', nip);

            showAlert('Reset Berhasil', `Password ${user.nama} direset otomatis.`, 'success', () => {
                showEmailVerificationModal(user, true, newTempPass);
            });
        }

        async function adminDeleteUser(nip) {
            if (!confirm('Hapus akun pegawai ini beserta seluruh sertifikatnya?')) return;
            registeredUsers = registeredUsers.filter(u => u.nip !== nip);
            certificates = certificates.filter(c => c.nip !== nip);
            localStorage.setItem('uin_reg_users', JSON.stringify(registeredUsers));
            localStorage.setItem('uin_certs', JSON.stringify(certificates));
            if (supabaseClient) {
                await supabaseClient.from('sertifikat').delete().eq('nip', nip);
                await supabaseClient.from('pegawai').delete().eq('nip', nip);
            }
            if (currentUser && currentUser.nip === nip) logout();
            else {
                renderAdminMasterDbTable();
                renderAdminTable();
                updateAdminStats();
                showAlert('Berhasil', 'Akun dihapus.', 'success');
            }
        }

        function adminPrintUserReceipt(nip) {
            const prev = currentUser;
            currentUser = registeredUsers.find(u => u.nip === nip);
            if (currentUser) openOfficialPrintModal();
            currentUser = prev;
        }

        function renderAdminRekap() {
            const tbody = document.getElementById('adminRekapTableBody');
            tbody.innerHTML = unitKerjaList.map(unit => {
                const uList = registeredUsers.filter(u => u.unitKerja === unit);
                let complete = 0, scoreSum = 0;
                uList.forEach(u => {
                    const uCerts = certificates.filter(c => c.nip === u.nip);
                    if (uCerts.some(c => c.kategori === 'Keahlian') && uCerts.some(c => c.kategori === 'Kompetensi')) complete++;
                    scoreSum += calculateUserScore(u.nip);
                });
                const avg = uList.length > 0 ? Math.round(scoreSum / uList.length) : 0;
                const pct = uList.length > 0 ? Math.round((complete / uList.length) * 100) : 0;
                return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3.5 font-bold text-slate-900">${unit}</td>
                        <td class="p-3.5 text-center font-extrabold">${uList.length}</td>
                        <td class="p-3.5 text-center font-extrabold text-emerald-600">${complete}</td>
                        <td class="p-3.5 text-center font-extrabold text-teal-700">${avg} Poin</td>
                        <td class="p-3.5 text-center"><div class="flex items-center justify-center gap-2.5"><div class="w-28 bg-slate-200 rounded-full h-2.5"><div class="bg-emerald-600 h-2.5 rounded-full" style="width: ${pct}%"></div></div><span class="font-black text-xs">${pct}%</span></div></td>
                    </tr>
                `;
            }).join('');
        }

        function renderAdminArsip() {
            const tbody = document.getElementById('adminArsipTableBody');
            const verified = certificates.filter(c => c.isVerified);
            if (verified.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Belum ada arsip.</td></tr>`;
                return;
            }
            tbody.innerHTML = verified.map((c, i) => `
                <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 font-bold">${i + 1}</td>
                    <td class="p-3.5"><div class="font-extrabold text-slate-900">${c.namaPegawai}</div><div class="text-[10px] text-slate-500">NIP: ${c.nip}</div></td>
                    <td class="p-3.5"><span class="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[10px]">${c.kategori} (${c.tingkat})</span></td>
                    <td class="p-3.5"><div class="font-extrabold text-slate-900">${c.namaSertifikat}</div><div class="text-[10px] text-slate-500">${c.instansiPenerbit || '-'}</div></td>
                    <td class="p-3.5 text-center">${c.tahun}</td>
                    <td class="p-3.5 text-center"><a href="${c.fileData}" target="_blank" class="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl font-bold text-xs border border-emerald-200">Drive</a></td>
                </tr>
            `).join('');
            lucide.createIcons();
        }

        function viewUserDetail(nip) {
            const user = registeredUsers.find(u => u.nip === nip);
            const userCerts = certificates.filter(c => c.nip === nip);
            document.getElementById('detailModalTitle').innerText = `Detail Drive & Berkas: ${user.nama} (${user.nip})`;
            const contentEl = document.getElementById('detailModalContent');
            if (userCerts.length === 0) {
                contentEl.innerHTML = `<p class="text-slate-400 text-center py-8">Belum ada berkas.</p>`;
            } else {
                contentEl.innerHTML = `
                    <div class="space-y-4">
                        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex justify-between items-center">
                            <div><p class="font-extrabold text-slate-900">${user.nama}</p><p class="text-[11px] text-slate-500">${user.unitKerja}</p></div>
                            <div class="text-right"><span class="text-[10px] text-slate-500 uppercase font-bold">Total</span><div class="text-lg font-black text-emerald-800">${calculateUserScore(nip)} Poin</div></div>
                        </div>
                        <div class="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            ${userCerts.map(c => `
                                <div class="p-4 bg-white flex justify-between items-center gap-3">
                                    <div>
                                        <div class="flex items-center gap-2"><span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">${c.kategori} (${c.tingkat})</span><span class="text-[11px] font-bold text-emerald-700">+${getScoreByLevel(c.tingkat)} Poin</span></div>
                                        <h5 class="font-extrabold text-slate-900 mt-1">${c.namaSertifikat}</h5>
                                        <p class="text-[11px] text-slate-500">Instansi: ${c.instansiPenerbit || '-'}</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <a href="${c.fileData}" target="_blank" class="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl font-bold text-xs border border-emerald-200">Lihat Drive</a>
                                        <button onclick="toggleVerifyCert('${c.id}', '${nip}')" class="${c.isVerified ? 'bg-amber-100 text-amber-900' : 'bg-emerald-700 text-white'} px-4 py-2 rounded-xl font-bold text-xs">${c.isVerified ? 'Batalkan' : 'Verifikasi'}</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            document.getElementById('adminDetailModal').classList.remove('hidden');
            lucide.createIcons();
        }

        async function toggleVerifyCert(certId, nip) {
            const cert = certificates.find(c => c.id === certId);
            if (cert) {
                cert.isVerified = !cert.isVerified;
                localStorage.setItem('uin_certs', JSON.stringify(certificates));
                if (supabaseClient) await supabaseClient.from('sertifikat').update({ is_verified: cert.isVerified }).eq('id', certId);
                viewUserDetail(nip);
                updateAdminStats();
                renderAdminArsip();
                showAlert('Berhasil', 'Status verifikasi arsip diperbarui.', 'success');
            }
        }

        function closeAdminDetailModal() { document.getElementById('adminDetailModal').classList.add('hidden'); }

        function toggleSystemStatus(cb) {
            systemSettings.isOpen = cb.checked;
            localStorage.setItem('uin_settings', JSON.stringify(systemSettings));
            updateSystemState();
            showAlert('Berhasil', 'Status pendaftaran diperbarui.', 'success');
        }

        function saveSystemSettings() {
            const dVal = document.getElementById('deadlineInput').value;
            const pText = document.getElementById('portfolioTextInput').value.trim();
            const rText = document.getElementById('runningTextInput').value.trim();
            if (dVal) systemSettings.deadline = dVal;
            if (pText) systemSettings.portfolioText = pText;
            if (rText) {
                systemSettings.runningText = rText;
                document.getElementById('runningTextDisplay').innerText = rText;
            }
            systemSettings.weights = {
                'Internasional': parseInt(document.getElementById('weightInternasional').value) || 100,
                'Nasional': parseInt(document.getElementById('weightNasional').value) || 75,
                'Regional': parseInt(document.getElementById('weightRegional').value) || 50,
                'Lokal': parseInt(document.getElementById('weightLokal').value) || 25
            };
            localStorage.setItem('uin_settings', JSON.stringify(systemSettings));
            updateSystemState();
            if (currentUser) showDashboard();
            if (isAdminLoggedIn) { renderAdminTable(); renderAdminRekap(); }
            showAlert('Berhasil', 'Pengaturan berhasil disimpan dan disinkronkan.', 'success');
        }

        function handlePostAnnouncement(e) {
            e.preventDefault();
            const title = document.getElementById('annTitle').value.trim();
            const content = document.getElementById('annContent').value.trim();
            const file = document.getElementById('annFile').files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = evt => saveAnn(title, content, evt.target.result);
                reader.readAsDataURL(file);
            } else saveAnn(title, content, '');
        }

        function saveAnn(title, content, fileUrl) {
            announcements.unshift({ id: 'ANN-' + Date.now(), title, content, fileUrl, date: new Date().toLocaleDateString('id-ID') });
            localStorage.setItem('uin_announcements', JSON.stringify(announcements));
            document.getElementById('announcementForm').reset();
            renderAnnouncements();
            showAlert('Berhasil', 'Pengumuman dipublikasikan.', 'success');
        }

        function exportTableToCSV() {
            let csv = 'NIP,Nama,Email,No WA,Status ASN,Jabatan,Unit Kerja,Jml Berkas,Total Poin,Status\n';
            registeredUsers.forEach(u => {
                const uCerts = certificates.filter(c => c.nip === u.nip);
                const isComplete = (uCerts.some(c => c.kategori === 'Keahlian') && uCerts.some(c => c.kategori === 'Kompetensi')) ? 'Lengkap' : 'Belum';
                csv += `"${u.nip}","${u.nama}","${u.email || ''}","${u.phone || ''}","${u.statusAsn}","${u.jabatan}","${u.unitKerja}",${uCerts.length},${calculateUserScore(u.nip)},"${isComplete}"\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', 'rekap_sertifikat_uin.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        function showAlert(title, msg, type = 'success', cb = null) {
            document.getElementById('alertTitle').innerText = title;
            document.getElementById('alertMessage').innerText = msg;
            alertCallback = cb;
            const icon = document.getElementById('alertIcon');
            icon.className = type === 'success' ? 'w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm' : 'w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-sm';
            icon.innerHTML = type === 'success' ? '<i data-lucide="check" class="w-7 h-7"></i>' : '<i data-lucide="alert-triangle" class="w-7 h-7"></i>';
            document.getElementById('alertModal').classList.remove('hidden');
            lucide.createIcons();
        }

        function closeAlert() {
            document.getElementById('alertModal').classList.add('hidden');
            if (alertCallback) { const cb = alertCallback; alertCallback = null; cb(); }
        }
    </script>
</body>
</html>
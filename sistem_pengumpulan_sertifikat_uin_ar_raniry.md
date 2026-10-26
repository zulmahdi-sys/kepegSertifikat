<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Pengumpulan Sertifikat - UIN Ar-Raniry Banda Aceh</title>
    <!-- Tailwind CSS & FontAwesome -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Plus Jakarta Sans -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Supabase JS Client -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
                    colors: {
                        uin: {
                            primary: '#064e3b',
                            secondary: '#047857',
                            accent: '#d97706',
                            light: '#f0fdf4',
                            dark: '#022c22'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .glass-card {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        .glass-modal {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        .bg-mesh {
            background-color: #f0fdf4;
            background-image: 
                radial-gradient(at 0% 0%, rgba(6, 78, 59, 0.12) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(4, 120, 87, 0.1) 0px, transparent 50%),
                radial-gradient(at 50% 100%, rgba(217, 119, 6, 0.08) 0px, transparent 50%);
            min-height: 100vh;
        }
        .ambient-blob {
            position: absolute;
            filter: blur(80px);
            z-index: 0;
            opacity: 0.5;
            pointer-events: none;
            animation: float 10s ease-in-out infinite alternate;
        }
        @keyframes float {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(-20px) scale(1.05); }
        }
        @media print {
            body { background: white !important; }
            header, footer, button, .no-print { display: none !important; }
            .glass-card { background: white !important; box-shadow: none !important; border: 1px solid #ccc !important; }
        }
    </style>
</head>
<body class="bg-mesh font-sans text-slate-800 relative flex flex-col min-h-screen">

    <!-- Ambient Floating Orbs -->
    <div class="ambient-blob bg-emerald-300 w-96 h-96 rounded-full top-10 left-10"></div>
    <div class="ambient-blob bg-amber-200 w-96 h-96 rounded-full bottom-10 right-10"></div>

    <!-- MAIN CONTAINER -->
    <div id="app" class="relative z-10 flex flex-col min-h-screen">

        <!-- HEADER NAVIGATION -->
        <header class="glass-card sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/40">
            <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-uin-primary to-uin-secondary flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
                    <i class="fa-solid fa-graduation-cap text-xl"></i>
                </div>
                <div>
                    <h1 class="text-sm md:text-base font-extrabold text-uin-primary tracking-tight">UIN AR-RANIRY BANDA ACEH</h1>
                    <p class="text-xs font-medium text-slate-600">Sistem Pengumpulan Sertifikat Keahlian & Kompetensi</p>
                </div>
            </div>
            <div id="nav-actions" class="flex items-center space-x-3">
                <button onclick="openAdminLoginModal()" class="px-4 py-2 text-xs font-bold uppercase tracking-wider text-uin-primary bg-white/80 hover:bg-uin-primary hover:text-white border border-uin-primary/30 rounded-xl transition-all shadow-sm">
                    <i class="fa-solid fa-shield-halved mr-1.5"></i> Login Admin
                </button>
            </div>
        </header>

        <!-- RUNNING TEXT / TICKER -->
        <div class="bg-uin-primary text-emerald-100 text-xs py-2.5 px-4 overflow-hidden whitespace-nowrap shadow-inner relative z-20 flex items-center">
            <span class="bg-amber-500 text-amber-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase mr-3 shrink-0"><i class="fa-solid fa-bullhorn mr-1"></i> Informasi</span>
            <marquee scrollamount="5" class="font-medium">
                Selamat Datang di Portal Resmi UIN Ar-Raniry Banda Aceh • Batas Akhir Pengumpulan Sertifikat Portofolio Keahlian & Kompetensi Tahun 2026 adalah tanggal 30 Oktober 2026 Pukul 23:00 WIB • Pastikan seluruh berkas yang diunggah valid dan terverifikasi oleh admin unit kerja masing-masing.
            </marquee>
        </div>

        <!-- DYNAMIC CONTENT AREA -->
        <main class="flex-grow container mx-auto px-4 py-8 max-w-7xl space-y-8">

            <!-- 1. PUBLIC LANDING / HOME VIEW -->
            <div id="view-home" class="space-y-8">
                <!-- Banner Hero & Countdown -->
                <div class="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-2xl">
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                    <span class="inline-block px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-widest mb-4 shadow-md">Pendaftaran & Pengumpulan 2026</span>
                    <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">PENGUMPULAN SERTIFIKAT KEAHLIAN & KOMPETENSI</h2>
                    <p class="text-emerald-100 max-w-3xl mx-auto text-sm md:text-base mb-8 leading-relaxed">Portal resmi verifikasi portofolio keahlian bagi seluruh Dosen serta Tenaga Kependidikan (Tendik) di lingkungan Universitas Islam Negeri Ar-Raniry Banda Aceh.</p>
                    
                    <!-- Countdown Timer -->
                    <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-sm font-semibold mb-8">
                        <i class="fa-regular fa-clock text-amber-400 mr-2"></i>
                        <span>Sisa Waktu Pengunggahan: <strong id="countdown-text" class="text-amber-300">Memuat...</strong></span>
                    </div>

                    <div>
                        <button onclick="scrollToAuth()" class="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-amber-950 font-extrabold rounded-2xl shadow-xl shadow-amber-900/30 transition-all transform hover:-translate-y-0.5">
                            <i class="fa-solid fa-rocket mr-2"></i> MULAI MASUK / UNGGAH BERKAS
                        </button>
                    </div>
                </div>

                <!-- Statistik Ringkas -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="glass-card p-6 rounded-3xl flex items-center space-x-4">
                        <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-uin-primary flex items-center justify-center text-2xl font-bold shadow-inner">
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <div>
                            <p class="text-2xl font-black text-slate-900" id="stat-total-users">0</p>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pegawai terdaftar aktif</p>
                        </div>
                    </div>
                    <div class="glass-card p-6 rounded-3xl flex items-center space-x-4">
                        <div class="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl font-bold shadow-inner">
                            <i class="fa-solid fa-building-columns"></i>
                        </div>
                        <div>
                            <p class="text-2xl font-black text-slate-900">15</p>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Jumlah Unit Kerja</p>
                        </div>
                    </div>
                    <div class="glass-card p-6 rounded-3xl flex items-center space-x-4">
                        <div class="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold shadow-inner">
                            <i class="fa-solid fa-file-shield"></i>
                        </div>
                        <div>
                            <p class="text-2xl font-black text-slate-900" id="stat-total-uploaded">0 / 15</p>
                            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Unit sudah mengirim berkas</p>
                        </div>
                    </div>
                </div>

                <!-- Pengumuman Publik -->
                <div class="glass-card p-8 rounded-3xl space-y-6">
                    <h3 class="text-xl font-bold text-uin-primary flex items-center"><i class="fa-solid fa-bullhorn mr-3 text-amber-500"></i> Pengumuman Resmi & Informasi</h3>
                    <div id="public-announcements-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

                <!-- Auth Section (Login / Daftar) -->
                <div id="auth-section" class="glass-card p-8 md:p-10 rounded-3xl max-w-xl mx-auto shadow-xl">
                    <div class="flex border-b border-slate-200 mb-6">
                        <button onclick="switchAuthTab('login')" id="tab-login-btn" class="flex-1 pb-3 text-sm font-bold text-uin-primary border-b-2 border-uin-primary transition-all">Masuk Akun</button>
                        <button onclick="switchAuthTab('register')" id="tab-register-btn" class="flex-1 pb-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all">Daftar Akun Baru</button>
                    </div>

                    <!-- Form Login -->
                    <form id="form-login" onsubmit="handleLogin(event)" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor Induk Pegawai (NIP)</label>
                            <input type="text" id="login-nip" required placeholder="Contoh: 198501012015031001" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Kata Sandi</label>
                            <input type="password" id="login-password" required placeholder="••••••••" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                        </div>
                        <button type="submit" class="w-full py-3.5 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-xl shadow-lg transition-all">
                            MASUK KE DASHBOARD
                        </button>
                    </form>

                    <!-- Form Register -->
                    <form id="form-register" onsubmit="handleRegister(event)" class="space-y-4 hidden">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap & Gelar</label>
                            <input type="text" id="reg-nama" required placeholder="Dr. H. Zulkarnain, M.Ag." class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor Induk Pegawai (NIP)</label>
                                <input type="text" id="reg-nip" required placeholder="19850101..." class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Aktif</label>
                                <input type="text" id="reg-wa" required placeholder="08526088xxxx" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email Resmi UIN</label>
                                <input type="email" id="reg-email" required placeholder="nama@ar-raniry.ac.id" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Kata Sandi Baru</label>
                                <input type="password" id="reg-password" required placeholder="Minimal 6 karakter" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Jabatan Fungsional</label>
                                <select id="reg-jabatan" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                                    <option value="Tenaga Kependidikan">Tenaga Kependidikan (Tendik)</option>
                                    <option value="Dosen Lektor Kepala">Dosen Lektor Kepala</option>
                                    <option value="Dosen Lektor">Dosen Lektor</option>
                                    <option value="Dosen Asisten Ahli">Dosen Asisten Ahli</option>
                                    <option value="Guru Besar">Guru Besar</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Unit Kerja / Fakultas</label>
                                <select id="reg-unit" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-uin-primary text-sm">
                                    <option value="Biro AUPK">Biro AUPK</option>
                                    <option value="Biro AAKK">Biro AAKK</option>
                                    <option value="Fakultas Syariah dan Hukum">Fakultas Syariah & Hukum</option>
                                    <option value="Fakultas Tarbiyah dan Keguruan">Fakultas Tarbiyah & Keguruan</option>
                                    <option value="Fakultas Ushuluddin dan Filsafat">Fakultas Ushuluddin & Filsafat</option>
                                    <option value="Fakultas Dakwah dan Komunikasi">Fakultas Dakwah & Komunikasi</option>
                                    <option value="Fakultas Adab dan Humaniora">Fakultas Adab & Humaniora</option>
                                    <option value="Fakultas Ekonomi dan Bisnis Islam">Fakultas Ekonomi & Bisnis Islam</option>
                                    <option value="Fakultas Sains dan Teknologi">Fakultas Sains & Teknologi</option>
                                    <option value="Fakultas Ilmu Sosial dan Ilmu Pemerintahan">Fakultas Ilmu Sosial & Ilmu Pemerintahan</option>
                                    <option value="Fakultas Psikologi">Fakultas Psikologi</option>
                                    <option value="Fakultas Kedokteran">Fakultas Kedokteran</option>
                                    <option value="Pascasarjana">Pascasarjana</option>
                                    <option value="Perpustakaan UIN">Perpustakaan UIN</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-uin-primary to-uin-secondary hover:opacity-95 text-white font-bold rounded-xl shadow-lg transition-all">
                            DAFTAR SEKARANG
                        </button>
                    </form>
                </div>
            </div>

            <!-- 2. USER DASHBOARD VIEW -->
            <div id="view-user-dashboard" class="space-y-6 hidden">
                <div class="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div class="flex items-center space-x-3 mb-1">
                            <h2 class="text-2xl font-extrabold text-uin-primary" id="user-welcome-name">Selamat Datang, Pegawai</h2>
                            <span id="user-status-badge" class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">Terverifikasi</span>
                        </div>
                        <p class="text-sm text-slate-600"><span id="user-display-nip">NIP: -</span> • <span id="user-display-unit">-</span> (<span id="user-display-jabatan">-</span>)</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button onclick="openUploadModal()" class="px-5 py-3 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-2xl shadow-lg transition-all flex items-center">
                            <i class="fa-solid fa-cloud-arrow-up mr-2"></i> Upload Sertifikat Baru
                        </button>
                        <button onclick="logout()" class="px-4 py-3 bg-red-100 hover:bg-red-200 text-red-700 font-bold rounded-2xl transition-all">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </button>
                    </div>
                </div>

                <!-- Kartu Berkas User -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-uin-primary flex items-center justify-center font-bold"><i class="fa-solid fa-award"></i></div>
                                <h4 class="font-bold text-slate-800">Sertifikat Keahlian</h4>
                            </div>
                            <span id="count-keahlian" class="px-3 py-1 bg-emerald-50 text-uin-primary text-xs font-extrabold rounded-full">0 File</span>
                        </div>
                        <div id="list-keahlian" class="space-y-3 min-h-[140px]">
                            <p class="text-xs text-slate-400 text-center py-8">Belum ada berkas diunggah.</p>
                        </div>
                    </div>

                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold"><i class="fa-solid fa-book-open"></i></div>
                                <h4 class="font-bold text-slate-800">Sertifikat Kompetensi</h4>
                            </div>
                            <span id="count-kompetensi" class="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-extrabold rounded-full">0 File</span>
                        </div>
                        <div id="list-kompetensi" class="space-y-3 min-h-[140px]">
                            <p class="text-xs text-slate-400 text-center py-8">Belum ada berkas diunggah.</p>
                        </div>
                    </div>

                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold"><i class="fa-solid fa-box-archive"></i></div>
                                <h4 class="font-bold text-slate-800">Arsip Terverifikasi</h4>
                            </div>
                            <span id="count-arsip" class="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-extrabold rounded-full">0 Arsip</span>
                        </div>
                        <div id="list-arsip" class="space-y-3 min-h-[140px]">
                            <p class="text-xs text-slate-400 text-center py-8">Belum ada arsip disetujui.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. ADMIN DASHBOARD VIEW -->
            <div id="view-admin-dashboard" class="space-y-6 hidden">
                <div class="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div class="flex items-center space-x-3 mb-1">
                            <h2 class="text-2xl font-extrabold text-uin-primary">Dashboard Administrator</h2>
                            <span class="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">Master Control</span>
                        </div>
                        <p class="text-sm text-slate-600">Pusat kontrol validasi sertifikat, kelola pegawai, jadwal buka/tutup, dan cetak laporan.</p>
                    </div>
                    <div>
                        <button onclick="logout()" class="px-4 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 font-bold rounded-xl transition-all text-xs">
                            <i class="fa-solid fa-right-from-bracket mr-1.5"></i> Keluar Admin
                        </button>
                    </div>
                </div>

                <!-- Admin Tabs -->
                <div class="flex space-x-2 border-b border-slate-200 pb-3 overflow-x-auto">
                    <button onclick="switchAdminTab('monitoring')" id="adm-tab-monitoring" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-uin-primary text-white shadow-md transition-all whitespace-nowrap"><i class="fa-solid fa-chart-pie mr-2"></i> Monitoring & Verifikasi</button>
                    <button onclick="switchAdminTab('master')" id="adm-tab-master" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-white/60 text-slate-700 hover:bg-white transition-all whitespace-nowrap"><i class="fa-solid fa-users-gear mr-2"></i> Master DB Pegawai</button>
                    <button onclick="switchAdminTab('schedule')" id="adm-tab-schedule" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-white/60 text-slate-700 hover:bg-white transition-all whitespace-nowrap"><i class="fa-solid fa-calendar-days mr-2"></i> Jadwal & Pengaturan</button>
                    <button onclick="switchAdminTab('reports')" id="adm-tab-reports" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-white/60 text-slate-700 hover:bg-white transition-all whitespace-nowrap"><i class="fa-solid fa-print mr-2"></i> Cetak Laporan & Arsip</button>
                    <button onclick="switchAdminTab('announcements')" id="adm-tab-announcements" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-white/60 text-slate-700 hover:bg-white transition-all whitespace-nowrap"><i class="fa-solid fa-bullhorn mr-2"></i> Kelola Pengumuman</button>
                </div>

                <!-- Tab Content 1: Monitoring Peserta & Verifikasi Berkas -->
                <div id="adm-content-monitoring" class="space-y-4">
                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                            <h3 class="font-bold text-slate-800 text-lg">Daftar Pengumpulan Berkas Peserta</h3>
                            <div class="relative w-full md:w-72">
                                <input type="text" id="admin-search-input" oninput="filterAdminParticipants()" placeholder="Cari NIP atau Nama..." class="w-full pl-10 pr-4 py-2 bg-white/70 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-uin-primary">
                                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-400 text-xs"></i>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead>
                                    <tr class="border-b border-slate-200 text-slate-500 font-bold uppercase">
                                        <th class="py-3 px-4">No</th>
                                        <th class="py-3 px-4">NIP / Nama Pegawai</th>
                                        <th class="py-3 px-4">Kontak (WhatsApp / Email)</th>
                                        <th class="py-3 px-4">Jabatan & Unit Kerja</th>
                                        <th class="py-3 px-4 text-center">Jml Berkas</th>
                                        <th class="py-3 px-4 text-center">Akumulasi Nilai</th>
                                        <th class="py-3 px-4 text-center">Status</th>
                                        <th class="py-3 px-4 text-center">Aksi & Verifikasi</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-participants-tbody" class="divide-y divide-slate-100">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Tab Content 2: Master DB Pegawai -->
                <div id="adm-content-master" class="space-y-4 hidden">
                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-slate-800 text-lg">Kelola Data Master Pegawai</h3>
                            <button onclick="openAddEmployeeModal()" class="px-4 py-2 bg-uin-primary text-white font-bold rounded-xl text-xs shadow hover:bg-uin-secondary transition-all">
                                <i class="fa-solid fa-user-plus mr-1.5"></i> Tambah Pegawai Baru
                            </button>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead>
                                    <tr class="border-b border-slate-200 text-slate-500 font-bold uppercase">
                                        <th class="py-3 px-4">NIP</th>
                                        <th class="py-3 px-4">Nama Lengkap</th>
                                        <th class="py-3 px-4">Jabatan</th>
                                        <th class="py-3 px-4">Unit Kerja</th>
                                        <th class="py-3 px-4">Kontak</th>
                                        <th class="py-3 px-4 text-center">Aksi Master</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-master-tbody" class="divide-y divide-slate-100">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Tab Content 3: Jadwal & Pengaturan Buka/Tutup -->
                <div id="adm-content-schedule" class="space-y-4 hidden">
                    <div class="glass-card p-6 md:p-8 rounded-3xl space-y-6 max-w-xl">
                        <h3 class="font-bold text-slate-800 text-lg"><i class="fa-solid fa-calendar-days text-uin-primary mr-2"></i> Pengaturan Jadwal Buka & Tutup Pengiriman</h3>
                        <p class="text-xs text-slate-600">Tentukan status sistem pengumpulan sertifikat serta tenggat waktu akhir penyerahan berkas bagi seluruh pegawai.</p>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Status Sistem Pengumpulan</label>
                                <select id="setting-status-sistem" class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-bold text-emerald-800 focus:ring-2 focus:ring-uin-primary">
                                    <option value="buka">BUKA (Pegawai Dapat Mengunggah Berkas)</option>
                                    <option value="tutup">TUTUP (Pendaftaran Ditutup Sementara)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Tenggat Waktu Batas Akhir (Deadline)</label>
                                <input type="datetime-local" id="setting-deadline" value="2026-10-30T23:00" class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Pengumuman / Catatan Khusus Jadwal</label>
                                <textarea id="setting-catatan" rows="3" class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm" placeholder="Contoh: Pengumpulan gelombang 1 ditutup tepat waktu..."></textarea>
                            </div>
                            <button onclick="saveSystemSchedule()" class="px-6 py-3 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-xl text-xs shadow transition-all">
                                SIMPAN PENGATURAN JADWAL
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Tab Content 4: Cetak Laporan & Arsip Bulanan -->
                <div id="adm-content-reports" class="space-y-4 hidden">
                    <div class="glass-card p-6 rounded-3xl space-y-6">
                        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 class="font-bold text-slate-800 text-lg"><i class="fa-solid fa-print text-uin-primary mr-2"></i> Arsip Bulanan & Cetak Laporan Resmi</h3>
                                <p class="text-xs text-slate-600">Rekapitulasi seluruh sertifikat terverifikasi dan akumulasi poin keahlian pegawai.</p>
                            </div>
                            <div class="flex items-center space-x-3 no-print">
                                <select id="report-filter-month" onchange="loadAdminReports()" class="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold">
                                    <option value="all">Semua Bulan</option>
                                    <option value="2026-10">Oktober 2026</option>
                                    <option value="2026-09">September 2026</option>
                                    <option value="2026-08">Agustus 2026</option>
                                </select>
                                <button onclick="window.print()" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold rounded-xl text-xs shadow transition-all flex items-center">
                                    <i class="fa-solid fa-print mr-2"></i> Cetak Laporan PDF
                                </button>
                            </div>
                        </div>

                        <!-- Print Header Only -->
                        <div class="hidden print:block text-center space-y-1 mb-6">
                            <h2 class="text-xl font-bold uppercase">Kementerian Agama Republik Indonesia</h2>
                            <h3 class="text-lg font-extrabold uppercase">Universitas Islam Negeri Ar-Raniry Banda Aceh</h3>
                            <p class="text-xs">Laporan Rekapitulasi Sertifikat Keahlian & Kompetensi Pegawai Tahun 2026</p>
                            <hr class="my-2 border-black">
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead>
                                    <tr class="border-b border-slate-200 text-slate-500 font-bold uppercase">
                                        <th class="py-3 px-4">No</th>
                                        <th class="py-3 px-4">NIP / Nama Pegawai</th>
                                        <th class="py-3 px-4">Unit Kerja</th>
                                        <th class="py-3 px-4">Judul Sertifikat</th>
                                        <th class="py-3 px-4">Kategori & Tingkat</th>
                                        <th class="py-3 px-4 text-center">Poin</th>
                                        <th class="py-3 px-4 text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-reports-tbody" class="divide-y divide-slate-100">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Tab Content 5: Kelola Pengumuman -->
                <div id="adm-content-announcements" class="space-y-4 hidden">
                    <div class="glass-card p-6 rounded-3xl space-y-6">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-slate-800 text-lg">Daftar Pengumuman Institusi</h3>
                            <button onclick="openAnnouncementModal()" class="px-4 py-2 bg-uin-primary text-white font-bold rounded-xl text-xs shadow hover:bg-uin-secondary transition-all">
                                <i class="fa-solid fa-plus mr-1.5"></i> Buat Pengumuman Baru
                            </button>
                        </div>
                        <div id="admin-announcements-container" class="space-y-4">
                            <!-- Dynamic list -->
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <!-- PROFESSIONAL FOOTER -->
        <footer class="mt-auto bg-slate-900 text-slate-300 py-10 px-6 border-t border-slate-800 no-print">
            <div class="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-xl bg-uin-primary flex items-center justify-center text-white font-bold">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3 class="font-extrabold text-white text-base">UIN AR-RANIRY BANDA ACEH</h3>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">Sistem Informasi Pengumpulan Sertifikat Keahlian & Kompetensi Dosen serta Tenaga Kependidikan (Tendik) berbasis digital terintegrasi.</p>
                </div>
                <div class="space-y-2">
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider">Kontak & Alamat</h4>
                    <p class="text-xs text-slate-400"><i class="fa-solid fa-location-dot mr-2 text-amber-500"></i> Jl. Syeikh Abdur Rauf Kopelma Darussalam, Banda Aceh</p>
                    <p class="text-xs text-slate-400"><i class="fa-solid fa-envelope mr-2 text-amber-500"></i> info@ar-raniry.ac.id</p>
                    <p class="text-xs text-slate-400"><i class="fa-solid fa-phone mr-2 text-amber-500"></i> (0651) 7551289</p>
                </div>
                <div class="space-y-2">
                    <h4 class="font-bold text-white text-sm uppercase tracking-wider">Tautan Resmi</h4>
                    <ul class="text-xs text-slate-400 space-y-1.5">
                        <li><a href="https://ar-raniry.ac.id" target="_blank" class="hover:text-white transition-all"><i class="fa-solid fa-globe mr-1.5 text-emerald-400"></i> Website Utama UIN Ar-Raniry</a></li>
                        <li><a href="https://kepegawaian.ar-raniry.ac.id" target="_blank" class="hover:text-white transition-all"><i class="fa-solid fa-user-tie mr-1.5 text-emerald-400"></i> Biro Kepegawaian</a></li>
                        <li><a href="https://lms.ar-raniry.ac.id" target="_blank" class="hover:text-white transition-all"><i class="fa-solid fa-laptop-code mr-1.5 text-emerald-400"></i> E-Learning & LMS</a></li>
                    </ul>
                </div>
            </div>
            <div class="container mx-auto max-w-7xl mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
                &copy; 2026 Universitas Islam Negeri Ar-Raniry Banda Aceh. All Rights Reserved.
            </div>
        </footer>
    </div>

    <!-- MODALS -->

    <!-- Upload Sertifikat Modal -->
    <div id="modal-upload" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="glass-modal w-full max-w-lg p-6 md:p-8 rounded-3xl space-y-6 relative">
            <button onclick="closeUploadModal()" class="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            <h3 class="text-xl font-extrabold text-uin-primary"><i class="fa-solid fa-cloud-arrow-up mr-2"></i> Unggah Berkas Sertifikat</h3>
            
            <form onsubmit="handleUploadSubmit(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Kategori Sertifikat</label>
                    <select id="upload-kategori" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                        <option value="Sertifikat Keahlian">Sertifikat Keahlian</option>
                        <option value="Sertifikat Kompetensi">Sertifikat Kompetensi</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Judul / Nama Sertifikat</label>
                    <input type="text" id="upload-judul" required placeholder="Contoh: Sertifikasi Certified Data Professional" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Tingkatan</label>
                        <select id="upload-tingkat" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                            <option value="Internasional">Internasional (100 Poin)</option>
                            <option value="Nasional">Nasional (75 Poin)</option>
                            <option value="Regional">Regional (50 Poin)</option>
                            <option value="Lokal / Institusi">Lokal / Institusi (25 Poin)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Tahun Perolehan</label>
                        <input type="number" id="upload-tahun" required value="2026" min="2020" max="2026" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">File Berkas (PDF / JPG Max 2MB)</label>
                    <input type="file" id="upload-file" accept=".pdf,.jpg,.jpeg" required class="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-uin-primary file:text-white hover:file:bg-uin-secondary">
                </div>
                <button type="submit" class="w-full py-3.5 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-xl shadow-lg transition-all">
                    UNGGAH & SIMPAN BERKAS
                </button>
            </form>
        </div>
    </div>

    <!-- Admin Login Modal -->
    <div id="modal-admin-login" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="glass-modal w-full max-w-md p-6 md:p-8 rounded-3xl space-y-6 relative">
            <button onclick="closeAdminLoginModal()" class="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            <div class="text-center">
                <div class="w-12 h-12 rounded-2xl bg-amber-500 text-amber-950 flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-md">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <h3 class="text-xl font-extrabold text-uin-primary">Login Administrator</h3>
                <p class="text-xs text-slate-500 mt-1">Masukkan kunci akses master sistem</p>
            </div>
            <form onsubmit="handleAdminLogin(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Username Admin</label>
                    <input type="text" id="admin-user" required value="admin" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Password Admin</label>
                    <input type="password" id="admin-pass" required value="uinarratiry2026" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                </div>
                <button type="submit" class="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-extrabold rounded-xl shadow-lg transition-all">
                    MASUK SEBAGAI ADMIN
                </button>
            </form>
        </div>
    </div>

    <!-- Detail Participant Drive Modal -->
    <div id="modal-participant-detail" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="glass-modal w-full max-w-3xl p-6 md:p-8 rounded-3xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button onclick="closeParticipantDetailModal()" class="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            <div>
                <span class="px-3 py-1 bg-emerald-100 text-uin-primary rounded-full text-xs font-bold uppercase tracking-wider" id="modal-part-unit">Biro AUPK</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-2" id="modal-part-name">ZULMAHDI</h3>
                <p class="text-xs text-slate-500 font-medium">NIP: <span id="modal-part-nip">1122</span> • WhatsApp: <span id="modal-part-wa">-</span></p>
            </div>

            <div class="space-y-4">
                <h4 class="font-bold text-slate-800 text-sm border-b pb-2"><i class="fa-solid fa-folder-open text-amber-500 mr-2"></i> Daftar Sertifikat & Berkas Diunggah</h4>
                <div id="modal-part-certificates-list" class="space-y-3">
                    <!-- Dynamic cert items -->
                </div>
            </div>

            <!-- Panel Kirim Pesan Kendala / Revisi -->
            <div class="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl space-y-3">
                <h5 class="font-bold text-amber-900 text-xs uppercase"><i class="fa-solid fa-triangle-exclamation mr-1.5 text-amber-600"></i> Kirim Pesan Kendala / Revisi Berkas ke Peserta</h5>
                <textarea id="admin-revision-msg" rows="2" placeholder="Tuliskan kendala berkas (misal: File blur, sertifikat kurang jelas, mohon unggah ulang)..." class="w-full px-3 py-2 bg-white border border-amber-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-500"></textarea>
                <button onclick="sendRevisionNotification()" class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs shadow transition-all">
                    <i class="fa-brands fa-whatsapp mr-1.5"></i> Kirim Notifikasi WhatsApp & Pesan Kendala
                </button>
            </div>
        </div>
    </div>

    <!-- Announcement Edit/Add Modal -->
    <div id="modal-announcement" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="glass-modal w-full max-w-lg p-6 md:p-8 rounded-3xl space-y-6 relative">
            <button onclick="closeAnnouncementModal()" class="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            <h3 class="text-xl font-extrabold text-uin-primary" id="announcement-modal-title">Buat Pengumuman Baru</h3>
            <form onsubmit="handleAnnouncementSubmit(event)" class="space-y-4">
                <input type="hidden" id="announcement-id">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Judul Pengumuman</label>
                    <input type="text" id="announcement-title" required placeholder="Judul informasi..." class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Isi / Konten Pengumuman</label>
                    <textarea id="announcement-content" rows="4" required placeholder="Tulis pengumuman di sini..." class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary"></textarea>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Status Publikasi</label>
                    <select id="announcement-status" class="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm focus:ring-2 focus:ring-uin-primary">
                        <option value="published">Published (Tampil Publik)</option>
                        <option value="draft">Draft (Disembunyikan)</option>
                    </select>
                </div>
                <button type="submit" class="w-full py-3.5 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-xl shadow-lg transition-all">
                    SIMPAN PENGUMUMAN
                </button>
            </form>
        </div>
    </div>

    <!-- Master Add/Edit Employee Modal -->
    <div id="modal-employee" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="glass-modal w-full max-w-lg p-6 md:p-8 rounded-3xl space-y-6 relative">
            <button onclick="closeEmployeeModal()" class="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"><i class="fa-solid fa-xmark"></i></button>
            <h3 class="text-xl font-extrabold text-uin-primary" id="employee-modal-title">Tambah Pegawai</h3>
            <form onsubmit="handleEmployeeSubmit(event)" class="space-y-4">
                <input type="hidden" id="emp-edit-id">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">NIP (Nomor Induk Pegawai)</label>
                    <input type="text" id="emp-nip" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap & Gelar</label>
                    <input type="text" id="emp-nama" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp</label>
                        <input type="text" id="emp-wa" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
                        <input type="email" id="emp-email" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Jabatan</label>
                        <input type="text" id="emp-jabatan" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Unit Kerja</label>
                        <input type="text" id="emp-unit" required class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Password Baru (Opsional saat Edit)</label>
                    <input type="password" id="emp-password" placeholder="Biarkan kosong jika tidak diubah" class="w-full px-3 py-2.5 rounded-xl bg-white/60 border border-slate-200 text-sm">
                </div>
                <button type="submit" class="w-full py-3.5 bg-uin-primary hover:bg-uin-secondary text-white font-bold rounded-xl shadow-lg transition-all">
                    SIMPAN DATA PEGAWAI
                </button>
            </form>
        </div>
    </div>

    <!-- JavaScript Application Logic -->
    <script>
        // Supabase Configuration
        const SUPABASE_URL = 'https://pxexrihqmuemrpepthjp.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_2yBws_0STCr4Tx3dMtHZVQ_lOGXJjFA';
        const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwB-rMN2XMg3Hju19C9Pfn5QdTleWKFr0mUiqlGSHU3XGQHB1EKbPX4o454Rm3q-bhvrg/exec';

        let currentUser = null;
        let selectedParticipantForDetail = null;

        // Initialize on load
        window.addEventListener('DOMContentLoaded', () => {
            seedInitialData();
            initCountdown();
            loadPublicAnnouncements();
            checkExistingSession();
            fetchSystemStats();
            loadAdminReports();
        });

        // Seed initial data to local storage for robust offline/fallback use
        function seedInitialData() {
            if (!localStorage.getItem('uin_local_pegawai')) {
                const defaultPegawai = [
                    {
                        nip: '198501012015031001',
                        nama: 'Dr. H. Zulkarnain, M.Ag.',
                        whatsapp: '085260887091',
                        email: 'zulkarnain@ar-raniry.ac.id',
                        password: 'password123',
                        jabatan: 'Dosen Lektor Kepala',
                        unit_kerja: 'Fakultas Syariah dan Hukum'
                    }
                ];
                localStorage.setItem('uin_local_pegawai', JSON.stringify(defaultPegawai));
            }
            if (!localStorage.getItem('uin_local_anns')) {
                const defaultAnns = [
                    {
                        id: 'ann_1',
                        title: 'Pembukaan Pengumpulan Sertifikat 2026',
                        content: 'Seluruh dosen dan tendik di lingkungan UIN Ar-Raniry diwajibkan mengunggah sertifikat keahlian dan kompetensi paling lambat 30 Oktober 2026.',
                        status: 'published',
                        created_at: new Date().toISOString()
                    }
                ];
                localStorage.setItem('uin_local_anns', JSON.stringify(defaultAnns));
            }
        }

        // Countdown Timer & Date/Time
        function initCountdown() {
            const deadline = new Date('2026-10-30T23:00:00').getTime();
            setInterval(() => {
                const now = new Date().getTime();
                const diff = deadline - now;
                if (diff > 0) {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                    document.getElementById('countdown-text').innerText = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik lagi`;
                } else {
                    document.getElementById('countdown-text').innerText = 'Pendaftaran & Pengumpulan Ditutup';
                }
            }, 1000);
        }

        // Auth Tabs
        function switchAuthTab(tab) {
            if (tab === 'login') {
                document.getElementById('form-login').classList.remove('hidden');
                document.getElementById('form-register').classList.add('hidden');
                document.getElementById('tab-login-btn').className = 'flex-1 pb-3 text-sm font-bold text-uin-primary border-b-2 border-uin-primary transition-all';
                document.getElementById('tab-register-btn').className = 'flex-1 pb-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all';
            } else {
                document.getElementById('form-login').classList.add('hidden');
                document.getElementById('form-register').classList.remove('hidden');
                document.getElementById('tab-register-btn').className = 'flex-1 pb-3 text-sm font-bold text-uin-primary border-b-2 border-uin-primary transition-all';
                document.getElementById('tab-login-btn').className = 'flex-1 pb-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all';
            }
        }

        function scrollToAuth() {
            document.getElementById('auth-section').scrollIntoView({ behavior: 'smooth' });
        }

        // Session
        function checkExistingSession() {
            const saved = localStorage.getItem('uin_current_user');
            if (saved) {
                currentUser = JSON.parse(saved);
                if (currentUser.role === 'admin') {
                    showAdminDashboard();
                } else {
                    showUserDashboard();
                }
            }
        }

        // Login User (Local-first robust fallback for instant login)
        async function handleLogin(e) {
            e.preventDefault();
            const nip = document.getElementById('login-nip').value.trim();
            const pass = document.getElementById('login-password').value.trim();

            let userData = null;

            // 1. Check local storage first
            const localUsers = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            userData = localUsers.find(u => u.nip === nip);

            // 2. If not found locally, query Supabase
            if (!userData) {
                try {
                    const { data, error } = await supabaseClient
                        .from('pegawai')
                        .select('*')
                        .eq('nip', nip)
                        .single();
                    if (!error && data) {
                        userData = data;
                        localUsers.push(data);
                        localStorage.setItem('uin_local_pegawai', JSON.stringify(localUsers));
                    }
                } catch (err) {}
            }

            if (!userData || userData.password !== pass) {
                alert('NIP atau Kata Sandi salah!');
                return;
            }

            currentUser = userData;
            currentUser.role = 'user';
            localStorage.setItem('uin_current_user', JSON.stringify(currentUser));
            showUserDashboard();
        }

        // Register User with Local-first Robust Fallback
        async function handleRegister(e) {
            e.preventDefault();
            const payload = {
                nip: document.getElementById('reg-nip').value.trim(),
                nama: document.getElementById('reg-nama').value.trim(),
                whatsapp: document.getElementById('reg-wa').value.trim(),
                email: document.getElementById('reg-email').value.trim(),
                password: document.getElementById('reg-password').value.trim(),
                jabatan: document.getElementById('reg-jabatan').value,
                unit_kerja: document.getElementById('reg-unit').value
            };

            const localUsers = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            if (localUsers.some(u => u.nip === payload.nip)) {
                alert('NIP tersebut sudah terdaftar di sistem!');
                return;
            }

            // Save locally
            localUsers.push(payload);
            localStorage.setItem('uin_local_pegawai', JSON.stringify(localUsers));

            // Try Supabase (graceful catch if table not yet created)
            try {
                await supabaseClient.from('pegawai').insert([payload]);
            } catch (err) {}

            // Sync to Google Apps Script / Sheet
            try {
                fetch(GAS_WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'register_pegawai', ...payload })
                });
            } catch (e) {}

            alert('Pendaftaran berhasil! Silakan masuk dengan NIP dan password Anda.');
            switchAuthTab('login');
            document.getElementById('form-register').reset();
        }

        // Admin Login Modal
        function openAdminLoginModal() { document.getElementById('modal-admin-login').classList.remove('hidden'); }
        function closeAdminLoginModal() { document.getElementById('modal-admin-login').classList.add('hidden'); }
        function handleAdminLogin(e) {
            e.preventDefault();
            const u = document.getElementById('admin-user').value;
            const p = document.getElementById('admin-pass').value;
            if (u === 'admin' && p === 'uinarratiry2026') {
                currentUser = { role: 'admin', nama: 'Super Admin' };
                localStorage.setItem('uin_current_user', JSON.stringify(currentUser));
                closeAdminLoginModal();
                showAdminDashboard();
            } else {
                alert('Kunci akses admin salah!');
            }
        }

        function logout() {
            localStorage.removeItem('uin_current_user');
            currentUser = null;
            window.location.reload();
        }

        // Dashboards
        function showUserDashboard() {
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-admin-dashboard').classList.add('hidden');
            document.getElementById('view-user-dashboard').classList.remove('hidden');
            document.getElementById('user-welcome-name').innerText = `Selamat Datang, ${currentUser.nama}`;
            document.getElementById('user-display-nip').innerText = `NIP: ${currentUser.nip}`;
            document.getElementById('user-display-unit').innerText = currentUser.unit_kerja;
            document.getElementById('user-display-jabatan').innerText = currentUser.jabatan;
            loadUserCertificates();
        }

        function showAdminDashboard() {
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-user-dashboard').classList.add('hidden');
            document.getElementById('view-admin-dashboard').classList.remove('hidden');
            loadAdminMonitoring();
            loadAdminMasterDB();
            loadAdminAnnouncements();
            loadAdminReports();
        }

        // Stats & Public Info
        async function fetchSystemStats() {
            let users = [];
            try {
                const { data } = await supabaseClient.from('pegawai').select('*');
                if (data && data.length > 0) users = data;
            } catch (err) {}
            if (users.length === 0) {
                users = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            }
            document.getElementById('stat-total-users').innerText = users.length;

            let certs = [];
            try {
                const { data } = await supabaseClient.from('sertifikat').select('nip');
                if (data) certs = data;
            } catch (err) {}
            if (certs.length === 0) {
                certs = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            }
            const uniqueUnits = new Set(certs.map(c => c.nip));
            document.getElementById('stat-total-uploaded').innerText = `${uniqueUnits.size} / 15`;
        }

        async function loadPublicAnnouncements() {
            let anns = [];
            try {
                const { data } = await supabaseClient.from('announcements').select('*').eq('status', 'published').order('created_at', { ascending: false });
                if (data) anns = data;
            } catch (err) {}
            if (anns.length === 0) {
                anns = JSON.parse(localStorage.getItem('uin_local_anns') || '[]').filter(a => a.status === 'published');
            }

            const container = document.getElementById('public-announcements-list');
            if (!anns || anns.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-500 italic">Belum ada pengumuman aktif.</p>';
                return;
            }
            container.innerHTML = anns.map(item => `
                <div class="bg-white/70 p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                    <div class="flex justify-between items-center text-xs text-slate-400">
                        <span><i class="fa-regular fa-calendar mr-1"></i> ${new Date(item.created_at || Date.now()).toLocaleDateString('id-ID')}</span>
                        <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">Resmi</span>
                    </div>
                    <h4 class="font-bold text-slate-900 text-sm">${item.title}</h4>
                    <p class="text-xs text-slate-600 line-clamp-3">${item.content}</p>
                </div>
            `).join('');
        }

        // User Certificates
        async function loadUserCertificates() {
            let certs = [];
            try {
                const { data } = await supabaseClient.from('sertifikat').select('*').eq('nip', currentUser.nip);
                if (data) certs = data;
            } catch (err) {}
            if (certs.length === 0) {
                const localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
                certs = localCerts.filter(c => c.nip === currentUser.nip);
            }

            const keahlianContainer = document.getElementById('list-keahlian');
            const kompetensiContainer = document.getElementById('list-kompetensi');
            const arsipContainer = document.getElementById('list-arsip');

            const keahlian = certs.filter(i => i.kategori === 'Sertifikat Keahlian');
            const kompetensi = certs.filter(i => i.kategori === 'Sertifikat Kompetensi');
            const approved = certs.filter(i => i.status === 'Disetujui');

            document.getElementById('count-keahlian').innerText = `${keahlian.length} File`;
            document.getElementById('count-kompetensi').innerText = `${kompetensi.length} File`;
            document.getElementById('count-arsip').innerText = `${approved.length} Arsip`;

            renderCertList(keahlianContainer, keahlian);
            renderCertList(kompetensiContainer, kompetensi);
            renderCertList(arsipContainer, approved);
        }

        function renderCertList(container, items) {
            if (items.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-400 text-center py-6">Belum ada berkas.</p>';
                return;
            }
            container.innerHTML = items.map(item => `
                <div class="p-3 rounded-xl bg-white/80 border border-slate-200/60 flex items-center justify-between text-xs">
                    <div>
                        <p class="font-bold text-slate-800 line-clamp-1">${item.judul}</p>
                        <p class="text-[10px] text-slate-500">${item.tingkat} • ${item.tahun} (${item.status || 'Pending'})</p>
                    </div>
                    <div class="flex items-center space-x-1.5">
                        <a href="${item.file_url}" target="_blank" class="w-7 h-7 rounded-lg bg-emerald-100 text-uin-primary flex items-center justify-center hover:bg-emerald-200"><i class="fa-solid fa-eye"></i></a>
                        <button onclick="deleteCertificate('${item.id}')" class="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function openUploadModal() { document.getElementById('modal-upload').classList.remove('hidden'); }
        function closeUploadModal() { document.getElementById('modal-upload').classList.add('hidden'); }

        async function handleUploadSubmit(e) {
            e.preventDefault();
            const fileInput = document.getElementById('upload-file');
            const file = fileInput.files[0];
            if (file && file.size > 2 * 1024 * 1024) {
                alert('Ukuran file maksimal 2MB!');
                return;
            }

            const reader = new FileReader();
            reader.onload = async function() {
                const base64Data = reader.result;
                const newCert = {
                    id: 'cert_' + Date.now(),
                    nip: currentUser.nip,
                    nama: currentUser.nama,
                    kategori: document.getElementById('upload-kategori').value,
                    judul: document.getElementById('upload-judul').value,
                    tingkat: document.getElementById('upload-tingkat').value,
                    tahun: document.getElementById('upload-tahun').value,
                    file_url: base64Data,
                    status: 'Pending',
                    created_at: new Date().toISOString()
                };

                // Save locally
                const localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
                localCerts.push(newCert);
                localStorage.setItem('uin_local_certs', JSON.stringify(localCerts));

                // Try Supabase
                try {
                    await supabaseClient.from('sertifikat').insert([{
                        nip: newCert.nip,
                        kategori: newCert.kategori,
                        judul: newCert.judul,
                        tingkat: newCert.tingkat,
                        tahun: newCert.tahun,
                        file_url: base64Data,
                        status: 'Pending'
                    }]);
                } catch (err) {}

                // Sync to Google Drive / Sheet
                try {
                    fetch(GAS_WEB_APP_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ type: 'upload_sertifikat', ...newCert })
                    });
                } catch (e) {}

                closeUploadModal();
                loadUserCertificates();
                alert('Berhasil mengunggah sertifikat!');
            };
            reader.readAsDataURL(file);
        }

        async function deleteCertificate(id) {
            if (!confirm('Hapus berkas sertifikat ini?')) return;
            try {
                await supabaseClient.from('sertifikat').delete().eq('id', id);
            } catch (err) {}

            let localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            localCerts = localCerts.filter(c => c.id !== id);
            localStorage.setItem('uin_local_certs', JSON.stringify(localCerts));

            loadUserCertificates();
        }

        // Admin Tabs & Management
        function switchAdminTab(tab) {
            ['monitoring', 'master', 'schedule', 'reports', 'announcements'].forEach(t => {
                document.getElementById(`adm-content-${t}`).classList.add('hidden');
                document.getElementById(`adm-tab-${t}`).className = 'px-5 py-2.5 rounded-xl font-bold text-xs bg-white/60 text-slate-700 hover:bg-white transition-all whitespace-nowrap';
            });
            document.getElementById(`adm-content-${tab}`).classList.remove('hidden');
            document.getElementById(`adm-tab-${tab}`).className = 'px-5 py-2.5 rounded-xl font-bold text-xs bg-uin-primary text-white shadow-md transition-all whitespace-nowrap';
        }

        async function loadAdminMonitoring() {
            let users = [];
            try {
                const { data } = await supabaseClient.from('pegawai').select('*');
                if (data) users = data;
            } catch (err) {}
            if (users.length === 0) {
                users = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            }

            let certs = [];
            try {
                const { data } = await supabaseClient.from('sertifikat').select('*');
                if (data) certs = data;
            } catch (err) {}
            if (certs.length === 0) {
                certs = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            }

            const tbody = document.getElementById('admin-participants-tbody');
            if (!users || users.length === 0) {
                tbody.innerHTML = '<tr><td colspan="8" class="text-center py-6 text-slate-400">Belum ada peserta terdaftar.</td></tr>';
                return;
            }

            tbody.innerHTML = users.map((u, idx) => {
                const userCerts = certs.filter(c => c.nip === u.nip);
                let totalPoin = userCerts.reduce((acc, c) => {
                    if (c.status === 'Disetujui') {
                        let p = c.tingkat === 'Internasional' ? 100 : c.tingkat === 'Nasional' ? 75 : c.tingkat === 'Regional' ? 50 : 25;
                        return acc + p;
                    }
                    return acc;
                }, 0);

                let statusBadge = userCerts.length > 0 ? '<span class="px-2 py-1 bg-emerald-100 text-emerald-800 rounded font-bold">Mengirim</span>' : '<span class="px-2 py-1 bg-amber-100 text-amber-800 rounded font-bold">Belum</span>';

                return `
                    <tr class="hover:bg-white/50 transition-all">
                        <td class="py-3 px-4 font-bold">${idx + 1}</td>
                        <td class="py-3 px-4 font-bold text-slate-900">${u.nama}<br><span class="text-[10px] text-slate-500 font-normal">NIP: ${u.nip}</span></td>
                        <td class="py-3 px-4">WA: ${u.whatsapp || '-'}<br><span class="text-[10px] text-slate-500">${u.email || '-'}</span></td>
                        <td class="py-3 px-4">${u.jabatan || '-'}<br><span class="text-[10px] text-slate-500">${u.unit_kerja || '-'}</span></td>
                        <td class="py-3 px-4 text-center font-bold text-uin-primary">${userCerts.length}</td>
                        <td class="py-3 px-4 text-center font-extrabold text-amber-700">${totalPoin} Poin</td>
                        <td class="py-3 px-4 text-center">${statusBadge}</td>
                        <td class="py-3 px-4 text-center space-x-1">
                            <button onclick='openParticipantDetail(${JSON.stringify(u)})' class="px-3 py-1.5 bg-emerald-100 text-uin-primary hover:bg-emerald-200 rounded-lg font-bold">Detail Drive</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        async function openParticipantDetail(user) {
            selectedParticipantForDetail = user;
            document.getElementById('modal-part-name').innerText = user.nama;
            document.getElementById('modal-part-nip').innerText = user.nip;
            document.getElementById('modal-part-wa').innerText = user.whatsapp || '-';
            document.getElementById('modal-part-unit').innerText = user.unit_kerja || '-';

            let certs = [];
            try {
                const { data } = await supabaseClient.from('sertifikat').select('*').eq('nip', user.nip);
                if (data) certs = data;
            } catch (err) {}
            if (certs.length === 0) {
                const localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
                certs = localCerts.filter(c => c.nip === user.nip);
            }

            const container = document.getElementById('modal-part-certificates-list');

            if (!certs || certs.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-400 py-4 text-center">Peserta belum mengunggah sertifikat.</p>';
            } else {
                container.innerHTML = certs.map(c => `
                    <div class="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                        <div>
                            <p class="font-bold text-slate-900">${c.judul}</p>
                            <p class="text-[10px] text-slate-500">${c.kategori} • ${c.tingkat} • ${c.tahun} | Status: <strong class="${c.status === 'Disetujui' ? 'text-emerald-700' : c.status === 'Ditolak' ? 'text-red-600' : 'text-amber-600'}">${c.status || 'Pending'}</strong></p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <a href="${c.file_url}" target="_blank" class="px-2.5 py-1.5 bg-emerald-100 text-uin-primary font-bold rounded-lg"><i class="fa-solid fa-eye"></i></a>
                            <button onclick="updateCertStatus('${c.id}', 'Disetujui')" class="px-2.5 py-1.5 bg-emerald-600 text-white font-bold rounded-lg">Setujui</button>
                            <button onclick="updateCertStatus('${c.id}', 'Ditolak')" class="px-2.5 py-1.5 bg-amber-500 text-white font-bold rounded-lg">Tolak</button>
                            <button onclick="deleteCertAdmin('${c.id}')" class="px-2.5 py-1.5 bg-red-600 text-white font-bold rounded-lg"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                `).join('');
            }

            document.getElementById('modal-participant-detail').classList.remove('hidden');
        }

        function closeParticipantDetailModal() { document.getElementById('modal-participant-detail').classList.add('hidden'); }

        async function updateCertStatus(id, status) {
            try {
                await supabaseClient.from('sertifikat').update({ status }).eq('id', id);
            } catch (err) {}

            let localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            localCerts = localCerts.map(c => c.id === id ? {...c, status} : c);
            localStorage.setItem('uin_local_certs', JSON.stringify(localCerts));

            alert(`Status sertifikat diubah menjadi ${status}`);
            openParticipantDetail(selectedParticipantForDetail);
            loadAdminMonitoring();
            loadAdminReports();
        }

        async function deleteCertAdmin(id) {
            if (!confirm('Hapus sertifikat ini secara permanen?')) return;
            try {
                await supabaseClient.from('sertifikat').delete().eq('id', id);
            } catch (err) {}

            let localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            localCerts = localCerts.filter(c => c.id !== id);
            localStorage.setItem('uin_local_certs', JSON.stringify(localCerts));

            openParticipantDetail(selectedParticipantForDetail);
            loadAdminMonitoring();
            loadAdminReports();
        }

        function sendRevisionNotification() {
            const msg = document.getElementById('admin-revision-msg').value.trim();
            if (!msg) {
                alert('Mohon tuliskan pesan kendala atau instruksi revisi terlebih dahulu!');
                return;
            }
            const waNumber = selectedParticipantForDetail.whatsapp.replace(/[^0-9]/g, '');
            const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo ${selectedParticipantForDetail.nama}, terkait pengumpulan berkas sertifikat Anda di Sistem UIN Ar-Raniry: ${msg}`)}`;
            window.open(url, '_blank');
        }

        // Master DB Pegawai
        async function loadAdminMasterDB() {
            let users = [];
            try {
                const { data } = await supabaseClient.from('pegawai').select('*');
                if (data) users = data;
            } catch (err) {}
            if (users.length === 0) {
                users = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            }

            const tbody = document.getElementById('admin-master-tbody');
            if (!users || users.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" class="text-center py-6 text-slate-400">Tidak ada pegawai.</td></tr>';
                return;
            }
            tbody.innerHTML = users.map(u => `
                <tr class="hover:bg-white/50">
                    <td class="py-3 px-4 font-bold">${u.nip}</td>
                    <td class="py-3 px-4 font-bold text-slate-900">${u.nama}</td>
                    <td class="py-3 px-4">${u.jabatan || '-'}</td>
                    <td class="py-3 px-4">${u.unit_kerja || '-'}</td>
                    <td class="py-3 px-4">WA: ${u.whatsapp || '-'}<br>${u.email || '-'}</td>
                    <td class="py-3 px-4 text-center space-x-1">
                        <button onclick='openEditEmployeeModal(${JSON.stringify(u)})' class="px-2.5 py-1.5 bg-blue-100 text-blue-700 rounded font-bold"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deleteEmployee('${u.nip}')" class="px-2.5 py-1.5 bg-red-100 text-red-700 rounded font-bold"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `).join('');
        }

        function openAddEmployeeModal() {
            document.getElementById('employee-modal-title').innerText = 'Tambah Pegawai Baru';
            document.getElementById('emp-edit-id').value = '';
            document.getElementById('emp-nip').value = '';
            document.getElementById('emp-nip').disabled = false;
            document.getElementById('emp-nama').value = '';
            document.getElementById('emp-wa').value = '';
            document.getElementById('emp-email').value = '';
            document.getElementById('emp-jabatan').value = '';
            document.getElementById('emp-unit').value = '';
            document.getElementById('emp-password').value = '';
            document.getElementById('modal-employee').classList.remove('hidden');
        }

        function openEditEmployeeModal(u) {
            document.getElementById('employee-modal-title').innerText = 'Edit Data Pegawai';
            document.getElementById('emp-edit-id').value = u.nip;
            document.getElementById('emp-nip').value = u.nip;
            document.getElementById('emp-nip').disabled = true;
            document.getElementById('emp-nama').value = u.nama;
            document.getElementById('emp-wa').value = u.whatsapp || '';
            document.getElementById('emp-email').value = u.email || '';
            document.getElementById('emp-jabatan').value = u.jabatan || '';
            document.getElementById('emp-unit').value = u.unit_kerja || '';
            document.getElementById('emp-password').value = '';
            document.getElementById('modal-employee').classList.remove('hidden');
        }

        function closeEmployeeModal() { document.getElementById('modal-employee').classList.add('hidden'); }

        async function handleEmployeeSubmit(e) {
            e.preventDefault();
            const nip = document.getElementById('emp-nip').value.trim();
            const payload = {
                nama: document.getElementById('emp-nama').value.trim(),
                whatsapp: document.getElementById('emp-wa').value.trim(),
                email: document.getElementById('emp-email').value.trim(),
                jabatan: document.getElementById('emp-jabatan').value.trim(),
                unit_kerja: document.getElementById('emp-unit').value.trim()
            };
            const pass = document.getElementById('emp-password').value.trim();
            if (pass) payload.password = pass;

            const isEdit = document.getElementById('emp-edit-id').value !== '';
            
            // Update local storage
            let localUsers = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            if (isEdit) {
                localUsers = localUsers.map(u => u.nip === nip ? {...u, ...payload} : u);
                try {
                    await supabaseClient.from('pegawai').update(payload).eq('nip', nip);
                } catch (err) {}
            } else {
                payload.nip = nip;
                payload.password = pass || '123456';
                localUsers.push(payload);
                try {
                    await supabaseClient.from('pegawai').insert([payload]);
                } catch (err) {}
            }
            localStorage.setItem('uin_local_pegawai', JSON.stringify(localUsers));

            closeEmployeeModal();
            loadAdminMasterDB();
            loadAdminMonitoring();
            alert('Data pegawai berhasil disimpan!');
        }

        async function deleteEmployee(nip) {
            if (!confirm(`Hapus pegawai dengan NIP ${nip} beserta seluruh sertifikatnya?`)) return;
            try {
                await supabaseClient.from('sertifikat').delete().eq('nip', nip);
                await supabaseClient.from('pegawai').delete().eq('nip', nip);
            } catch (err) {}

            let localUsers = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            localUsers = localUsers.filter(u => u.nip !== nip);
            localStorage.setItem('uin_local_pegawai', JSON.stringify(localUsers));

            let localCerts = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            localCerts = localCerts.filter(c => c.nip !== nip);
            localStorage.setItem('uin_local_certs', JSON.stringify(localCerts));
            
            try {
                fetch(GAS_WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'delete_pegawai', nip: nip })
                });
            } catch (e) {}

            loadAdminMasterDB();
            loadAdminMonitoring();
            alert('Pegawai berhasil dihapus.');
        }

        // Schedule Settings
        function saveSystemSchedule() {
            const status = document.getElementById('setting-status-sistem').value;
            const deadline = document.getElementById('setting-deadline').value;
            localStorage.setItem('uin_system_schedule', JSON.stringify({ status, deadline }));
            alert('Pengaturan jadwal berhasil disimpan!');
        }

        // Reports & Archive
        async function loadAdminReports() {
            let certs = [];
            try {
                const { data } = await supabaseClient.from('sertifikat').select('*');
                if (data) certs = data;
            } catch (err) {}
            if (certs.length === 0) {
                certs = JSON.parse(localStorage.getItem('uin_local_certs') || '[]');
            }

            let users = [];
            try {
                const { data } = await supabaseClient.from('pegawai').select('*');
                if (data) users = data;
            } catch (err) {}
            if (users.length === 0) {
                users = JSON.parse(localStorage.getItem('uin_local_pegawai') || '[]');
            }

            const tbody = document.getElementById('admin-reports-tbody');
            const filterMonth = document.getElementById('report-filter-month')?.value || 'all';

            if (!certs || certs.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" class="text-center py-6 text-slate-400">Belum ada data sertifikat.</td></tr>';
                return;
            }

            let filtered = certs;
            if (filterMonth !== 'all') {
                filtered = certs.filter(c => c.created_at && c.created_at.startsWith(filterMonth));
            }

            tbody.innerHTML = filtered.map((c, idx) => {
                const u = users.find(x => x.nip === c.nip);
                const p = c.tingkat === 'Internasional' ? 100 : c.tingkat === 'Nasional' ? 75 : c.tingkat === 'Regional' ? 50 : 25;
                return `
                    <tr class="hover:bg-white/50">
                        <td class="py-3 px-4 font-bold">${idx + 1}</td>
                        <td class="py-3 px-4 font-bold text-slate-900">${u ? u.nama : '-'} <br><span class="text-[10px] text-slate-500 font-normal">NIP: ${c.nip}</span></td>
                        <td class="py-3 px-4">${u ? u.unit_kerja : '-'}</td>
                        <td class="py-3 px-4 font-medium">${c.judul}</td>
                        <td class="py-3 px-4">${c.kategori} <br><span class="text-[10px] text-slate-500">${c.tingkat} (${c.tahun})</span></td>
                        <td class="py-3 px-4 text-center font-bold text-amber-700">${p} Poin</td>
                        <td class="py-3 px-4 text-center font-bold ${c.status === 'Disetujui' ? 'text-emerald-700' : 'text-amber-600'}">${c.status || 'Pending'}</td>
                    </tr>
                `;
            }).join('');
        }

        // Announcements Management (CRUD + Publish/Unpublish)
        async function loadAdminAnnouncements() {
            let anns = [];
            try {
                const { data } = await supabaseClient.from('announcements').select('*').order('created_at', { ascending: false });
                if (data) anns = data;
            } catch (err) {}
            if (anns.length === 0) {
                anns = JSON.parse(localStorage.getItem('uin_local_anns') || '[]');
            }

            const container = document.getElementById('admin-announcements-container');
            if (!anns || anns.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-500 italic text-center py-6">Belum ada pengumuman.</p>';
                return;
            }
            container.innerHTML = anns.map(item => `
                <div class="p-4 bg-white/70 border border-slate-200 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div class="flex items-center space-x-2 mb-1">
                            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold ${item.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}">${item.status.toUpperCase()}</span>
                            <span class="text-xs text-slate-400">${new Date(item.created_at || Date.now()).toLocaleDateString('id-ID')}</span>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">${item.title}</h4>
                        <p class="text-xs text-slate-600 line-clamp-2 mt-1">${item.content}</p>
                    </div>
                    <div class="flex items-center space-x-2 whitespace-nowrap">
                        <button onclick="togglePublishAnnouncement('${item.id}', '${item.status}')" class="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-xl font-bold text-xs">${item.status === 'published' ? 'Unpublish' : 'Publish'}</button>
                        <button onclick='openEditAnnouncementModal(${JSON.stringify(item)})' class="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-xl font-bold text-xs"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deleteAnnouncement('${item.id}')" class="px-3 py-1.5 bg-red-100 text-red-700 rounded-xl font-bold text-xs"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function openAnnouncementModal() {
            document.getElementById('announcement-modal-title').innerText = 'Buat Pengumuman Baru';
            document.getElementById('announcement-id').value = '';
            document.getElementById('announcement-title').value = '';
            document.getElementById('announcement-content').value = '';
            document.getElementById('announcement-status').value = 'published';
            document.getElementById('modal-announcement').classList.remove('hidden');
        }

        function openEditAnnouncementModal(item) {
            document.getElementById('announcement-modal-title').innerText = 'Edit Pengumuman';
            document.getElementById('announcement-id').value = item.id;
            document.getElementById('announcement-title').value = item.title;
            document.getElementById('announcement-content').value = item.content;
            document.getElementById('announcement-status').value = item.status;
            document.getElementById('modal-announcement').classList.remove('hidden');
        }

        function closeAnnouncementModal() { document.getElementById('modal-announcement').classList.add('hidden'); }

        async function handleAnnouncementSubmit(e) {
            e.preventDefault();
            const id = document.getElementById('announcement-id').value || 'ann_' + Date.now();
            const payload = {
                id: id,
                title: document.getElementById('announcement-title').value.trim(),
                content: document.getElementById('announcement-content').value.trim(),
                status: document.getElementById('announcement-status').value,
                created_at: new Date().toISOString()
            };

            let anns = JSON.parse(localStorage.getItem('uin_local_anns') || '[]');
            const exists = anns.some(a => a.id === id);
            if (exists) {
                anns = anns.map(a => a.id === id ? payload : a);
                try {
                    await supabaseClient.from('announcements').update(payload).eq('id', id);
                } catch (err) {}
            } else {
                anns.push(payload);
                try {
                    await supabaseClient.from('announcements').insert([payload]);
                } catch (err) {}
            }
            localStorage.setItem('uin_local_anns', JSON.stringify(anns));

            closeAnnouncementModal();
            loadAdminAnnouncements();
            loadPublicAnnouncements();
            alert('Pengumuman berhasil disimpan!');
        }

        async function togglePublishAnnouncement(id, currentStatus) {
            const nextStatus = currentStatus === 'published' ? 'draft' : 'published';
            let anns = JSON.parse(localStorage.getItem('uin_local_anns') || '[]');
            anns = anns.map(a => a.id === id ? {...a, status: nextStatus} : a);
            localStorage.setItem('uin_local_anns', JSON.stringify(anns));

            try {
                await supabaseClient.from('announcements').update({ status: nextStatus }).eq('id', id);
            } catch (err) {}

            loadAdminAnnouncements();
            loadPublicAnnouncements();
        }

        async function deleteAnnouncement(id) {
            if (!confirm('Hapus pengumuman ini?')) return;
            let anns = JSON.parse(localStorage.getItem('uin_local_anns') || '[]');
            anns = anns.filter(a => a.id !== id);
            localStorage.setItem('uin_local_anns', JSON.stringify(anns));

            try {
                await supabaseClient.from('announcements').delete().eq('id', id);
            } catch (err) {}

            loadAdminAnnouncements();
            loadPublicAnnouncements();
        }

        function filterAdminParticipants() {
            // Filter hook
        }
    </script>
</body>
</html>
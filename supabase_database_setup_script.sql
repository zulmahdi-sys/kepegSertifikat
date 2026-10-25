-- ==============================================================================
-- SUPABASE DATABASE SETUP & RLS POLICIES SCRIPT
-- Project: UIN Ar-Raniry Banda Aceh - Sistem Pengumpulan Sertifikat
-- ==============================================================================

-- 1. Buat tabel pegawai jika belum ada
CREATE TABLE IF NOT EXISTS public.pegawai (
    nip TEXT PRIMARY KEY,
    nama TEXT NOT NULL,
    whatsapp TEXT,
    email TEXT,
    password TEXT NOT NULL,
    jabatan TEXT,
    unit_kerja TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Buat tabel sertifikat jika belum ada
CREATE TABLE IF NOT EXISTS public.sertifikat (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    nip TEXT NOT NULL,
    kategori TEXT,
    judul TEXT NOT NULL,
    tingkat TEXT,
    tahun TEXT,
    file_url TEXT,
    status TEXT DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Buat tabel announcements jika belum ada
CREATE TABLE IF NOT EXISTS public.announcements (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    status TEXT DEFAULT 'published',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Aktifkan Row Level Security (RLS)
ALTER TABLE public.pegawai ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sertifikat ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- 5. Hapus policy lama jika ada untuk mencegah duplikasi error
DROP POLICY IF EXISTS "Izinkan publik akses pegawai" ON public.pegawai;
DROP POLICY IF EXISTS "Izinkan publik akses sertifikat" ON public.sertifikat;
DROP POLICY IF EXISTS "Izinkan publik akses announcements" ON public.announcements;

-- 6. Buat policy baru yang mengizinkan akses publik/anonim untuk operasi CRUD sistem
CREATE POLICY "Izinkan publik akses pegawai"
ON public.pegawai FOR ALL
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Izinkan publik akses sertifikat"
ON public.sertifikat FOR ALL
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Izinkan publik akses announcements"
ON public.announcements FOR ALL
TO public
USING (true)
WITH CHECK (true);
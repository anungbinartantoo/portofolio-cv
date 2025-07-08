module.exports = {
  systemPrompt: `
  Kamu adalah asisten personal untuk Anung Binartanto. Jawab dengan SINGKAT dan LANGSUNG dalam Bahasa Indonesia.

  === PROFIL ANUNG ===
  Nama: Anung Binartanto (21 tahun)
  Profesi: Fullstack Developer & UI/UX Designer
  Lokasi: Yogyakarta, Indonesia
  Kuliah: S1 Teknik Informatika - Universitas Amikom Yogyakarta (2023-sekarang)
  Status: Available untuk freelance projects

  === PENDIDIKAN ===
  🎓 Kuliah: Universitas Amikom Yogyakarta - Teknik Informatika (2023-sekarang)
  🎓 SMA: SMA Negeri 1 Gondang - MIPA (2020-2023)
  🎓 SMP: SMP Negeri 2 Sragen (2018-2020)

  === SKILLS UTAMA ===
  Frontend: Vue.js, JavaScript, Tailwind CSS, HTML5, CSS3
  Backend: Node.js, Express.js, Laravel, PHP
  Database: PostgreSQL, MySQL
  Tools: Git, Figma, Adobe XD

  === PROJECT UTAMA ===
  1. Website Barbershop - Vue.js + PostgreSQL (1.5 bulan)
  2. Aplikasi Manajemen Tugas - React + Firebase (3 minggu)
  3. Company Profile UMKM - Nuxt.js + Tailwind (2 minggu)
  4. Sistem Inventaris - Laravel + MySQL (1 bulan)

  === HARGA LAYANAN ===
  🌐 Frontend Development: Mulai Rp 2.000.000
  ⚙️ Backend Development: Mulai Rp 1.500.000
  🚀 Full-stack Web App: Mulai Rp 3.500.000
  🎨 UI/UX Design: Mulai Rp 1.000.000

  === KONTAK ===
  📱 WhatsApp: +62 813-9083-0955
  💻 GitHub: https://github.com/anungbinartantoo
  💼 LinkedIn: https://id.linkedin.com/in/anung-binartanto-983175292

  === ATURAN JAWABAN ===
  1. JAWAB SINGKAT - maksimal 2-3 kalimat
  2. LANGSUNG KE INTINYA - tidak berbelit-belit
  3. FOKUS pada pertanyaan yang ditanya
  4. GUNAKAN 1-2 EMOJI saja
  5. JANGAN promosi berlebihan tentang kontak
  6. HANYA sebutkan kontak jika DIMINTA

  === CONTOH JAWABAN YANG BENAR ===
  Q: "Skill apa yang dikuasai Anung?"
  A: "Anung mahir Vue.js, JavaScript, dan Tailwind CSS untuk frontend. Backend pakai Node.js dan Laravel 💻"

  Q: "Dimana Anung sekolah?"
  A: "Kuliah di Universitas Amikom Yogyakarta jurusan Teknik Informatika. Sebelumnya SMA di SMAN 1 Gondang 🎓"

  Q: "Berapa harga website?"
  A: "Frontend mulai 2jt, full-stack mulai 3.5jt 💰"

  Q: "Project apa saja yang pernah dibuat?"
  A: "Ada 4 project utama: website barbershop, app manajemen tugas, company profile, dan sistem inventaris 🚀"

  PENTING: 
  - Jangan selalu menyebutkan WhatsApp/kontak di setiap jawaban
  - Hanya mention kontak jika user tanya tentang kontak atau cara hubungi
  - Fokus jawab pertanyaan, bukan promosi
  `,

  // Settings untuk AI yang lebih optimal
  aiSettings: {
    model: "gemini-1.5-flash",
    temperature: 0.5, // Lebih konsisten
    maxTokens: 250,   // Lebih pendek
    topP: 0.8
  },

  // Response templates yang lebih lengkap
  responseTemplates: {
    greeting: "Halo! Saya asisten Anung. Ada yang bisa dibantu? 👋",
    
    skills: "Anung mahir Vue.js, JavaScript, dan Tailwind CSS untuk frontend. Backend pakai Node.js dan Laravel 💻",
    
    projects: "Ada 4 project utama: barbershop, manajemen tugas, company profile, dan inventaris 🚀",
    
    contact: "WhatsApp: +62 813-9083-0955, GitHub: anungbinartantoo 📱",
    
    pricing: "Frontend 2jt+, Backend 1.5jt+, Full-stack 3.5jt+, UI/UX 1jt+ 💰",
    
    availability: "Available untuk freelance dan remote work 🎯",
    
    experience: "Freelance 1.5+ tahun, bootcamp DICODING, workshop AI trainer 💼",
    
    education: "Kuliah di Amikom Yogyakarta - Teknik Informatika. SMA di SMAN 1 Gondang 🎓",
    
    error: "Maaf ada gangguan sistem 😊"
  },

  // Keywords yang sangat lengkap dan akurat
  keywords: {
    // SKILLS & TEKNOLOGI
    skills: [
      'skill', 'keahlian', 'kemampuan', 'bisa apa', 'expertise', 'teknologi', 'tech stack',
      'bahasa pemrograman', 'programming language', 'framework', 'library', 'tools',
      'vue', 'vue.js', 'vuejs', 'nuxt', 'nuxt.js', 'nuxtjs',
      'react', 'react.js', 'reactjs', 'javascript', 'js', 'typescript', 'ts',
      'html', 'html5', 'css', 'css3', 'tailwind', 'tailwindcss', 'bootstrap',
      'sass', 'scss', 'node', 'nodejs', 'node.js', 'express', 'expressjs', 'express.js',
      'laravel', 'php', 'mysql', 'postgresql', 'database', 'db', 'sql',
      'firebase', 'git', 'github', 'version control', 'figma', 'adobe xd', 'canva',
      'vite', 'webpack', 'api', 'rest api', 'frontend', 'backend', 'fullstack'
    ],

    // PROJECTS & PORTFOLIO
    projects: [
      'project', 'projek', 'portfolio', 'portofolio', 'karya', 'hasil kerja', 'aplikasi', 'app',
      'website', 'web', 'sistem', 'platform', 'development', 'pengembangan',
      'barbershop', 'barber', 'salon', 'cukur', 'booking', 'e-commerce', 'ecommerce',
      'manajemen tugas', 'task management', 'kanban', 'todo', 'productivity',
      'company profile', 'profil perusahaan', 'corporate', 'umkm', 'bisnis',
      'inventaris', 'inventory', 'stock', 'barang', 'gudang', 'management'
    ],

    // PENGALAMAN & KERJA
    experience: [
      'pengalaman', 'experience', 'kerja', 'pekerjaan', 'karir', 'career', 'profesional',
      'freelance', 'freelancer', 'remote', 'remote work', 'work from home',
      'bootcamp', 'training', 'kursus', 'course', 'workshop', 'seminar',
      'dicoding', 'coding bootcamp', 'web development', 'fullstack developer',
      'ui ux', 'ui/ux', 'designer', 'design', 'trainer', 'mengajar', 'teacher',
      'project manager', 'manager', 'tim', 'team', 'leadership', 'startup',
      'event organizer', 'event', 'acara', 'organizing', 'staff', 'hmif', 'amikom'
    ],

    // KONTAK & HUBUNGI
    contact: [
      'kontak', 'contact', 'hubungi', 'hubung', 'menghubungi', 'reach out',
      'whatsapp', 'wa', 'phone', 'telepon', 'telp', 'call', 'chat',
      'email', 'mail', 'e-mail', 'surat elektronik',
      'github', 'git', 'repository', 'repo', 'source code', 'kode',
      'linkedin', 'professional network', 'social media', 'medsos'
    ],

    // HARGA & BIAYA
    pricing: [
      'harga', 'price', 'pricing', 'biaya', 'cost', 'tarif', 'rate', 'fee',
      'berapa', 'how much', 'budget', 'anggaran', 'estimasi', 'estimate',
      'jasa', 'service', 'layanan', 'paket', 'package', 'deal'
    ],

    // KETERSEDIAAN & WAKTU
    availability: [
      'available', 'tersedia', 'ready', 'siap', 'bisa', 'can', 'able',
      'freelance', 'project', 'kerja', 'work', 'hire', 'recruit',
      'remote', 'remote work', 'online', 'distance', 'jarak jauh'
    ],

    // PENDIDIKAN & SEKOLAH
    education: [
      'pendidikan', 'education', 'sekolah', 'school', 'kuliah', 'college', 'university',
      'kampus', 'campus', 'study', 'belajar', 'akademik', 'academic',
      'dimana sekolah', 'sekolah dimana', 'where study', 'where school',
      'amikom', 'amikom yogyakarta', 'yogyakarta', 'jogja',
      'teknik informatika', 'informatika', 'computer science', 'it',
      'sma', 'sma negeri', 'high school', 'gondang',
      'smp', 'smp negeri', 'junior high', 'sragen'
    ],

    // PERSONAL & BIODATA
    personal: [
      'umur', 'usia', 'age', 'tahun', 'years old', 'berapa umur',
      'nama', 'name', 'siapa', 'who', 'identity', 'identitas',
      'asal', 'dari mana', 'where from', 'origin', 'hometown',
      'yogyakarta', 'yogya', 'jogja', 'indonesia',
      'hobi', 'hobby', 'minat', 'interest', 'suka', 'like'
    ]
  }
};
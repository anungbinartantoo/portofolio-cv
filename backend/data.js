// backend/data.js
module.exports = {
  educationHistory: [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Gondang', major: 'MIPA' },
    { id: 3, period: '2018 - 2020', institution: 'SMP Negeri 2 Sragen', major: '' }
  ],
  skills: [
  { name: 'Vue.js', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Node.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
  ],
  projects: [
     {
    title: 'Website Barbershop (Dummy)',
    image: 'https://elements-resized.envatousercontent.com/elements-cover-images/58728ff1-d89d-4fbf-bbae-0b1d9232ff75?w=2038&cf_fit=scale-down&q=85&format=auto&s=abd056af9d27d59da0995cf402d16c93d390593099b5345909fd1b85be058cc2',
    description: 'Platform e-commerce dengan fitur keranjang belanja dan booking online.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas (Dummy)',
    image: 'https://bordio.com/wp-content/uploads/2025/01/kanban-board.png',
    description: 'Aplikasi untuk melacak progres tugas harian dengan tampilan Kanban.',
    tech: ['React', 'Firebase'],
    link: '#'
  },
  {
    title: 'Company Profile UMKM (Dummy)',
    image: 'https://storage.googleapis.com/fastwork-static/f286550d-f93a-4346-8bb5-d33fc534956f.jpg',
    description: 'Website company profile untuk UMKM dengan fitur galeri dan kontak.',
    tech: ['Nuxt.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Sistem Inventaris Barang (Dummy)',
    image: 'https://www.jmc.co.id/blog/wp-content/uploads/2024/02/Screenshot-2024-02-21-101615.png',
    description: 'Aplikasi inventaris barang berbasis web untuk manajemen stok dan laporan.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    link: '#'
  }
  ],
  experiences: [
    {
      title: 'Bootcamp Web Development at DICODING',
      period: 'Mar, 2020 – June, 2020 • 3 months',
      desc: 'Bootcamp at DICODING to learn Web Development',
    },
    {
      title: 'Web Development',
      period: 'Jun, 2023 – Now • 1 year 4 months',
      desc: 'Make a website for a small business '
    },
    {
      title: 'UI/UX Designer',
      period: 'Jan, 2023 – Now • 1 year 10 months',
      desc: 'Designing user interfaces for mobile apps'
    },
    {
      title: 'Saff event',
      period: 'Mei, 2025 – jun, 2025 • 2 months',
      desc: 'Organizing event in Yogyakarta'
    },
    {
      title: 'Workshop AI at HMIF Amikom Yogyakarta',
      period: 'Jun, 2025 – Jun, 2025 • 1 month',
      desc: 'Workshop AI for students at HMIF Amikom Yogyakarta'
    },
    {
      title: 'Project Manager',
      period: 'Dec, 2025 – Jan, 2025 • 2 months',
      desc: 'Managing a small team for a startup project idea'
    }
  ]
};
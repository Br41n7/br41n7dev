import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DineDash',
    description: 'A slick multi-vendor restaurant management with food ordering, customizable menus, and real-time status tracking. Styled with Bootstrap and powered by React and a high-efficiency Django backend.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django', 'Bootstrap 5', 'PostgreSQL', 'REST API'],
    link: 'https://github.com/Br41n7/koppa-restaurant'
  },
  {
    id: '2',
    title: 'Trendingevent',
    description: 'A massive online hub and discovery platform for current and upcoming events across Nigeria. Features high-performance analytical visualizations with D3.js, interactive maps, dynamic scheduling, and real-time live reporting.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Supabase', 'D3.js', 'Redis', 'Docker', 'Tailwind'],
    link: 'https://Trendingevent.com.ng'
  },
  {
    id: '3',
    title: 'Hemoflow',
    description: 'A specialized medical platform engineered for real-time blood inventory tracking, donor profiles, and rapid-response matching. Bridging life-saving resources directly to hospitals and clinical clinics.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django Rest Framework', 'PostgreSQL', 'Docker', 'Redux'],
    link: 'https://github.com/Br41n7/hemoflow'
  },
  {
    id: '4',
    title: 'Everafter',
    description: 'An elegant digital wedding invitation, planning registry, and real-time RSVP management portal. Features personalized interactive guestbooks, gift registries, and countdown trackers with beautiful animations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'],
    link: 'https://github.com/Br41n7/Everafter'
  },
  {
    id: '5',
    title: 'BizNaija',
    description: 'A next-generation digital business directory platform indexing verification details, categories, maps and contacts for companies operating inside Nigeria.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django', 'PostgreSQL', 'Tailwind', 'Docker'],
    link: 'https://github.com/Br41n7/biznaija'
  },
  {
    id: '6',
    title: 'Harmostruct',
    description: 'A modern structural engineering workflow and blueprint estimation hub enabling streamlined calculations, itemized cost estimations, and document managers for site development.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django RF', 'Tailwind CSS', 'PostgreSQL', 'Decimal.js'],
    link: 'https://github.com/Br41n7/Harmostruct'
  },
  {
    id: '7',
    title: 'Cooperative Ledger',
    description: 'A secure, multi-tier financial management ledger platform designed for cooperative societies. Facilitates high-volume savings tracking, loan disbursements, custom interest/dividend engines, and comprehensive financial audit logs.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Django', 'Bootstrap 5', 'PostgreSQL', 'ChartJS'],
    link: 'https://github.com/Br41n7/CooperativeSocietyManagementSystem'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Django / DRF', level: 96, category: 'Backend' },
  { name: 'ReactJS / Next.js', level: 95, category: 'Frontend' },
  { name: 'Python', level: 92, category: 'Backend' },
  { name: 'Supabase / PostgreSQL', level: 88, category: 'Backend' },
  { name: 'Bootstrap 5', level: 94, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Docker / Redis', level: 80, category: 'Tools' },
  { name: 'Git & GitHub', level: 95, category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Lead Full Stack Web Architect',
    company: 'Independent Engineering / Freelance Contracts',
    period: '2022 - Present',
    description: [
      'Architected and implemented production systems using the ReactJS and Django REST framework stack, with highlights like the Trendingevent analytics hub and DineDash ordering platforms.',
      'Designed and customized complex relational databases on PostgreSQL and Supabase, enabling zero-latency event updates and patient analytics.',
      'Deployed application infrastructure securely with Docker container setups and modular microservice components.'
    ]
  },
  {
    role: 'Software Developer Fellow',
    company: 'Tech4Dev',
    period: '2024',
    description: [
      'Underwent intensive specialized full-stack engineering curriculum centered around collaborative software pipelines, advanced design principles, and deployment standardizations.',
      'Engaged with fellow developers under agile workflows to optimize Django APIs and modernize core state management architectures using React context and Redux tools.',
      'Excelled across project evaluations to secure professional developer credentials.'
    ]
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Creative Logic Agency',
    period: '2020 - 2022',
    description: [
      'Contributed code to multiple enterprise portals using Django, Python, Bootstrap 5 and standard HTML5/CSS3 templates.',
      'Refined client websites to enhance loading performances, responsiveness, and clean SEO execution.',
      'Participated closely within dev groups to design customized SQLite systems and clean REST API routes.'
    ]
  }
];

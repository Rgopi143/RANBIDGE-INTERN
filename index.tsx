import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Filter,
  ChevronRight,
  TrendingUp,
  Award,
  MapPin,
  Mail,
  ShieldAlert,
  FileText,
  Home,
  User,
  Star,
  Zap,
  Briefcase,
  Plus,
  Minus,
  MessageSquare,
  X,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  GraduationCap,
  HandHeart,
  Target,
  Lightbulb,
  DollarSign,
  Heart,
  Gift,
  ChevronDown,
  BarChart3,
  Eye,
  EyeOff,
  Users
} from 'lucide-react';

// --- Types ---
interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  instructor: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  curriculum: string[];
}

type View = 'home' | 'privacy' | 'terms' | 'virtual-internship' | 'one-on-one-mentorship' | 'paid-internship' | 'unpaid-internship' | 'final-year-projects';

// --- Constants ---
const LOGO_URL = "https://ik.imagekit.io/lg14qfjkg/COMPANY%20STAMP.jpeg";
const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdrzYAVBF9rEFV7zcs_p0a_St8qGcnEsltEvdI-ZULHlO5Xbg/viewform?usp=header";
const FINAL_YEAR_PROJECTS_LINK = "https://forms.gle/DHavgijonoyLcLfG6";
const VIRTUAL_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSd1y7_LR5N5bBTdIq8C_icunlUbh0h0SQNj6ukiHXAOZSVKHA/viewform?usp=dialog";
const MENTORSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const PAID_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const UNPAID_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const WHATSAPP_CHAT_LINK = "https://wa.me/8247392437?text=Hello%20RANBIDGE%21%20%F0%9F%20I%20hope%20you're%20having%20a%20great%20day.%20I'm%20interested%20in%20your%20internship%20programs%20and%20would%20love%20to%20learn%20more%20about%20the%20opportunities%20available.%20Could%20you%20please%20share%20some%20details%3F%20Thank%20you!";
const LINKEDIN_LINK = "https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376/";
const INSTAGRAM_LINK = "https://www.instagram.com/ranbridgeserviceprivatelimited?igsh=MTYxOWU4NHJ0YzcwaA%3D%3D";
const YOUTUBE_LINK = "https://www.youtube.com/@ranbridgeserviceprivatelimited";
const FACEBOOK_LINK = "https://www.facebook.com/ranbridgeserviceprivatelimited";
const LOCATION_LINK = "https://www.google.com/maps/search/?api=1&query=Narasaraopet,+Andhra+Pradesh,+India";


// Header configuration
const HEADER_CONFIG = {
  transparentScrollThreshold: 50, // pixels scrolled before becoming transparent
  transparentBg: 'bg-white/80 backdrop-blur-md border-b border-slate-200/50',
  solidBg: 'bg-white/80 backdrop-blur-md border-b border-slate-200'
};

const COURSES: Course[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Develop responsive and interactive web applications for various platforms.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    curriculum: ['HTML & CSS Advanced', 'JS ES6+ Features', 'Frontend Optimization', 'State Management']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Build scalable server-side applications and APIs for businesses and startups.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Node.js and Express Essentials', 'Database Design (MongoDB & MySQL)', 'RESTful API Development', 'Auth & Authorization']
  },
  {
    id: 'web-dev',
    title: 'Web Development Intern',
    category: 'Engineering',
    duration: '12 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Work on real-world web development projects using modern technologies and frameworks.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    curriculum: ['HTML, CSS, and JS Fundamentals', 'Responsive Web Design', 'React.js for Beginners', 'Advanced MERN Stack']
  },
  {
    id: 'python-dev',
    title: 'Python Development Intern',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Learn Python programming from scratch, object-oriented concepts, web scraping, automation, and backend framework basics.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Python Fundamentals & OOP', 'Data Structures & Algorithms', 'Automation & Web Scraping', 'Flask/FastAPI REST APIs']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics (DA) Intern',
    category: 'Data Science',
    duration: '10 Weeks',
    instructor: 'Ranbidge Analytics',
    description: 'Analyze complex datasets, create interactive PowerBI & Tableau dashboards, and drive business decisions using SQL and Python.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    curriculum: ['SQL Data Extraction & Querying', 'Advanced Excel & Financial Analytics', 'Power BI & Tableau Dashboards', 'Python (Pandas, NumPy, Matplotlib)']
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development Intern',
    category: 'Engineering',
    duration: '16 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Gain comprehensive experience in both frontend and backend development workflows.',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Frontend with React.js', 'Backend with Node.js', 'Full Stack Project Dev', 'Deployment & Hosting']
  },
  {
    id: 'uiux',
    title: 'UI/UX Design Intern',
    category: 'Design',
    duration: '8 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Create user-friendly and visually appealing interfaces for modern applications.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    curriculum: ['UI Design Fundamentals', 'UX Research & Testing', 'Design Systems & Prototyping', 'Accessibility']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'Engineering',
    duration: '12 Weeks',
    instructor: 'Ranbidge Mobile',
    description: 'Build high-performance cross-platform mobile applications using React Native and Flutter.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    curriculum: ['React Native Fundamentals', 'Flutter & Dart Basics', 'Mobile UI/UX Principles', 'Firebase Integration']
  },
  {
    id: 'data-science',
    title: 'Data Science & ML Intern',
    category: 'Data Science',
    duration: '14 Weeks',
    instructor: 'Ranbidge Analytics',
    description: 'Master data analysis, visualization, and machine learning models using Python and R.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Python for Data Science', 'EDA & Data Visualization', 'Machine Learning Models', 'Deep Learning Basics']
  },
  {
    id: 'paper-writing',
    title: 'Academic Paper Writing Service',
    category: 'Business',
    duration: '8 Weeks',
    instructor: 'Ranbidge Writing',
    description: 'Master the art of academic and research paper writing, from structuring arguments to proper citation.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Research Methodology', 'Paper Structure & Formatting', 'Citation Styles (APA, MLA, Chicago)', 'Peer Review Process']
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack Intern',
    category: 'Engineering',
    duration: '14 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Comprehensive training in Python-based web development using Django and FastAPI.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Python Core & Advanced', 'Django Web Framework', 'FastAPI & RESTful APIs', 'PostgreSQL Databases']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Intern',
    category: 'Marketing',
    duration: '8 Weeks',
    instructor: 'Ranbidge Growth',
    description: 'Master SEO, social media marketing, and data-driven growth strategies for modern brands.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Search Engine Optimization', 'Social Media Strategy', 'Google Ads & Analytics', 'Email Marketing']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Intern',
    category: 'Cloud',
    duration: '12 Weeks',
    instructor: 'Ranbidge Cloud',
    description: 'Learn to deploy and manage scalable infrastructure using AWS, Docker, and CI/CD pipelines.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    curriculum: ['AWS Core Services', 'Docker & Containerization', 'CI/CD with GitHub Actions', 'Kubernetes Basics']
  },
  {
    id: 'ai-genai',
    title: 'AI & Generative AI Intern',
    category: 'AI',
    duration: '14 Weeks',
    instructor: 'Ranbidge Intelligence',
    description: 'Explore the world of Large Language Models, Prompt Engineering, and building AI-powered apps.',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Intro to LLMs & Transformers', 'Prompt Engineering Techniques', 'OpenAI & LangChain', 'Building AI Chatbots']
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking',
    category: 'Security',
    duration: '12 Weeks',
    instructor: 'Ranbidge CyberSec',
    description: 'Gain skills in network security, ethical hacking, vulnerability analysis, and securing modern web applications.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Network Protocols & Wireshark', 'Ethical Hacking & Pen Testing', 'Web App Vulnerabilities (OWASP Top 10)', 'Cryptography & Security Compliance']
  },
  {
    id: 'qa-testing',
    title: 'Quality Assurance & Testing',
    category: 'Testing',
    duration: '8 Weeks',
    instructor: 'Ranbidge QA',
    description: 'Ensure software reliability through manual testing and automated testing frameworks like Selenium.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Manual Testing Essentials', 'Automation with Selenium', 'API Testing (Postman)', 'Bug Tracking with JIRA']
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Intern',
    category: 'Engineering',
    duration: '16 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Build robust enterprise applications using Java, Spring Boot, and modern frontend frameworks.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Java SE/EE Fundamentals', 'Spring Boot Microservices', 'Hibernate & JPA', 'Angular Integration']
  },
  {
    id: 'embedded-iot',
    title: 'Embedded Systems & IoT',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Robotics',
    description: 'Design smart devices and systems using microcontrollers, sensors, and IoT protocols.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Microcontroller Basics (Arduino/ESP32)', 'C/C++ for Embedded Systems', 'Sensor Integration', 'IoT Protocols (MQTT/HTTP)']
  },
  {
    id: 'cad-design',
    title: 'CAD Design & Modeling',
    category: 'Mechanical',
    duration: '4 Weeks',
    instructor: 'Ranbidge Design Team',
    description: 'Learn professional CAD tools like AutoCAD, SolidWorks, and Fusion 360 for mechanical design and drafting.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    curriculum: ['AutoCAD 2D Drafting', 'SolidWorks 3D Modeling', 'Fusion 360 Fundamentals', 'Technical Drawings & Blueprints']
  }
];

interface VirtualProgram {
  id: string;
  title: string;
  category: 'Development' | 'Data & AI' | 'Design' | 'Security & Cloud';
  badge: string;
  badgeColor: string;
  level: string;
  duration: string;
  description: string;
  thumbnail: string;
  curriculum: string[];
}

const VIRTUAL_INTERNSHIP_PROGRAMS: VirtualProgram[] = [
  {
    id: 'web-dev-virtual',
    title: 'Web Development Virtual Internship',
    category: 'Development',
    badge: 'Popular Track',
    badgeColor: 'bg-blue-600',
    level: 'Beginner - Intermediate',
    duration: '12 Weeks',
    description: 'Master modern web development from HTML/CSS fundamentals to React.js and RESTful API integrations through real client-level project assignments.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'HTML5, CSS3, Flexbox, Grid & Tailwind CSS responsive styling',
      'JavaScript ES6+, DOM manipulation & Async/Await programming',
      'Frontend Development with React.js, Hooks & State Management',
      'REST API Integration, Postman testing & JSON data parsing',
      'Git/GitHub version control & Live project deployment on Vercel'
    ]
  },
  {
    id: 'python-dev-virtual',
    title: 'Python Development Virtual Internship',
    category: 'Development',
    badge: 'High Demand',
    badgeColor: 'bg-yellow-600',
    level: 'Beginner - Intermediate',
    duration: '10 Weeks',
    description: 'Gain comprehensive hands-on experience in Python programming, Object-Oriented Programming (OOP), web scraping, automation, and backend framework development.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Python Core Syntax, Data Structures, OOP & Functional Programming',
      'Automated Scripting, File I/O & Web Scraping (BeautifulSoup & Selenium)',
      'Backend Web Frameworks with Django & FastAPI',
      'Database integration with SQLite, PostgreSQL & ORMs',
      'Building REST APIs, Testing & Production Code Quality'
    ]
  },
  {
    id: 'da-virtual',
    title: 'Data Analytics (DA) Virtual Internship',
    category: 'Data & AI',
    badge: 'Top Career Track',
    badgeColor: 'bg-emerald-600',
    level: 'Beginner - Intermediate',
    duration: '10 Weeks',
    description: 'Transform raw data into strategic business insights using SQL queries, Advanced Excel, Power BI dashboards, Tableau, and Python data analytics libraries.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Data extraction, manipulation & complex querying using SQL',
      'Advanced Excel functions, Power Pivot, VLOOKUP & Data Models',
      'Interactive Dashboard creation in Power BI & Tableau',
      'Exploratory Data Analysis (EDA) with Python (Pandas & NumPy)',
      'Business Intelligence storytelling & KPI reporting for decision making'
    ]
  },
  {
    id: 'fullstack-virtual',
    title: 'Full Stack Development Virtual Internship',
    category: 'Development',
    badge: 'Most Comprehensive',
    badgeColor: 'bg-indigo-600',
    level: 'Advanced',
    duration: '16 Weeks',
    description: 'Complete end-to-end full stack software engineering covering React, Node.js, Express, MongoDB, PostgreSQL, and cloud application deployment.',
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Frontend Architecture with React.js, Next.js & TypeScript',
      'Backend API & Microservices engineering with Node.js & Express',
      'Database design, Indexing & Data Modeling (MongoDB & PostgreSQL)',
      'Authentication, Authorization (JWT, OAuth) & Security',
      'Docker containerization & CI/CD pipeline automation to Cloud'
    ]
  },
  {
    id: 'data-science-virtual',
    title: 'Data Science & ML Virtual Internship',
    category: 'Data & AI',
    badge: 'Trending',
    badgeColor: 'bg-purple-600',
    level: 'Intermediate - Advanced',
    duration: '14 Weeks',
    description: 'Build predictive machine learning models, perform advanced statistical modeling, and solve real data engineering problems using Python.',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Statistical Analysis, Probability & Exploratory Data Analysis (EDA)',
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Model Building with Scikit-Learn, SciPy & Matplotlib/Seaborn',
      'Introduction to Deep Learning & Neural Networks (TensorFlow/Keras)',
      'End-to-end Machine Learning pipeline deployment'
    ]
  },
  {
    id: 'ai-genai-virtual',
    title: 'AI & Generative AI Virtual Internship',
    category: 'Data & AI',
    badge: 'Future Tech',
    badgeColor: 'bg-pink-600',
    level: 'Advanced',
    duration: '14 Weeks',
    description: 'Explore state-of-the-art Artificial Intelligence, Large Language Models (LLMs), Prompt Engineering, LangChain, RAG architecture, and OpenAI integrations.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Prompt Engineering techniques & LLM foundational concepts',
      'Building AI-driven applications with OpenAI API & Hugging Face',
      'LangChain Framework & Vector Databases (ChromaDB/Pinecone)',
      'Retrieval-Augmented Generation (RAG) system engineering',
      'Deploying custom AI Chatbots & autonomous AI Agents'
    ]
  },
  {
    id: 'uiux-virtual',
    title: 'UI/UX Design Virtual Internship',
    category: 'Design',
    badge: 'Creative Track',
    badgeColor: 'bg-rose-600',
    level: 'Beginner',
    duration: '8 Weeks',
    description: 'Craft intuitive digital experiences. Master user research, wireframing, high-fidelity interactive prototyping, and design systems using Figma.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'User Research methods, Persona creation & Customer Journey Maps',
      'Wireframing, Information Architecture & UX Logic',
      'Advanced Figma Prototyping, Auto-Layout & Component Libraries',
      'Design Systems, Accessibility standards (WCAG) & Micro-interactions',
      'Usability Testing & Developer Handoff workflows'
    ]
  },
  {
    id: 'cyber-security-virtual',
    title: 'Cyber Security & Ethical Hacking Virtual Internship',
    category: 'Security & Cloud',
    badge: 'Critical Need',
    badgeColor: 'bg-red-600',
    level: 'Intermediate',
    duration: '12 Weeks',
    description: 'Learn to protect networks and applications against cyber threats. Conduct vulnerability assessments, penetration testing, and ethical hacking exercises.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Network Security fundamentals, TCP/IP & Wireshark Packet Analysis',
      'Ethical Hacking methodologies & Kali Linux penetration tools',
      'OWASP Top 10 web application vulnerabilities & exploitation prevention',
      'System Vulnerability Scanning, Reconnaissance & Remediation',
      'Cyber Security Incident Response & Defensive Hardening'
    ]
  },
  {
    id: 'cloud-devops-virtual',
    title: 'Cloud Computing & DevOps Virtual Internship',
    category: 'Security & Cloud',
    badge: 'High Impact',
    badgeColor: 'bg-sky-600',
    level: 'Intermediate',
    duration: '12 Weeks',
    description: 'Build automated, fault-tolerant infrastructure on AWS cloud using Docker containerization, Kubernetes cluster management, and CI/CD pipelines.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'AWS Infrastructure Services (EC2, S3, RDS, Lambda, VPC)',
      'Docker container creation, image optimization & microservices',
      'Automated CI/CD pipelines using GitHub Actions & Jenkins',
      'Kubernetes pod orchestration & cluster scaling',
      'Infrastructure as Code (Terraform) & Cloud Monitoring'
    ]
  },
  {
    id: 'mobile-app-virtual',
    title: 'Mobile App Development Virtual Internship',
    category: 'Development',
    badge: 'Cross Platform',
    badgeColor: 'bg-teal-600',
    level: 'Intermediate',
    duration: '12 Weeks',
    description: 'Develop feature-rich cross-platform mobile applications for iOS and Android using React Native and Flutter with real-time Firebase backends.',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'React Native & Flutter fundamentals & Mobile UX patterns',
      'State management (Redux / Provider) & Navigation routing',
      'Firebase Authentication, Realtime Database & Cloud Storage',
      'REST API integration & Offline data storage (AsyncStorage/Hive)',
      'App Store & Google Play Store publishing readiness'
    ]
  }
];

const CATEGORIES = ['All', 'Engineering', 'Design', 'Data Science', 'Security', 'Marketing', 'Cloud', 'AI', 'Testing', 'Business', 'Mechanical'];

const FAQS = [
  { q: "What are the eligibility criteria for the internship?", a: "We welcome students from CS, IT, and related engineering backgrounds. Basic knowledge of programming is a plus, but we provide foundational training for all tracks." },
  { q: "Is the internship remote or on-site?", a: "We offer both hybrid and remote options depending on the project requirements. You can discuss your preference during the interview phase." },
  { q: "Will I get a certificate upon completion?", a: "Yes, every successful intern receives a verified certificate from RANBIDGE Solutions Private Limited, along with a letter of recommendation for top performers." },
  { q: "Are these internships paid?", a: "Our internships are primarily focused on skill-building and industrial exposure. Select high-impact project roles may include stipends based on performance." }
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", role: "Software Engineer at TechCorp", text: "The MERN stack training at Ranbidge was life-changing. I went from knowing basic HTML to building full apps in 3 months.", avatar: "RS" },
  { name: "Ananya Iyer", role: "UI Designer at Creative Studio", text: "The UI/UX track is incredibly detailed. The mentors actually review your Figma files and give real-world feedback.", avatar: "AI" },
  { name: "Vikram Singh", role: "Backend Lead", text: "Scaling Node.js apps was something I only read about. At Ranbidge, I actually implemented it on live servers.", avatar: "VS" }
];

// --- Components ---

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; color: string }> = ({ href, children, color }) => (
  <a href={href} target="_blank" className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
    {children}
  </a>
);

const Navigation: React.FC<{
  view: View;
  setView: (view: View) => void;
  scrolled: boolean;
}> = ({ view, setView, scrolled }) => {
  const [isInternshipDropdownOpen, setIsInternshipDropdownOpen] = useState(false);

  // Close dropdown when clicking outside or moving away
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isInternshipDropdownOpen && event.target instanceof Element) {
        const dropdown = event.target.closest('.internship-dropdown');
        if (!dropdown) {
          setIsInternshipDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isInternshipDropdownOpen]);

  return (
  <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? HEADER_CONFIG.transparentBg : HEADER_CONFIG.solidBg}`}>
    <div className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <button onClick={() => setView('home')} className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-10 h-10 rounded-full border-2 border-indigo-100 shadow-sm" />
          <span className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
            RANBIDGE SOLUTIONS
          </span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => setView('home')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'home' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <Home size={16} /> Home
          </button>
          
          {/* Internship Dropdown */}
          <div className="relative internship-dropdown">
            <button 
              onClick={() => setIsInternshipDropdownOpen(!isInternshipDropdownOpen)}
              className={`text-sm font-bold flex items-center gap-2 transition-all ${['unpaid-internship', 'paid-internship', 'virtual-internship', 'one-on-one-mentorship', 'final-year-projects'].includes(view) ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              <Briefcase size={16} /> Internship
              <ChevronDown size={14} className={`transition-transform ${isInternshipDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isInternshipDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                <button 
                  onClick={() => { setView('unpaid-internship'); setIsInternshipDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-slate-50 transition-colors ${view === 'unpaid-internship' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                >
                  <Heart size={16} />
                  <div>
                    <div className="font-semibold">Unpaid Internship</div>
                    <div className="text-xs text-slate-500">Focus on skill building</div>
                  </div>
                </button>
                <button 
                  onClick={() => { setView('paid-internship'); setIsInternshipDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-slate-50 transition-colors ${view === 'paid-internship' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                >
                  <DollarSign size={16} />
                  <div>
                    <div className="font-semibold">Paid Internship</div>
                    <div className="text-xs text-slate-500">Earn while you learn</div>
                  </div>
                </button>
                <button 
                  onClick={() => { setView('virtual-internship'); setIsInternshipDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-slate-50 transition-colors ${view === 'virtual-internship' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                >
                  <Briefcase size={16} />
                  <div>
                    <div className="font-semibold">Virtual Internship</div>
                    <div className="text-xs text-slate-500">Remote work opportunities</div>
                  </div>
                </button>
                <button 
                  onClick={() => { setView('one-on-one-mentorship'); setIsInternshipDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-slate-50 transition-colors ${view === 'one-on-one-mentorship' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                >
                  <GraduationCap size={16} />
                  <div>
                    <div className="font-semibold">One-on-One Mentorship</div>
                    <div className="text-xs text-slate-500">Personalized guidance</div>
                  </div>
                </button>
                <button 
                  onClick={() => { setView('final-year-projects'); setIsInternshipDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 hover:bg-slate-50 transition-colors ${view === 'final-year-projects' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'}`}
                >
                  <Target size={16} />
                  <div>
                    <div className="font-semibold">Final Year Projects</div>
                    <div className="text-xs text-slate-500">Academic project development</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
        <a href={REGISTRATION_LINK} target="_blank" className="hidden sm:block px-5 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold hover:bg-indigo-700 transition-all shadow-md">
          Apply Now
        </a>
      </div>
    </div>
  </nav>
);
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  // Courses that should show "Coming Soon" instead of enroll button
  const comingSoonCourses = [
    'digital-marketing', 
    'cloud-devops',
    'ai-genai',
    'qa-testing',
    'product-mgmt',
    'blockchain-dev',
    'paper-writing'
  ];
  
  const isComingSoon = comingSoonCourses.includes(course.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 ease-out border border-slate-100 hover:border-indigo-300 shimmer-card transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="px-2.5 py-0.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold rounded-full shadow-md border border-white/20">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            course.level === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
            course.level === 'Intermediate' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
            'bg-purple-50 text-purple-700 border border-purple-200'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-slate-500 text-[11px] font-semibold">
            <Clock size={11} className="text-indigo-500" />
            {course.duration}
          </div>
        </div>
        <h3 className="text-base font-extrabold text-slate-900 mb-1 leading-snug group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-600 text-[11px] line-clamp-2 mb-3 leading-relaxed">
          {course.description}
        </p>
        
        <div className="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100/80">
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Curriculum Modules</p>
          <ul className="space-y-1">
            {course.curriculum.map((item, i) => (
              <li key={i} className="text-[10px] text-slate-600 font-medium flex items-center gap-1.5">
                <CheckCircle2 size={11} className="text-indigo-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-6 h-6 rounded-full border border-indigo-100" />
            <span className="text-[10px] font-bold text-slate-600">Ranbidge</span>
          </div>
          {isComingSoon && course.id === 'paper-writing' ? (
            <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-[11px] font-bold hover:bg-blue-600 transition-all shadow-xs">
              <a 
                href={WHATSAPP_CHAT_LINK}
                target="_blank"
                className="text-white flex items-center gap-1"
              >
                Contact Us
              </a>
            </span>
          ) : (
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-indigo-600 text-white rounded-xl text-[11px] font-black hover:bg-indigo-700 shadow-xs group-hover:shadow-indigo-500/20 active:scale-95 transition-all flex items-center gap-1"
            >
              Enroll Now <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [virtualCategory, setVirtualCategory] = useState('All');
  const [virtualSearch, setVirtualSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  // Initialize view from URL hash on component mount
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash && ['home', 'privacy', 'terms', 'virtual-internship', 'one-on-one-mentorship', 'paid-internship', 'unpaid-internship', 'final-year-projects'].includes(hash)) {
      setView(hash as View);
    }
  }, []);

  // Update URL hash when view changes
  useEffect(() => {
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_CONFIG.transparentScrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesCategory;
  });

  const filteredVirtualPrograms = VIRTUAL_INTERNSHIP_PROGRAMS.filter(prog => {
    const matchesCat = virtualCategory === 'All' || prog.category === virtualCategory;
    const matchesSearch = prog.title.toLowerCase().includes(virtualSearch.toLowerCase()) || 
                          prog.description.toLowerCase().includes(virtualSearch.toLowerCase()) ||
                          prog.curriculum.some(c => c.toLowerCase().includes(virtualSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background Animation Simulation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation view={view} setView={setView} scrolled={scrolled} />

      <>
          {view === 'home' && (
            <>
              {/* Hero Section */}
              <header className="bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border-b border-slate-100 relative pt-20 pb-24 overflow-hidden">
                {/* Floating Levitating Badges */}
                <div className="hidden lg:block absolute top-16 left-12 animate-float-slow z-20">
                  <div className="glass-card px-4 py-2.5 rounded-2xl shadow-xl border border-indigo-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      ⚡
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">Web & Python Dev</p>
                      <p className="text-[10px] text-indigo-600 font-bold">100% Remote Internship</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute top-20 right-12 animate-float-reverse z-20">
                  <div className="glass-card px-4 py-2.5 rounded-2xl shadow-xl border border-violet-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      📊
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">Data Analytics (DA)</p>
                      <p className="text-[10px] text-violet-600 font-bold">Power BI & SQL Masterclass</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute bottom-12 right-24 animate-pulse-glow z-20">
                  <div className="glass-card px-4 py-2 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                      🤖
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">AI & GenAI</p>
                      <p className="text-[10px] text-pink-600 font-bold">LLM & Prompt Eng.</p>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-8 tracking-wide shadow-sm hover:scale-105 transition-transform">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <TrendingUp size={14} className="text-indigo-600" /> Live Admissions Open • 1,250+ Interns Enrolled
                  </div>

                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                    Empowering the Next <br />
                    <span className="animated-gradient-text">Tech Innovators & Leaders</span>
                  </h1>

                  <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                    Unlock your potential with hands-on industrial virtual internships at RANBIDGE Solutions. Real client projects, 1-on-1 expert mentorship, and industry-recognized certificates.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href={VIRTUAL_INTERNSHIP_LINK} 
                      target="_blank" 
                      className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                      <Briefcase size={20} /> Explore Virtual Internships
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('courses-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-md hover:shadow-xl border border-slate-200 hover:scale-105 active:scale-95"
                    >
                      Browse All Tracks
                    </button>
                  </div>
                </div>

                {/* Animated Ambient Background Spheres */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-violet-200/30 blur-[100px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
              </header>

              {/* Continuous Benefits Marquee Ticker */}
              <div className="bg-slate-900 text-white py-3.5 overflow-hidden shadow-inner border-y border-slate-800">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-bold tracking-wider uppercase">
                  <span>✨ Industry Recognized Verified Certificate</span>
                  <span className="text-indigo-400">•</span>
                  <span>🚀 1-on-1 Weekly Mentor Guidance</span>
                  <span className="text-indigo-400">•</span>
                  <span>💼 Real-World Live Industrial Projects</span>
                  <span className="text-indigo-400">•</span>
                  <span>📜 Letter of Recommendation for Top Performers</span>
                  <span className="text-indigo-400">•</span>
                  <span>🌐 100% Remote & Flexible Virtual Internships</span>
                  <span className="text-indigo-400">•</span>
                  <span>🎓 Final Year Project Development Support</span>
                  <span className="text-indigo-400">•</span>
                  <span>✨ Industry Recognized Verified Certificate</span>
                  <span className="text-indigo-400">•</span>
                  <span>🚀 1-on-1 Weekly Mentor Guidance</span>
                  <span className="text-indigo-400">•</span>
                  <span>💼 Real-World Live Industrial Projects</span>
                  <span className="text-indigo-400">•</span>
                  <span>📜 Letter of Recommendation for Top Performers</span>
                </div>
              </div>

          {/* Course Filter Bar */}
          <div className="bg-white border-b border-slate-100 py-4 sticky top-16 z-40">
            <div className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          selectedCategory === cat 
                            ? 'bg-indigo-600 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
                </div>
              </div>
            </div>
          </div>

          <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            {/* Catalog Grid */}
            <div id="courses-section" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Available <span className="text-indigo-600">Tracks</span>
                </h2>
                <div className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" /> Top Rated
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              
              {/* No Results State */}
              {filteredCourses.length === 0 && (
                <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                   <Search size={48} className="mx-auto text-slate-200 mb-6" />
                   <h3 className="text-2xl font-black text-slate-900 mb-2">No tracks found</h3>
                   <p className="text-slate-500">Try searching for something else or browse all categories.</p>
                </div>
              )}
            </div>
          </main>

          {/* FAQ Section */}
          <section className="py-24 bg-slate-50 relative border-t border-slate-100">
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
               <div className="space-y-4">
                 {FAQS.map((faq, idx) => (
                   <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
                     >
                       <span className="font-bold text-slate-800">{faq.q}</span>
                       {openFaq === idx ? <Minus size={18} className="text-indigo-600" /> : <Plus size={18} className="text-slate-400" />}
                     </button>
                     {openFaq === idx && (
                       <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                         {faq.a}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </section>
        </>
      )}

      {view === 'virtual-internship' && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
              <Briefcase size={14} /> Remote Work
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Internship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our cutting-edge virtual internship program and gain real-world experience from anywhere in the world. Work on live projects with expert mentors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={VIRTUAL_INTERNSHIP_LINK} target="_blank" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3">
                <Briefcase size={20} /> Apply for Virtual Internship
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-16">
            {[
              { icon: <Zap className="text-indigo-600" />, title: "Flexible Schedule", desc: "Work at your own pace with flexible hours." },
              { icon: <Users className="text-indigo-600" />, title: "Global Team", desc: "Collaborate with diverse team members." },
              { icon: <Award className="text-indigo-600" />, title: "Certified Program", desc: "Receive industry-recognized certificates." },
              { icon: <MessageSquare className="text-indigo-600" />, title: "Live Mentorship", desc: "Get real-time guidance from experts." },
              { icon: <Star className="text-indigo-600" />, title: "Portfolio Projects", desc: "Build impressive portfolio projects." },
              { icon: <TrendingUp className="text-indigo-600" />, title: "Career Growth", desc: "Access job opportunities & placement." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all">
                <div className="mb-3 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1.5">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Virtual Internship Courses Catalog */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-black mb-4 tracking-widest uppercase">
                <Sparkles size={14} /> Comprehensive Tracks
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Explore Virtual Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Tracks</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose from domain-focused virtual internships in Web Development, Python, Data Analytics (DA), AI, Cyber Security, UI/UX, and Cloud.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {['All', 'Development', 'Data & AI', 'Design', 'Security & Cloud'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setVirtualCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                      virtualCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search track (e.g., DA, Python, Web)..."
                  value={virtualSearch}
                  onChange={(e) => setVirtualSearch(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
                {virtualSearch && (
                  <button
                    onClick={() => setVirtualSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Virtual Internship Grid */}
            {filteredVirtualPrograms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6">
                {filteredVirtualPrograms.map((prog) => (
                  <div key={prog.id} className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                    <div className="relative h-44">
                      <img 
                        src={prog.thumbnail} 
                        alt={prog.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2.5 py-0.5 text-white text-[11px] font-bold rounded-full shadow-lg ${prog.badgeColor}`}>
                          {prog.badge}
                        </span>
                        <span className="px-2.5 py-0.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold rounded-full shadow-lg">
                          100% Virtual
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-extrabold rounded-full border border-indigo-100">
                          {prog.level}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                          <Clock size={12} className="text-indigo-500" />
                          {prog.duration}
                        </div>
                      </div>

                      <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">{prog.title}</h3>
                      <p className="text-slate-600 text-xs mb-4 leading-relaxed flex-grow line-clamp-2">
                        {prog.description}
                      </p>

                      <div className="mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Key Learnings & Hands-on Skills</h4>
                        <ul className="space-y-1">
                          {prog.curriculum.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-700">
                              <CheckCircle2 size={12} className="text-indigo-600 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a 
                        href={VIRTUAL_INTERNSHIP_LINK} 
                        target="_blank"
                        className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                      >
                        <Briefcase size={14} /> Enroll in {prog.title.replace(' Virtual Internship', '')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-100">
                <Search size={40} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-black text-slate-800 mb-2">No Virtual Internship Found</h3>
                <p className="text-slate-500 text-sm">Try tweaking your search query or select a different category filter.</p>
              </div>
            )}
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">What You'll Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Hands-on experience with real client projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Weekly 1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Professional development workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Networking opportunities with industry experts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Basic computer skills and internet access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Minimum 10-15 hours per week commitment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Good communication skills in English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Eagerness to learn and take initiative</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Start Your Virtual Internship?</h2>
            <p className="text-xl mb-8 text-indigo-100">Join hundreds of students who are already building their careers with us.</p>
            <a href={VIRTUAL_INTERNSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">
              Apply Now - Limited Spots Available
            </a>
          </div>

          <div className="mt-16 pt-8 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
            >
              <Home size={20} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'one-on-one-mentorship' && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black mb-4 tracking-widest uppercase">
              <GraduationCap size={13} /> Personal Guidance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              One-on-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Mentorship</span> Program
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Get personalized guidance from industry experts. Accelerate your learning with dedicated mentorship tailored to your career goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={MENTORSHIP_LINK} target="_blank" className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs sm:text-sm font-black hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2">
                <GraduationCap size={16} /> Apply for Mentorship
              </a>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-black hover:bg-slate-50 transition-all shadow-sm border border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {[
              { icon: <HandHeart className="text-indigo-600" />, title: "Personal Attention", desc: "1-on-1 guidance tailored to your goals." },
              { icon: <Target className="text-indigo-600" />, title: "Goal-Oriented", desc: "Set clear milestones & track progress." },
              { icon: <Lightbulb className="text-indigo-600" />, title: "Industry Insights", desc: "Learn real-world practices & insider knowledge." },
              { icon: <Zap className="text-indigo-600" />, title: "Fast-Track Growth", desc: "Accelerate skill development in intensive sessions." },
              { icon: <Users className="text-indigo-600" />, title: "Expert Network", desc: "Connect with tech leaders & mentors." },
              { icon: <Award className="text-indigo-600" />, title: "Certified Track", desc: "Receive certificates & LORs." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all">
                <div className="mb-3 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1.5">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Mentorship Programs */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Featured <span className="text-indigo-600">Mentorship</span> Tracks</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">Choose your area of focus and get expert guidance</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
              {/* Full Stack Development Mentorship */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Development" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-purple-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Comprehensive
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      16 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Full Stack Mentorship</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Master frontend & backend development with dedicated 1-on-1 expert guidance.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Skills</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> React.js, TypeScript, Node.js</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> PostgreSQL & AWS Deployment</li>
                    </ul>
                  </div>
                  <a 
                    href={MENTORSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-all text-center shadow-md"
                  >
                    Start Mentorship
                  </a>
                </div>
              </div>

              {/* Embedded Systems Mentorship */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                    alt="Embedded Systems" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-orange-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Hardware Focus
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      14 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Embedded Systems</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Dive into IoT & embedded systems. Work with microcontrollers and smart sensors.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Skills</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" /> Arduino, ESP32, STM32</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" /> C/C++, IoT MQTT & Sensors</li>
                    </ul>
                  </div>
                  <a 
                    href={MENTORSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition-all text-center shadow-md"
                  >
                    Start Mentorship
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white mb-10 border border-slate-800">
            <h2 className="text-2xl font-black mb-6 text-center">Mentorship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-black mb-3 text-indigo-400">What You'll Receive</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Weekly 1-on-1 video sessions with mentors</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Personalized learning roadmap</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Code reviews and project feedback</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Access to exclusive resources and materials</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-black mb-3 text-indigo-400">Requirements</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Clear learning goals and objectives</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Commitment to regular sessions (2-3 hours/week)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Basic knowledge in chosen field</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Enthusiasm to learn and implement feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl p-6 md:p-8 text-white mb-10 shadow-lg">
            <h2 className="text-2xl font-black mb-2">Ready to Transform Your Career?</h2>
            <p className="text-xs md:text-sm mb-5 text-indigo-100 max-w-xl mx-auto">Get personalized guidance from industry experts who care about your success.</p>
            <a href={MENTORSHIP_LINK} target="_blank" className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-xl text-xs sm:text-sm font-black hover:bg-indigo-50 transition-all shadow-md">
              Apply for Mentorship - Limited Spots
            </a>
          </div>

          <div className="mt-8 pt-4 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
            >
              <Home size={16} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'paid-internship' && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-black mb-4 tracking-widest uppercase">
              <DollarSign size={13} /> Earn While You Learn
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              Paid <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">Internship</span> Program
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Get paid while gaining valuable industry experience. Offers competitive stipends with real client project exposure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PAID_INTERNSHIP_LINK} target="_blank" className="px-6 py-3 bg-green-600 text-white rounded-xl text-xs sm:text-sm font-black hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
                <DollarSign size={16} /> Apply for Paid Internship
              </a>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-black hover:bg-slate-50 transition-all shadow-sm border border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {[
              { icon: <DollarSign className="text-green-600" />, title: "Monthly Stipend", desc: "Competitive stipends based on performance." },
              { icon: <Award className="text-green-600" />, title: "Performance Bonuses", desc: "Earn extra bonuses for milestone delivery." },
              { icon: <Briefcase className="text-green-600" />, title: "Real Projects", desc: "Work on live commercial client projects." },
              { icon: <Users className="text-green-600" />, title: "Team Collaboration", desc: "Collaborate with senior developers." },
              { icon: <TrendingUp className="text-green-600" />, title: "Career Growth", desc: "Fast-track to full-time engineering roles." },
              { icon: <Gift className="text-green-600" />, title: "Perks & Benefits", desc: "Flexible hours & skill certifications." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all">
                <div className="mb-3 w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1.5">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Paid Internship Roles */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Available <span className="text-green-600">Paid Roles</span></h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">Choose from our range of paid internship positions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
              {/* Full Stack Developer */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Developer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-green-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Highest Paid
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      16 Weeks
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full">Stipend: $800/mo</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Full Stack Developer</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Build end-to-end web applications with React, Node & Cloud APIs.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Tech</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> React.js, Node.js, MongoDB</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> RESTful APIs & Cloud (AWS)</li>
                    </ul>
                  </div>
                  <a 
                    href={PAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-green-600 text-white rounded-xl text-xs font-bold hover:bg-green-700 transition-all text-center shadow-md"
                  >
                    Apply for Role
                  </a>
                </div>
              </div>

              {/* Mobile App Developer */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
                    alt="Mobile Developer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      High Demand
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      12 Weeks
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full">Stipend: $600/mo</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Mobile App Developer</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Develop cross-platform iOS & Android mobile apps with React Native & Flutter.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Tech</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> React Native & Flutter</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" /> Firebase & App Store Deployment</li>
                    </ul>
                  </div>
                  <a 
                    href={PAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-green-600 text-white rounded-xl text-xs font-bold hover:bg-green-700 transition-all text-center shadow-md"
                  >
                    Apply for Role
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white mb-10 border border-slate-800">
            <h2 className="text-2xl font-black mb-6 text-center">Paid Internship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-black mb-3 text-green-400">Financial Benefits</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Competitive monthly stipends (up to $800/month)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Performance-based bonuses and rewards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Transportation and communication allowances</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Certification and training reimbursements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-black mb-3 text-green-400">Career Benefits</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Priority consideration for full-time positions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Professional portfolio with real client projects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Industry networking and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Performance reviews and career guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship Kit Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white mb-10 border border-slate-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-2 text-center">Internship Kit</h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 text-center">
                Everything you need to succeed in your internship journey
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-3">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <h3 className="text-base font-black text-white mb-2">Learning Resources</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Comprehensive course materials</li>
                    <li>• Video tutorials & guides</li>
                    <li>• Best practice documentation</li>
                    <li>• Code examples & templates</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mb-3">
                    <Users className="text-white" size={20} />
                  </div>
                  <h3 className="text-base font-black text-white mb-2">Mentorship Support</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• 1-on-1 expert guidance</li>
                    <li>• Weekly progress reviews</li>
                    <li>• Career coaching sessions</li>
                    <li>• Industry networking</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-3">
                    <Award className="text-white" size={20} />
                  </div>
                  <h3 className="text-base font-black text-white mb-2">Career Growth</h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Certificate of completion</li>
                    <li>• Verified recommendations</li>
                    <li>• Placement assistance</li>
                    <li>• LinkedIn optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white mb-10 shadow-lg">
            <h2 className="text-2xl font-black mb-2">Ready to Earn While You Learn?</h2>
            <p className="text-xs md:text-sm mb-5 text-green-100 max-w-xl mx-auto">Join our paid internship program and kickstart your career with financial support.</p>
            <a href={PAID_INTERNSHIP_LINK} target="_blank" className="inline-block px-6 py-3 bg-white text-green-700 rounded-xl text-xs sm:text-sm font-black hover:bg-green-50 transition-all shadow-md">
              Apply for Paid Internship - Limited Positions
            </a>
          </div>

          <div className="mt-8 pt-4 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
            >
              <Home size={16} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'unpaid-internship' && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-black mb-4 tracking-widest uppercase">
              <Heart size={13} /> Skill Building Focus
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              Unpaid <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">Internship</span> Program
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Focus purely on learning and skill development. Offers comprehensive training, mentorship, and portfolio-building opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={UNPAID_INTERNSHIP_LINK} target="_blank" className="px-6 py-3 bg-purple-600 text-white rounded-xl text-xs sm:text-sm font-black hover:bg-purple-700 transition-all shadow-md flex items-center gap-2">
                <Heart size={16} /> Apply for Unpaid Internship
              </a>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-black hover:bg-slate-50 transition-all shadow-sm border border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {[
              { icon: <GraduationCap className="text-purple-600" />, title: "Intensive Learning", desc: "Focus entirely on skill development." },
              { icon: <Target className="text-purple-600" />, title: "Flexible Schedule", desc: "Learn at your own pace with flexible timing." },
              { icon: <Lightbulb className="text-purple-600" />, title: "Creative Freedom", desc: "Experiment and innovate without pressure." },
              { icon: <Users className="text-purple-600" />, title: "Peer Learning", desc: "Collaborate in a supportive tech team." },
              { icon: <Award className="text-purple-600" />, title: "Certificates", desc: "Earn verified certificates & LORs." },
              { icon: <Zap className="text-purple-600" />, title: "Quick Start", desc: "Easy application & immediate onboarding." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all">
                <div className="mb-3 w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-1.5">{feature.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Learning Tracks */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Learning <span className="text-purple-600">Tracks</span></h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">Choose your learning path and build your foundation</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
              {/* Foundation Track */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Foundation Track" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-purple-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Beginner Friendly
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Beginner</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      8 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Foundation Track</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Learn core programming, HTML/CSS, JS fundamentals & Git from scratch.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Focus</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> HTML, CSS, JavaScript Basics</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> Logic Building & Git Control</li>
                    </ul>
                  </div>
                  <a 
                    href={UNPAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-all text-center shadow-md"
                  >
                    Start Track
                  </a>
                </div>
              </div>

              {/* Advanced Learning Track */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                    alt="Advanced Track" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Skill Enhancement
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      12 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">Advanced Track</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Deepen skills in full-stack frameworks, databases, and portfolio project building.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Key Focus</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" /> Full Stack Frameworks & DBs</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" /> Live Portfolio Projects & Teamwork</li>
                    </ul>
                  </div>
                  <a 
                    href={UNPAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-all text-center shadow-md"
                  >
                    Start Track
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white mb-10 border border-slate-800">
            <h2 className="text-2xl font-black mb-6 text-center">Unpaid Internship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-black mb-3 text-purple-400">Learning Benefits</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Comprehensive training from basics to advanced</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Personalized mentorship and guidance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Access to learning resources and materials</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 mt-0.5 shrink-0" size={16} />
                    <span>Work on portfolio-building projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-black mb-3 text-purple-400">Career Support</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Certificate of completion and recommendation letters</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Resume building and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Networking opportunities with professionals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Priority consideration for paid positions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* All Courses Section */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Available <span className="text-purple-600">Courses</span></h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">Explore all internship tracks and choose the learning path that fits your goals</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
              {COURSES.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all border border-slate-100 flex flex-col h-full shimmer-card transform hover:-translate-y-2">
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full">{course.level}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-black text-slate-900 mb-1.5">{course.title}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
                      <Clock size={12} />
                      {course.duration}
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">{course.description}</p>
                    <div className="mb-4">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Curriculum</h4>
                      <ul className="space-y-1">
                        {course.curriculum.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a 
                      href={REGISTRATION_LINK} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-auto block px-3 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-all text-center shadow-md"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl p-6 md:p-8 text-white mb-10 shadow-lg">
            <h2 className="text-2xl font-black mb-2">Ready to Build Your Skills?</h2>
            <p className="text-xs md:text-sm mb-5 text-purple-100 max-w-xl mx-auto">Join our unpaid internship program and focus entirely on your learning journey.</p>
            <a href={UNPAID_INTERNSHIP_LINK} target="_blank" className="inline-block px-6 py-3 bg-white text-purple-700 rounded-xl text-xs sm:text-sm font-black hover:bg-purple-50 transition-all shadow-md">
              Apply for Unpaid Internship - Open Enrollment
            </a>
          </div>

          <div className="mt-8 pt-4 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
            >
              <Home size={16} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'final-year-projects' && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-black mb-4 tracking-widest uppercase">
              <Target size={13} /> Academic Excellence
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
              Final Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">Projects</span>
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Complete your academic journey with industry-relevant projects that showcase your skills and launch your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={FINAL_YEAR_PROJECTS_LINK} target="_blank" className="px-6 py-3 bg-orange-600 text-white rounded-xl text-xs sm:text-sm font-black hover:bg-orange-700 transition-all shadow-md flex items-center gap-2">
                <Target size={16} /> Start Your Project
              </a>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs sm:text-sm font-black hover:bg-slate-50 transition-all shadow-sm border border-slate-200">
                View Projects
              </button>
              <button 
                onClick={() => setShowAddProjectModal(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-xl text-xs sm:text-sm font-black hover:bg-green-700 transition-all shadow-md flex items-center gap-2"
              >
                <Plus size={16} /> Add New Project
              </button>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Featured <span className="text-orange-600">Projects</span></h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">Choose from our range of comprehensive final year projects</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5">
              
              {/* E-Commerce Platform */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                    alt="E-Commerce Platform" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      Full Stack
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      12 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">E-Commerce Platform</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Build a complete online store with payments, React & Node.js backend.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Tech Stack</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" /> React, Node.js, Stripe API</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" /> MongoDB & JWT Auth</li>
                    </ul>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition-all text-center shadow-md"
                  >
                    Choose Project
                  </a>
                </div>
              </div>

              {/* AI Chatbot */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" 
                    alt="AI Chatbot" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-purple-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      AI / ML
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      14 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">AI Chatbot System</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Develop an intelligent conversational assistant with LLMs & Python.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Tech Stack</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> Python & OpenAI API</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" /> NLP, TensorFlow & React UI</li>
                    </ul>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition-all text-center shadow-md"
                  >
                    Choose Project
                  </a>
                </div>
              </div>

              {/* IoT Dashboard */}
              <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 shimmer-card transform hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbcc31c?auto=format&fit=crop&w=800&q=80" 
                    alt="IoT Dashboard" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-green-600 text-white text-[10px] font-extrabold rounded-full shadow-md">
                      IoT Smart
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock size={12} />
                      10 Weeks
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-1.5">IoT Smart Home</h3>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Build a real-time home automation dashboard with MQTT & Microcontrollers.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Tech Stack</h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> Raspberry Pi & Arduino</li>
                      <li className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> MQTT Protocol & React Dashboard</li>
                    </ul>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="w-full mt-auto block px-3 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition-all text-center shadow-md"
                  >
                    Choose Project
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project Benefits */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white mb-10 border border-slate-800">
            <h2 className="text-2xl font-black mb-6 text-center">Project Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-black mb-3 text-orange-400">Academic Excellence</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-orange-400 mt-0.5 shrink-0" size={16} />
                    <span>Industry-relevant project topics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-orange-400 mt-0.5 shrink-0" size={16} />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-orange-400 mt-0.5 shrink-0" size={16} />
                    <span>Expert guidance and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-orange-400 mt-0.5 shrink-0" size={16} />
                    <span>University compliance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-black mb-3 text-orange-400">Career Advancement</h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Portfolio-worthy projects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Industry networking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-blue-400 mt-0.5 shrink-0" size={16} />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl p-6 md:p-8 text-white mb-10 shadow-lg">
            <h2 className="text-2xl font-black mb-2">Ready to Excel in Your Final Year?</h2>
            <p className="text-xs md:text-sm mb-5 text-orange-100 max-w-xl mx-auto">Complete your academic journey with a project that stands out.</p>
            <a href={FINAL_YEAR_PROJECTS_LINK} target="_blank" className="inline-block px-6 py-3 bg-white text-orange-700 rounded-xl text-xs sm:text-sm font-black hover:bg-orange-50 transition-all shadow-md">
              Start Your Final Year Project - Limited Slots
            </a>
          </div>

          <div className="mt-8 pt-4 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
            >
              <Home size={16} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {(view === 'privacy' || view === 'terms') && (
        <main className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-6 md:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl font-black flex items-center gap-3">
                {view === 'privacy' ? <ShieldAlert size={28} /> : <FileText size={28} />}
                {view === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h1>
              <p className="mt-2 text-indigo-100 text-xs font-bold opacity-90">Effective Date: August 15, 2025</p>
            </div>
            
            <div className="p-6 md:p-8 text-slate-600 prose prose-indigo max-w-none text-xs md:text-sm">
              {view === 'privacy' ? (
                <>
                  <p className="text-sm font-medium">Your privacy is important to us. This Privacy Policy explains how <strong>RANBIDGE Solutions Private Limited</strong> collects, uses, and protects your information.</p>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">01.</span> Information We Collect</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Personal details such as name, email address, and contact information.</li>
                    <li>Information you provide through forms or course registrations.</li>
                    <li>Technical information like IP address, browser type, and device details.</li>
                  </ul>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">02.</span> How We Use Your Information</h2>
                  <p>We use your information to provide and improve our services, process registrations, and send relevant updates about your chosen internship track.</p>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">03.</span> Data Security</h2>
                  <p>We use industry-standard security measures to protect your data. However, no method of electronic storage is 100% secure.</p>
                  <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-black text-slate-900 text-xs mb-1">Have questions?</h3>
                    <p className="text-xs">Contact us at: <a href="mailto:ranbridgeserviceprivatelimited@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbridgeserviceprivatelimited@gmail.com</a></p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium">Welcome to RANBIDGE Solutions! These Terms of Service govern your use of our website and services.</p>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900">01. Acceptance of Terms</h2>
                  <p>By using our website, you agree to comply with and be bound by these terms. This agreement is legally binding.</p>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900">02. Use of Services</h2>
                  <p>You may use our services for lawful purposes only. Any unauthorized duplication of course material or curriculum is strictly prohibited.</p>
                  <h2 className="text-base font-black mt-6 mb-3 text-slate-900">03. Intellectual Property</h2>
                  <p>All content, trademarks, code snippets, and curriculum data are owned by RANBIDGE Solutions Private Limited.</p>
                  <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold">For official inquiries: <a href="mailto:ranbidgesolutionspvtltd@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbidgesolutionspvtltd@gmail.com</a></p>
                  </div>
                </>
              )}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-center">
                <button 
                  onClick={() => setView('home')} 
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
                >
                  <Home size={16} /> Return to Home
                </button>
              </div>

              {/* Add New Project Modal */}
              {showAddProjectModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="bg-gradient-to-r from-orange-600 to-amber-700 p-8 text-white rounded-t-[3rem]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black flex items-center gap-3">
                          <Plus size={24} /> Add New Project
                        </h2>
                        <button 
                          onClick={() => setShowAddProjectModal(false)}
                          className="text-white hover:text-orange-200 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <p className="text-orange-100 text-sm">Submit your final year project proposal for review</p>
                    </div>
                    
                    <form className="p-8 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Title</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="Enter your project title"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Project Description</label>
                        <textarea 
                          rows={4} 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                          placeholder="Describe your final year project in detail"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Technology Stack</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="e.g., React.js, Node.js, MongoDB"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Duration (Weeks)</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                          <option value="">Select duration</option>
                          <option value="8">8 Weeks</option>
                          <option value="10">10 Weeks</option>
                          <option value="12">12 Weeks</option>
                          <option value="14">14 Weeks</option>
                          <option value="16">16 Weeks</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty Level</label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                          <option value="">Select difficulty</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                      
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={() => setShowAddProjectModal(false)}
                          className="flex-1 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition-all"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit"
                          className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-all"
                        >
                          Submit Project
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80">
        <div className="w-full max-w-[95vw] 2xl:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3.5 mb-5">
                <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-14 h-14 object-contain rounded-full hover:scale-105 transition-transform shrink-0" />
                <span className="text-lg font-black tracking-tight text-slate-900">RANBIDGE SOLUTIONS</span>
              </div>
              <p className="leading-relaxed text-slate-600 font-medium text-sm max-w-sm mb-6">
                We're building the bridge between academic knowledge and industry excellence. Join the most intensive internship program in India.
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> Internships
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li><button onClick={() => setView('unpaid-internship')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Unpaid Internship</button></li>
                <li><button onClick={() => setView('paid-internship')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Paid Internship</button></li>
                <li><button onClick={() => setView('virtual-internship')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Virtual Internship</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span> Programs
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li><button onClick={() => setView('one-on-one-mentorship')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">1-on-1 Mentorship</button></li>
                <li><button onClick={() => setView('final-year-projects')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Final Year Projects</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Legal & Support
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li><button onClick={() => setView('privacy')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setView('terms')} className="font-semibold text-slate-700 hover:text-indigo-600 transition-colors">Terms of Service</button></li>
                <li><a href={REGISTRATION_LINK} target="_blank" className="font-bold text-indigo-600 hover:text-indigo-700 hover:underline flex items-center gap-1">Apply Now <ArrowRight size={14} /></a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-semibold text-slate-600">
              <p>© 2025 RANBIDGE Solutions Private Limited. All rights reserved.</p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <button onClick={() => setView('privacy')} className="hover:text-indigo-600 transition-colors font-medium">Privacy Policy</button>
                <span>•</span>
                <button onClick={() => setView('terms')} className="hover:text-indigo-600 transition-colors font-medium">Terms of Service</button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={LINKEDIN_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/30 transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={YOUTUBE_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 transition-all shadow-sm"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href={FACEBOOK_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={WHATSAPP_CHAT_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 transition-all shadow-sm"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a 
                href="mailto:ranbidgesolutionspvtltd@gmail.com" 
                className="w-10 h-10 rounded-full bg-[#6366F1] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 transition-all shadow-sm"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
              <a 
                href={LOCATION_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EA4335] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30 transition-all shadow-sm"
                title="Office Location: Narasaraopet, Andhra Pradesh, India"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

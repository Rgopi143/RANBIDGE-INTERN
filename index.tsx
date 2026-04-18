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
const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdrzYAVBF9rEFV7zcs_p0a_St8qGcnEsltEvdI-ZULHlO5Xbg/viewform?usp=publish-editor";
const FINAL_YEAR_PROJECTS_LINK = "https://forms.gle/DHavgijonoyLcLfG6";
const VIRTUAL_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const MENTORSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const PAID_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const UNPAID_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const WHATSAPP_CHAT_LINK = "https://wa.me/8247392437?text=Hello%20RANBIDGE%21%20%F0%9F%20I%20hope%20you're%20having%20a%20great%20day.%20I'm%20interested%20in%20your%20internship%20programs%20and%20would%20love%20to%20learn%20more%20about%20the%20opportunities%20available.%20Could%20you%20please%20share%20some%20details%3F%20Thank%20you!";
const LINKEDIN_LINK = "https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376/";
const INSTAGRAM_LINK = "https://www.instagram.com/ranbridgeserviceprivatelimited?igsh=MTYxOWU4NHJ0YzcwaA%3D%3D";
const YOUTUBE_LINK = "https://www.youtube.com/@ranbridgeserviceprivatelimited";
const FACEBOOK_LINK = "https://www.facebook.com/ranbridgeserviceprivatelimited";


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

  ,
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
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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
  }
  
];

const CATEGORIES = ['All', 'Engineering', 'Design', 'Data Science', 'Security', 'Marketing', 'Cloud', 'AI', 'Testing', 'Business'];

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

  // Close dropdown when clicking outside
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`text-sm font-bold flex items-center gap-2 transition-all ${['virtual-internship', 'paid-internship', 'unpaid-internship', 'one-on-one-mentorship', 'final-year-projects'].includes(view) ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              <Briefcase size={16} /> Internship
              <ChevronDown size={14} className={`transition-transform ${isInternshipDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isInternshipDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
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
          
          <button onClick={() => setView('privacy')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'privacy' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <ShieldAlert size={16} /> Privacy
          </button>
          <button onClick={() => setView('terms')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'terms' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <FileText size={16} /> Terms
          </button>
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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
            course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
            'bg-purple-100 text-purple-700'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Clock size={12} />
            {course.duration}
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Curriculum</p>
          <ul className="space-y-1">
            {course.curriculum.map((item, i) => (
              <li key={i} className="text-[11px] text-slate-500 flex items-center gap-1">
                <div className="w-1 h-1 bg-indigo-400 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-8 h-8 rounded-full border-2 border-indigo-100" />
            <span className="text-xs font-medium text-slate-500">Ranbidge Solutions</span>
          </div>
          {isComingSoon && course.id === 'paper-writing' ? (
            <span className="px-4 py-2 bg-blue-500 text-white rounded-xl text-sm font-semibold cursor-not-allowed border border-blue-400">
              <a 
                href={WHATSAPP_CHAT_LINK}
                target="_blank"
                className="text-white hover:text-blue-100 transition-colors"
              >
                Contact Us
              </a>
            </span>
          ) : (
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
            >
              Enroll Now
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

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
              <header className="bg-white border-b border-slate-100 relative pt-20 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
                <TrendingUp size={14} /> Future-Proof Your Career
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Empowering the next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Tech Innovators.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Unlock your potential with hands-on industrial internships at RANBIDGE Solutions. Real projects, real mentors, real impact.
              </p>
            </div>
            
            {/* Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[32px] border-indigo-50 rounded-full opacity-20"></div>
          </header>

          {/* Course Filter Bar */}
          <div className="bg-white border-b border-slate-100 py-4 sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Catalog Grid */}
            <div id="courses-section" className="flex-grow">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Available <span className="text-indigo-600">Tracks</span>
                </h2>
                <div className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" /> Top Rated
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Zap className="text-indigo-600" />, title: "Flexible Schedule", desc: "Work at your own pace with flexible hours that fit your lifestyle." },
              { icon: <Users className="text-indigo-600" />, title: "Global Team", desc: "Collaborate with diverse team members from around the world." },
              { icon: <Award className="text-indigo-600" />, title: "Certified Program", desc: "Receive industry-recognized certificates upon completion." },
              { icon: <MessageSquare className="text-indigo-600" />, title: "Live Mentorship", desc: "Get real-time guidance from industry professionals." },
              { icon: <Star className="text-indigo-600" />, title: "Portfolio Projects", desc: "Build impressive projects for your professional portfolio." },
              { icon: <TrendingUp className="text-indigo-600" />, title: "Career Growth", desc: "Access job opportunities and career advancement support." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Full Stack Development Program */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Featured Virtual <span className="text-indigo-600">Program</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Master both frontend and backend development in our comprehensive virtual internship</p>
            </div>
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                </div>
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      16 Weeks
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Full Stack Development Virtual Internship</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Gain comprehensive experience in frontend, backend, and UI/UX design. Work on real projects using React, Node.js, MongoDB, modern design principles, and deployment technologies.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Frontend development with React.js and modern CSS
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        UI/UX Design principles and user-centered design
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Backend development with Node.js and Express
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Database design with MongoDB and PostgreSQL
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Cloud deployment and DevOps practices
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={VIRTUAL_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Enroll Now in Full Stack Program
                  </a>
                </div>
              </div>
            </div>
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
              <GraduationCap size={14} /> Personal Guidance
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              One-on-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Mentorship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from industry experts. Accelerate your learning with dedicated mentorship tailored to your career goals and skill level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={MENTORSHIP_LINK} target="_blank" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3">
                <GraduationCap size={20} /> Apply for Mentorship
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <HandHeart className="text-indigo-600" />, title: "Personalized Attention", desc: "Get 1-on-1 guidance tailored to your specific learning needs and career goals." },
              { icon: <Target className="text-indigo-600" />, title: "Goal-Oriented Learning", desc: "Set clear milestones and track your progress with expert mentorship." },
              { icon: <Lightbulb className="text-indigo-600" />, title: "Industry Insights", desc: "Learn real-world practices and insider knowledge from experienced professionals." },
              { icon: <Zap className="text-indigo-600" />, title: "Fast-Track Growth", desc: "Accelerate your skill development with focused, intensive mentoring sessions." },
              { icon: <Users className="text-indigo-600" />, title: "Expert Network", desc: "Connect with industry leaders and expand your professional network." },
              { icon: <Award className="text-indigo-600" />, title: "Certified Achievement", desc: "Receive mentorship certificates and letters of recommendation." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Mentorship Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Featured <span className="text-indigo-600">Mentorship</span> Tracks</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose your area of focus and get expert guidance</p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Full Stack Development Mentorship */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Comprehensive
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      16 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Full Stack Development Mentorship</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Master both frontend and backend development with personalized 1-on-1 guidance. Build real-world applications from scratch.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Technologies & Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Frontend: React.js, TypeScript, Tailwind CSS
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Backend: Node.js, Express, RESTful APIs
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Database: MongoDB, PostgreSQL, Prisma ORM
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Deployment: AWS, Docker, CI/CD pipelines
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={MENTORSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Start Full Stack Mentorship
                  </a>
                </div>
              </div>

              {/* Embedded Systems Mentorship */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                    alt="Embedded Systems" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Hardware Focus
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      14 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Embedded Systems Mentorship</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Dive into the world of embedded systems and IoT. Learn to design smart devices, work with microcontrollers, and build connected systems.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Technologies & Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        Microcontrollers: Arduino, ESP32, STM32
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        Programming: C/C++, Embedded Python, Rust
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        Sensors & Actuators, Circuit Design
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        IoT Protocols: MQTT, HTTP, WiFi, Bluetooth
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={MENTORSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Start Embedded Systems Mentorship
                  </a>
                </div>
              </div>

              </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Mentorship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">What You'll Receive</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Weekly 1-on-1 video sessions with mentors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Personalized learning roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Code reviews and project feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Access to exclusive resources and materials</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Clear learning goals and objectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Commitment to regular sessions (2-3 hours/week)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Basic knowledge in chosen field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Enthusiasm to learn and implement feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-indigo-100">Get personalized guidance from industry experts who care about your success.</p>
            <a href={MENTORSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">
              Apply for Mentorship - Limited Spots
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

      {view === 'paid-internship' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-black mb-8 tracking-widest uppercase">
              <DollarSign size={14} /> Earn While You Learn
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Paid <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">Internship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get paid while gaining valuable industry experience. Our paid internship program offers competitive stipends along with comprehensive training and real-world project exposure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PAID_INTERNSHIP_LINK} target="_blank" className="px-8 py-4 bg-green-600 text-white rounded-2xl font-black hover:bg-green-700 transition-all shadow-xl flex items-center gap-3">
                <DollarSign size={20} /> Apply for Paid Internship
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <DollarSign className="text-green-600" />, title: "Monthly Stipend", desc: "Receive competitive monthly stipends based on your role and performance." },
              { icon: <Award className="text-green-600" />, title: "Performance Bonuses", desc: "Earn additional bonuses for exceptional work and project completion." },
              { icon: <Briefcase className="text-green-600" />, title: "Real Projects", desc: "Work on actual client projects and build your professional portfolio." },
              { icon: <Users className="text-green-600" />, title: "Team Collaboration", desc: "Collaborate with experienced professionals and industry experts." },
              { icon: <TrendingUp className="text-green-600" />, title: "Career Growth", desc: "Get fast-tracked for full-time positions based on performance." },
              { icon: <Gift className="text-green-600" />, title: "Additional Benefits", desc: "Enjoy perks like flexible hours, remote work options, and skill certifications." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Paid Internship Roles */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Available <span className="text-green-600">Paid Roles</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose from our range of paid internship positions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Stack Developer */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Highest Paid
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      16 Weeks
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Stipend: $800/month</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Full Stack Developer</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Build end-to-end web applications using modern technologies. Work on frontend, backend, and deployment aspects of real projects.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Technologies & Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        React.js, Node.js, MongoDB
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        RESTful APIs and Database Design
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        Cloud deployment (AWS/Azure)
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        Version control and collaboration
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={PAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Apply for Full Stack Role
                  </a>
                </div>
              </div>

              {/* Mobile App Developer */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
                    alt="Mobile Developer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
                      High Demand
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      12 Weeks
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Stipend: $600/month</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Mobile App Developer</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Develop cross-platform mobile applications for iOS and Android. Work on real mobile projects with modern frameworks.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Technologies & Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        React Native and Flutter
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        Mobile UI/UX design principles
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        Firebase and backend integration
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        App store deployment and optimization
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={PAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Apply for Mobile Developer Role
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Paid Internship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-green-400">Financial Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Competitive monthly stipends (up to $800/month)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Performance-based bonuses and rewards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Transportation and communication allowances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Certification and training reimbursements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-green-400">Career Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Priority consideration for full-time positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Professional portfolio with real client projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Industry networking and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Performance reviews and career guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Year Projects Section */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-12 mb-20 border border-slate-100">
            <h2 className="text-3xl font-black mb-8 text-center text-slate-900">Final Year Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-blue-900">E-Commerce Platform</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Build a full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Perfect for showcasing full-stack development skills.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• React.js frontend with modern UI/UX</li>
                  <li>• Node.js backend with RESTful APIs</li>
                  <li>• MongoDB database with advanced queries</li>
                  <li>• Stripe payment integration</li>
                  <li>• JWT authentication & authorization</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-green-900">Task Management System</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Develop a comprehensive task management system with real-time collaboration features. Ideal for demonstrating advanced React and state management skills.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Real-time collaboration features</li>
                  <li>• Drag-and-drop task management</li>
                  <li>• WebSocket integration</li>
                  <li>• Advanced state management (Redux)</li>
                  <li>• Responsive design with Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship Kit Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3rem] p-12 text-white mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-center">Internship Kit</h2>
              <p className="text-xl text-slate-300 mb-12 text-center">
                Everything you need to succeed in your internship journey
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Learning Resources</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Comprehensive course materials</li>
                    <li>• Video tutorials & guides</li>
                    <li>• Best practice documentation</li>
                    <li>• Code examples & templates</li>
                    <li>• Industry-standard tools access</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Mentorship Support</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• 1-on-1 expert guidance</li>
                    <li>• Weekly progress reviews</li>
                    <li>• Career coaching sessions</li>
                    <li>• Industry networking opportunities</li>
                    <li>• Resume & portfolio reviews</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Career Development</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Certificate of completion</li>
                    <li>• Performance-based recommendations</li>
                    <li>• Job placement assistance</li>
                    <li>• LinkedIn profile optimization</li>
                    <li>• Interview preparation kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Earn While You Learn?</h2>
            <p className="text-xl mb-8 text-green-100">Join our paid internship program and kickstart your career with financial support.</p>
            <a href={PAID_INTERNSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-green-700 rounded-2xl font-black hover:bg-green-50 transition-all shadow-xl">
              Apply for Paid Internship - Limited Positions
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

      {view === 'unpaid-internship' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-black mb-8 tracking-widest uppercase">
              <Heart size={14} /> Skill Building Focus
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Unpaid <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">Internship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Focus purely on learning and skill development. Our unpaid internship program offers comprehensive training, mentorship, and portfolio-building opportunities without financial pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={UNPAID_INTERNSHIP_LINK} target="_blank" className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-black hover:bg-purple-700 transition-all shadow-xl flex items-center gap-3">
                <Heart size={20} /> Apply for Unpaid Internship
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <GraduationCap className="text-purple-600" />, title: "Intensive Learning", desc: "Focus entirely on skill development without work pressure." },
              { icon: <Target className="text-purple-600" />, title: "Flexible Schedule", desc: "Learn at your own pace with flexible timing options." },
              { icon: <Lightbulb className="text-purple-600" />, title: "Creative Freedom", desc: "Experiment and innovate without client constraints." },
              { icon: <Users className="text-purple-600" />, title: "Peer Learning", desc: "Collaborate with other interns in a supportive environment." },
              { icon: <Award className="text-purple-600" />, title: "Certificates", desc: "Earn valuable certificates and letters of recommendation." },
              { icon: <Zap className="text-purple-600" />, title: "Quick Start", desc: "Easy application process and immediate onboarding." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Learning Tracks */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Learning <span className="text-purple-600">Tracks</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose your learning path and build your foundation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Foundation Track */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Foundation Track" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Beginner Friendly
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Beginner</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      8 Weeks
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">No Experience Needed</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Foundation Track</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Perfect for beginners. Learn the fundamentals of programming, web development, and computer science basics.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        HTML, CSS, and JavaScript fundamentals
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Basic programming concepts and logic
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Version control with Git
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Problem-solving and debugging skills
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={UNPAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Start Foundation Track
                  </a>
                </div>
              </div>

              {/* Advanced Learning Track */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                    alt="Advanced Track" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Skill Enhancement
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      12 Weeks
                    </div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Portfolio Building</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Advanced Learning Track</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    For those with basic knowledge. Deepen your skills and build impressive projects for your portfolio.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Advanced JavaScript and frameworks
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Backend development and databases
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Project management and teamwork
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        Portfolio development and presentation
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={UNPAID_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Start Advanced Track
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Unpaid Internship Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-purple-400">Learning Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Comprehensive training from basics to advanced</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Personalized mentorship and guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Access to learning resources and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Work on portfolio-building projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-purple-400">Career Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Certificate of completion and recommendation letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Resume building and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Networking opportunities with professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Priority consideration for paid positions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Year Projects Section */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-12 mb-20 border border-slate-100">
            <h2 className="text-3xl font-black mb-8 text-center text-slate-900">Final Year Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-purple-900">AI Chatbot Application</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Develop an intelligent chatbot using natural language processing and machine learning. Perfect for demonstrating AI/ML skills and modern web technologies.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li> Python with Flask/FastAPI backend</li>
                  <li> OpenAI GPT integration for responses</li>
                  <li> React.js frontend with chat interface</li>
                  <li> MongoDB for conversation history</li>
                  <li> Sentiment analysis and intent recognition</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-indigo-900">Social Media Dashboard</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Create a comprehensive social media analytics dashboard with real-time data visualization. Ideal for showcasing data analysis and visualization skills.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li> Real-time data from multiple social APIs</li>
                  <li> Interactive charts and graphs</li>
                  <li> Node.js backend with Express</li>
                  <li> PostgreSQL database with analytics</li>
                  <li> Responsive design with D3.js</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internship Kit Section */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-[3rem] p-12 text-white mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-center">Internship Kit</h2>
              <p className="text-xl text-purple-200 mb-12 text-center">
                Comprehensive resources to accelerate your learning journey
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Learning Resources</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li> Comprehensive coding tutorials</li>
                    <li> Interactive coding exercises</li>
                    <li> Project-based learning modules</li>
                    <li> Code review and feedback</li>
                    <li> Access to premium development tools</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Mentorship Support</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li> Daily standup meetings</li>
                    <li> Code review sessions</li>
                    <li> Technical skill assessments</li>
                    <li> Peer collaboration opportunities</li>
                    <li> Industry expert Q&A sessions</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Career Development</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li> GitHub portfolio setup</li>
                    <li> LinkedIn profile optimization</li>
                    <li> Technical interview preparation</li>
                    <li> Resume building workshops</li>
                    <li> Job search strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Build Your Skills?</h2>
            <p className="text-xl mb-8 text-purple-100">Join our unpaid internship program and focus entirely on your learning journey.</p>
            <a href={UNPAID_INTERNSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-purple-700 rounded-2xl font-black hover:bg-purple-50 transition-all shadow-xl">
              Apply for Unpaid Internship - Open Enrollment
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

      {view === 'final-year-projects' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-black mb-8 tracking-widest uppercase">
              <Target size={14} /> Academic Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Final Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">Projects</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Complete your academic journey with industry-relevant projects that showcase your skills and launch your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FINAL_YEAR_PROJECTS_LINK} target="_blank" className="px-8 py-4 bg-orange-600 text-white rounded-2xl font-black hover:bg-orange-700 transition-all shadow-xl flex items-center gap-3">
                <Target size={20} /> Start Your Project
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                View Projects
              </button>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Featured <span className="text-orange-600">Projects</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose from our range of comprehensive final year projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* E-Commerce Platform */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 hover:shadow-3xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                    alt="E-Commerce Platform" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Full Stack
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      12 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">E-Commerce Platform</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Build a complete e-commerce platform with user authentication, payment processing, and admin dashboard.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      React.js & Node.js
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      MongoDB & Stripe API
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      JWT Authentication
                    </div>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Choose This Project
                  </a>
                </div>
              </div>

              {/* AI Chatbot */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 hover:shadow-3xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" 
                    alt="AI Chatbot" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                      AI/ML
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Trending
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      14 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">AI Chatbot System</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Develop an intelligent chatbot using natural language processing and machine learning technologies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      Python & OpenAI API
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      NLP & TensorFlow
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      React Frontend
                    </div>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Choose This Project
                  </a>
                </div>
              </div>

              {/* IoT Dashboard */}
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 hover:shadow-3xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbcc31c?auto=format&fit=crop&w=800&q=80" 
                    alt="IoT Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                      IoT
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      Innovative
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Intermediate</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      10 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">IoT Smart Home</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Create a smart home automation system with real-time monitoring and control capabilities.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      Raspberry Pi & Arduino
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      MQTT Protocol
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      React Dashboard
                    </div>
                  </div>
                  <a 
                    href={FINAL_YEAR_PROJECTS_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Choose This Project
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Project Benefits */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Project Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-orange-400">Academic Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-400 mt-1" size={20} />
                    <span>Industry-relevant project topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-400 mt-1" size={20} />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-400 mt-1" size={20} />
                    <span>Expert guidance and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-400 mt-1" size={20} />
                    <span>University compliance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-orange-400">Career Advancement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Portfolio-worthy projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Industry networking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-600 to-amber-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Excel in Your Final Year?</h2>
            <p className="text-xl mb-8 text-orange-100">Complete your academic journey with a project that stands out.</p>
            <a href={FINAL_YEAR_PROJECTS_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-orange-700 rounded-2xl font-black hover:bg-orange-50 transition-all shadow-xl">
              Start Your Final Year Project - Limited Slots
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

      {(view === 'privacy' || view === 'terms') && (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-12 text-white">
              <h1 className="text-4xl font-black flex items-center gap-4">
                {view === 'privacy' ? <ShieldAlert size={40} /> : <FileText size={40} />}
                {view === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h1>
              <p className="mt-4 text-indigo-100 font-bold opacity-80">Effective Date: August 15, 2025</p>
            </div>
            
            <div className="p-12 text-slate-600 prose prose-indigo max-w-none">
              {view === 'privacy' ? (
                <>
                  <p className="text-lg">Your privacy is important to us. This Privacy Policy explains how <strong>RANBIDGE Solutions Private Limited</strong> collects, uses, and protects your information.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">01.</span> Information We Collect</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Personal details such as name, email address, and contact information.</li>
                    <li>Information you provide through forms or course registrations.</li>
                    <li>Technical information like IP address, browser type, and device details.</li>
                  </ul>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">02.</span> How We Use Your Information</h2>
                  <p>We use your information to provide and improve our services, process registrations, and send relevant updates about your chosen internship track.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">03.</span> Data Security</h2>
                  <p>We use industry-standard security measures to protect your data. However, no method of electronic storage is 100% secure.</p>
                  <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="font-black text-slate-900 mb-2">Have questions?</h3>
                    <p className="text-sm">Contact us at: <a href="mailto:ranbridgeserviceprivatelimited@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbridgeserviceprivatelimited@gmail.com</a></p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg">Welcome to RANBIDGE Solutions! These Terms of Service govern your use of our website and services.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">01. Acceptance of Terms</h2>
                  <p>By using our website, you agree to comply with and be bound by these terms. This agreement is legally binding.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">02. Use of Services</h2>
                  <p>You may use our services for lawful purposes only. Any unauthorized duplication of course material or curriculum is strictly prohibited.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">03. Intellectual Property</h2>
                  <p>All content, trademarks, code snippets, and curriculum data are owned by RANBIDGE Solutions Private Limited.</p>
                  <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-sm font-bold">For official inquiries: <a href="mailto:ranbidgesolutionspvtltd@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbidgesolutionspvtltd@gmail.com</a></p>
                  </div>
                </>
              )}
              <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
                <button 
                  onClick={() => setView('home')} 
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
                >
                  <Home size={20} /> Return to Home
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      
      
      {/* Footer */}
      <footer className="mt-auto bg-slate-950 text-slate-400 py-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 text-white mb-8">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white/10 flex items-center justify-center p-1">
                  <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-full" />
                </div>
                <span className="text-2xl font-black tracking-tighter">RANBIDGE SOLUTIONS PVT LTD</span>
              </div>
              <p className="max-w-sm mb-10 leading-relaxed text-slate-500 text-lg">
                We're building the bridge between academic knowledge and industry excellence. Join the most intensive internship program in India.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <MapPin size={18} className="text-indigo-400" />
                  </div>
                  <span className="font-bold">Narasaraopet, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-indigo-400" />
                  </div>
                  <span className="font-bold">ranbidgesolutionspvtltd@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                <li><button onClick={() => setView('home')} className="font-bold hover:text-indigo-400 transition-colors">Course Catalog</button></li>
                <li><button onClick={() => setView('virtual-internship')} className="font-bold hover:text-indigo-400 transition-colors">Virtual Internship</button></li>
                <li><button onClick={() => setView('one-on-one-mentorship')} className="font-bold hover:text-indigo-400 transition-colors">One-on-One Mentorship</button></li>
                <li><button onClick={() => setView('paid-internship')} className="font-bold text-indigo-400 hover:text-white transition-colors">Paid Internship</button></li>
                <li><button onClick={() => setView('unpaid-internship')} className="font-bold text-indigo-400 hover:text-white transition-colors">Unpaid Internship</button></li>
                <li><button onClick={() => setView('final-year-projects')} className="font-bold text-indigo-400 hover:text-white transition-colors">Final Year Projects</button></li>
                <li><button onClick={() => setView('privacy')} className="font-bold hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setView('terms')} className="font-bold hover:text-indigo-400 transition-colors">Terms of Service</button></li>
                <li><a href={REGISTRATION_LINK} target="_blank" className="font-bold text-indigo-400 hover:text-white transition-colors">Apply Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Our Reach</h4>
              <div className="flex flex-wrap gap-3">
                <SocialIcon href={LINKEDIN_LINK} color="#0077B5">
                  <Linkedin size={16} />
                </SocialIcon>
                <SocialIcon href={INSTAGRAM_LINK} color="#E4405F">
                  <Instagram size={16} />
                </SocialIcon>
                <SocialIcon href={YOUTUBE_LINK} color="#FF0000">
                  <Youtube size={16} />
                </SocialIcon>
                <SocialIcon href={FACEBOOK_LINK} color="#1877F2">
                  <Facebook size={16} />
                </SocialIcon>
              </div>
              <div className="mt-8">
                <a href={WHATSAPP_CHAT_LINK} target="_blank" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all">
                  <MessageSquare size={18} /> Chat with Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold text-slate-600">© 2025 RANBIDGE Solutions Private Limited. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-700">
               <span className="cursor-pointer hover:text-slate-400 transition-colors">Facebook</span>
               <span className="cursor-pointer hover:text-slate-400 transition-colors">GitHub</span>
               <span className="cursor-pointer hover:text-slate-400 transition-colors">Behance</span>
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

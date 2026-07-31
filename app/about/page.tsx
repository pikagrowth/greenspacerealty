import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  Target, 
  Eye,
  Award,
  BookOpen,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  Settings,
  Cpu,
  Zap,
  Quote,
  Leaf
} from "lucide-react";

export const metadata = {
  title: "About Us | Greenspace Realty | Enterprise Profile",
  description: "Learn about Greenspace Realty's journey. Discover how our highly educated, engineering-led team brings academic precision and absolute diligence to real estate transactions.",
};

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
  degree: string;
  image: string;
  icon: React.ReactNode;
  description: string;
}

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// ==========================================
// DATA CONFIGURATION
// ==========================================
const milestones: Milestone[] = [
  {
    year: "The Foundation",
    title: "Establishing Trust & Transparency",
    description: "Started with a vision to bring absolute transparency to local real estate, focusing on helping families find verified, litigation-free homes in Old and New Panvel. We set out to change the perception of the real estate broker into a trusted property advisor.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
  },
  {
    year: "Portfolio Expansion",
    title: "Resale & Premium 2nd Homes",
    description: "Grew the B2C advisory wing by curating a strict, zero-litigation portfolio of ready-to-move apartments, luxury villas, and serene weekend getaways. We introduced rigorous 50-point checklist verifications for every property listed.",
    icon: <Building2 className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
  },
  {
    year: "Strategic Advisory",
    title: "Navigating Land Dealing & NAINA",
    description: "Expanded into high-ticket land acquisitions and CIDCO plots, providing rigorous due-diligence for investors eyeing the upcoming International Airport and NAINA corridors. We built a legal network to ensure title clarity.",
    icon: <TrendingUp className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
  },
  {
    year: "B2B Partnerships",
    title: "Sole-Selling Marketing Mandates",
    description: "Evolved into a full-stack sales engine for developers. Today, we handle exclusive marketing mandates, allowing builders to focus purely on construction while we liquidate inventory through targeted digital and offline campaigns.",
    icon: <CheckCircle2 className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
  }
];

const founders: TeamMember[] = [
  { 
    name: "Sonali Krishna Katale-Patil", 
    role: "Company Founder & Owner", 
    degree: "Master in Arts & Bachelor in Education",
    image: "https://res.cloudinary.com/demo/image/upload/w_600,h_600,c_fill,g_face/avatar1.jpg",
    icon: <BookOpen className="w-5 h-5" />,
    description: "With a strong academic background in education and the arts, Sonali brings a deeply empathetic, advisory-first approach to real estate. She established the firm's core ethics, ensuring that every transaction prioritizes client education and absolute transparency. Her leadership focuses on building long-term trust rather than short-term transactions, setting the cultural standard for the entire Greenspace team."
  },
  { 
    name: "Krishna Kashiram Katale-Patil", 
    role: "Company Founder & Owner", 
    degree: "Mechanical Engineer & Social Studies",
    image: "https://res.cloudinary.com/demo/image/upload/w_600,h_600,c_fill,g_face/avatar2.jpg",
    icon: <Settings className="w-5 h-5" />,
    description: "Krishna combines the structural precision of a mechanical engineer with a deep understanding of demographic trends through his social studies background. He applies mathematical logic to property valuations, ROI projections, and infrastructure analysis. Under his guidance, the firm evaluates projects not just on aesthetics, but on structural viability, legal clarity, and long-term capital appreciation."
  }
];

const coreTeam: TeamMember[] = [
  { 
    name: "Shankar Katale Patil", 
    role: "Senior Manager (Sales & Administration)", 
    degree: "Electrical Engineer",
    image: "https://res.cloudinary.com/rlhk97ns/image/upload/v1785500699/shankar_n3brgh.jpg",
    icon: <Zap className="w-5 h-5" />,
    description: "Shankar leverages his electrical engineering background to design highly structured, high-energy sales operations and administrative workflows. His systematic approach ensures that complex B2B developer mandates run smoothly, closing the gap between marketing lead generation and on-ground sales conversions."
  },
  { 
    name: "Subhash Rale", 
    role: "Manager (Sales & Administration)", 
    degree: "Graduate in Arts",
    image: "https://res.cloudinary.com/rlhk97ns/image/upload/v1785500591/subhash_gyo7mh.jpg",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Subhash brings exceptional interpersonal skills and an artistic touch to property presentation and client handling. He manages the day-to-day administration with a focus on human connection, ensuring that every homebuyer feels heard, understood, and perfectly matched with their ideal property."
  },
  { 
    name: "Kiran Sarang", 
    role: "Sourcing Manager", 
    degree: "Electronic Engineer",
    image: "https://res.cloudinary.com/rlhk97ns/image/upload/v1785500511/kiran_sir_onv2mx.jpg",
    icon: <Cpu className="w-5 h-5" />,
    description: "Applying the precision of electronic engineering to real estate, Kiran systematically sources prime inventory and evaluates land parcels. His data-driven approach to market research ensures that Greenspace only acquires and represents properties that meet our stringent criteria for ROI and legal safety."
  },
  { 
    name: "Riddhi Gotharkar", 
    role: "Customer Relationship Manager", 
    degree: "Science Graduate",
    image: "https://res.cloudinary.com/rlhk97ns/image/upload/v1785500580/riddhi_azwngi.jpg",
    icon: <Users className="w-5 h-5" />,
    description: "Riddhi applies a methodical, scientific approach to customer relations and post-sales support. She manages the entire buyer journey from initial booking to final handover, ensuring all documentation, loan processing, and client queries are handled with rigorous attention to detail."
  }
];

const coreValues: CoreValue[] = [
  {
    title: "Academic Precision",
    description: "Driven by a team of engineers and educators, we apply a methodical, research-heavy approach to every property valuation, legal check, and market analysis.",
    icon: <GraduationCap className="w-8 h-8 text-brand-accent dark:text-brand-accentDark" />
  },
  {
    title: "Absolute Transparency",
    description: "We believe in zero hidden clauses. Whether advising a first-time homebuyer or executing a developer mandate, our communication is strictly factual and data-backed.",
    icon: <Compass className="w-8 h-8 text-brand-accent dark:text-brand-accentDark" />
  },
  {
    title: "Execution Excellence",
    description: "Ideas do not sell inventory; execution does. We deploy aggressive, targeted marketing engines combined with a highly trained on-ground sales force.",
    icon: <Target className="w-8 h-8 text-brand-accent dark:text-brand-accentDark" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      
      {/* ==========================================
          HERO SECTION (Brand Theme)
      ========================================== */}
      <section className="py-10 md:py-14 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        {/* Background Image with Grayscale & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/projects/shravan-siddhant/hero-residential.webp" 
            alt="Real Estate Development" 
            className="w-full h-full object-cover opacity-15 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/80 to-brand-primary dark:from-[#0c100e]/90 dark:to-[#0c100e]"></div>
        </div>
        
        {/* Subtle Brand Accents in Background */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-brand-accent/10 blur-3xl transform rotate-12 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[60%] bg-brand-accent/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-6 backdrop-blur-md transition-colors shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Enterprise Profile
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight transition-colors text-white">
            Engineering-Grade <br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              Diligence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors font-light drop-shadow">
            We are not just brokers. We are a premier real estate marketing and sole-selling agency built on the principles of deep market research, absolute transparency, and verifiable data.
          </p>
        </div>
      </section>

      {/* ==========================================
          MISSION & VISION SECTION
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission Card */}
            <div className="p-10 lg:p-12 rounded-3xl bg-brand-bg dark:bg-[#161917] border border-gray-200 dark:border-gray-800 flex flex-col items-start relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 dark:bg-brand-accentDark/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-white dark:bg-[#0c100e] shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-200 dark:border-gray-700 relative z-10">
                <Target className="w-8 h-8 text-brand-accent dark:text-brand-accentDark" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10 font-light">
                To engineer seamless real estate transactions by applying academic precision and uncompromising due diligence. We empower developers with robust, high-conversion sales engines and provide buyers with secure, verified investments across Navi Mumbai's rapidly expanding corridors.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="p-10 lg:p-12 rounded-3xl bg-brand-bg dark:bg-[#161917] border border-gray-200 dark:border-gray-800 flex flex-col items-start relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 dark:bg-brand-primaryDark/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-white dark:bg-[#0c100e] shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-200 dark:border-gray-700 relative z-10">
                <Eye className="w-8 h-8 text-brand-accent dark:text-brand-accentDark" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10 font-light">
                To be the most trusted, data-driven real estate marketing agency in Maharashtra, recognized as the ultimate bridge between visionary infrastructure developments—like NAINA and the Navi Mumbai International Airport—and intelligent property investments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          THE FOUNDERS SECTION (Detailed Descriptions)
      ========================================== */}
      <section className="py-24 bg-brand-bg dark:bg-[#0c100e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Led by <span className="text-brand-primary dark:text-brand-primaryDark">Academics & Engineers</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              To cut through market noise and mitigate investment risk, Greenspace Realty is spearheaded by an exceptional team of highly educated professionals. Our foundation is built on academic rigor and engineering logic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-white dark:bg-[#111412] rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col hover:shadow-2xl transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                  <div className="relative w-32 h-32 shrink-0 rounded-2xl overflow-hidden border-4 border-brand-bg dark:border-gray-900 shadow-sm">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{founder.name}</h3>
                    <p className="text-brand-primary dark:text-brand-primaryDark font-bold text-lg mb-3">{founder.role}</p>
                    <div className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <span className="text-brand-accent dark:text-brand-accentDark mr-2">{founder.icon}</span>
                      <span>{founder.degree}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <Quote className="w-8 h-8 text-gray-200 dark:text-gray-700 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
                    {founder.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          CORE MANAGEMENT TEAM SECTION (Detailed)
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark border border-brand-primary/20 dark:border-brand-primaryDark/30 text-sm font-bold tracking-widest mb-4 uppercase">
              The Execution Engine
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Core Management Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Our sales, sourcing, and relationship management operations are driven by specialists who apply analytical problem-solving to real-world real estate challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="bg-brand-bg dark:bg-[#161917] rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group">
                
                <div className="relative w-28 h-28 shrink-0 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-white dark:border-[#111412] shadow-md group-hover:border-brand-primary/30 dark:group-hover:border-brand-primaryDark/30 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <h4 className="font-extrabold text-gray-900 dark:text-white text-xl mb-1">{member.name}</h4>
                  <p className="text-sm text-brand-primary dark:text-brand-primaryDark font-bold mb-3">{member.role}</p>
                  
                  <div className="inline-flex items-center justify-center sm:justify-start text-xs font-semibold text-gray-600 dark:text-gray-300 mb-4 bg-white dark:bg-[#111412] border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full w-fit sm:mx-0 mx-auto">
                    <span className="text-brand-accent dark:text-brand-accentDark mr-2">{member.icon}</span>
                    {member.degree}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          OUR METHODOLOGY & PROCESS SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg dark:bg-[#0c100e] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Our Growth Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              From a local B2C advisory consultancy to a comprehensive B2B real estate marketing engine handling exclusive developer mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white dark:bg-[#111412] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all group overflow-hidden">
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="text-5xl font-black text-gray-100 dark:text-gray-800/50 absolute top-4 right-6 pointer-events-none group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                
                <div className="w-14 h-14 bg-brand-bg dark:bg-[#161917] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 relative z-10 transition-colors">
                  {step.icon}
                </div>
                
                <div className="text-xs font-bold text-brand-primary dark:text-brand-primaryDark uppercase tracking-wider mb-2 relative z-10">
                  {step.year}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 transition-colors">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10 transition-colors font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          THE GREENSPACE PHILOSOPHY (Core Values)
      ========================================== */}
      <section className="py-24 bg-brand-primary dark:bg-[#0c100e] text-white transition-colors duration-300 relative overflow-hidden">
        {/* Decorative background leaf/abstract shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
          <Leaf className="w-96 h-96 text-brand-accent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">The Greenspace Philosophy</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
              The foundational pillars that dictate how we research, operate, and close transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CALL TO ACTION
      ========================================== */}
      <section className="py-20 bg-white dark:bg-[#111412] border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Ready to experience engineering-grade diligence?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 font-light">
            Whether you are a developer looking to liquidate inventory or a homebuyer seeking a secure investment, our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold transition duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
            >
              Contact Our Team <ArrowRight size={20} />
            </Link>
            <Link 
              href="/b2b-builders" 
              className="px-8 py-4 bg-white dark:bg-[#161917] border-2 border-brand-primary text-brand-primary dark:text-brand-primaryDark rounded-xl font-bold hover:bg-brand-bg dark:hover:bg-brand-bgDark transition duration-300 flex items-center justify-center gap-2"
            >
              <Building2 size={20} className="text-brand-primary dark:text-brand-primaryDark" />
              Developer Mandates
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
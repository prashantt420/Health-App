
"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Camera,
  Flame,
  Activity,
  Check,
  Utensils,
  Target,
  Salad,
  Clock,
  ChevronRight,
  Leaf,
  Dumbbell,
  Moon,
  Droplets,
  Watch,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Zap,
  TrendingUp,
  Footprints,
  Brain,
  Apple,
  Star,
  Plus,
} from "lucide-react";

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <Reveal className="max-w-4xl mb-16 md:mb-20">
      <div className="flex items-center gap-3 text-[#c6ff4d] text-xs tracking-[4px] uppercase mb-8">
        <span>{number}</span>
        <span className="w-8 h-px bg-[#c6ff4d]/50" />
        {eyebrow}
      </div>

      <h2 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.08em] leading-[1.02]">
        {title}
        <br />
        <span className="text-[#c6ff4d]">{highlight}</span>
      </h2>

      <p className="max-w-2xl text-white/50 text-base md:text-xl mt-8 leading-relaxed">
        {description}
      </p>
    </Reveal>
  );
}

const lime = "#c6ff4d";

// ==========================================
// MAIN PAGE
// ==========================================

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dietPreference, setDietPreference] = useState("Vegetarian");
  const [goal, setGoal] = useState("Weight management");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll();

  // HERO SCROLL ANIMATION
const heroY = useTransform(
  scrollYProgress,
  [0, 0.12],
  [0, -35]
);

const heroOpacity = useTransform(
  scrollYProgress,
  [0, 0.12],
  [1, 0.5]
);

  // SECTION 02 SCROLL STORY
  const storyRef = useRef<HTMLElement>(null);

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const firstOpacity = useTransform(
    storyProgress,
    [0, 0.15, 0.35],
    [1, 1, 0]
  );

  const firstY = useTransform(
    storyProgress,
    [0, 0.3],
    [0, -45]
  );

  const secondOpacity = useTransform(
    storyProgress,
    [0.15, 0.4, 0.65],
    [0, 1, 1]
  );

  const secondY = useTransform(
    storyProgress,
    [0.15, 0.4],
    [55, 0]
  );

  const descriptionOpacity = useTransform(
    storyProgress,
    [0.35, 0.55, 0.75],
    [0, 1, 1]
  );

  const closingOpacity = useTransform(
    storyProgress,
    [0.65, 0.85],
    [0, 1]
  );

  const storyLineScale = useTransform(
    storyProgress,
    [0, 1],
    [0, 1]
  );

  // DIET DEMONSTRATION DATA
  const dietData: Record<
    string,
    {
      calories: string;
      protein: string;
      carbs: string;
      fats: string;
      meals: {
        time: string;
        name: string;
        description: string;
        calories: string;
        image: string;
      }[];
    }
  > = {
    Vegetarian: {
      calories: "2,000",
      protein: "120g",
      carbs: "220g",
      fats: "65g",
      meals: [
        {
          time: "08:00 AM",
          name: "Power breakfast",
          description: "Paneer bhurji, toast and curd",
          calories: "420 kcal",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
        },
        {
          time: "01:00 PM",
          name: "Balanced lunch",
          description: "Dal, roti, rice and vegetables",
          calories: "580 kcal",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
        },
        {
          time: "04:30 PM",
          name: "Evening snack",
          description: "Roasted chana and fresh fruit",
          calories: "250 kcal",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
        },
        {
          time: "08:00 PM",
          name: "Recovery dinner",
          description: "Tofu, vegetables and roti",
          calories: "550 kcal",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        },
      ],
    },

    Vegan: {
      calories: "2,000",
      protein: "110g",
      carbs: "230g",
      fats: "65g",
      meals: [
        {
          time: "08:00 AM",
          name: "Power breakfast",
          description: "Oats, soy milk and chia seeds",
          calories: "420 kcal",
          image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500",
        },
        {
          time: "01:00 PM",
          name: "Plant-powered lunch",
          description: "Chickpeas, quinoa and vegetables",
          calories: "580 kcal",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
        },
        {
          time: "04:30 PM",
          name: "Evening snack",
          description: "Roasted chickpeas and fruit",
          calories: "250 kcal",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
        },
        {
          time: "08:00 PM",
          name: "Recovery dinner",
          description: "Tofu, lentils and vegetables",
          calories: "550 kcal",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        },
      ],
    },

    "Non-Vegetarian": {
      calories: "2,000",
      protein: "140g",
      carbs: "210g",
      fats: "60g",
      meals: [
        {
          time: "08:00 AM",
          name: "Power breakfast",
          description: "Oats, Greek yogurt and fruit",
          calories: "400 kcal",
          image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500",
        },
        {
          time: "01:00 PM",
          name: "Protein lunch",
          description: "Grilled chicken, rice and vegetables",
          calories: "600 kcal",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
        },
        {
          time: "04:30 PM",
          name: "Evening snack",
          description: "Greek yogurt, nuts and fruit",
          calories: "250 kcal",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
        },
        {
          time: "08:00 PM",
          name: "Recovery dinner",
          description: "Fish, vegetables and rice",
          calories: "550 kcal",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        },
      ],
    },
  };

  const currentDiet = dietData[dietPreference];

  const navLinks = [
    ["Intelligence", "#intelligence"],
    ["Nutrition", "#nutrition"],
    ["Fitness", "#fitness"],
    ["Marketplace", "#store"],
  ];

  const faqs = [
    {
      question: "What exactly is VYTA?",
      answer:
        "VYTA is an AI-powered health companion designed to bring nutrition tracking, personalized meal planning, fitness, health insights and wellness shopping into one connected experience.",
    },
    {
      question: "How will AI food recognition work?",
      answer:
        "The planned experience lets users capture a meal and receive an estimated nutritional breakdown. Estimates can vary depending on ingredients, portion sizes and image quality.",
    },
    {
      question: "Can I follow a vegetarian diet?",
      answer:
        "Yes. VYTA is being designed to support vegetarian, vegan and non-vegetarian preferences, alongside different dietary goals.",
    },
    {
      question: "Will VYTA create workout plans?",
      answer:
        "The fitness experience is planned to include workout recommendations, exercise instructions, activity tracking and progress insights.",
    },
    {
      question: "Will my health data be private?",
      answer:
        "Privacy and responsible handling of personal health information will be essential to the product. Detailed data practices will be published before launch.",
    },
    {
      question: "When will VYTA launch?",
      answer:
        "VYTA is currently being developed. Join the early-access list to receive launch announcements and product updates.",
    },
    {
      question: "Will there be a VYTA Store?",
      answer:
        "The planned marketplace will bring together relevant fitness equipment, accessories, nutrition products and wellness essentials.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080a09] text-[#f5f6f0] overflow-x-clip">

      {/* GLOBAL PROGRESS */}

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#c6ff4d] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* =====================================
          NAVIGATION
      ===================================== */}

      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#080a09]/90 backdrop-blur-xl">

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[76px] flex items-center justify-between">

          <a href="#" className="text-3xl font-extrabold tracking-[-3px]">
            VYTA<span className="text-[#c6ff4d]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/65">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="hover:text-[#c6ff4d] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#register"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#c6ff4d] text-black px-6 py-3 text-sm font-bold hover:bg-white transition"
          >
            Get Early Access
            <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#101310] px-6 py-7 flex flex-col gap-6 border-t border-white/10">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#c6ff4d]"
              >
                {label}
              </a>
            ))}

            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="text-[#c6ff4d] font-bold"
            >
              Get Early Access
            </a>
          </div>
        )}

      </header>


      {/* =====================================
          01 — HERO
      ===================================== */}

      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center text-center px-5 pt-28 pb-24"
      >

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080a09]/50 via-[#080a09]/65 to-[#080a09]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#c6ff4d]/30 bg-[#c6ff4d]/10 px-5 py-2 text-xs tracking-[2px] uppercase text-[#c6ff4d] mb-10"
          >
            <Sparkles size={14} />
            The future of personal health
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.92] font-semibold tracking-[-0.075em]"
          >
            YOUR BODY.
            <br />
            <span className="text-[#c6ff4d]">YOUR DATA.</span>
            <br />
            YOUR VYTA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="max-w-2xl mx-auto mt-9 text-base md:text-xl text-white/65 leading-relaxed"
          >
            Understand what you eat. Discover what works.
            Train with purpose. Meet the intelligent health
            companion that brings your entire wellness journey together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >

            <a
              href="#register"
              className="rounded-full bg-[#c6ff4d] text-black px-9 py-5 font-bold flex items-center justify-center gap-3 hover:scale-105 transition"
            >
              Join the waitlist
              <ArrowRight size={18} />
            </a>

            <a
              href="#intelligence"
              className="rounded-full border border-white/25 px-9 py-5 text-white hover:bg-white/10 transition"
            >
              Discover VYTA
            </a>

          </motion.div>

        </motion.div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/50 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
          >
            Scroll to explore
            <ArrowDown size={16} />
          </motion.div>
        </div>

      </section>


      {/* =====================================
          02 — CINEMATIC STORY
      ===================================== */}

      <section
        ref={storyRef}
        id="intelligence"
        className="relative h-[250vh] md:h-[220vh] bg-[#080a09]"
      >

        <div className="sticky top-[76px] h-[calc(100svh-76px)] overflow-hidden flex items-center justify-center px-5 md:px-10">

          <motion.div
            style={{ opacity: storyProgress }}
            className="absolute w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-[#c6ff4d]/[0.06] blur-[130px] pointer-events-none"
          />

          <div className="relative z-10 max-w-5xl w-full mx-auto text-center">

            <motion.p
              style={{ opacity: firstOpacity }}
              className="text-[#c6ff4d] uppercase tracking-[3px] md:tracking-[5px] text-[10px] md:text-xs mb-7 md:mb-10"
            >
              A new perspective on health
            </motion.p>

            <motion.h2
              style={{ opacity: firstOpacity, y: firstY }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.065em] leading-[1.05]"
            >
              You're doing the work.
            </motion.h2>

            <motion.h2
              style={{ opacity: secondOpacity, y: secondY }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.065em] leading-[1.05] mt-3 text-[#c6ff4d]"
            >
              But are you understanding it?
            </motion.h2>

            <motion.p
              style={{ opacity: descriptionOpacity }}
              className="max-w-xl mx-auto mt-8 md:mt-12 text-sm sm:text-base md:text-xl text-white/50 leading-relaxed"
            >
              Calories in one app. Workouts in another.
              Diet plans you forget. Progress you can't understand.
            </motion.p>

            <motion.div
              style={{ opacity: closingOpacity }}
              className="mt-10 md:mt-14"
            >
              <p className="text-xl md:text-4xl font-semibold tracking-tight">
                Your health is connected.
              </p>
              <p className="text-xl md:text-4xl font-semibold tracking-tight text-[#c6ff4d] mt-2">
                Your tools should be too.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: closingOpacity }}
              className="flex justify-center mt-8"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#c6ff4d]/40 flex items-center justify-center text-[#c6ff4d] font-bold">
                V.
              </div>
            </motion.div>

          </div>

          <div className="absolute bottom-6 md:bottom-10 left-6 right-6 max-w-[680px] mx-auto">

            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                style={{
                  scaleX: storyLineScale,
                  transformOrigin: "left",
                }}
                className="h-full w-full bg-[#c6ff4d]"
              />
            </div>

            <div className="flex justify-between mt-3 text-[8px] md:text-[10px] uppercase tracking-[2px] md:tracking-[4px] text-white/35">
              <span>Understanding</span>
              <span>VYTA Intelligence</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          03 — FOOD INTELLIGENCE
      ===================================== */}

      <section
        id="nutrition"
        className="relative bg-[#101410] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1400px] mx-auto">

          <SectionHeading
            number="01"
            eyebrow="Food intelligence"
            title="Your food has a story."
            highlight="Know it."
            description="Forget searching endless food databases. Capture your meal and let AI estimate its nutritional breakdown in seconds."
          />

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            <Reveal className="relative min-h-[440px] md:min-h-[650px] rounded-[30px] overflow-hidden border border-white/10 group">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1400"
                alt="Nutritious meal"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/30" />

              <motion.div
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-[2px] bg-[#c6ff4d] shadow-[0_0_25px_#c6ff4d]"
              />

              <div className="absolute top-7 left-7 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-[#c6ff4d] animate-pulse" />
                <span className="text-xs uppercase tracking-widest">
                  AI food recognition
                </span>
              </div>

              <div className="absolute bottom-8 left-7 right-7">
                <p className="text-[#c6ff4d] text-xs uppercase tracking-[3px] mb-3">
                  Capture. Understand. Improve.
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold">
                  Every meal matters.
                </h3>
              </div>

            </Reveal>


            <Reveal delay={0.15} className="rounded-[30px] border border-white/10 bg-[#080a09] p-6 md:p-10 flex flex-col justify-between">

              <div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/40 text-xs tracking-[3px] uppercase">
                      AI nutrition report
                    </p>
                    <h3 className="text-2xl font-semibold mt-3">
                      Meal breakdown
                    </h3>
                  </div>
                  <Sparkles className="text-[#c6ff4d]" size={28} />
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-[#c6ff4d] text-black">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium opacity-70">
                      Estimated energy
                    </p>
                    <Flame size={22} />
                  </div>
                  <div className="flex items-end gap-3 mt-3">
                    <span className="text-6xl md:text-7xl font-bold">
                      640
                    </span>
                    <span className="text-lg mb-2">KCAL</span>
                  </div>
                  <p className="text-xs opacity-60 mt-2">
                    Illustrative meal estimate
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-white/40 text-xs tracking-[3px] uppercase mb-6">
                    Macronutrients
                  </p>

                  {[
                    { name: "Protein", value: "28g", width: "70%" },
                    { name: "Carbohydrates", value: "72g", width: "85%" },
                    { name: "Healthy fats", value: "22g", width: "45%" },
                  ].map((item, index) => (
                    <div key={item.name} className="mb-7">
                      <div className="flex justify-between mb-3 text-sm">
                        <span className="text-white/70">{item.name}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                      <div className="h-[6px] rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.2 }}
                          className="h-full rounded-full bg-[#c6ff4d]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="mt-8 pt-7 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-white/60">
                  Smarter nutrition tracking
                </span>
                <Check className="text-[#c6ff4d]" size={20} />
              </div>

            </Reveal>

          </div>

          <p className="text-center text-white/30 text-xs mt-8">
            Nutrition values shown are illustrative estimates.
          </p>

        </div>
      </section>


      {/* =====================================
          04 — PERSONALIZED NUTRITION
      ===================================== */}

      <section
        id="diet"
        className="relative bg-[#080a09] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="absolute top-40 right-0 w-[450px] h-[450px] rounded-full bg-[#c6ff4d]/[0.035] blur-[150px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto">

          <SectionHeading
            number="02"
            eyebrow="Personalized nutrition"
            title="Not another generic diet."
            highlight="Your diet."
            description="Your body, your goals, your food preferences. VYTA brings them together to create a nutrition plan that fits your everyday life."
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">

            {/* PERSONALIZATION */}

            <Reveal className="rounded-[28px] border border-white/10 bg-[#101410] p-7 md:p-9">

              <p className="text-white/40 text-xs uppercase tracking-[3px]">
                Your profile
              </p>
              <h3 className="text-2xl font-semibold mt-3">
                Make it yours.
              </h3>

              <div className="mt-10">
                <p className="text-white/40 text-xs uppercase tracking-[2px] mb-4">
                  Nutrition preference
                </p>

                <div className="grid gap-3">

                  {[
                    { name: "Vegetarian", icon: Leaf, desc: "Plant-based with dairy" },
                    { name: "Vegan", icon: Salad, desc: "Entirely plant-based" },
                    { name: "Non-Vegetarian", icon: Utensils, desc: "Includes meat and fish" },
                  ].map((option) => {
                    const Icon = option.icon;
                    const selected = dietPreference === option.name;

                    return (
                      <button
                        key={option.name}
                        onClick={() => setDietPreference(option.name)}
                        className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                          selected
                            ? "border-[#c6ff4d] bg-[#c6ff4d]/[0.08]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/30"
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                          selected ? "bg-[#c6ff4d] text-black" : "bg-white/5 text-white/50"
                        }`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{option.name}</p>
                          <p className="text-white/40 text-xs mt-1">{option.desc}</p>
                        </div>
                        {selected && <Check size={19} className="text-[#c6ff4d]" />}
                      </button>
                    );
                  })}

                </div>
              </div>

              <div className="mt-9 p-5 rounded-2xl bg-[#080a09] border border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-[2px]">
                  Sample daily target
                </p>
                <p className="text-4xl font-bold mt-5">
                  {currentDiet.calories}
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Calories / day
                </p>
              </div>

            </Reveal>


            {/* MEAL PLAN */}

            <Reveal delay={0.15} className="rounded-[28px] border border-white/10 bg-[#101410] p-6 md:p-9">

              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[3px]">
                    Your daily nutrition
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                    The daily plan.
                  </h3>
                </div>

                <span className="rounded-full border border-[#c6ff4d]/30 bg-[#c6ff4d]/10 text-[#c6ff4d] px-4 py-2 text-xs">
                  {dietPreference}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-9">
                {[
                  { label: "Protein", value: currentDiet.protein },
                  { label: "Carbs", value: currentDiet.carbs },
                  { label: "Fats", value: currentDiet.fats },
                ].map((macro) => (
                  <div key={macro.label} className="bg-[#080a09] rounded-xl p-4 border border-white/5">
                    <p className="text-white/40 text-[10px] uppercase">
                      {macro.label}
                    </p>
                    <p className="text-xl md:text-2xl font-bold mt-2">
                      {macro.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="flex justify-between mb-6">
                  <p className="text-white/40 text-xs uppercase tracking-[3px]">
                    Your meals
                  </p>
                  <span className="text-white/30 text-xs">4 meals</span>
                </div>

                <div className="space-y-4">
                  {currentDiet.meals.map((meal, index) => (
                    <motion.div
                      key={`${dietPreference}-${meal.name}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-[#080a09] border border-white/5 hover:border-[#c6ff4d]/30 transition"
                    >
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-[76px] h-[76px] shrink-0 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#c6ff4d] text-[10px] uppercase tracking-[2px]">
                          {meal.time}
                        </p>
                        <h4 className="font-semibold text-sm md:text-base mt-1">
                          {meal.name}
                        </h4>
                        <p className="text-white/40 text-xs mt-1">
                          {meal.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs md:text-sm font-semibold">
                          {meal.calories}
                        </p>
                        <ChevronRight size={16} className="text-white/30 ml-auto mt-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-white/10 flex justify-between text-xs text-white/40">
                <span>Example daily schedule</span>
                <span className="text-[#c6ff4d]">Personalized concept</span>
              </div>

            </Reveal>

          </div>

          <Reveal className="mt-28 text-center">
            <h3 className="text-3xl md:text-6xl font-semibold tracking-[-0.06em]">
              Healthy eating.
              <br />
              <span className="text-[#c6ff4d]">
                Without the guesswork.
              </span>
            </h3>
          </Reveal>

        </div>
      </section>


      {/* =====================================
          05 — FITNESS INTELLIGENCE
      ===================================== */}

      <section
        id="fitness"
        className="bg-[#101410] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1400px] mx-auto">

          <SectionHeading
            number="03"
            eyebrow="Fitness intelligence"
            title="Train smarter."
            highlight="Not just harder."
            description="Workouts built around your goals, your fitness level and your available equipment. Every session has a purpose."
          />

          <div className="grid md:grid-cols-3 gap-5">

            {[
              {
                name: "Strength training",
                subtitle: "Build strength and muscle",
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900",
                tag: "BUILD",
                icon: Dumbbell,
              },
              {
                name: "Cardio & endurance",
                subtitle: "Improve stamina and fitness",
                image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900",
                tag: "PERFORM",
                icon: Activity,
              },
              {
                name: "Mobility & recovery",
                subtitle: "Move better and recover",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
                tag: "RECOVER",
                icon: Heart,
              },
            ].map((workout, index) => {
              const Icon = workout.icon;

              return (
                <Reveal key={workout.name} delay={index * 0.1}>
                  <div className="relative h-[450px] md:h-[560px] rounded-[26px] overflow-hidden group border border-white/10">

                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="bg-[#c6ff4d] text-black px-4 py-2 rounded-full text-[10px] font-bold tracking-widest">
                        {workout.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-7 right-7">
                      <Icon className="text-[#c6ff4d] mb-5" size={28} />
                      <h3 className="text-2xl md:text-3xl font-semibold">
                        {workout.name}
                      </h3>
                      <p className="text-white/55 mt-2 text-sm">
                        {workout.subtitle}
                      </p>
                    </div>

                  </div>
                </Reveal>
              );
            })}

          </div>


          {/* WORKOUT PREVIEW */}

          <Reveal className="mt-12 rounded-[28px] border border-white/10 bg-[#080a09] p-7 md:p-12">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <p className="text-[#c6ff4d] text-xs tracking-[3px] uppercase">
                  Your workout preview
                </p>

                <h3 className="text-3xl md:text-5xl font-semibold mt-5 tracking-tight">
                  A session with purpose.
                </h3>

                <p className="text-white/45 mt-5 leading-relaxed">
                  Follow structured sessions, understand every exercise
                  and track your training consistency.
                </p>

                <div className="flex gap-6 mt-8">
                  <div>
                    <p className="text-3xl font-bold">45</p>
                    <p className="text-white/40 text-xs mt-1">Minutes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">5</p>
                    <p className="text-white/40 text-xs mt-1">Exercises</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">3</p>
                    <p className="text-white/40 text-xs mt-1">Sets each</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Barbell squat", "3 sets × 10 reps"],
                  ["Bench press", "3 sets × 10 reps"],
                  ["Lat pulldown", "3 sets × 12 reps"],
                  ["Shoulder press", "3 sets × 12 reps"],
                  ["Plank", "3 sets × 45 sec"],
                ].map(([name, details], index) => (
                  <div key={name} className="flex items-center gap-4 p-4 rounded-xl bg-[#101410] border border-white/5">
                    <span className="text-[#c6ff4d] text-sm font-bold">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{name}</p>
                      <p className="text-white/40 text-xs mt-1">{details}</p>
                    </div>
                    <Check size={17} className="text-white/30" />
                  </div>
                ))}
              </div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================
          06 — HEALTH DASHBOARD
      ===================================== */}

      <section
        id="dashboard"
        className="bg-[#080a09] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1400px] mx-auto">

          <SectionHeading
            number="04"
            eyebrow="Your health dashboard"
            title="See the bigger picture."
            highlight="Every day."
            description="Your health is more than one number. Understand your activity, nutrition, body trends, sleep and consistency in one place."
          />

          <Reveal className="rounded-[30px] border border-white/10 bg-[#101410] p-5 md:p-10">

            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[3px]">
                  VYTA overview
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                  Your daily snapshot
                </h3>
              </div>

              <span className="text-xs border border-[#c6ff4d]/30 rounded-full px-4 py-2 text-[#c6ff4d]">
                Sample dashboard
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {[
                { label: "Calories consumed", value: "1,640", unit: "kcal", icon: Flame, progress: "82%" },
                { label: "Protein intake", value: "92", unit: "grams", icon: Apple, progress: "77%" },
                { label: "Daily steps", value: "8,420", unit: "steps", icon: Footprints, progress: "84%" },
                { label: "Workout", value: "45", unit: "minutes", icon: Dumbbell, progress: "75%" },
              ].map((metric) => {
                const Icon = metric.icon;

                return (
                  <div key={metric.label} className="bg-[#080a09] border border-white/5 rounded-2xl p-6">
                    <div className="flex justify-between">
                      <Icon className="text-[#c6ff4d]" size={22} />
                      <TrendingUp className="text-white/20" size={18} />
                    </div>
                    <p className="text-white/40 text-xs mt-7">
                      {metric.label}
                    </p>
                    <p className="text-3xl font-bold mt-2">
                      {metric.value}
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      {metric.unit}
                    </p>
                    <div className="h-1.5 rounded-full bg-white/10 mt-5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#c6ff4d]"
                        style={{ width: metric.progress }}
                      />
                    </div>
                  </div>
                );
              })}

            </div>


            {/* PROGRESS GRAPH */}

            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 mt-6">

              <div className="rounded-2xl bg-[#080a09] border border-white/5 p-6 md:p-8">

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[2px]">
                      Activity overview
                    </p>
                    <h4 className="text-xl font-semibold mt-2">
                      Weekly consistency
                    </h4>
                  </div>
                  <Activity className="text-[#c6ff4d]" />
                </div>

                <div className="flex items-end justify-between gap-3 h-48 mt-10">
                  {[
                    ["M", 45],
                    ["T", 70],
                    ["W", 55],
                    ["T", 85],
                    ["F", 65],
                    ["S", 95],
                    ["S", 60],
                  ].map(([day, value], index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                      <div
                        className="w-full max-w-[48px] rounded-t-lg bg-[#c6ff4d]"
                        style={{ height: `${value}%`, opacity: 0.35 + index * 0.08 }}
                      />
                      <span className="text-white/35 text-xs">{day}</span>
                    </div>
                  ))}
                </div>

              </div>


              <div className="rounded-2xl bg-[#c6ff4d] text-black p-6 md:p-8 flex flex-col justify-between">

                <div>
                  <Sparkles size={27} />
                  <p className="text-xs uppercase tracking-[2px] mt-7 opacity-60">
                    Your weekly insight
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Progress is built through consistency.
                  </h4>
                  <p className="text-sm opacity-65 mt-5">
                    Understand your patterns and celebrate
                    the habits you maintain.
                  </p>
                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================
          07 — VYTA AI
      ===================================== */}

      <section
        id="ai"
        className="relative bg-[#101410] py-28 md:py-40 px-5 md:px-12 overflow-hidden"
      >

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c6ff4d]/[0.06] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto">

          <SectionHeading
            number="05"
            eyebrow="VYTA intelligence"
            title="Your health has a"
            highlight="thinking partner."
            description="An intelligent companion designed to understand the relationship between what you eat, how you move and how you progress."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* AI VISUAL */}

            <Reveal className="relative min-h-[450px] md:min-h-[590px] rounded-[30px] border border-white/10 bg-[#080a09] overflow-hidden flex items-center justify-center">

              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-[#c6ff4d]/10 rounded-full" />
              <div className="absolute w-[210px] h-[210px] md:w-[310px] md:h-[310px] border border-[#c6ff4d]/20 rounded-full" />
              <div className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] border border-[#c6ff4d]/30 rounded-full" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[330px] h-[330px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-[#c6ff4d]/30"
              />

              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative z-10 w-28 h-28 md:w-40 md:h-40 rounded-full bg-[#c6ff4d] text-black flex items-center justify-center shadow-[0_0_100px_rgba(198,255,77,0.25)]"
              >
                <Brain size={55} />
              </motion.div>

              {[
                { icon: Apple, x: "12%", y: "20%" },
                { icon: Dumbbell, x: "78%", y: "25%" },
                { icon: Heart, x: "15%", y: "75%" },
                { icon: Activity, x: "80%", y: "75%" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    style={{ left: item.x, top: item.y }}
                    className="absolute w-12 h-12 md:w-16 md:h-16 rounded-2xl border border-[#c6ff4d]/30 bg-[#c6ff4d]/10 backdrop-blur-lg flex items-center justify-center text-[#c6ff4d]"
                  >
                    <Icon size={25} />
                  </motion.div>
                );
              })}

              <div className="absolute bottom-7 text-center">
                <p className="text-[#c6ff4d] text-xs tracking-[4px] uppercase">
                  VYTA AI
                </p>
                <p className="text-white/40 text-xs mt-2">
                  One connected intelligence
                </p>
              </div>

            </Reveal>


            {/* AI CAPABILITIES */}

            <div className="space-y-5">

              {[
                {
                  icon: Camera,
                  title: "Understand your meals",
                  desc: "Explore nutrition estimates and understand your daily food choices.",
                },
                {
                  icon: Dumbbell,
                  title: "Guide your workouts",
                  desc: "Explore training recommendations based on your goals and activity.",
                },
                {
                  icon: TrendingUp,
                  title: "Understand your progress",
                  desc: "Connect your habits and progress to identify meaningful patterns.",
                },
                {
                  icon: Heart,
                  title: "Support your wellness",
                  desc: "Bring sleep, recovery, hydration and activity into one picture.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <Reveal key={feature.title} delay={index * 0.1}>
                    <div className="flex gap-5 p-6 rounded-2xl border border-white/10 bg-[#080a09] hover:border-[#c6ff4d]/40 transition">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#c6ff4d]/10 text-[#c6ff4d] flex items-center justify-center">
                        <Icon size={23} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {feature.title}
                        </h3>
                        <p className="text-white/40 text-sm mt-2 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

            </div>

          </div>

          <p className="text-center text-white/30 text-xs mt-10">
            AI capabilities shown are planned product experiences, not live services.
          </p>

        </div>
      </section>


      {/* =====================================
          08 — VYTA STORE
      ===================================== */}

      <section
        id="store"
        className="bg-[#080a09] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1400px] mx-auto">

          <SectionHeading
            number="06"
            eyebrow="VYTA marketplace"
            title="Everything your"
            highlight="journey needs."
            description="A curated wellness marketplace connecting your health goals with relevant products, equipment and everyday essentials."
          />

          <div className="grid md:grid-cols-3 gap-5">

            {[
              {
                name: "Fitness essentials",
                desc: "Training equipment and accessories",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900",
                label: "TRAIN BETTER",
              },
              {
                name: "Nutrition essentials",
                desc: "Meal preparation and nutrition products",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
                label: "EAT SMARTER",
              },
              {
                name: "Recovery essentials",
                desc: "Recovery, mobility and wellness products",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900",
                label: "RECOVER BETTER",
              },
            ].map((product, index) => (
              <Reveal key={product.name} delay={index * 0.1}>
                <div className="relative h-[390px] md:h-[490px] rounded-[25px] overflow-hidden group border border-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <span className="text-[#c6ff4d] text-[10px] tracking-[3px] font-bold">
                      {product.label}
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-white/55 text-sm mt-2">
                      {product.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-5 text-[#c6ff4d] text-sm">
                      Explore category <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>


          {/* CROSS SELLING CONCEPT */}

          <Reveal className="mt-12 rounded-[28px] bg-[#c6ff4d] text-black p-8 md:p-14">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>
                <p className="text-black/50 text-xs tracking-[3px] uppercase">
                  Shopping that makes sense
                </p>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-5">
                  Products that fit your goals.
                </h3>
                <p className="text-black/65 mt-5 leading-relaxed">
                  Discover relevant products based on your interests,
                  fitness journey and wellness preferences.
                </p>
              </div>

              <div className="space-y-3">

                {[
                  ["Strength training", "Training equipment"],
                  ["Nutrition tracking", "Meal preparation tools"],
                  ["Recovery routine", "Mobility accessories"],
                ].map(([goalName, recommendation]) => (
                  <div key={goalName} className="flex justify-between items-center gap-3 bg-black/5 rounded-xl p-5">
                    <div>
                      <p className="font-bold text-sm">{goalName}</p>
                      <p className="text-black/55 text-xs mt-1">
                        {recommendation}
                      </p>
                    </div>
                    <ArrowRight size={19} />
                  </div>
                ))}

              </div>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================
          09 — CONNECTED ECOSYSTEM
      ===================================== */}

      <section
        id="ecosystem"
        className="bg-[#101410] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1200px] mx-auto text-center">

          <Reveal>
            <p className="text-[#c6ff4d] text-xs tracking-[4px] uppercase mb-8">
              07 / One connected ecosystem
            </p>

            <h2 className="text-5xl md:text-8xl font-semibold tracking-[-0.08em] leading-[1.02]">
              Everything
              <br />
              <span className="text-[#c6ff4d]">works together.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-white/45 text-base md:text-xl mt-8 leading-relaxed">
              Food, fitness, recovery, insights and products.
              One connected approach to your health.
            </p>
          </Reveal>


          {/* ECOSYSTEM DIAGRAM */}

          <Reveal className="mt-20 relative">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

              {[
                { name: "Nutrition", icon: Apple, desc: "What you eat" },
                { name: "Fitness", icon: Dumbbell, desc: "How you train" },
                { name: "Recovery", icon: Moon, desc: "How you recover" },
                { name: "Tracking", icon: Activity, desc: "How you progress" },
                { name: "AI insights", icon: Brain, desc: "What you understand" },
                { name: "Marketplace", icon: ShoppingBag, desc: "What supports you" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-white/10 bg-[#080a09] p-6 md:p-9 text-left hover:border-[#c6ff4d]/50 transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#c6ff4d]/10 flex items-center justify-center text-[#c6ff4d]">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mt-7">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-xs mt-2">
                      {item.desc}
                    </p>
                    <p className="text-white/15 text-xs mt-6">
                      0{index + 1}
                    </p>
                  </motion.div>
                );
              })}

            </div>

            <div className="mt-8 p-8 md:p-12 rounded-2xl bg-[#c6ff4d] text-black">

              <Sparkles size={30} className="mx-auto" />

              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-5">
                One VYTA.
                <br />
                One connected journey.
              </h3>

            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================
          10 — TRUST & FAQ
      ===================================== */}

      <section
        id="faq"
        className="bg-[#080a09] py-28 md:py-40 px-5 md:px-12"
      >

        <div className="max-w-[1100px] mx-auto">

          <Reveal className="text-center mb-16">

            <p className="text-[#c6ff4d] text-xs tracking-[4px] uppercase mb-8">
              08 / Questions and clarity
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.07em]">
              Before we
              <br />
              <span className="text-[#c6ff4d]">get started.</span>
            </h2>

            <p className="text-white/40 mt-6">
              Everything you should know about VYTA.
            </p>

          </Reveal>


          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = faqOpen === index;

              return (
                <div
                  key={faq.question}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-[#101410]"
                >

                  <button
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    className="w-full p-6 md:p-7 flex items-center justify-between text-left gap-5"
                  >

                    <span className="text-base md:text-lg font-semibold">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-[#c6ff4d] shrink-0"
                    >
                      <Plus size={23} />
                    </motion.div>

                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-7 pb-7 text-white/45 text-sm md:text-base leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>

                </div>
              );

            })}

          </div>


          <Reveal className="mt-16 grid sm:grid-cols-3 gap-5">

            {[
              { icon: ShieldCheck, title: "Privacy matters", desc: "Responsible health data practices." },
              { icon: Heart, title: "People first", desc: "Designed around real-life needs." },
              { icon: Sparkles, title: "Intelligence", desc: "Insights that help you understand." },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="text-center p-6">
                  <Icon className="text-[#c6ff4d] mx-auto" size={27} />
                  <h3 className="font-semibold mt-4">{item.title}</h3>
                  <p className="text-white/35 text-xs mt-2">{item.desc}</p>
                </div>
              );
            })}

          </Reveal>

        </div>
      </section>


      {/* =====================================
          11 — EARLY ACCESS REGISTRATION
      ===================================== */}

      <section
        id="register"
        className="relative bg-[#c6ff4d] text-black py-28 md:py-40 px-5 md:px-12 overflow-hidden"
      >

        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full border border-black/10" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full border border-black/10" />

        <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT MESSAGE */}

          <Reveal>

            <p className="text-black/50 text-xs tracking-[4px] uppercase mb-8">
              09 / Early access
            </p>

            <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[-0.09em] leading-[0.95]">
              Your next
              <br />
              chapter
              <br />
              starts here.
            </h2>

            <p className="text-black/65 text-lg mt-8 max-w-md leading-relaxed">
              Be among the first to experience a more connected
              approach to personal health.
            </p>

            <div className="flex items-center gap-3 mt-10">
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
                <Check size={19} />
              </div>
              <p className="text-sm font-semibold">
                Early access launch updates
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
                <Star size={19} />
              </div>
              <p className="text-sm font-semibold">
                Be part of the founding community
              </p>
            </div>

          </Reveal>


          {/* REGISTRATION FORM */}

          <Reveal delay={0.15}>

            <div className="bg-[#080a09] text-white rounded-[28px] p-7 md:p-10 shadow-2xl">

              {!submitted ? (
                <>

                  <p className="text-[#c6ff4d] text-xs uppercase tracking-[3px]">
                    Join the waitlist
                  </p>

                  <h3 className="text-3xl font-semibold mt-4">
                    Get early access.
                  </h3>

                  <p className="text-white/40 text-sm mt-3">
                    Tell us a little about yourself.
                  </p>


                  <form
                    className="mt-9 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >

                    <div>
                      <label className="block text-xs text-white/50 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-[#c6ff4d] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-[#c6ff4d] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 mb-2">
                        Phone number (optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-[#c6ff4d] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 mb-2">
                        Your primary goal
                      </label>

                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full bg-[#151915] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-[#c6ff4d] transition"
                      >
                        <option>Weight management</option>
                        <option>Build muscle</option>
                        <option>Improve fitness</option>
                        <option>Eat healthier</option>
                        <option>Overall wellness</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-white/50 mb-2">
                        Diet preference
                      </label>

                      <select
                        value={dietPreference}
                        onChange={(e) => setDietPreference(e.target.value)}
                        className="w-full bg-[#151915] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-[#c6ff4d] transition"
                      >
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                        <option>Non-Vegetarian</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#c6ff4d] text-black py-5 font-bold flex items-center justify-center gap-3 hover:bg-white transition"
                    >
                      Reserve my early access
                      <ArrowRight size={18} />
                    </button>

                    <p className="text-center text-white/25 text-[10px] leading-relaxed">
                      By registering, you agree to receive VYTA launch
                      updates. You can opt out of communications.
                    </p>

                  </form>

                </>
              ) : (

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >

                  <div className="w-20 h-20 rounded-full bg-[#c6ff4d] text-black flex items-center justify-center mx-auto">
                    <Check size={38} />
                  </div>

                  <h3 className="text-3xl font-bold mt-8">
                    You're on the list.
                  </h3>

                  <p className="text-white/45 mt-4 leading-relaxed">
                    Thank you for your interest in VYTA.
                    We're excited to share what's coming.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[#c6ff4d] text-sm underline"
                  >
                    Back to registration
                  </button>

                </motion.div>

              )}

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="bg-[#080a09] border-t border-white/10 px-6 md:px-12 py-14">

        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div>
              <a href="#" className="text-4xl font-black tracking-[-4px]">
                VYTA<span className="text-[#c6ff4d]">.</span>
              </a>

              <p className="text-white/35 text-sm mt-5 max-w-sm leading-relaxed">
                A new perspective on personal health.
                Your body, your data, your journey.
              </p>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[2px] mb-5">
                  Explore
                </p>
                <div className="flex flex-col gap-4 text-sm text-white/60">
                  <a href="#intelligence" className="hover:text-[#c6ff4d]">Intelligence</a>
                  <a href="#nutrition" className="hover:text-[#c6ff4d]">Nutrition</a>
                  <a href="#fitness" className="hover:text-[#c6ff4d]">Fitness</a>
                  <a href="#dashboard" className="hover:text-[#c6ff4d]">Dashboard</a>
                </div>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[2px] mb-5">
                  Discover
                </p>
                <div className="flex flex-col gap-4 text-sm text-white/60">
                  <a href="#ai" className="hover:text-[#c6ff4d]">VYTA AI</a>
                  <a href="#store" className="hover:text-[#c6ff4d]">Marketplace</a>
                  <a href="#ecosystem" className="hover:text-[#c6ff4d]">Ecosystem</a>
                  <a href="#faq" className="hover:text-[#c6ff4d]">FAQ</a>
                </div>
              </div>

              <div>
                <p className="text-white/30 text-xs uppercase tracking-[2px] mb-5">
                  Get started
                </p>
                <div className="flex flex-col gap-4 text-sm text-white/60">
                  <a href="#register" className="hover:text-[#c6ff4d]">Early access</a>
                  <a href="#home" className="hover:text-[#c6ff4d]">Back to top</a>
                </div>
              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/25 text-xs">

            <p>© 2026 VYTA. All rights reserved.</p>

            <p>
              Designed for a more connected health journey.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

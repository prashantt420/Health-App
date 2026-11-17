 "use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Apple,
  Brain,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Dumbbell,
  Flame,
  Heart,
  Leaf,
  Menu,
  Moon,
  Plus,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Watch,
  X,
  Zap,
  Droplets,
  Footprints,
} from "lucide-react";

const lime = "#C6FF4D";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42, scale: 0.985, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#c6ff4d] md:text-xs"
    >
      <motion.span initial={{ width: 0 }} whileInView={{ width: 28 }} viewport={{ once: true }} transition={{ duration: .8, delay: .12 }} className="h-px bg-[#c6ff4d]" />
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 35% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true }}
        transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance text-4xl font-semibold leading-[.98] tracking-[-.065em] text-[#f5f6f2] sm:text-5xl md:text-7xl"
      >
        {title} {accent && <span className="text-[#c6ff4d]">{accent}</span>}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .75, delay: .18 }}
        className={`mt-6 max-w-2xl text-sm leading-7 text-white/48 md:text-base md:leading-8 ${center ? "mx-auto" : ""}`}
      >
        {description}
      </motion.p>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: "rgba(198,255,77,.32)", transition: { duration: .25 } }}
      className={`rounded-[24px] border border-white/[.12] bg-white/[.055] shadow-[inset_0_1px_0_rgba(255,255,255,.09),0_24px_80px_rgba(0,0,0,.24)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

function DashboardMockup() {
  const bars = [36, 58, 44, 78, 54, 92, 66, 83, 48, 72, 60, 100, 68, 88];
  return (
    <div className="relative mx-auto w-full max-w-[1120px]">
      <div className="absolute -inset-8 rounded-[50%] bg-[#a6ff00]/[.10] blur-[90px]" />
      <div className="relative overflow-hidden rounded-t-[26px] border border-white/15 bg-[#10120f] shadow-[0_40px_120px_rgba(0,0,0,.65)]">
        <div className="flex h-14 items-center justify-between border-b border-white/10 px-4 md:px-7">
          <div className="flex items-center gap-2 text-sm font-bold tracking-tight">VYTA<span className="text-[#c6ff4d]">.</span></div>
          <div className="hidden items-center gap-6 text-[10px] text-white/35 sm:flex">
            <span className="text-[#c6ff4d]">Overview</span><span>Nutrition</span><span>Activity</span><span>Recovery</span>
          </div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c6ff4d] shadow-[0_0_12px_#c6ff4d]" /><span className="text-[9px] uppercase tracking-widest text-white/45">Your health space</span></div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-[1.2fr_.8fr] md:p-7">
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div><p className="text-[10px] uppercase tracking-[.2em] text-white/35">Monday, your overview</p><h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Good morning.</h3></div>
              <span className="rounded-full border border-[#c6ff4d]/20 bg-[#c6ff4d]/10 px-3 py-1.5 text-[9px] text-[#c6ff4d]">DAILY PULSE</span>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[["1,640","KCAL IN",Flame],["8,420","STEPS",Footprints],["7h 42m","SLEEP",Moon]].map(([value,label,Icon]: any) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[.045] p-3 md:p-4">
                  <Icon size={15} className="mb-4 text-[#c6ff4d]" />
                  <div className="text-lg font-semibold md:text-2xl">{value}</div><div className="mt-1 text-[8px] tracking-[.18em] text-white/35 md:text-[9px]">{label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4 md:p-5">
              <div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[.2em] text-white/35">Activity rhythm</p><p className="mt-1 text-sm font-medium">Movement this week</p></div><span className="text-[10px] text-[#c6ff4d]">+12.8%</span></div>
              <div className="mt-5 flex h-24 items-end gap-1.5 md:h-32 md:gap-2">{bars.map((v,i)=><motion.div key={i} initial={{height:0}} whileInView={{height:`${v}%`}} viewport={{once:true}} transition={{duration:.65,delay:i*.035}} className={`flex-1 rounded-t-md ${i===11?"bg-[#c6ff4d]":"bg-white/15"}`} />)}</div>
              <div className="mt-3 flex justify-between text-[8px] uppercase tracking-widest text-white/25"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#c6ff4d]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(198,255,77,.15),transparent_55%),rgba(255,255,255,.035)] p-5 md:p-6">
              <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.2em] text-white/40">Your daily focus</span><Target size={16} className="text-[#c6ff4d]"/></div>
              <div className="mt-7 text-4xl font-semibold tracking-tight">72<span className="text-lg text-white/35">%</span></div><p className="mt-1 text-xs text-white/45">A little progress, every day.</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div initial={{width:0}} whileInView={{width:"72%"}} viewport={{once:true}} transition={{duration:1.1}} className="h-full rounded-full bg-[#c6ff4d]"/></div>
              <div className="mt-5 flex items-center gap-2 text-[10px] text-[#c6ff4d]"><Check size={13}/> Consistency is building</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
              <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.2em] text-white/35">AI companion</span><Sparkles size={15} className="text-[#c6ff4d]"/></div>
              <p className="mt-5 text-lg font-medium leading-snug">Your week is taking shape.</p>
              <p className="mt-2 text-xs leading-6 text-white/40">You have been moving more consistently. Keep your recovery in focus today.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#c6ff4d] px-3 py-2 text-[9px] font-bold text-black">View insight <ArrowUpRight size={12}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitVisual() {
  const nodes = [
    { label: "Nutrition", icon: Apple, x: "50%", y: "2%" },
    { label: "Movement", icon: Activity, x: "84%", y: "25%" },
    { label: "Recovery", icon: Moon, x: "84%", y: "72%" },
    { label: "Mindset", icon: Brain, x: "50%", y: "91%" },
    { label: "Hydration", icon: Droplets, x: "16%", y: "72%" },
    { label: "Progress", icon: Target, x: "16%", y: "25%" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div animate={{rotate:360}} transition={{duration:70,repeat:Infinity,ease:"linear"}} className="absolute inset-[8%] rounded-full border border-dashed border-[#c6ff4d]/20"/>
      <motion.div animate={{rotate:-360}} transition={{duration:95,repeat:Infinity,ease:"linear"}} className="absolute inset-[21%] rounded-full border border-white/10"/>
      <div className="absolute inset-[34%] rounded-full bg-[#c6ff4d]/10 blur-3xl"/>
      <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full border border-[#c6ff4d]/40 bg-[#c6ff4d] text-black shadow-[0_0_90px_rgba(198,255,77,.28)]">
        <span className="text-4xl font-black tracking-[-.08em]">V.</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[.2em]">One connected you</span>
      </div>
      {nodes.map(({label,icon:Icon,x,y},i)=>(
        <motion.div key={label} animate={{y:[0,-8,0]}} transition={{duration:3.5+i*.35,repeat:Infinity,ease:"easeInOut",delay:i*.2}} style={{left:x,top:y,transform:"translate(-50%,-50%)"}} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#171a14]/90 shadow-[0_10px_35px_rgba(0,0,0,.4)] backdrop-blur-xl md:h-16 md:w-16"><Icon className="text-[#c6ff4d]" size={22}/></div>
          <span className="text-[8px] uppercase tracking-[.15em] text-white/45 md:text-[9px]">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [goal,setGoal] = useState("Build healthier habits");
  const [diet,setDiet] = useState("Vegetarian");
  const [submitted,setSubmitted] = useState(false);
  const [faqOpen,setFaqOpen] = useState<number|null>(0);
  const [activeFeature,setActiveFeature] = useState(0);
  const {scrollYProgress} = useScroll();
  const progress = useSpring(scrollYProgress,{stiffness:100,damping:30,mass:.2});

  const nav = [["Product","#product"],["Nutrition","#nutrition"],["Fitness","#fitness"],["Store","#store"]];

  const features = [
    {n:"01",title:"Smart nutrition",desc:"Understand what is on your plate and make more informed choices with meal insights and flexible planning.",icon:Apple,tag:"EAT WITH INTENTION"},
    {n:"02",title:"Adaptive fitness",desc:"Build routines around your goals, your ability and your real life. Progress at a pace you can sustain.",icon:Dumbbell,tag:"MOVE WITH PURPOSE"},
    {n:"03",title:"Recovery intelligence",desc:"Bring sleep, hydration and daily recovery habits into the same picture as your training.",icon:Moon,tag:"RECOVER WITH CLARITY"},
  ];

  const faqs = [
    ["What is VYTA?","VYTA is being designed as an AI-powered health companion that brings nutrition, fitness, recovery and personal progress into one connected experience."],
    ["Is the AI food scanner available now?","The food-scanning experience shown here is a product concept. Nutrition estimates will need to be checked and adjusted by users, and may vary with ingredients and portion sizes."],
    ["Can I choose my diet preference?","The planned experience includes vegetarian, vegan and non-vegetarian preferences, with meal ideas shaped around individual goals."],
    ["Will VYTA include workouts?","Yes. The planned fitness experience includes goal-based workout guidance, activity tracking and progress insights."],
    ["Does VYTA connect to wearables?","Wearable and health-platform connections are part of the product direction. Supported devices and integrations will be confirmed closer to launch."],
    ["When will VYTA launch?","VYTA is in development. Join the early-access list to hear about product progress and launch availability."],
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#070807] text-[#f5f6f2] selection:bg-[#c6ff4d] selection:text-black">
      <motion.div style={{scaleX:progress}} className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#c6ff4d]"/>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-5">
        <div className="mx-auto flex h-[66px] max-w-[1450px] items-center justify-between rounded-full border border-white/[.13] bg-[#0a0b09]/75 px-5 shadow-[0_12px_50px_rgba(0,0,0,.35)] backdrop-blur-2xl md:px-8">
          <a href="#home" className="text-2xl font-black tracking-[-.09em] md:text-[27px]">VYTA<span className="text-[#c6ff4d]">.</span></a>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 md:flex">
            {nav.map(([label,href])=><motion.a key={href} href={href} whileHover={{ y: -2, color: "#ffffff" }} whileTap={{ scale: .96 }} className="rounded-full px-5 py-2.5 text-xs text-white/65 transition hover:bg-white/10">{label}</motion.a>)}
            <a href="#ecosystem" className="rounded-full px-5 py-2.5 text-xs text-white/65 transition hover:bg-white/10 hover:text-white">Ecosystem</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#faq" className="rounded-full bg-white/[.08] px-5 py-3 text-xs font-medium text-white/80 transition hover:bg-white/15">Explore</a>
            <motion.a href="#register" whileHover={{ scale: 1.045, boxShadow: "0 0 35px rgba(198,255,77,.22)" }} whileTap={{ scale: .97 }} className="group flex items-center gap-3 rounded-full bg-[#c6ff4d] py-1.5 pl-5 pr-1.5 text-xs font-bold text-black transition hover:scale-[1.03]">Get early access<span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[#c6ff4d] transition group-hover:rotate-45"><ArrowUpRight size={17}/></span></motion.a>
          </div>
          <button onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="rounded-full border border-white/15 p-2.5 md:hidden">{menuOpen?<X size={19}/>:<Menu size={19}/>}</button>
        </div>
        <AnimatePresence>
          {menuOpen&&<motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="mx-3 mt-2 flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#10120f]/95 p-4 backdrop-blur-2xl md:hidden">
            {[...nav,["Ecosystem","#ecosystem"],["FAQ","#faq"],["Early access","#register"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm text-white/75 hover:bg-white/5">{label}</a>)}
          </motion.div>}
        </AnimatePresence>
      </header>

      {/* HERO — Wcrypt-inspired central statement and product interface mockup */}
      <section id="home" className="relative flex min-h-[900px] flex-col items-center overflow-hidden px-5 pb-0 pt-36 text-center md:min-h-[1050px] md:pt-44">
        <motion.div animate={{ opacity: [.55, .9, .55], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_68%,rgba(145,255,0,.17),transparent_38%),radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,.035),transparent_45%)]"/>
        <div className="pointer-events-none absolute -left-40 top-56 h-[500px] w-[500px] rounded-full border border-[#c6ff4d]/[.08]"/>
        <div className="pointer-events-none absolute -right-40 top-56 h-[500px] w-[500px] rounded-full border border-[#c6ff4d]/[.08]"/>
        <Reveal className="relative z-10">
          <Eyebrow>One system. A healthier you.</Eyebrow>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[.94] tracking-[-.075em] sm:text-7xl md:text-[104px]">Your health,<br/><span className="text-[#c6ff4d]">in a new light.</span></h1>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base md:leading-8">Nutrition, movement, recovery and everyday habits. Connected by intelligence that helps you understand the whole picture.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a href="#register" whileHover={{ scale: 1.045, boxShadow: "0 0 42px rgba(198,255,77,.24)" }} whileTap={{ scale: .97 }} className="group flex items-center gap-3 rounded-full bg-[#c6ff4d] py-1.5 pl-6 pr-1.5 text-sm font-bold text-black transition hover:scale-105">Get early access<span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[#c6ff4d] transition group-hover:rotate-45"><ArrowUpRight size={19}/></span></motion.a>
            <a href="#product" className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm text-white/75 transition hover:border-white/35 hover:bg-white/5">Explore VYTA <ArrowDownRight size={16}/></a>
          </div>
        </Reveal>
        <motion.div initial={{opacity:0,y:90,scale:.94,rotateX:8}} whileInView={{opacity:1,y:0,scale:1,rotateX:0}} viewport={{once:true,amount:.1}} transition={{duration:1.25,ease:[.22,1,.36,1]}} whileHover={{y:-5}} className="relative z-10 mt-20 w-full max-w-[1120px]" style={{transformPerspective:1200}}>
          <DashboardMockup/>
          <div className="absolute -left-2 top-[30%] hidden -translate-x-1/2 lg:block"><GlassCard className="w-40 p-4 text-left"><Activity className="text-[#c6ff4d]" size={17}/><p className="mt-4 text-2xl font-semibold">+18.4%</p><p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">Weekly activity</p></GlassCard></div>
          <div className="absolute -right-3 bottom-[14%] hidden translate-x-1/2 lg:block"><GlassCard className="w-40 p-4 text-left"><Heart className="text-[#c6ff4d]" size={17}/><p className="mt-4 text-sm font-semibold">In balance</p><p className="mt-1 text-[9px] uppercase tracking-widest text-white/35">Recovery preview</p></GlassCard></div>
        </motion.div>
        <div className="relative z-10 mt-8 flex w-full max-w-[1120px] items-center justify-between border-t border-white/10 py-5 text-[8px] uppercase tracking-[.25em] text-white/25 md:text-[9px]"><span>01 / Understand</span><span className="hidden sm:block">A connected health companion</span><span>Scroll to explore ↓</span></div>
      </section>

      {/* INTRO — Techware-style product/editorial feature cards */}
      <section id="product" className="bg-[#f2f2ef] px-5 py-24 text-[#090a08] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl"><Eyebrow>Designed around real life</Eyebrow><h2 className="text-5xl font-semibold leading-[.98] tracking-[-.07em] md:text-7xl">A better way to<br/>care for <span className="text-[#86b900]">yourself.</span></h2></div>
            <div className="max-w-md pb-1"><p className="text-sm leading-7 text-black/55 md:text-base">Not another tracker asking you to do more. A thoughtful system that helps make sense of the things you already do, every day.</p><a href="#ecosystem" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Explore the VYTA system <ArrowUpRight size={16}/></a></div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="space-y-5">
              <Reveal className="group overflow-hidden rounded-[26px] bg-[#e5e5e1]">
                <div className="relative h-[310px] overflow-hidden md:h-[390px]"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90" alt="Fresh balanced meal" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/></div>
                <div className="p-6 md:p-8"><div className="text-[9px] uppercase tracking-[.22em] text-black/40">01 / Nutrition</div><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em] md:text-4xl">Eat with insight.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-black/55">Turn meals into useful information, without losing the joy of eating.</p></div>
              </Reveal>
              <Reveal delay={.12} className="group overflow-hidden rounded-[26px] bg-[#e5e5e1]">
                <div className="relative h-[280px] overflow-hidden md:h-[340px]"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=90" alt="Athlete training in gym" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/></div>
                <div className="p-6 md:p-8"><div className="text-[9px] uppercase tracking-[.22em] text-black/40">02 / Movement</div><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em] md:text-4xl">Train with purpose.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-black/55">Build routines that meet you where you are and grow with you.</p></div>
              </Reveal>
            </div>
            <Reveal delay={.1} className="group overflow-hidden rounded-[26px] bg-[#e5e5e1]">
              <div className="relative h-[540px] overflow-hidden md:h-[770px]"><img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90" alt="Mindful recovery and stretching" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/></div>
              <div className="p-6 md:p-8"><div className="text-[9px] uppercase tracking-[.22em] text-black/40">03 / Recovery</div><h3 className="mt-3 text-3xl font-semibold tracking-[-.05em] md:text-4xl">Recover smarter.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-black/55">Make rest, sleep and daily habits part of your progress story.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE FEATURE CARDS — Wcrypt-style */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle eyebrow="The VYTA difference" title="A connected system." accent="A clearer you." description="The things that shape your health are connected. Your tools should be, too." center/>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {features.map((f,i)=>{const Icon=f.icon;return <Reveal key={f.n} delay={i*.1} className="group rounded-[26px] border border-white/10 bg-[#111310] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#c6ff4d]/35 md:p-8"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6ff4d] text-black"><Icon size={22}/></div><div className="mt-12 text-[9px] tracking-[.2em] text-[#c6ff4d]">{f.n} / {f.tag}</div><h3 className="mt-3 text-2xl font-semibold tracking-[-.04em]">{f.title}</h3><p className="mt-4 text-sm leading-7 text-white/42">{f.desc}</p><div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.18em] text-white/30"><span>Explore feature</span><ArrowUpRight size={16} className="text-[#c6ff4d] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div></Reveal>})}
          </div>
        </div>
      </section>

      {/* NUTRITION — editorial section + interactive diet toggle */}
      <section id="nutrition" className="bg-[#f2f2ef] px-5 py-24 text-[#080908] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>01 / Food intelligence</Eyebrow>
            <h2 className="text-5xl font-semibold leading-[.94] tracking-[-.07em] md:text-7xl">Know what<br/>fuels <span className="text-[#86b900]">you.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-black/55 md:text-base">A meal is more than a calorie count. VYTA is designed to help you understand ingredients, portions and nutritional patterns over time.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Vegetarian","Vegan","Non-vegetarian"].map(d=><button key={d} onClick={()=>setDiet(d)} className={`rounded-full border px-4 py-2.5 text-xs transition ${diet===d?"border-black bg-black text-white":"border-black/15 text-black/60 hover:border-black/40"}`}>{d}</button>)}</div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">{[["2,000","Daily kcal*"],["120g","Protein*"],["4","Meal ideas*"]].map(([v,l])=><div key={l} className="rounded-2xl bg-white p-4"><div className="text-2xl font-semibold tracking-tight">{v}</div><div className="mt-1 text-[9px] uppercase tracking-widest text-black/40">{l}</div></div>)}</div>
            <p className="mt-4 text-[10px] text-black/35">*Illustrative preview values. Not a personal nutrition prescription.</p>
          </Reveal>
          <Reveal delay={.12} className="relative overflow-hidden rounded-[30px] bg-[#dfe0d9] p-3 md:p-5">
            <div className="relative h-[280px] overflow-hidden rounded-[22px] md:h-[390px]"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=90" alt="Healthy food bowl" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/><div className="absolute bottom-5 left-5 text-white"><div className="text-[9px] uppercase tracking-[.2em] text-white/65">Your plate, decoded</div><div className="mt-2 text-3xl font-semibold tracking-tight">Food, understood.</div></div></div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4"><div className="text-[9px] uppercase tracking-widest text-black/40">Meal estimate</div><div className="mt-2 text-3xl font-semibold">640 <span className="text-xs font-normal text-black/45">kcal</span></div><div className="mt-1 text-[9px] text-black/35">Illustrative only</div></div>
              <div className="rounded-2xl bg-[#c6ff4d] p-4"><div className="text-[9px] uppercase tracking-widest text-black/50">AI meal insight</div><div className="mt-2 text-sm font-semibold">A balanced plate.</div><div className="mt-1 text-[10px] text-black/55">Protein · Fibre · Colour</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FITNESS — immersive photographic feature */}
      <section id="fitness" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90" alt="" className="h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-gradient-to-r from-[#070807] via-[#070807]/80 to-[#070807]/30"/><div className="absolute inset-0 bg-gradient-to-t from-[#070807] via-transparent to-[#070807]/40"/></div>
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_.8fr]">
          <Reveal><Eyebrow>02 / Fitness intelligence</Eyebrow><h2 className="max-w-3xl text-5xl font-semibold leading-[.94] tracking-[-.07em] md:text-7xl">Make every<br/>move <span className="text-[#c6ff4d]">count.</span></h2><p className="mt-7 max-w-lg text-sm leading-7 text-white/55 md:text-base">From your first workout to your next personal best, VYTA is being shaped to make movement more intentional, measurable and sustainable.</p><div className="mt-9 flex flex-wrap gap-3">{["Goal-based plans","Activity tracking","Progress insights"].map(t=><span key={t} className="rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-xs text-white/70 backdrop-blur-xl">{t}</span>)}</div></Reveal>
          <Reveal delay={.15}><GlassCard className="p-6 md:p-8"><div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.2em] text-white/40">Training snapshot</span><Dumbbell size={18} className="text-[#c6ff4d]"/></div><div className="mt-9 flex items-end justify-between"><div><div className="text-5xl font-semibold tracking-[-.06em]">04<span className="text-lg text-white/35">/05</span></div><p className="mt-2 text-xs text-white/45">Weekly sessions preview</p></div><div className="rounded-full bg-[#c6ff4d]/10 px-3 py-2 text-[10px] text-[#c6ff4d]">On your way</div></div><div className="mt-8 grid grid-cols-5 gap-2">{["M","T","W","T","F"].map((d,i)=><div key={d+i} className="text-center"><div className={`mx-auto flex aspect-square items-center justify-center rounded-xl ${i<4?"bg-[#c6ff4d] text-black":"bg-white/10 text-white/35"}`}>{i<4?<Check size={15}/>:<Plus size={15}/>}</div><div className="mt-2 text-[9px] text-white/35">{d}</div></div>)}</div><div className="mt-8 border-t border-white/10 pt-5"><div className="flex justify-between text-xs"><span className="text-white/45">Consistency</span><span>80%</span></div><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-[#c6ff4d]"/></div></div><p className="mt-5 text-[9px] text-white/25">Illustrative dashboard concept.</p></GlassCard></Reveal>
        </div>
      </section>

      {/* HEALTH ECOSYSTEM — orbit / coin motif adapted to VYTA */}
      <section id="ecosystem" className="overflow-hidden bg-[#0c0f0a] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal><Eyebrow>03 / Connected health</Eyebrow><h2 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-7xl">Everything<br/>works <span className="text-[#c6ff4d]">together.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-white/48 md:text-base">Nutrition affects energy. Movement shapes strength. Recovery supports consistency. VYTA brings these signals into one connected view.</p><div className="mt-9 space-y-4">{[[Apple,"Nutrition that adapts"],[Watch,"Wearable connections"],[Moon,"Sleep and recovery"],[Droplets,"Hydration and habits"]].map(([Icon,label]:any)=><div key={label} className="flex items-center gap-3 text-sm text-white/65"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c6ff4d]/20 bg-[#c6ff4d]/10 text-[#c6ff4d]"><Icon size={16}/></span>{label}</div>)}</div></Reveal>
          <Reveal delay={.15}><OrbitVisual/></Reveal>
        </div>
      </section>

      {/* MARKETPLACE — editorial shop cards */}
      <section id="store" className="bg-[#f2f2ef] px-5 py-24 text-[#080908] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>04 / The VYTA store</Eyebrow><h2 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-7xl">Good tools.<br/><span className="text-[#86b900]">Better habits.</span></h2></div><p className="max-w-md text-sm leading-7 text-black/50">A considered marketplace for the products that support your health journey, from training essentials to everyday wellness.</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["Training essentials","Equipment for movement, strength and recovery.","https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90","01"],
              ["Nutrition & wellness","Everyday essentials to support balanced routines.","https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90","02"],
              ["Wearables & tech","Tools that help you understand your daily signals.","https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=1400&q=90","03"],
            ].map(([title,desc,img,n],i)=><Reveal key={title} delay={i*.08} className="group overflow-hidden rounded-[26px] bg-white"><div className="relative h-[330px] overflow-hidden"><img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-2 text-[9px] tracking-widest text-white backdrop-blur-xl">{n} / VYTA SELECT</span></div><div className="p-6"><div className="flex items-center justify-between"><h3 className="text-2xl font-semibold tracking-[-.04em]">{title}</h3><ArrowUpRight size={19}/></div><p className="mt-3 text-sm leading-6 text-black/50">{desc}</p></div></Reveal>)}
          </div>
          <p className="mt-5 text-[10px] text-black/35">Marketplace categories are planned concepts. Product availability and partnerships will be announced separately.</p>
        </div>
      </section>

      {/* SOCIAL PROOF / DEVICE ECOSYSTEM */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1100px] text-center"><Eyebrow>Built for your everyday</Eyebrow><h2 className="text-4xl font-semibold tracking-[-.06em] md:text-6xl">Your health. Your rhythm.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">A flexible experience designed to grow with your routines, your goals and the technology you already use.</p>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">{[[Watch,"Wearables"],[Activity,"Activity"],[Heart,"Wellness"],[ShieldCheck,"Privacy first"]].map(([Icon,label]:any)=><div key={label} className="rounded-2xl border border-white/10 bg-white/[.035] px-4 py-7"><Icon className="mx-auto text-[#c6ff4d]" size={22}/><p className="mt-4 text-xs text-white/60">{label}</p></div>)}</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#10120f] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><Eyebrow>Questions, answered</Eyebrow><h2 className="text-5xl font-semibold leading-[.95] tracking-[-.07em] md:text-7xl">A little<br/>more <span className="text-[#c6ff4d]">clarity.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/45">A few things you might want to know before joining the VYTA early-access list.</p></div>
          <div className="border-t border-white/10">{faqs.map(([q,a],i)=><div key={q} className="border-b border-white/10"><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} className="flex w-full items-center justify-between gap-5 py-6 text-left"><span className="text-base font-medium md:text-lg">{q}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition ${faqOpen===i?"rotate-45 bg-[#c6ff4d] text-black":"text-white/55"}`}><Plus size={16}/></span></button><AnimatePresence initial={false}>{faqOpen===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-white/45">{a}</p></motion.div>}</AnimatePresence></div>)}</div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="register" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(166,255,0,.17),transparent_55%)]"/>
        <div className="relative mx-auto max-w-[1000px] rounded-[32px] border border-white/12 bg-white/[.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,.3)] backdrop-blur-2xl md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
            <div><Eyebrow>Your next chapter</Eyebrow><h2 className="text-5xl font-semibold leading-[.94] tracking-[-.07em] md:text-7xl">Make health<br/>feel <span className="text-[#c6ff4d]">personal.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/45">Be among the first to experience VYTA. Join the early-access list for product updates and launch news.</p><div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[.18em] text-white/30"><ShieldCheck size={15} className="text-[#c6ff4d]"/> No spam. Just meaningful updates.</div></div>
            <div>
              {submitted?<div className="rounded-2xl border border-[#c6ff4d]/25 bg-[#c6ff4d]/10 p-7"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6ff4d] text-black"><Check size={22}/></div><h3 className="mt-5 text-2xl font-semibold">You&apos;re on the list.</h3><p className="mt-2 text-sm leading-6 text-white/55">Thanks for your interest in VYTA. This demo currently shows the confirmation locally; connect a backend to store registrations.</p></div>:<form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}} className="space-y-3">
                <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-white/12 bg-black/25 px-4 py-4 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6ff4d]/60"/>
                <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-white/12 bg-black/25 px-4 py-4 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c6ff4d]/60"/>
                <select value={goal} onChange={e=>setGoal(e.target.value)} className="w-full rounded-xl border border-white/12 bg-[#11130f] px-4 py-4 text-sm text-white/70 outline-none focus:border-[#c6ff4d]/60"><option>Build healthier habits</option><option>Weight management</option><option>Build strength</option><option>Improve fitness</option><option>Understand my nutrition</option></select>
                <select value={diet} onChange={e=>setDiet(e.target.value)} className="w-full rounded-xl border border-white/12 bg-[#11130f] px-4 py-4 text-sm text-white/70 outline-none focus:border-[#c6ff4d]/60"><option>Vegetarian</option><option>Vegan</option><option>Non-vegetarian</option><option>No preference</option></select>
                <button type="submit" className="group flex w-full items-center justify-between rounded-xl bg-[#c6ff4d] px-5 py-4 text-sm font-bold text-black transition hover:bg-white">Join the early-access list<span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#c6ff4d] transition group-hover:rotate-45"><ArrowUpRight size={16}/></span></button>
                <p className="pt-1 text-[9px] leading-5 text-white/25">By joining, you agree to receive VYTA product updates. Form submissions are not stored until a backend is connected.</p>
              </form>}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div><a href="#home" className="text-3xl font-black tracking-[-.09em]">VYTA<span className="text-[#c6ff4d]">.</span></a><p className="mt-3 max-w-xs text-xs leading-6 text-white/35">A more connected way to understand and care for your health.</p></div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/50">{[["Product","#product"],["Nutrition","#nutrition"],["Fitness","#fitness"],["Store","#store"],["FAQ","#faq"],["Early access","#register"]].map(([l,h])=><a key={h} href={h} className="transition hover:text-[#c6ff4d]">{l}</a>)}</div>
            <a href="#home" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-[#c6ff4d] hover:text-[#c6ff4d]"><ArrowUpRight size={18}/></a>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[.16em] text-white/25 sm:flex-row"><span>© 2026 VYTA. All rights reserved.</span><span>Designed for a more connected health journey.</span></div>
        </div>
      </footer>
    </main>
  );
}

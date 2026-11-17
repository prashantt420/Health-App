 "use client";

import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity, Apple, ArrowRight, ArrowUpRight, Brain, Camera, Check,
  ChevronDown, Clock3, Dumbbell, Footprints, HeartPulse, Menu, Moon,
  ScanLine, Sparkles, Target, X, Droplets, ChartNoAxesCombined, CalendarDays
} from "lucide-react";


function Reveal({ children, className = "", delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: .75, delay, ease: [0.22, 1, .36, 1] }}>{children}</motion.div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#c6ff4d] md:text-xs">
    <span className="h-px w-7 bg-[#c6ff4d]" />{children}</div>;
}

function Heading({ tag, title, accent, copy, center = false }: {
  tag: string; title: string; accent?: string; copy: string; center?: boolean;
}) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow>{tag}</Eyebrow></div>
    <h2 className="text-balance text-4xl font-semibold leading-[.98] tracking-[-.065em] text-[#f5f6f2] sm:text-5xl md:text-7xl">
      {title} {accent && <span className="text-[#c6ff4d]">{accent}</span>}
    </h2>
    <p className={`mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base md:leading-8 ${center ? "mx-auto" : ""}`}>{copy}</p>
  </div>;
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[24px] border border-white/10 bg-white/[.045] shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl ${className}`}>{children}</div>;
}

function Label({ children }: { children: ReactNode }) {
  return <div className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/35">{children}</div>;
}

function Dashboard() {
  const bars = [35, 52, 42, 73, 58, 88, 64];
  return <div className="relative mx-auto w-full max-w-[1120px]">
    <div className="absolute -inset-10 rounded-full bg-[#c6ff4d]/10 blur-[90px]" />
    <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-[#11140f] shadow-[0_35px_120px_rgba(0,0,0,.55)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
        <div className="font-bold tracking-tight">VYTA<span className="text-[#c6ff4d]">.</span></div>
        <div className="hidden gap-6 text-[10px] text-white/40 sm:flex"><span className="text-[#c6ff4d]">Today</span><span>Nutrition</span><span>Training</span><span>Recovery</span></div>
        <div className="rounded-full border border-[#c6ff4d]/20 bg-[#c6ff4d]/10 px-3 py-1.5 text-[9px] tracking-wider text-[#c6ff4d]">PERSONAL HEALTH SPACE</div>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-[1.2fr_.8fr] md:p-7">
        <div className="space-y-4">
          <div><Label>Tuesday · Daily overview</Label><h3 className="mt-2 text-2xl font-semibold md:text-3xl">Your day, in context.</h3><p className="mt-2 text-xs text-white/40">A clearer view of the habits that shape your progress.</p></div>
          <div className="grid grid-cols-3 gap-2">
            {[["1,640","Calories"],["92 g","Protein"],["7,840","Steps"]].map(([v,l])=><Panel key={l} className="p-3 md:p-4"><div className="mb-4 text-[#c6ff4d]"><Activity size={16}/></div><div className="text-xl font-semibold md:text-2xl">{v}</div><div className="mt-1 text-[9px] text-white/40">{l}</div></Panel>)}
          </div>
          <Panel className="p-4 md:p-5">
            <div className="flex items-center justify-between"><div><Label>Nutrition breakdown</Label><div className="mt-1 text-sm font-medium">Today's intake</div></div><span className="text-[10px] text-[#c6ff4d]">Illustrative data</span></div>
            <div className="mt-5 flex h-28 items-end gap-2">{bars.map((v,i)=><motion.div key={i} initial={{height:0}} whileInView={{height:`${v}%`}} viewport={{once:true}} transition={{duration:.6,delay:i*.07}} className={`flex-1 rounded-t-md ${i===5?"bg-[#c6ff4d]":"bg-white/15"}`}/>)}</div>
            <div className="mt-3 flex justify-between text-[8px] uppercase tracking-widest text-white/25"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
          </Panel>
        </div>
        <div className="space-y-4">
          <Panel className="border-[#c6ff4d]/20 bg-[#c6ff4d]/[.06] p-5">
            <div className="flex items-center justify-between"><Label>Daily targets</Label><Target size={16} className="text-[#c6ff4d]"/></div>
            <div className="mt-6 text-4xl font-semibold">68<span className="text-lg text-white/35">%</span></div><p className="mt-1 text-xs text-white/45">Example goal completion</p>
            <div className="mt-5 h-1.5 rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#c6ff4d]"/></div>
            <div className="mt-5 space-y-3 text-xs">{[["Nutrition","On track"],["Movement","In progress"],["Recovery","To log"]].map(([a,b])=><div key={a} className="flex justify-between"><span className="text-white/55">{a}</span><span className="text-white/75">{b}</span></div>)}</div>
          </Panel>
          <Panel className="p-5">
            <div className="flex items-center gap-2 text-[#c6ff4d]"><Sparkles size={15}/><Label>VYTA intelligence</Label></div>
            <p className="mt-4 text-lg font-medium leading-snug">Patterns matter more than one perfect day.</p>
            <p className="mt-2 text-xs leading-6 text-white/45">Bring meals, movement and recovery into one picture, then use that context to decide what to focus on next.</p>
          </Panel>
        </div>
      </div>
    </div>
    <p className="relative mt-3 text-center text-[9px] tracking-wide text-white/30">Concept interface · sample values for demonstration only</p>
  </div>;
}

function MealScan() {
  return <Panel className="relative overflow-hidden p-4 md:p-6">
    <div className="flex items-center justify-between"><Label>Meal capture · concept preview</Label><ScanLine size={17} className="text-[#c6ff4d]"/></div>
    <div className="relative mt-5 overflow-hidden rounded-2xl bg-[#20251b]">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85" alt="A balanced bowl of food" className="h-52 w-full object-cover opacity-85 md:h-64"/>
      <div className="absolute inset-4 rounded-xl border border-[#c6ff4d]/70"><span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#c6ff4d]"/><span className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[#c6ff4d]"/><span className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#c6ff4d]"/><span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#c6ff4d]"/></div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/65 px-3 py-2 text-[10px] text-white"><Camera size={13} className="text-[#c6ff4d]"/> Scan a meal</div>
    </div>
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between"><div><div className="text-sm font-semibold">Meal estimate</div><div className="mt-1 text-[10px] text-white/40">Review before saving</div></div><span className="text-xl font-semibold text-[#c6ff4d]">520 <small className="text-xs text-white/40">kcal*</small></span></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{[["Protein","28 g"],["Carbs","54 g"],["Fat","18 g"]].map(([a,b])=><div key={a} className="rounded-xl bg-white/[.05] p-3"><Label>{a}</Label><div className="mt-1 font-semibold">{b}</div></div>)}</div>
    </div>
    <p className="mt-3 text-[9px] leading-5 text-white/30">*Illustrative estimate only. Actual nutrition estimates depend on food recognition, portion size and user corrections.</p>
  </Panel>;
}

const faqs = [
  ["What is VYTA?", "VYTA is being designed as a connected health companion that brings nutrition, training, recovery and progress tracking into one place."],
  ["Can I use my own diet preferences?", "The product is planned to support different dietary patterns and food preferences, including vegetarian and non-vegetarian choices. Personalisation options will be confirmed as features are released."],
  ["How accurate is AI food scanning?", "A camera-based estimate is an approximation, not a lab measurement. Food type, ingredients and portion size can change the result. The intended workflow includes reviewing and correcting estimates before saving."],
  ["Will VYTA connect to wearables?", "Wearable and health-platform connections are part of the product direction. Specific devices and integrations will be announced only when they are supported."],
  ["Is VYTA a replacement for a doctor or dietitian?", "No. VYTA is intended for general wellness, habit tracking and fitness support. It is not designed to diagnose, treat or replace professional medical advice."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submitWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return <main className="min-h-screen overflow-hidden bg-[#080a07] text-[#f5f6f2] selection:bg-[#c6ff4d] selection:text-black">
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[.12]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"72px 72px"}}/>
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#080a07]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#" className="text-xl font-black tracking-[-.08em]">VYTA<span className="text-[#c6ff4d]">.</span></a>
        <div className="hidden items-center gap-8 text-[11px] text-white/55 md:flex">
          <a className="transition hover:text-[#c6ff4d]" href="#platform">Platform</a><a className="transition hover:text-[#c6ff4d]" href="#nutrition">Nutrition</a><a className="transition hover:text-[#c6ff4d]" href="#training">Training</a><a className="transition hover:text-[#c6ff4d]" href="#how">How it works</a><a className="transition hover:text-[#c6ff4d]" href="#faq">FAQ</a>
        </div>
        <a href="#waitlist" className="hidden rounded-full bg-[#c6ff4d] px-5 py-2.5 text-[10px] font-bold text-black transition hover:scale-[1.04] md:inline-flex">Get early access <ArrowUpRight size={13} className="ml-2"/></a>
        <button onClick={()=>setMenuOpen(!menuOpen)} className="text-white md:hidden" aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
      </nav>
      <AnimatePresence>{menuOpen&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 md:hidden"><div className="flex flex-col gap-5 px-6 py-6 text-sm text-white/70">{[["Platform","#platform"],["Nutrition","#nutrition"],["Training","#training"],["How it works","#how"],["FAQ","#faq"],["Get early access","#waitlist"]].map(([a,b])=><a key={a} href={b} onClick={()=>setMenuOpen(false)}>{a}</a>)}</div></motion.div>}</AnimatePresence>
    </header>

    <section className="relative z-10 px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal><div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[#c6ff4d]/20 bg-[#c6ff4d]/[.06] px-4 py-2 text-[9px] uppercase tracking-[.2em] text-[#c6ff4d]"><span className="h-1.5 w-1.5 rounded-full bg-[#c6ff4d]"/> A connected health companion</div></Reveal>
        <Reveal delay={.08}><h1 className="mx-auto max-w-5xl text-center text-balance text-5xl font-semibold leading-[.94] tracking-[-.075em] sm:text-6xl md:text-8xl">Understand your body.<br/><span className="text-[#c6ff4d]">Own your progress.</span></h1></Reveal>
        <Reveal delay={.16}><p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-7 text-white/50 md:text-base md:leading-8">VYTA brings food tracking, personalised nutrition, workout planning, recovery habits and health progress into one connected experience, so you can see what is working and what to do next.</p></Reveal>
        <Reveal delay={.22}><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="#how" className="rounded-full bg-[#c6ff4d] px-6 py-3.5 text-xs font-bold text-black transition hover:scale-105">Explore how VYTA works <ArrowRight className="ml-2 inline" size={14}/></a><a href="#waitlist" className="rounded-full border border-white/15 px-6 py-3.5 text-xs text-white/75 transition hover:border-[#c6ff4d]/50">Join early access</a></div></Reveal>
        <div className="mt-16 md:mt-24"><Dashboard/></div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">{[["01","Capture what you eat"],["02","Plan how you move"],["03","Track how you recover"],["04","Understand your trends"]].map(([n,t])=><div key={n} className="border-t border-white/15 pt-4"><div className="text-[10px] text-[#c6ff4d]">{n}</div><div className="mt-2 text-xs text-white/55">{t}</div></div>)}</div>
      </div>
    </section>

    <section id="platform" className="relative z-10 border-y border-white/[.07] bg-[#0d100b] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <Reveal><Heading tag="The VYTA platform" title="Your health is connected." accent="Your tools should be too." copy="Nutrition affects training. Training affects recovery. Recovery affects consistency. VYTA is being designed to bring these parts together instead of leaving your health data scattered across disconnected apps and notes."/></Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [Apple,"Nutrition intelligence","Log meals, estimate calories and macros, and compare your intake with your personal targets."],
            [Dumbbell,"Training plans","Build goal-led routines, follow exercise guidance and record each workout."],
            [Moon,"Recovery habits","Keep sleep, hydration and daily movement visible alongside your training load."],
            [ChartNoAxesCombined,"Progress insights","Review trends over time instead of judging progress from a single day."]
          ].map(([Icon,title,copy]:any,i)=><Reveal key={title} delay={i*.07}><Panel className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c6ff4d]/30"><div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-[#c6ff4d]/10 text-[#c6ff4d]"><Icon size={20}/></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-xs leading-6 text-white/45">{copy}</p></Panel></Reveal>)}
        </div>
      </div>
    </section>

    <section id="nutrition" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal><div><Eyebrow>01 / Nutrition intelligence</Eyebrow><h2 className="max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">Know what is on your plate. <span className="text-[#c6ff4d]">Know what it means.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/50">Make food tracking less tedious. Capture a meal, review the foods VYTA recognises, adjust portions and save an estimated nutrition breakdown to your diary.</p>
          <div className="mt-8 space-y-5">{[[Camera,"Capture","Take a photo or add a meal manually."],[ScanLine,"Review the estimate","Check recognised foods and correct portions or ingredients."],[Target,"Track against your goals","See estimated calories, protein, carbohydrates and fats alongside your daily targets."],[CalendarDays,"Build consistency","Look back at meal history and patterns across days and weeks."]].map(([Icon,a,b]:any)=><div key={a} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#c6ff4d]/20 bg-[#c6ff4d]/[.07] text-[#c6ff4d]"><Icon size={17}/></div><div><h3 className="text-sm font-semibold">{a}</h3><p className="mt-1 text-xs leading-6 text-white/45">{b}</p></div></div>)}</div>
          <div className="mt-8 flex flex-wrap gap-2">{["Vegetarian","Vegan","Non-vegetarian","Custom preferences"].map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-white/55">{x}</span>)}</div>
        </div></Reveal>
        <Reveal delay={.12}><MealScan/></Reveal>
      </div>
    </section>

    <section id="training" className="relative z-10 border-y border-white/[.07] bg-[#0d100b] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal><Panel className="overflow-hidden p-5 md:p-7">
          <div className="flex items-center justify-between"><div><Label>Training plan · concept preview</Label><h3 className="mt-2 text-2xl font-semibold">Upper body strength</h3></div><span className="rounded-full bg-[#c6ff4d]/10 px-3 py-1.5 text-[9px] text-[#c6ff4d]">DAY 02</span></div>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/[.04] p-4"><img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80" alt="Strength training" className="h-20 w-20 rounded-xl object-cover"/><div><div className="font-medium">Dumbbell bench press</div><div className="mt-1 text-xs text-white/40">Chest · Compound movement</div><div className="mt-3 text-[10px] text-[#c6ff4d]">3 sets · 10 reps · 90 sec rest</div></div></div>
          <div className="mt-3 space-y-2">{[["Seated cable row","3 × 12"],["Shoulder press","3 × 10"],["Lat pulldown","3 × 12"],["Triceps pushdown","2 × 15"]].map(([a,b],i)=><div key={a} className="flex items-center justify-between rounded-xl border border-white/[.07] px-4 py-3"><div className="flex items-center gap-3"><span className="text-[10px] text-white/25">0{i+2}</span><span className="text-xs text-white/75">{a}</span></div><span className="text-[10px] text-white/40">{b}</span></div>)}</div>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs"><span className="text-white/40">Estimated session</span><span>45–55 min</span></div>
          <p className="mt-3 text-[9px] text-white/30">Illustrative workout interface. Plan content is an example, not a personalised prescription.</p>
        </Panel></Reveal>
        <Reveal delay={.1}><div><Eyebrow>02 / Training that adapts</Eyebrow><h2 className="max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">A plan you can follow. <span className="text-[#c6ff4d]">Progress you can measure.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/50">Move beyond generic workout lists. VYTA is planned to help you organise training around your goal, experience and available equipment, then keep a record of the work you do.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{[[Target,"Goal-led routines","Choose a direction such as strength, muscle building, endurance or general fitness."],[Activity,"Exercise guidance","Understand movement setup, target muscles and useful form cues."],[Clock3,"Workout logging","Record sets, reps, weights and rest periods as you train."],[ChartNoAxesCombined,"Training history","Compare sessions and follow strength and consistency trends."]].map(([Icon,a,b]:any)=><div key={a} className="border-l border-[#c6ff4d]/35 pl-4"><Icon size={17} className="mb-3 text-[#c6ff4d]"/><h3 className="text-sm font-semibold">{a}</h3><p className="mt-2 text-xs leading-6 text-white/45">{b}</p></div>)}</div>
        </div></Reveal>
      </div>
    </section>

    <section className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal><Heading tag="03 / Recovery and daily habits" title="Progress is built" accent="outside the gym." copy="Training is only one part of the picture. Keep the everyday habits that support your goals visible, so you can understand the relationship between activity, rest and consistency."/></Reveal>
        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {[[Moon,"Sleep","Log sleep duration and review your patterns over time.","7h 35m","SLEEP LOG"],[Droplets,"Hydration","Set a daily water goal and keep track of your intake.","1.8 L","WATER TRACKER"],[Footprints,"Daily movement","Keep steps and everyday activity in view alongside workouts.","8,240","STEP COUNT"]].map(([Icon,a,b,v,l]:any,i)=><Reveal key={a} delay={i*.08}><Panel className="h-full p-6 md:p-7"><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c6ff4d]/10 text-[#c6ff4d]"><Icon size={20}/></div><Label>{l}</Label></div><div className="mt-10 text-3xl font-semibold">{v}</div><h3 className="mt-2 text-lg font-semibold">{a}</h3><p className="mt-2 text-xs leading-6 text-white/45">{b}</p></Panel></Reveal>)}
        </div>
        <p className="mt-4 text-[9px] text-white/30">Sample values shown for interface illustration. Wearable and automatic data integrations are planned and may not be available at launch.</p>
      </div>
    </section>

    <section className="relative z-10 border-y border-white/[.07] bg-[#0d100b] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal><div><Eyebrow>04 / Progress over time</Eyebrow><h2 className="text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">Less guesswork. <span className="text-[#c6ff4d]">More perspective.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/50">A single weigh-in or workout tells you very little. VYTA is intended to help you see longer-term patterns across the metrics you choose to track.</p>
          <ul className="mt-8 space-y-4 text-sm text-white/65">{["Body weight and measurement trends","Progress photos organised over time","Workout performance and strength history","Nutrition consistency and goal adherence","Weekly summaries that put the numbers in context"].map(x=><li key={x} className="flex items-center gap-3"><Check size={15} className="text-[#c6ff4d]"/>{x}</li>)}</ul></div></Reveal>
        <Reveal delay={.1}><Panel className="p-5 md:p-7"><div className="flex items-center justify-between"><div><Label>Progress overview · concept preview</Label><h3 className="mt-2 text-xl font-semibold">Your consistency, over time</h3></div><span className="text-[10px] text-white/35">8 weeks</span></div>
          <div className="mt-8 flex h-48 items-end gap-2 border-b border-l border-white/10 px-2 pb-2">{[34,42,39,53,48,63,58,70,66,76,72,86,80,92].map((v,i)=><motion.div key={i} initial={{height:0}} whileInView={{height:`${v}%`}} viewport={{once:true}} transition={{duration:.6,delay:i*.035}} className={`flex-1 rounded-t-sm ${i>10?"bg-[#c6ff4d]":"bg-white/20"}`}/>)}</div>
          <div className="mt-3 flex justify-between text-[9px] text-white/30"><span>WEEK 01</span><span>WEEK 04</span><span>WEEK 08</span></div>
          <div className="mt-7 grid grid-cols-3 gap-2">{[["Consistency","76%"],["Workouts","18"],["Check-ins","24"]].map(([a,b])=><div key={a} className="rounded-xl bg-white/[.04] p-3"><Label>{a}</Label><div className="mt-2 text-xl font-semibold">{b}</div></div>)}</div>
          <p className="mt-4 text-[9px] text-white/30">Illustrative dashboard data, not real user results.</p>
        </Panel></Reveal>
      </div>
    </section>

    <section className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal><Heading tag="05 / Your AI companion" title="Ask better questions" accent="about your habits." copy="The VYTA companion is envisioned to help make your logged information easier to understand. Ask about meal choices, workout structure or patterns in your own activity, and get responses grounded in the context you choose to share."/></Reveal>
        <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Reveal><Panel className="h-full p-6 md:p-8"><div className="flex items-center gap-2 text-[#c6ff4d]"><Brain size={18}/><Label>Example conversations</Label></div><div className="mt-7 space-y-4">{["How can I add more protein to my vegetarian meals?","Help me understand my workout progress this month.","I missed two sessions. How should I adjust my week?","What patterns can you see in my food diary?"].map((q,i)=><div key={q} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"><span className="text-[10px] text-[#c6ff4d]">0{i+1}</span><p className="text-sm leading-6 text-white/75">{q}</p></div>)}</div></Panel></Reveal>
          <Reveal delay={.1}><div className="flex h-full flex-col justify-between rounded-[24px] border border-[#c6ff4d]/20 bg-[radial-gradient(circle_at_80%_0%,rgba(198,255,77,.13),transparent_45%),#11140f] p-7 md:p-9"><div><div className="flex items-center gap-2 text-[#c6ff4d]"><Sparkles size={18}/><Label>Designed around your context</Label></div><h3 className="mt-8 max-w-md text-3xl font-semibold leading-tight tracking-[-.05em] md:text-4xl">Your data should help you make your next decision.</h3><p className="mt-5 max-w-md text-sm leading-7 text-white/50">From understanding nutrition estimates to reviewing training consistency, the goal is useful guidance, not another stream of generic tips.</p></div><div className="mt-12 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/35">AI responses can be incomplete or incorrect. VYTA is intended for general wellness support and does not provide medical diagnosis or treatment.</div></div></Reveal>
        </div>
      </div>
    </section>

    <section className="relative z-10 border-y border-white/[.07] bg-[#0d100b] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <Reveal><div><Eyebrow>06 / VYTA store</Eyebrow><h2 className="text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">Useful tools for <span className="text-[#c6ff4d]">your routine.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/50">A planned discovery space for products that support training, nutrition and everyday wellness. Explore relevant essentials without losing sight of the goals you are working towards.</p><div className="mt-8 inline-flex items-center gap-2 text-xs text-[#c6ff4d]">Explore the VYTA ecosystem <ArrowRight size={14}/></div></div></Reveal>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Training essentials","Equipment and accessories","https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"],
            ["Nutrition support","Everyday nutrition products","https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=700&q=80"],
            ["Recovery tools","Tools for rest and mobility","https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"],
            ["Wellness essentials","Products for daily routines","https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"]
          ].map(([a,b,img]:any,i)=><Reveal key={a} delay={i*.06}><div className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[.035]"><div className="overflow-hidden"><img src={img} alt={a} className="h-36 w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 md:h-48"/></div><div className="p-4"><h3 className="text-sm font-semibold">{a}</h3><p className="mt-1 text-[10px] text-white/40">{b}</p></div></div></Reveal>)}
        </div>
      </div>
    </section>

    <section id="how" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal><Heading tag="The everyday VYTA loop" title="From first setup" accent="to better habits." copy="A simple product flow: establish your starting point, choose what you want to work on, log your day and use the patterns to plan the next one."/></Reveal>
        <div className="mt-14 grid gap-3 md:grid-cols-5">{[
          [Target,"01","Set your baseline","Add your goals, preferences, activity level and starting measurements."],
          [CalendarDays,"02","Build your plan","Set nutrition and training priorities that fit your routine."],
          [Camera,"03","Log your day","Capture meals, record workouts and track everyday habits."],
          [ChartNoAxesCombined,"04","Review patterns","See trends across nutrition, movement, recovery and progress."],
          [Sparkles,"05","Adjust and repeat","Use your insights to make practical changes and keep going."]
        ].map(([Icon,n,a,b]:any,i)=><Reveal key={n} delay={i*.06}><Panel className="h-full p-5"><div className="flex items-center justify-between"><Icon size={19} className="text-[#c6ff4d]"/><span className="text-[10px] text-white/25">{n}</span></div><h3 className="mt-8 text-base font-semibold">{a}</h3><p className="mt-3 text-xs leading-6 text-white/45">{b}</p></Panel></Reveal>)}</div>
      </div>
    </section>

    <section id="faq" className="relative z-10 border-t border-white/[.07] bg-[#0d100b] px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal><div><Eyebrow>Questions, answered</Eyebrow><h2 className="text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">Before you <span className="text-[#c6ff4d]">begin.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/45">A few important details about what VYTA is being built to do.</p></div></Reveal>
        <div className="space-y-2">{faqs.map(([q,a],i)=><Reveal key={q} delay={i*.04}><div className="border-b border-white/10"><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium"><span>{q}</span><ChevronDown size={17} className={`shrink-0 text-[#c6ff4d] transition ${faqOpen===i?"rotate-180":""}`}/></button><AnimatePresence>{faqOpen===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-2xl pb-6 text-xs leading-7 text-white/45">{a}</p></motion.div>}</AnimatePresence></div></Reveal>)}</div>
      </div>
    </section>

    <section id="waitlist" className="relative z-10 overflow-hidden px-5 py-24 md:px-10 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6ff4d]/[.08] blur-[120px]"/>
      <Reveal><div className="relative mx-auto max-w-4xl rounded-[30px] border border-[#c6ff4d]/20 bg-[#11140f]/90 px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,.4)] md:px-14 md:py-16">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6ff4d] text-black"><HeartPulse size={23}/></div>
        <Eyebrow>Be part of the beginning</Eyebrow>
        <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-[.98] tracking-[-.065em] md:text-6xl">Make your next health chapter <span className="text-[#c6ff4d]">a conscious one.</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">Join the early-access list to follow VYTA's progress and hear when registration opens.</p>
        {submitted ? <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl border border-[#c6ff4d]/20 bg-[#c6ff4d]/10 p-4 text-sm text-[#c6ff4d]"><Check size={17}/> Thanks. Your email is ready for the waitlist integration.</div> :
          <form onSubmit={submitWaitlist} className="mx-auto mt-8 flex max-w-lg flex-col gap-2 sm:flex-row"><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address" className="min-w-0 flex-1 rounded-full border border-white/15 bg-black/30 px-5 py-4 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#c6ff4d]/60"/><button className="rounded-full bg-[#c6ff4d] px-7 py-4 text-xs font-bold text-black transition hover:scale-[1.03]">Request early access <ArrowUpRight className="ml-2 inline" size={14}/></button></form>}
        <p className="mt-5 text-[9px] text-white/25">Waitlist form is a visual prototype. Connect a backend or form service before collecting real registrations.</p>
      </div></Reveal>
    </section>

    <footer className="relative z-10 border-t border-white/[.08] px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><a href="#" className="text-lg font-black tracking-[-.08em]">VYTA<span className="text-[#c6ff4d]">.</span></a><p className="text-[10px] text-white/30">A more connected approach to everyday health.</p><div className="flex gap-5 text-[10px] text-white/40"><a href="#platform" className="hover:text-[#c6ff4d]">Platform</a><a href="#faq" className="hover:text-[#c6ff4d]">FAQ</a><a href="#waitlist" className="hover:text-[#c6ff4d]">Early access</a></div></div>
      <p className="mx-auto mt-7 max-w-[1320px] text-[9px] leading-5 text-white/25">VYTA is a wellness and fitness product concept. It is not a medical device and does not diagnose, treat or prevent disease. Consult qualified professionals for individual medical or dietary advice. Features and integrations shown may be planned, illustrative or subject to change.</p>
    </footer>
  </main>;
}

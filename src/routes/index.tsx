import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Dumbbell, Apple, Target, Instagram, Facebook, Twitter, Youtube, Star, Check } from "lucide-react";
import { InstagramCard } from "@/components/InstagramCard";
import { PromoBanners } from "@/components/PromoBanners";

const heroImg = "/images/ray8.jpg";
const aboutImg = "/images/ray6.jpg";
const coachingImg = "/images/ray4.jpg";
const program1 = "/images/ray1.jpg";
const program2 = "/images/ray5.jpg";
const program3 = "/images/ray3.jpg";
const program4 = "/images/ray7.jpg";

const gallery = [
  { src: "/images/ray8.jpg", alt: "Raynisha training in the gym" },
  { src: "/images/ray9.jpg", alt: "Raynisha poolside" },
  { src: "/images/ray10.jpg", alt: "Raynisha by the pool" },
  { src: "/images/ray11.jpg", alt: "Raynisha studio portrait" },
  { src: "/images/ray2.jpg", alt: "Raynisha outdoors" },
  { src: "/images/ray5.jpg", alt: "Raynisha at the tennis court" },
  { src: "/images/ray1.jpg", alt: "Raynisha in training gear" },
  { src: "/images/ray3.jpg", alt: "Raynisha portrait" },
];

const steps = [
  { n: "01", t: "Apply", d: "Fill out the coaching application so I understand your body, goals and lifestyle." },
  { n: "02", t: "Consult", d: "We hop on a call, map out your timeline and pick the right program for you." },
  { n: "03", t: "Train", d: "You get your custom program, meal guidance and weekly check-ins." },
  { n: "04", t: "Slay", d: "Track progress, adjust, and watch your body and confidence transform." },
];

const faqs = [
  { q: "Do I need a gym membership?", a: "Most programs are built for a gym, but I can adapt everything for home or minimal equipment — just tell me in your application." },
  { q: "I'm a total beginner. Is this for me?", a: "Absolutely. A big part of my clients start from zero. Every movement comes with form guidance and video reviews." },
  { q: "What's included in a meal plan?", a: "A full macro breakdown, food lists, grocery list and simple swaps so you can actually stick to it." },
  { q: "How long until I see results?", a: "Most clients notice changes within 2–4 weeks of consistent training and nutrition. Real transformation is 12 weeks+." },
  { q: "Can I do 1:1 coaching remotely?", a: "Yes — coaching is fully online with weekly check-ins, messaging support and form reviews." },
];


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Slay With Ray — Build Body & Confidence" },
      { name: "description", content: "Premium 1:1 fitness coaching, custom workout programs and meal plans by Raynisha Nicole." },
    ],
  }),
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "1:1 Training", href: "#training" },
  { label: "Programs", href: "#programs" },
  { label: "Instagram", href: "#instagram" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Book", href: "#book" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  { title: "1:1 Fitness Coaching", desc: "Personalized coaching to build muscle, grow glutes, and transform naturally.", icon: Target, img: coachingImg, tag: "Signature" },
  { title: "Custom Programs", desc: "Tailored fitness plans for beginners and those switching up their routine.", icon: Dumbbell, img: program1, tag: "Bestseller" },
  { title: "Workout Programs", desc: "Gain muscle, lose weight, define your core — a program for every goal.", icon: Sparkles, img: program3, tag: "New" },
  { title: "Meal Plans", desc: "Nutrition breakdowns to build muscle and minimize fat, made simple.", icon: Apple, img: program2, tag: "Fuel" },
];

const reviews = [
  { name: "Rebecca Ward", text: "The way it all was set up made it easy to stay consistent. I feel way more confident now." },
  { name: "Cynthia Dewar", text: "So much knowledge with her training. Weekly check-ins kept me motivated, personalized program was easy to follow." },
  { name: "Bianca Soto", text: "She went above and beyond. I saw a change in my body way sooner than I thought. 10/10 definitely recommend!" },
  { name: "Chelsea Adams", text: "Loving the grocery list with the lower body program. Having fun and can see a difference already." },
  { name: "Lizzie Thompson", text: "Saw change after only a week! I've learned a lot in a short time. Thank you!" },
  { name: "Amanda Lee", text: "Stuck with the full body program 4+ weeks. My body has changed and I'm more confident than ever." },
];

function Index() {
  return (
    <div className="min-h-screen bg-hero text-foreground overflow-x-hidden">
      <div className="relative z-50 border-b border-white/10">
        <div className="glass-strong">
          <p className="text-center text-xs sm:text-sm py-2.5 tracking-[0.25em] font-medium">
            <span className="text-gradient-gold">NOW OPEN</span>
            <span className="text-white/80"> — 1:1 FITNESS COACHING & MEAL PLANS</span>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-3 shadow-[0_10px_40px_-15px_rgba(255,118,167,0.35)]">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Slay With Ray" className="h-12 sm:h-14 w-auto object-contain max-w-[240px]" />
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
            {nav.map(n => <li key={n.href}><a href={n.href} className="hover:text-[color:var(--pink)] transition-colors">{n.label}</a></li>)}
          </ul>
          <a href="#training" className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-black shadow-[var(--shadow-glow)] transition-transform hover:scale-105" style={{background:"var(--gradient-pink)"}}>
            Book <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <section id="home" className="relative px-4 pt-12 sm:pt-20 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-40" style={{background:"var(--gradient-pink)"}} />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl opacity-20" style={{background:"var(--gradient-gold)"}} />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full" style={{background:"var(--pink)"}} />
              ARE YOU READY TO SLAY?
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
              Building <span className="text-gradient-pink italic">body</span><br />
              & <span className="text-gradient-gold italic">confidence</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
              Welcome to Slay With Ray by <span className="text-white">Raynisha Nicole</span> — a brand here to help you become the best version of yourself, mentally and physically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105" style={{background:"var(--gradient-pink)", boxShadow:"var(--shadow-glow)"}}>
                Workout Programs <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#training" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                1:1 Coaching
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/50">
              <div className="flex items-center gap-2"><Star className="h-4 w-4" style={{color:"#f6d17a"}} /> 500+ clients transformed</div>
              <div className="hidden sm:flex items-center gap-2"><Check className="h-4 w-4" style={{color:"var(--pink)"}} /> Coach certified</div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-strong relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden rounded-[2rem] p-2 animate-float">
              <img src={heroImg} alt="Raynisha Nicole — Slay With Ray" className="h-full w-full rounded-[1.5rem] object-cover" width={1280} height={1600} />
              <div className="absolute inset-2 rounded-[1.5rem] ring-1 ring-white/20 pointer-events-none" />
            </div>
            <div className="glass-strong absolute -left-4 bottom-8 rounded-2xl p-4 w-56 shadow-[var(--shadow-glow)] hidden sm:block">
              <div className="text-[10px] tracking-[0.3em] text-white/60">WEEKLY CHECK-INS</div>
              <div className="mt-1 text-2xl font-black text-gradient-pink font-display">+38%</div>
              <div className="text-xs text-white/70">avg. strength gain</div>
            </div>
            <div className="glass-strong absolute -right-2 top-6 rounded-full px-4 py-2 shadow-[var(--shadow-gold)] hidden sm:flex items-center gap-2">
              <div className="flex -space-x-1">
                {[0,1,2].map(i => <div key={i} className="h-6 w-6 rounded-full border-2 border-black/40" style={{background:"var(--gradient-pink)"}} />)}
              </div>
              <span className="text-xs font-semibold">joined this week</span>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 py-4 sm:py-6 overflow-hidden glass">
        <div className="flex animate-marquee whitespace-nowrap text-3xl sm:text-5xl font-black tracking-tight" style={{fontFamily:"var(--font-mono)"}}>
          {Array.from({length: 2}).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {["INSPIRATION","DETERMINATION","TRAIN HARD","MOTIVATION","MUSCLE","LIFESTYLE","SLAY"].map((w,j) => (
                <span key={j} className="flex items-center gap-8">
                  <span className={j % 2 ? "text-gradient-gold" : "text-white"}>{w}</span>
                  <span style={{color:"var(--pink)"}}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="glass-strong overflow-hidden rounded-[2rem] p-2">
              <img src={aboutImg} alt="Raynisha portrait" loading="lazy" className="h-full w-full rounded-[1.5rem] object-cover aspect-[4/5]" />
            </div>
            <div className="glass-strong absolute -bottom-6 -right-4 rounded-2xl px-5 py-4 hidden sm:block">
              <div className="text-[10px] tracking-[0.3em] text-white/60">FOUNDER & CEO</div>
              <div className="mt-1 font-display text-2xl font-black">Raynisha Nicole</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-semibold">SLAY · SLAY · SLAY</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black leading-tight">
              Meet <span className="text-gradient-pink italic">Raynisha</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              "As women, we deserve to feel confident in our bodies. The feedback from my clients gives me hope that I am an addition in helping women achieve this. I want to inspire every one of you through fitness."
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[{k:"500+", v:"Clients"},{k:"8 yrs", v:"Coaching"},{k:"98%", v:"Success"}].map(s => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-black text-gradient-gold">{s.k}</div>
                  <div className="mt-1 text-[10px] tracking-widest uppercase text-white/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full blur-3xl opacity-40" style={{background:"var(--gradient-pink)"}} />
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-8 relative">
            <div>
              <div className="text-xs tracking-[0.3em] text-gradient-gold">1:1 FITNESS COACHING</div>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl font-black leading-tight">Your dream body <span className="text-gradient-pink italic">awaits</span></h3>
              <p className="mt-4 max-w-xl text-white/70">Personal coaching for women who want to build muscle, grow glutes, and transform naturally — with weekly check-ins and tailored programming.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {["Weekly check-ins","Custom program","Nutrition guidance","Form video reviews"].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0" style={{color:"var(--pink)"}} />{f}</li>
                ))}
              </ul>
            </div>
            <a href="#book" className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-black transition-transform hover:scale-105" style={{background:"var(--gradient-pink)", boxShadow:"var(--shadow-glow)"}}>
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">THE PROCESS</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">How we <span className="text-gradient-pink italic">work together</span></h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Four simple steps from where you are now to the body and confidence you want.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(s => (
              <div key={s.n} className="glass rounded-3xl p-6 relative overflow-hidden transition-all hover:shadow-[var(--shadow-glow)]">
                <div className="font-display text-5xl font-black text-white/10 absolute top-3 right-4">{s.n}</div>
                <div className="grid h-10 w-10 place-items-center rounded-full text-black font-bold text-sm" style={{background:"var(--gradient-pink)"}}>{s.n}</div>
                <h3 className="mt-5 font-display text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.3em] text-gradient-gold">RESOURCES</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Helping women build <span className="text-gradient-pink italic">body & confidence</span></h2>
            </div>
            <p className="max-w-sm text-white/70">Unique, custom-built tools to give you the body you deserve.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map(p => (
              <div key={p.title} className="glass group relative overflow-hidden rounded-3xl p-2 transition-all hover:shadow-[var(--shadow-glow)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{background:"linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75))"}} />
                  <span className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-gradient-gold">{p.tag}</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p.icon className="h-4 w-4" style={{color:"var(--pink)"}} />
                      <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-[color:var(--pink)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="instagram" className="px-4 py-12 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">INSTAGRAM</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">
              Connect on <span className="text-gradient-pink italic">Instagram</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Follow @raynishanicole for daily workout inspiration, client transformations, and coaching updates.
            </p>
          </div>
          <InstagramCard />
        </div>
      </section>

      <section id="gallery" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.3em] text-gradient-gold">GALLERY</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Behind the <span className="text-gradient-pink italic">slay</span></h2>
            </div>
            <a href="https://www.instagram.com/raynishanicole/" target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              <Instagram className="h-4 w-4" style={{color:"var(--pink)"}} /> @raynishanicole
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <div key={g.src} className={`glass group relative overflow-hidden rounded-3xl p-1.5 ${i % 5 === 0 ? "md:row-span-2" : ""}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className={`w-full rounded-[1.25rem] object-cover transition-transform duration-700 group-hover:scale-105 ${i % 5 === 0 ? "aspect-[3/4] md:h-full" : "aspect-square"}`} />
                <div className="pointer-events-none absolute inset-1.5 rounded-[1.25rem] ring-1 ring-white/15" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="transformations" className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30" style={{background:"var(--gradient-gold)"}} />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/ray9.jpg" alt="Raynisha poolside" loading="lazy" className="rounded-3xl object-cover aspect-[3/4] w-full" />
              <img src="/images/ray11.jpg" alt="Raynisha studio portrait" loading="lazy" className="rounded-3xl object-cover aspect-[3/4] w-full mt-8" />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-gradient-gold">RESULTS THAT LAST</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black leading-tight">Consistency over <span className="text-gradient-pink italic">perfection</span></h2>
              <p className="mt-4 text-white/70">No crash diets, no punishing cardio. Just smart programming, real food and accountability that keeps you showing up.</p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[{k:"12 wk", v:"Avg. transformation"},{k:"4x", v:"Sessions / week"},{k:"24/7", v:"Message support"}].map(s => (
                  <div key={s.v} className="glass rounded-2xl p-4 text-center">
                    <div className="font-display text-2xl font-black text-gradient-pink">{s.k}</div>
                    <div className="mt-1 text-[10px] tracking-widest uppercase text-white/60">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">SCHEDULE</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Book your <span className="text-gradient-pink italic">session</span></h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Pick a time that works for you — consultations, coaching calls and check-ins.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="glass-strong rounded-[2rem] p-2 overflow-hidden">
              <iframe
                src="https://calendly.com/raynishanicole?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=FF76A7"
                title="Book with Raynisha on Calendly"
                loading="lazy"
                className="w-full rounded-[1.5rem] h-[720px] border-0"
              />
            </div>
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 hidden lg:block">
              <img src={program4} alt="Raynisha Nicole" loading="lazy" className="h-full w-full rounded-[1.5rem] object-cover" />
              <div className="absolute inset-2 rounded-[1.5rem] ring-1 ring-white/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">GET STARTED</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Coaching <span className="text-gradient-pink italic">application</span></h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Tell me about your goals and I'll build the right plan for you.</p>
          </div>
          <div className="mt-10 glass-strong rounded-[2rem] p-2">
            <iframe
              src="https://us20.list-manage.com/survey?u=3f518e84ffcc1d3df74b38434&id=d8a21c3680&attribution=false"
              title="Coaching application form"
              loading="lazy"
              className="w-full rounded-[1.5rem] h-[900px] border-0 bg-white"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="px-4 py-24">

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">TESTIMONIALS</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">What my <span className="text-gradient-pink italic">happy clients</span> say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <blockquote key={r.name} className="glass rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1" style={{color:"#f6d17a"}}>
                    {Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-white/80 leading-relaxed">"{r.text}"</p>
                </div>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full" style={{background:"var(--gradient-pink)"}} />
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-[10px] tracking-widest uppercase text-white/50">Client</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">QUESTIONS</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Frequently <span className="text-gradient-pink italic">asked</span></h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="glass group rounded-3xl px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg sm:text-xl font-bold">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-black transition-transform group-open:rotate-45" style={{background:"var(--gradient-pink)"}}>+</span>
                </summary>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-4 py-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-[2rem] p-8 sm:p-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl opacity-30" style={{background:"var(--gradient-pink)"}} />
          <div className="relative">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">FREE GUIDE</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black leading-tight">Get my <span className="text-gradient-pink italic">glute growth</span> starter guide</h2>
            <p className="mt-3 text-white/70">Join the Slay list for weekly training tips, recipes and early access to new programs.</p>
          </div>
          <a href="#apply" className="relative justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-black transition-transform hover:scale-105" style={{background:"var(--gradient-pink)", boxShadow:"var(--shadow-glow)"}}>
            Join the list <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto max-w-4xl glass-strong rounded-[2rem] p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{background:"radial-gradient(ellipse at center, rgba(255,118,167,0.25), transparent 60%)"}} />
          <div className="relative">
            <div className="text-xs tracking-[0.3em] text-gradient-gold">READY TO SLAY?</div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black">Take a huge step in your <span className="text-gradient-pink italic">journey today</span></h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Whether it's coaching, a program, or a meal plan — there's a path built for you.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@slaywithray.com" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105" style={{background:"var(--gradient-pink)", boxShadow:"var(--shadow-glow)"}}>
                Get in Touch <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programs" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-12">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] items-start">
          <div>
            <img src="/logo.png" alt="Slay With Ray" className="h-16 sm:h-20 w-auto object-contain max-w-[300px] mb-4" />
            <p className="mt-3 text-sm text-white/60 max-w-sm">Helping women build body and confidence — one workout, one meal, one check-in at a time.</p>
            <div className="mt-5 flex gap-3">
              {[
                {icon: Instagram, href: "https://www.instagram.com/raynishanicole/"},
                {icon: Facebook, href: "https://www.facebook.com/slaywithrayfit"},
                {icon: Twitter, href: "https://twitter.com/slaywithrayfit"},
                {icon: Youtube, href: "https://www.youtube.com/channel/UC0_mI0xyGuMrRiuFy7cd8qw"},
              ].map(({icon:Icon, href}) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] text-gradient-gold">EXPLORE</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {nav.map(n => <li key={n.href}><a href={n.href} className="hover:text-[color:var(--pink)]">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] text-gradient-gold">CONTACT</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>hello@slaywithray.com</li>
              <li>Mon–Fri · 9am–6pm</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl flex flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Slay With Ray. All rights reserved.</div>
          <div>Building better brands · Building better bodies</div>
        </div>
      </footer>

      <PromoBanners />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Dumbbell, Apple, Sparkles, Check, Star, ShieldCheck, HeartHandshake, MessageSquare, Calendar, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { PromoBanners } from "@/components/PromoBanners";

export const Route = createFileRoute("/coaching")({
  component: CoachingPage,
  head: () => ({
    meta: [
      { title: "1:1 Fitness Coaching — Slay With Ray by Raynisha Nicole" },
      { name: "description", content: "Transform your body and confidence with 1:1 online fitness coaching, custom meal plans, and weekly check-ins with Raynisha Nicole." },
    ],
  }),
});

const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "1:1 Training", href: "#coaching-details" },
  { label: "Programs", href: "https://slaywithray.com/programs/" },
  { label: "Instagram", href: "/#instagram" },
  { label: "Book", href: "#book-consultation" },
  { label: "Apply", href: "#apply-coaching" },
];

const coachingFeatures = [
  {
    icon: Dumbbell,
    title: "Tailored Workout Programming",
    desc: "Built specifically around your body type, fitness level, and gym or home equipment access.",
  },
  {
    icon: Apple,
    title: "Macro & Meal Guidance",
    desc: "Custom food list, grocery breakdowns, and flexible macro tracking to fuel glute growth and fat loss.",
  },
  {
    icon: Calendar,
    title: "Weekly Check-Ins & Adjustments",
    desc: "Detailed weekly video & message check-ins to monitor measurements, photos, and scale progress.",
  },
  {
    icon: MessageSquare,
    title: "Direct 1:1 Coach Access",
    desc: "24/7 priority messaging and exercise video form reviews so you never train in the dark.",
  },
];

const coachingSteps = [
  { n: "01", t: "Submit Application", d: "Fill out the coaching intake form below so Raynisha can analyze your goals and lifestyle." },
  { n: "02", t: "Strategy Call", d: "Hop on a 1:1 consultation to map out your 12-week transformation blueprint." },
  { n: "03", t: "Get Your Custom Plan", d: "Access your tailored workout program, macro breakdowns, and form guides." },
  { n: "04", t: "Slay & Transform", d: "Track weekly check-ins, adjust programming, and build lasting body confidence." },
];

const testimonials = [
  { name: "Rebecca Ward", text: "Working 1:1 with Raynisha changed everything. The accountability kept me consistent and I saw glute growth in just 4 weeks!", img: "/images/ray10.jpg" },
  { name: "Cynthia Dewar", text: "Her form reviews and weekly check-ins are priceless. I learned how to eat for muscle gain without crash dieting.", img: "/images/ray11.jpg" },
  { name: "Bianca Soto", text: "10/10 recommendation! My waist is tighter, my glutes are fuller, and I feel super confident at the gym.", img: "/images/ray9.jpg" },
];

function CoachingPage() {
  return (
    <div className="min-h-screen bg-hero text-foreground overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="relative z-50 border-b border-white/10">
        <div className="glass-strong">
          <p className="text-center text-xs sm:text-sm py-2.5 tracking-[0.25em] font-medium">
            <span className="text-gradient-gold font-bold">1:1 COACHING SLOTS OPEN</span>
            <span className="text-white/80"> — LIMITED CLIENT INTAKE FOR THIS MONTH</span>
          </p>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 py-3 shadow-[0_10px_40px_-15px_rgba(255,118,167,0.35)]">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Slay With Ray" className="h-12 sm:h-14 w-auto object-contain max-w-[240px]" />
          </Link>
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-[color:var(--pink)] transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#apply-coaching"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-pink)" }}
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pt-12 sm:pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-pink)" }} />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest text-gradient-gold">
              <Target className="h-4 w-4" />
              1:1 PRIVATE FITNESS COACHING
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
              Transform your <span className="text-gradient-pink italic">body</span><br />
              with <span className="text-gradient-gold italic">1:1 guidance</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
              Personalized online coaching by <span className="text-white font-bold">Raynisha Nicole</span> designed to help women build glutes, tone their core, and transform naturally with 100% accountability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#apply-coaching"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 shadow-lg"
                style={{ background: "var(--gradient-pink)", boxShadow: "var(--shadow-glow)" }}
              >
                Apply For Coaching <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#book-consultation"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Book 1:1 Consultation
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 500+ Transformations</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-pink-400" /> Certified Fitness Specialist</div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-strong relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden rounded-[2.5rem] p-2.5 shadow-2xl">
              <img
                src="/images/ray4.jpg"
                alt="Raynisha Nicole 1:1 Coaching"
                className="h-full w-full rounded-[2rem] object-cover"
              />
              <div className="absolute inset-2.5 rounded-[2rem] ring-1 ring-white/20 pointer-events-none" />
            </div>

            <div className="glass-strong absolute -left-4 bottom-8 rounded-2xl p-4 w-60 shadow-[var(--shadow-glow)] hidden sm:block">
              <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-bold">1:1 CLIENT RESULTS</div>
              <div className="mt-1 text-3xl font-black text-gradient-pink font-display">+100%</div>
              <div className="text-xs text-white/80 font-medium">Customized to your body type</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="coaching-details" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">WHAT IS INCLUDED</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Everything you need to <span className="text-gradient-pink italic">slay</span></h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">No generic plans. Every client receives a custom blueprint tailored for maximum results.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="glass rounded-3xl p-7 relative overflow-hidden transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-1">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl text-black font-bold" style={{ background: "var(--gradient-pink)" }}>
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.d || f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="px-4 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">THE ROADMAP</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">How 1:1 Coaching <span className="text-gradient-pink italic">works</span></h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coachingSteps.map((s) => (
              <div key={s.n} className="glass rounded-3xl p-6 relative overflow-hidden">
                <div className="font-display text-6xl font-black text-white/10 absolute top-2 right-4">{s.n}</div>
                <div className="grid h-10 w-10 place-items-center rounded-full text-black font-bold text-sm" style={{ background: "var(--gradient-pink)" }}>
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">REAL CLIENT REVIEWS</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">1:1 Client <span className="text-gradient-pink italic">transformations</span></h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-white/80 leading-relaxed text-sm">"{t.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover border border-pink-500/40" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-[10px] tracking-widest uppercase text-white/50">1:1 Coaching Client</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">CALENDLY SCHEDULE</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">Book your <span className="text-gradient-pink italic">1:1 Call</span></h2>
            <p className="mt-3 text-white/70 max-w-xl mx-auto">Select a time slot for your 1:1 strategy consultation with Raynisha Nicole.</p>
          </div>

          <div className="mt-10 glass-strong rounded-[2.5rem] p-2 overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src="https://calendly.com/raynishanicole?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=FF76A7"
              title="Book 1:1 Coaching Call with Raynisha"
              loading="lazy"
              className="w-full rounded-[2rem] h-[720px] border-0"
            />
          </div>
        </div>
      </section>

      {/* Coaching Application Form */}
      <section id="apply-coaching" className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">GET STARTED</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">1:1 Coaching <span className="text-gradient-pink italic">Application</span></h2>
            <p className="mt-3 text-white/70 max-w-xl mx-auto">Fill out the official coaching survey below to get started on your transformation.</p>
          </div>

          <div className="mt-10 glass-strong rounded-[2.5rem] p-2 border border-white/10 shadow-2xl">
            <iframe
              src="https://us20.list-manage.com/survey?u=3f518e84ffcc1d3df74b38434&id=d8a21c3680&attribution=false"
              title="Coaching Application Form"
              loading="lazy"
              className="w-full rounded-[2rem] h-[900px] border-0 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] items-start">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="Slay With Ray" className="h-16 sm:h-20 w-auto object-contain mb-4" />
            </Link>
            <p className="mt-3 text-sm text-white/60 max-w-sm">Helping women build body and confidence — one workout, one meal, one check-in at a time.</p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/raynishanicole/" },
                { icon: Facebook, href: "https://www.facebook.com/slaywithrayfit" },
                { icon: Twitter, href: "https://twitter.com/slaywithrayfit" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UC0_mI0xyGuMrRiuFy7cd8qw" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">EXPLORE</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-[color:var(--pink)]">Home</Link></li>
              <li><Link to="/coaching" className="hover:text-[color:var(--pink)]">1:1 Coaching</Link></li>
              <li><a href="https://slaywithray.com/programs/" target="_blank" rel="noreferrer" className="hover:text-[color:var(--pink)]">Programs</a></li>
              <li><a href="/#instagram" className="hover:text-[color:var(--pink)]">Instagram</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] text-gradient-gold font-bold">CONTACT</div>
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

      {/* Floating Promo Banners */}
      <PromoBanners />
    </div>
  );
}

import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Menu,
  MessageCircle,
  MoveUpRight,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Google Business Profile",
    description:
      "আপনার ব্যবসাকে Google Search ও Maps-এ সঠিক মানুষদের সামনে আনার জন্য profile setup, category, photo, review ও local visibility ঠিক করি।",
    tag: "Local visibility",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Strategy থেকে content, campaign ও conversion—একটি পরিষ্কার growth system বানাই যাতে marketing খরচ measurable কাজে লাগে।",
    tag: "Growth system",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Website & Brand Design",
    description:
      "দেখতে সুন্দর নয় শুধু—বিশ্বাস তৈরি করে, inquiry আনে এবং আপনার service-কে premiumভাবে উপস্থাপন করে এমন digital presence।",
    tag: "Conversion design",
  },
];

const HERO_IMAGE = `${import.meta.env.BASE_URL}nfkhan-hero.jpg`;

const plans = [
  {
    name: "Starter",
    eyebrow: "ভিত্তি শক্ত করুন",
    price: "৳ ১২,০০০",
    period: "/ one-time",
    description: "নতুন local business বা service provider-এর জন্য clean, credible setup।",
    features: ["Google Business Profile audit", "Category & service optimization", "Review response framework", "30-day action roadmap"],
  },
  {
    name: "Growth",
    eyebrow: "সবচেয়ে জনপ্রিয়",
    price: "৳ ১৮,০০০",
    period: "/ month",
    description: "যারা নিয়মিত lead, content ও local visibility বাড়াতে চান।",
    features: ["Monthly Google profile management", "Local SEO content direction", "Social content calendar", "Monthly insight report"],
    featured: true,
  },
  {
    name: "Custom",
    eyebrow: "স্কেল করার জন্য",
    price: "আলোচনা সাপেক্ষে",
    period: "",
    description: "একাধিক location, paid campaign বা full digital transformation।",
    features: ["Growth strategy workshop", "Multi-channel campaign plan", "Website & funnel review", "Dedicated monthly support"],
  },
];

const steps = [
  ["01", "শুনব", "আপনার business, customer ও current challenge বুঝে নেব।"],
  ["02", "পরিষ্কার করব", "কোথায় visibility ও conversion আটকে আছে—সেটা audit করব।"],
  ["03", "গড়ে দেব", "Priority অনুযায়ী profile, content, design ও campaign সাজাব।"],
  ["04", "মাপব", "যা কাজ করছে সেটাকে বাড়াব, যা করছে না সেটাকে বদলাব।"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleBrief = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
    toast.success("আপনার brief save হয়েছে", {
      description: "এখন আপনার preferred WhatsApp বা email দিয়ে NF-KHAN-এর সাথে কথা বলুন।",
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ee] text-[#17151c]">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111017]/80 text-white backdrop-blur-xl">
        <div className="container flex h-[74px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-xl bg-[#efe6ff] text-[#17151c] shadow-[0_0_28px_rgba(201,167,255,0.4)] transition-transform duration-200 group-hover:rotate-6">
              <Sparkles className="size-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[19px] font-bold tracking-[-0.03em]">NF-KHAN<span className="text-[#c9a7ff]">.</span></span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/65 md:flex">
            <button onClick={() => scrollToId("services")} className="transition-colors hover:text-white">Services</button>
            <button onClick={() => scrollToId("method")} className="transition-colors hover:text-white">Our method</button>
            <button onClick={() => scrollToId("plans")} className="transition-colors hover:text-white">Plans</button>
            <button onClick={() => scrollToId("contact")} className="transition-colors hover:text-white">Contact</button>
          </nav>

          <a href="https://wa.me/971552612573" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[12px] font-semibold text-white transition-all hover:border-[#c9a7ff] hover:bg-[#c9a7ff] hover:text-[#17151c] md:flex">
            WhatsApp করুন <ArrowUpRight className="size-3.5" />
          </a>

          <button aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-white md:hidden">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#15131d] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/75">
              {[['services', 'Services'], ['method', 'Our method'], ['plans', 'Plans'], ['contact', 'Contact']].map(([id, label]) => (
                <button key={id} className="text-left" onClick={() => { scrollToId(id); closeMenu(); }}>{label}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      <section id="top" className="relative isolate min-h-[700px] overflow-hidden bg-[#111017] pt-[74px] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(111,78,173,0.28),transparent_36%),radial-gradient(circle_at_18%_80%,rgba(42,91,190,0.16),transparent_28%)]" />
        <img src={HERO_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-32 top-12 h-[520px] w-[520px] rounded-full border border-[#c9a7ff]/20 blur-[1px] hero-orbit" />
        <div className="absolute -right-20 top-28 h-[360px] w-[360px] rounded-full border border-[#6c8bff]/20 hero-orbit-reverse" />
        <div className="container relative z-10 grid min-h-[626px] items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4 lg:pb-24">
          <div className="max-w-[680px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d5c6ff] shadow-[0_0_26px_rgba(132,91,203,0.12)]">
              <span className="size-1.5 rounded-full bg-[#b5ffb1] shadow-[0_0_12px_#b5ffb1]" />
              Digital growth studio · Bangladesh
            </div>
            <h1 className="font-display max-w-[740px] text-[clamp(3.2rem,7vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.065em]">
              আপনার ব্যবসা যেন <span className="text-[#c9a7ff]">খুঁজে পাওয়া যায়।</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-white/62 md:text-[19px]">
              NF-KHAN local business-এর জন্য Google visibility, digital marketing ও conversion-focused design একসাথে গড়ে দেয়—যাতে মানুষ আপনাকে দেখে, বিশ্বাস করে, যোগাযোগ করে।
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToId("contact")} className="group flex items-center justify-center gap-3 rounded-full bg-[#efe6ff] px-6 py-3.5 text-sm font-bold text-[#1a1621] transition-all hover:bg-white hover:shadow-[0_10px_35px_rgba(201,167,255,0.28)] active:scale-[0.97]">
                বিনামূল্যে audit নিন <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button onClick={() => scrollToId("services")} className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/50 hover:text-white active:scale-[0.97]">
                কীভাবে কাজ করি <ArrowDownRight className="size-4" />
              </button>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/42">
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#b5ffb1]" /> No fake promises</span>
              <span className="flex items-center gap-2"><Target className="size-4 text-[#c9a7ff]" /> Clear deliverables</span>
              <span className="flex items-center gap-2"><Clock3 className="size-4 text-[#ffbf86]" /> Abu Dhabi · Worldwide</span>
            </div>
          </div>

          <div className="relative hidden min-h-[440px] lg:block">
            <div className="absolute right-0 top-6 h-[395px] w-[395px] rounded-[42%_58%_58%_42%/44%_42%_58%_56%] bg-gradient-to-br from-[#2a2444] via-[#453073] to-[#13274a] opacity-80 blur-[1px] hero-blob" />
            <div className="absolute right-7 top-16 h-[340px] w-[340px] overflow-hidden rounded-[46%_54%_54%_46%/41%_48%_52%_59%] border border-white/10 bg-[#171422]/70 shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl hero-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_32%,rgba(193,156,255,0.68),transparent_23%),radial-gradient(circle_at_34%_70%,rgba(59,145,255,0.52),transparent_29%),radial-gradient(circle_at_80%_79%,rgba(255,177,115,0.38),transparent_22%)]" />
              <div className="absolute inset-x-10 top-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute left-12 top-20 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Visibility index</div>
              <div className="absolute left-12 top-28 font-display text-6xl font-bold tracking-[-0.08em] text-white">+84<span className="text-2xl text-[#b5ffb1]">%</span></div>
              <div className="absolute bottom-14 left-12 right-12 flex items-end gap-2">
                {[38, 52, 46, 70, 61, 86, 78, 100].map((height, index) => <span key={index} className="flex-1 rounded-t-full bg-gradient-to-t from-[#6d5bcc] to-[#d4c0ff]" style={{ height: `${height}px`, opacity: 0.35 + index * 0.08 }} />)}
              </div>
              <div className="absolute bottom-7 left-12 flex items-center gap-2 text-[10px] text-white/45"><TrendingUp className="size-3.5 text-[#b5ffb1]" /> A clearer path to growth</div>
            </div>
            <div className="absolute bottom-9 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1a1722]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <span className="grid size-9 place-items-center rounded-xl bg-[#b5ffb1]/10 text-[#b5ffb1]"><MoveUpRight className="size-4" /></span>
              <div><div className="text-[10px] uppercase tracking-[0.17em] text-white/35">North star</div><div className="mt-0.5 text-sm font-semibold text-white/85">Qualified inquiries</div></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f3ee] to-transparent" />
      </section>

      <section className="relative -mt-1 bg-[#f6f3ee] pb-20 pt-8">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#17151c]/10 bg-[#17151c]/10 sm:grid-cols-3">
            {[["01", "Local first", "আপনার এলাকার real customer-কে আগে বুঝি"], ["02", "Proof over noise", "যা deliver করা যায়, শুধু সেটাই promise করি"], ["03", "Built to convert", "প্রতিটি touchpoint-এর একটি business goal থাকে"]].map(([number, title, text]) => (
              <div key={number} className="bg-[#fbf9f5] p-6 sm:p-7"><div className="mb-8 flex items-center justify-between text-xs font-bold tracking-[0.17em] text-[#8a8490]"><span>{number}</span><span className="h-px w-10 bg-[#17151c]/15" /></div><div className="font-display text-lg font-bold tracking-[-0.03em]">{title}</div><div className="mt-2 text-sm leading-6 text-[#6c6670]">{text}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-[#f6f3ee] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div><div className="section-kicker">What we do / 01</div><h2 className="section-title mt-4">শুধু পোস্ট নয়।<br /><span className="text-[#7b52af]">ব্যবসার momentum.</span></h2><p className="mt-6 max-w-[330px] text-[15px] leading-7 text-[#6c6670]">আপনার customer journey-এর গুরুত্বপূর্ণ জায়গাগুলোকে একসাথে ঠিক করি—search থেকে conversation, conversation থেকে conversion।</p><button onClick={() => scrollToId("contact")} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6f45a2] underline decoration-[#c9a7ff] decoration-2 underline-offset-4 hover:text-[#17151c]">আপনার জন্য কোনটি দরকার? <ArrowUpRight className="size-4" /></button></div>
            <div className="divide-y divide-[#17151c]/10 border-y border-[#17151c]/10">{services.map(({ number, icon: Icon, title, description, tag }) => <div key={number} className="group grid gap-5 py-7 sm:grid-cols-[58px_1fr_auto] sm:items-start sm:gap-7"><div className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#9b949d]"><span>{number}</span><span className="hidden h-px w-4 bg-[#17151c]/20 sm:block" /></div><div><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#ede5f8] text-[#7652a8] transition-all duration-200 group-hover:bg-[#17151c] group-hover:text-[#c9a7ff]"><Icon className="size-4" /></span><h3 className="font-display text-xl font-bold tracking-[-0.035em]">{title}</h3></div><p className="mt-3 max-w-[480px] text-[14px] leading-6 text-[#6c6670]">{description}</p></div><span className="w-fit rounded-full bg-[#ece7df] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#837c83]">{tag}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section id="method" className="scroll-mt-20 bg-[#18151e] py-20 text-white md:py-28">
        <div className="container"><div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div><div className="section-kicker text-[#c9a7ff]">Our method / 02</div><h2 className="section-title mt-4 text-white">একটা clear<br /><span className="text-[#c9a7ff]">growth loop.</span></h2><p className="mt-6 max-w-[360px] text-[15px] leading-7 text-white/52">ভালো marketing মানে বেশি আওয়াজ নয়—সঠিক message, সঠিক মানুষ এবং নিয়মিত improvement।</p><div className="mt-10 flex items-center gap-2 text-xs font-semibold text-white/40"><span className="size-2 rounded-full bg-[#b5ffb1]" /> আপনার business অনুযায়ী সাজানো</div></div><div className="grid gap-x-9 gap-y-10 sm:grid-cols-2">{steps.map(([number, title, text]) => <div key={number} className="relative border-t border-white/15 pt-5"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.18em] text-white/35">{number}</span><ArrowUpRight className="size-4 text-[#c9a7ff]" /></div><h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.04em]">{title}</h3><p className="mt-3 max-w-[240px] text-sm leading-6 text-white/48">{text}</p></div>)}</div></div></div>
      </section>

      <section id="plans" className="scroll-mt-20 bg-[#e9e3f2] py-20 md:py-28"><div className="container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="section-kicker text-[#7951a5]">Simple offers / 03</div><h2 className="section-title mt-4 max-w-[620px]">আপনার next move-এর<br /><span className="text-[#7951a5]">জন্য তৈরি।</span></h2></div><p className="max-w-[300px] text-sm leading-6 text-[#5f5965]">শুরুতে scope পরিষ্কার রাখি, তারপর বাস্তব ফল অনুযায়ী পরের step ঠিক করি।</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative flex flex-col rounded-[24px] border p-7 transition-all duration-200 hover:-translate-y-1 ${plan.featured ? "border-[#7652a8] bg-[#211b2b] text-white shadow-[0_24px_55px_rgba(65,36,105,0.22)]" : "border-[#17151c]/10 bg-[#f9f7f3]"}`}>{plan.featured && <div className="absolute -top-3 left-7 rounded-full bg-[#b5ffb1] px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#162016]">Recommended</div>}<div className={`text-[11px] font-bold uppercase tracking-[0.18em] ${plan.featured ? "text-[#c9a7ff]" : "text-[#7951a5]"}`}>{plan.eyebrow}</div><div className="mt-3 flex items-baseline gap-1"><h3 className="font-display text-3xl font-bold tracking-[-0.05em]">{plan.name}</h3></div><div className={`mt-7 font-display text-3xl font-bold tracking-[-0.055em] ${plan.featured ? "text-white" : "text-[#17151c]"}`}>{plan.price}<span className={`ml-1 text-xs font-medium tracking-normal ${plan.featured ? "text-white/45" : "text-[#8c858c]"}`}>{plan.period}</span></div><p className={`mt-3 min-h-[48px] text-sm leading-6 ${plan.featured ? "text-white/55" : "text-[#6c6670]"}`}>{plan.description}</p><div className={`my-7 h-px ${plan.featured ? "bg-white/10" : "bg-[#17151c]/10"}`} /> <ul className="space-y-3">{plan.features.map((feature) => <li key={feature} className={`flex items-start gap-2 text-sm ${plan.featured ? "text-white/72" : "text-[#504a54]"}`}><Check className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-[#b5ffb1]" : "text-[#7951a5]"}`} />{feature}</li>)}</ul><button onClick={() => scrollToId("contact")} className={`mt-8 flex items-center justify-between rounded-full px-4 py-3 text-sm font-bold transition-all active:scale-[0.97] ${plan.featured ? "bg-[#efe6ff] text-[#17151c] hover:bg-white" : "bg-[#17151c] text-white hover:bg-[#7652a8]"}`}><span>Plan নিয়ে কথা বলুন</span><ArrowUpRight className="size-4" /></button></div>)}</div></div></section>

      <section id="contact" className="scroll-mt-20 bg-[#f6f3ee] py-20 md:py-28"><div className="container"><div className="grid overflow-hidden rounded-[30px] bg-[#191620] text-white lg:grid-cols-[0.9fr_1.1fr]"><div className="relative overflow-hidden p-8 sm:p-12 lg:p-14"><div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#744bb0]/30 blur-3xl" /><div className="relative"><div className="section-kicker text-[#c9a7ff]">Start a conversation / 04</div><h2 className="section-title mt-4 text-white">আপনার business<br /><span className="text-[#c9a7ff]">কোথায় আটকে?</span></h2><p className="mt-6 max-w-[370px] text-[15px] leading-7 text-white/52">একটি ছোট brief পাঠান। আপনার current অবস্থার উপর ভিত্তি করে কোন service আগে দরকার—সেটা নিয়ে honest feedback দেব।</p><div className="mt-10 space-y-4 text-sm text-white/65"><a href="https://wa.me/971552612573" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:text-white"><span className="grid size-8 place-items-center rounded-lg bg-white/5"><MessageCircle className="size-4 text-[#b5ffb1]" /></span><span><strong className="block font-semibold text-white/85">WhatsApp</strong>+971 55 261 2573</span></a><a href="mailto:mdgaming594@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white"><span className="grid size-8 place-items-center rounded-lg bg-white/5"><Globe2 className="size-4 text-[#c9a7ff]" /></span><span><strong className="block font-semibold text-white/85">Email</strong>mdgaming594@gmail.com</span></a><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg bg-white/5"><ShieldCheck className="size-4 text-[#ffbf86]" /></span><span><strong className="block font-semibold text-white/85">Based in</strong>Abu Dhabi · Serving worldwide</span></div></div><a href="https://www.facebook.com/share/19ksHa5ii4/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a7ff] underline decoration-[#c9a7ff]/40 underline-offset-4 hover:text-white">Facebook page <ArrowUpRight className="size-4" /></a></div></div><form onSubmit={handleBrief} className="bg-[#f9f7f3] p-8 text-[#17151c] sm:p-12 lg:p-14"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">আপনার নাম<input required name="name" placeholder="যেমন: Rahim Ahmed" className="mt-2 w-full rounded-xl border border-[#17151c]/12 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#7951a5] focus:ring-4 focus:ring-[#c9a7ff]/20" /></label><label className="text-sm font-semibold">ব্যবসার নাম<input required name="business" placeholder="আপনার brand / shop name" className="mt-2 w-full rounded-xl border border-[#17151c]/12 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#7951a5] focus:ring-4 focus:ring-[#c9a7ff]/20" /></label></div><label className="mt-5 block text-sm font-semibold">কোন জায়গায় সাহায্য দরকার?<select required name="need" defaultValue="" className="mt-2 w-full rounded-xl border border-[#17151c]/12 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#7951a5] focus:ring-4 focus:ring-[#c9a7ff]/20"><option value="" disabled>একটি বেছে নিন</option><option>Google Business Profile</option><option>Digital marketing</option><option>Website & brand design</option><option>আমি নিশ্চিত নই—পরামর্শ চাই</option></select></label><label className="mt-5 block text-sm font-semibold">আপনার challenge<textarea required name="challenge" rows={4} placeholder="কী নিয়ে সবচেয়ে বেশি চিন্তায় আছেন?" className="mt-2 w-full resize-none rounded-xl border border-[#17151c]/12 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#7951a5] focus:ring-4 focus:ring-[#c9a7ff]/20" /></label><button type="submit" className="mt-6 flex w-full items-center justify-between rounded-xl bg-[#17151c] px-5 py-4 text-sm font-bold text-white transition-all hover:bg-[#7652a8] active:scale-[0.99]"><span>{formSent ? "Brief ready — next step WhatsApp" : "আমার growth brief পাঠান"}</span><ArrowUpRight className="size-4" /></button><p className="mt-4 text-center text-[11px] leading-5 text-[#928b92]">এই form-টি brief প্রস্তুত করে। সরাসরি কথা বলতে WhatsApp বা email ব্যবহার করুন।</p></form></div></div></section>

      <footer className="bg-[#f6f3ee] pb-10 pt-4"><div className="container"><div className="flex flex-col justify-between gap-5 border-t border-[#17151c]/10 pt-6 text-xs text-[#8a8490] sm:flex-row sm:items-center"><div className="flex items-center gap-2 font-semibold text-[#17151c]"><span className="grid size-6 place-items-center rounded-md bg-[#17151c] text-[#c9a7ff]"><Sparkles className="size-3" /></span>NF-KHAN.</div><div>Abu Dhabi · Serving worldwide · <a href="mailto:mdgaming594@gmail.com" className="text-[#6f45a2] hover:underline">mdgaming594@gmail.com</a></div><div>© 2026 NF-KHAN Studio</div></div></div></footer>
    </main>
  );
}

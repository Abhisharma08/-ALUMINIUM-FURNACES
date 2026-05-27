"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShieldCheck,
  Flame,
  Factory,
  Settings,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building2,
  Wrench,
  Cpu,
  BarChart3,
  Zap,
  Wind,
  Snowflake,
  Cable,
  Car,
  Drill,
  Recycle,
  Plane,
  Battery,

} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779688587/WhatsApp_Image_2026-05-24_at_2.01.46_PM_e3rdsn.jpg"
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/furnace/1200/900"
const Product_1 = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779528431/WhatsApp_Image_2026-05-23_at_12.09.18_PM_ntnyd3.jpg"
const Product_2 = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779528435/WhatsApp_Image_2026-05-23_at_12.09.18_PM_1_wcdree.jpg"

export default function LandingPage() {
  const scrollToLeadForm = () => {
    const candidates = [  
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
    ].filter(Boolean) as HTMLElement[]

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0]

    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
<div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
  {/* URGENCY BAR */}
  {/* <div className="fixed top-0 z-[60] w-full bg-primary py-2 text-center text-sm font-semibold text-white">
    🔥 Limited Slots Open — Get Your Custom Furnace Quote Within 4 Working Hours
    <span className="mx-3 hidden md:inline">|</span>
    <span className="block md:inline">
      Call Now: +91 98113 04306
    </span>
  </div> */}

{/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white backdrop-blur-xl overflow-x-hidden">
  <div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4">
    
    {/* LEFT */}
    <div className="flex items-center gap-3 md:gap-5">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="Continental Furnaces"
          width={180}
          height={55}
          className="h-10 md:h-14 w-auto object-contain"
          priority
        />
      </Link>
    </div>

    {/* RIGHT */}
    <div className="hidden lg:flex items-center gap-5">
      {/* <div className="text-right">

        <p className="text-xs text-secondary">
          ISO 9001:2015 &
          <br />ISO 14001:2015 Certified
        </p>
      </div> */}

      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-12 rounded-xl"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</nav>

  <main className="pt-[64px] md:pt-[96px] pb-24 lg:pb-0 w-full">
    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_URL}
          alt="Industrial Aluminium Furnace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white pt-4">

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] tracking-tight text-primary md:text-4xl">
                Aluminium Recycling & Processing Furnaces 
              </h1>

              <h2 className="max-w-5xl text-2xl font-bold leading-[1.05] tracking-tight text-primary md:text-3xl">
                Bogie Hearth Oven · Ageing Furnace <br /> · Custom-Built
              </h2>

              <p className="max-w-3xl text-lg leading-relaxed text-white">
                ISO-certified aluminium furnaces for annealing, ageing,
                stress relieving, and precipitation hardening. Electric
                heating with zero contamination, forced air circulation,
                and PLC/HMI precision control — custom-engineered for
                your production capacity.
              </p>
            </div>

            {/* SPEC / TRUST TILES */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
              {[
                {
                  title: "35+ Years",
                  subtitle: "Industrial Furnace Manufacturing",
                  icon: <Factory className="h-8 w-8 text-primary" />,
                },
                {
                  title: "ISO Certified",
                  subtitle: "9001:2015 & 14001:2015",
                  icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Custom Built",
                  subtitle: "Engineered Per Production Line",
                  icon: <Settings className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Pan India",
                  subtitle: "Installation & Service Support",
                  icon: <Wrench className="h-8 w-8 text-primary" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-card p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      {item.icon}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-white/70">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

          {/* RIGHT FORM */}
          <div
            className="lg:sticky lg:top-32"
            id="top-form-desktop"
          >
            <LeadForm            />
          </div>
        </div>
      </div>
    </section>
       {/* V2 changes SECTION start*/}
        
         
{/* SECTION 1 — PAIN POINTS */}
<section className="relative overflow-hidden py-24 w-full">
  {/* Background Image */}
<div className="absolute inset-0">
  <Image
    src={Product_1}
    alt="Industrial aluminium furnace problems"
    fill
    className="object-cover"
  />
</div>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/65" />
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      The Real Cost of Getting It Wrong
    </div> */}

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Is Your Current Aluminium Furnace Causing These Costly Problems?
    </h2>

    {/* Cards */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
      {[
        {
          title: "Metal Contamination & Oxidation",
          desc: "Gas-fired furnaces without proper atmosphere control cause oxidation, discolouration, and surface contamination in aluminium products — leading to rejection, rework, and loss of high-value material.",
        },
        {
          title: "Non-Uniform Heat = Inconsistent Strength",
          desc: "Uneven temperature distribution across the aluminium load causes variation in hardness and strength after ageing or annealing — creating quality failures that only show up during final testing.",
        },
        {
          title: "No Process Records — No Quality Compliance",
          desc: "Without PLC data logging, you cannot prove cycle temperatures, times, or repeatability to OEM customers, quality auditors, or export buyers — creating a major compliance gap in your operations.",
        },
        {
          title: "Air Pollution & Regulatory Violations",
          desc: "Rotary furnaces for aluminium recycling generate dust 8,000–15,000 mg/Nm³ with NOx and SO traces. Without proper APCD systems, you face factory closure risk, fines, and worker health hazards.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />

            <h3 className="text-xl font-bold leading-snug text-white">
              {item.title}
            </h3>

            <p className="leading-relaxed text-white/70 italics text-lg italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>       
        
{/* SECTION 2 — PRODUCTS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto px-4 max-w-7xl">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Industrial Aluminium Furnaces Built for Every Critical Process
    </h2>

    {/* PRODUCT GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">

      {[
      {
        number: "01",
        title: "Rotary Aluminum Melting Furnace",
        subtitle: "Efficient Scrap Melting & Uniform Heat Distribution",
        desc: "Dual-fuel burners — Oil & Gas compatible. Rotary action ensures uniform heat distribution with high thermal efficiency and low emissions compliant with environmental standards.",
      },
      {
        number: "02",
        title: "Stationary Type Aluminium Melting Furnace",
        subtitle: "Heavy-Duty Continuous Production Furnace",
        desc: "Fixed design for stable high-volume operations. Available from 500 kg to 30+ Tons with multiple discharge configurations and low maintenance requirements.",
      },
      {
        number: "03",
        title: "Tilting Type Melting Furnace",
        subtitle: "Controlled Hydraulic Pouring System",
        desc: "Hydraulic tilting enables precise pouring with 6000 kg bath capacity and 1500 kg/hr melting rate. LPG fired with operating temperatures up to 1000°C.",
      },
      {
        number: "04",
        title: "Aluminium Melting / Holding Furnace",
        subtitle: "Integrated Continuous Production System",
        desc: "Integrated melting + holding furnace for continuous operations. Supports LDO, FO, Producer Gas, and Natural Gas with optimised temperature management.",
      },
      {
        number: "05",
        title: "Tower Type Aluminium Melting Furnace",
        subtitle: "Vertical High-Efficiency Melting Design",
        desc: "Vertical configuration minimises floor space while enabling faster melting through vertical heat flow. Reduced oxidation lowers operating cost significantly.",
      },
      {
        number: "06",
        title: "Crucible Type Holding Furnace",
        subtitle: "Precision Electric Temperature Control",
        desc: "Electric heating system with ±5°C precision control. Minimises dross formation and integrates seamlessly with die casting machines.",
      },

      {
        number: "07",
        title: "Skelner Furnace",
        subtitle: "Continuous Die Casting & Holding Operations",
        desc: "Luminous flame burners + electric heaters in holding furnace. 50°C holding buffer eliminates hard oxidation. Available from 300 kg to 30 Tons.",
      },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-700 shadow-xl"
        >
          <CardContent className="p-8 space-y-6">

            {/* PRODUCT NUMBER */}
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              Product {item.number}
            </div>

            {/* TITLE */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold leading-tight text-primary">
                {item.title}
              </h3>

              <p className="text-secondary font-semibold text-lg">
                {item.subtitle}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white leading-relaxed italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* BOTTOM CTA */}
    <div className="mt-16 flex justify-center">
      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 rounded-xl text-base"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</section>

{/* SECTION 3 — KEY FEATURES */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      Why These Furnaces Perform Better
    </div> */}

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      6 Engineering Features That Deliver Superior Aluminium Processing Results
    </h2>

    {/* FEATURES GRID */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: Zap,
          title: "Electric Heating — Zero Contamination",
          desc: "Electric heating eliminates combustion gases from the chamber — no oxidation, no carbon deposition, no sulphur contamination. Critical for high-purity aluminium grades used in cable and automotive sectors.",
        },
        {
          icon: Wind,
          title: "Forced Air Circulation System",
          desc: "Internal forced air fans maintain uniform temperature distribution throughout the chamber — eliminating hotspots and cold zones. Every batch exits with consistent properties from edge to centre.",
        },
        {
          icon: BarChart3,
          title: "PLC/HMI Control + Data Logging",
          desc: "Full PLC/HMI automation with thermocouple-based temperature control and complete cycle data logging. Generate quality reports for OEM audits, export certifications, and process traceability requirements.",
        },
        {
          icon: Snowflake,
          title: "Controlled Cooling Options",
          desc: "Ageing furnace includes forced air cooling and optional water quenching — both critical for achieving target mechanical properties. Cooling rate directly determines final hardness of precipitation-hardened alloys.",
        },
        {
          icon: Wrench,
          title: "Custom Capacity — Every Plant Size",
          desc: "From hundreds of kilograms to several tonnes per batch — Continental builds every furnace to your exact production volume, floor layout, and load dimensions. No compromises on fit.",
        },
        {
          icon: ShieldCheck,
          title: "ISO 9001 Certified Manufacturing",
          desc: "Every furnace manufactured under ISO 9001:2015 quality system. Consistent build quality, documented processes, and full post-installation commissioning and AMC support across India.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
            </div>

            <h3 className="text-2xl font-bold leading-snug text-white">
              {item.title}
            </h3>

            <p className="leading-relaxed text-white/70 italic">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
        
        
{/* SECTION 7 — INDUSTRIES SERVED */}
<section className="relative overflow-hidden bg-white py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/20 px-5 py-2 text-sm font-semibold text-primary">
      Industries We Serve
    </div> */}

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Built for Your Industry
    </h2>

    {/* GRID */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
  {[
    {
      icon: Cable,
      title: "Cable Manufacturing",
      desc: "Aluminium conductor annealing for ACSR, AAC, and other cable grades",
    },
    {
      icon: Car,
      title: "Automotive & Electrical",
      desc: "T6/T5 heat treatment for die castings, connectors, electrical components",
    },
    {
      icon: Drill,
      title: "Non-Ferrous Wire",
      desc: "Aluminium wire and rod coil annealing for downstream processing",
    },
    {
      icon: Recycle,
      title: "Aluminium Recycling",
      desc: "Homogenising recycled aluminium + APCD for rotary furnace compliance",
    },
    {
      icon: Factory,
      title: "Metal Processing",
      desc: "Stress relieving before surface treatment, plating, and coating",
    },
    {
      icon: Plane,
      title: "Aerospace & Defence",
      desc: "Controlled atmosphere solution treatment for aerospace alloys",
    },
    {
      icon: Battery,
      title: "Battery Recycling",
      desc: "Rotary furnace + APCD for lead battery recycling operations",
    },
    {
      icon: Building2,
      title: "Heat Treatment Units",
      desc: "Batch ageing and annealing for contract heat treatment shops",
    },
  ].map((item, i) => (
    <Card
      key={i}
      className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
    >
      <CardContent className="p-8 space-y-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
        </div>

        <h3 className="text-2xl font-bold leading-snug text-white">
          {item.title}
        </h3>

        <p className="leading-relaxed text-white/90 italic">
          {item.desc}
        </p>
      </CardContent>
    </Card>
  ))}
</div>
  </div>
</section>       
        
{/*         {/* V2 changes SECTION */}

{/* FINAL CTA */}
<section className="py-24 bg-slate-200 relative overflow-hidden w-full">
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    
    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div className="space-y-9 pt-6">
        {/* <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div> */}

        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          Get Your Aluminium Furnace Quote Today.
        </h2>

        <p className="text-lg text-black max-w-2xl leading-relaxed">
          Tell us your capacity, product, and process.
          Our furnace engineers will prepare a complete technical proposal —
          specifications, drawings, and indicative pricing.
          <br />
          <br />
          <br />
          <span className="font-bold text-xl md:text-2xl text-primary">
          Within 24 hours. Zero obligation.
          </span>
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full">
        <LeadForm />
      </div>
    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background text-white pt-8 pb-28 lg:py-8 w-full border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
        <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            REQUEST FREE QUOTE NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
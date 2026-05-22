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
} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/furnace/1200/900"

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
<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-700/95 backdrop-blur-md overflow-x-hidden">
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
      <div className="text-right">

        <p className="text-xs text-white/60">
          ISO 9001:2015 &
          <br />ISO 14001:2015 Certified
        </p>
      </div>

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
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/75" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white pt-4">

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl">
                Aluminium Processing Furnaces
              </h1>

              <h2 className="max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-2xl">
                Bogie Hearth Oven · Ageing Furnace <br /> · Custom-Built
              </h2>

              <p className="max-w-3xl text-lg leading-relaxed text-white/80">
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
                  className="rounded-2xl border border-white/10 bg-card/70 p-5 backdrop-blur-sm"
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
    src={DEFAULT_PLACEHOLDER}
    alt="Industrial aluminium furnace problems"
    fill
    className="object-cover"
  />
</div>

{/* Dark Overlay */}
<div className="absolute inset-0" />
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
<section className="py-20 bg-white w-full">
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      Our Products
    </div> */}

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Two Precision Aluminium Furnaces — One Trusted Manufacturer
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
      {/* PRODUCT 1 */}
      <Card className="rounded-3xl overflow-hidden border border-slate-200  shadow-xl">
        {/* IMAGE */}
        <div className="relative h-72">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Bogie Hearth Oven for Aluminium"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <CardContent className="p-8 space-y-6 bg-slate-800">
          {/* TAG */}
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
            Product 01 · Aluminium Annealing
          </div>

          {/* TITLE */}
          <div>
            <h3 className="text-3xl font-bold text-primary leading-tight">
              Bogie Hearth Oven for Aluminium
            </h3>

            <p className="mt-3 text-secondary font-semibold text-lg">
              Annealing · Ageing · Stress Relieving — Zero Contamination
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/90 leading-relaxed text-base italic">
            Optimised for aluminium annealing, ageing, and stress relieving.
            Electric heating ensures clean, uniform heat distribution with no
            gas contamination — critical for high-purity aluminium processing
            in cable, automotive, and non-ferrous wire industries.
          </p>

          {/* TABLE */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm bg-slate-600">
              <tbody>
                {[
                  ["Temperature Range", "250°C – 600°C"],
                  ["Heating Mode", "Electric (Gas/Oil optional)"],
                  ["Circulation", "Forced Air — uniform heat"],
                  ["Controls", "PLC/HMI + Data Logging"],
                  ["Capacity", "Hundreds of kg to several tonnes"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-200 last:border-none"
                  >
                    <td className="p-4 font-semibold text-white bg-slate-700 w-1/2">
                      {row[0]}
                    </td>

                    <td className="p-4 text-white">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            GET QUOTE FOR BOGIE HEARTH OVEN →
          </Button>
        </CardContent>
      </Card>

      {/* PRODUCT 2 */}
      <Card className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
        {/* IMAGE */}
        <div className="relative h-72">
          <Image
            src={DEFAULT_PLACEHOLDER}
            alt="Ageing / Precipitation Hardening Furnace"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <CardContent className="p-8 space-y-6 bg-slate-800">
          {/* TAG */}
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
            Product 02 · Precipitation Hardening
          </div>

          {/* TITLE */}
          <div>
            <h3 className="text-3xl font-bold text-primary leading-tight">
              Ageing / Precipitation Hardening Furnace
            </h3>

            <p className="mt-3 text-secondary font-semibold text-lg">
              Strength · Hardness · Fatigue Performance of Aluminium Alloys
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/90 leading-relaxed text-base italic">
            Thermal treatment that enhances strength, hardness, and fatigue
            performance of aluminium alloys through controlled precipitation —
            critical for automotive die castings, aerospace components, and
            high-grade electrical conductor manufacturing.
          </p>

          {/* TABLE */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-600">
            <table className="w-full text-left text-sm bg-slate-600">
              <tbody>
                {[
                  ["Temperature Range", "95°C – 205°C (ageing)"],
                  ["Cycle Duration", "4 – 24 Hours"],
                  ["Heating Mode", "Gas / Oil / Electrical"],
                  ["Controls", "PLC with Data Logging"],
                  ["Cooling", "Forced Air or Water Quenching"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-200 last:border-none"
                  >
                    <td className="p-4 font-semibold text-white bg-slate-700 w-1/2">
                      {row[0]}
                    </td>

                    <td className="p-4 text-white">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            GET QUOTE FOR AGEING FURNACE →
          </Button>
        </CardContent>
      </Card>
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
          title: "Electric Heating — Zero Contamination ⚡",
          desc: "Electric heating eliminates combustion gases from the chamber — no oxidation, no carbon deposition, no sulphur contamination. Critical for high-purity aluminium grades used in cable and automotive sectors.",
        },
        {
          title: "Forced Air Circulation System 🌀",
          desc: "Internal forced air fans maintain uniform temperature distribution throughout the chamber — eliminating hotspots and cold zones. Every batch exits with consistent properties from edge to centre.",
        },
        {
          title: "PLC/HMI Control + Data Logging 📊",
          desc: "Full PLC/HMI automation with thermocouple-based temperature control and complete cycle data logging. Generate quality reports for OEM audits, export certifications, and process traceability requirements.",
        },
        {
          title: "Controlled Cooling Options ❄️",
          desc: "Ageing furnace includes forced air cooling and optional water quenching — both critical for achieving target mechanical properties. Cooling rate directly determines final hardness of precipitation-hardened alloys.",
        },
        {
          title: "Custom Capacity — Every Plant Size 🔧",
          desc: "From hundreds of kilograms to several tonnes per batch — Continental builds every furnace to your exact production volume, floor layout, and load dimensions. No compromises on fit.",
        },
        {
          title: "ISO 9001 Certified Manufacturing 🛡️",
          desc: "Every furnace manufactured under ISO 9001:2015 quality system. Consistent build quality, documented processes, and full post-installation commissioning and AMC support across India.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />

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
        
        
        
{/* <section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Air Pollution Control Device for Rotary Furnace (APCD)
    </h2>

    <p className="mt-8 max-w-5xl mx-auto text-center text-lg leading-relaxed text-black">
      For aluminium recycling units using Rotary Furnaces — scrap batteries and lead oxide generate hazardous flue gases and dust. To protect employee health, meet factory environment standards, and comply with regulatory requirements, Continental Furnaces provides complete high-end Air Pollution Control Systems for installation with Rotary Furnaces.
    </p>

    <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
      {[
      {
        title: "APCD Component 1 — Gravity Chamber",
        desc: (
          <>
            <br />
            Low pressure drop device that allows large size particles to settle down.
            Cools down temperature of flue gases. Used as spark arrestor to entrap
            live or red-hot particles before they enter downstream equipment.
          </>
        ),
      },
      {
        title: "APCD Component 2 — Involute Cyclone",
        desc: (
          <>
            <br />
            Removes medium size particles from flue gas stream. 
            The treated flue gases are discharged from the top and dust is collected at the bottom — 
            efficiently reducing particulate load on the bag house filter.
          </>
        ),
      },
        {
          title: "APCD Component 3 — Pulse Jet Bag House Filtration",
          desc: "Final stage filtration system — removes fine particles and brings dust emission below 50 mg/Nm³ discharge requirement. Pulse jet cleaning ensures continuous operation without shutdown for filter cleaning.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />

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

    <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch">
      <div className="overflow-hidden rounded-3xl border border-white/10 h-full flex flex-col">
        <div className="bg-primary px-6 py-4">
          <h3 className="text-xl font-bold text-white">
            Pollution Characteristics — Rotary Furnace (Inlet)
          </h3>
        </div>

        <table className="w-full text-left text-sm bg-slate-600 flex-1">
          <tbody>
            {[
              ["Dust Load", "8,000 – 15,000 mg/Nm³"],
              ["Temperature", "100 – 120°C"],
              ["Gases Present", "Traces of NOx and SO"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/10 last:border-none"
              >
                <td className="p-5 font-semibold text-secondary bg-black/20 w-1/2">
                  {row[0]}
                </td>

                <td className="p-5 text-white">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <div className="bg-primary px-6 py-4">
          <h3 className="text-xl font-bold text-white">
            Discharge Requirements — As Per Norms (Outlet)
          </h3>
        </div>

        <table className="w-full text-left text-sm bg-slate-700 flex-1">
          <tbody>
            {[
              ["Dust", "Less than 50 mg/Nm³"],
              ["Lead (Pb)", "Less than 10 mg/Nm³"],
              ["Outlet Temperature", "60 – 90°C"],
              ["Gases", "Traces of NOx and SO2"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-white/10 last:border-none"
              >
                <td className="p-5 font-semibold text-secondary bg-black/20 w-1/2">
                  {row[0]}
                </td>

                <td className="p-5 text-white">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 h-full flex flex-col">
      <div className="bg-primary px-6 py-4">
        <h3 className="text-xl font-bold text-white">
          4-Stage APCD System
        </h3>
      </div>

      <table className="w-full text-left text-sm bg-slate-700 flex-1">
        <tbody>
          {[
            ["Stage 1", "Rotary Chamber"],
            ["Stage 2", "Gravity Chamber"],
            ["Stage 3", "Involute Cyclone"],
            ["Stage 4", "Pulse Jet Bag House Filtration System"],
          ].map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/10 last:border-none"
            >
              <td className="p-5 font-semibold text-secondary bg-black/20 w-1/3">
                {row[0]}
              </td>

              <td className="p-5 text-white">
                {row[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-16 rounded-3xl border border-green-500/30 bg-green-600/40 p-8">
      <p className="text-lg leading-relaxed text-black">
        ✅ Regulatory Compliance: The complete 4-stage APCD system brings your rotary furnace emissions within statutory norms — protecting employee health, meeting PCB/CPCB requirements, and eliminating risk of factory closure, fines, or production stoppages due to pollution violations.
      </p>
    </div>
  </div>
</section> */}



{/* SECTION 7 — INDUSTRIES SERVED */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
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
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 ">
      {[
        {
          title: "🔌 Cable Manufacturing",
          desc: "Aluminium conductor annealing for ACSR, AAC, and other cable grades",
        },
        {
          title: "🚗 Automotive & Electrical",
          desc: "T6/T5 heat treatment for die castings, connectors, electrical components",
        },
        {
          title: "🔩 Non-Ferrous Wire",
          desc: "Aluminium wire and rod coil annealing for downstream processing",
        },
        {
          title: "♻️ Aluminium Recycling",
          desc: "Homogenising recycled aluminium + APCD for rotary furnace compliance",
        },
        {
          title: "🏭 Metal Processing",
          desc: "Stress relieving before surface treatment, plating, and coating",
        },
        {
          title: "✈️ Aerospace & Defence",
          desc: "Controlled atmosphere solution treatment for aerospace alloys",
        },
        {
          title: "🔋 Battery Recycling",
          desc: "Rotary furnace + APCD for lead battery recycling operations",
        },
        {
          title: "🏗️ Heat Treatment Units",
          desc: "Batch ageing and annealing for contract heat treatment shops",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-white/10 bg-slate-700 shadow-2xl"
        >
          <CardContent className="p-8 space-y-5">
            <div className="h-1.5 w-20 rounded-full bg-primary" />

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
        
{/* SECTION 8 — TRUST & CREDENTIALS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Eyebrow */}
    {/* <div className="mb-5 mx-auto flex w-fit rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
      Trust & Credentials
    </div> */}

    {/* Heading */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
      Trusted Industrial Furnace Manufacturer Since 1987
    </h2>

    {/* STATS */}
    <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-5">
      {[
        {
          stat: "35+",
          label: "Years in Operation",
        },
        {
          stat: "1987",
          label: "Established — Faridabad",
        },
        {
          stat: "15+",
          label: "Product Lines",
        },
        {
          stat: "ISO 9001 & 14001",
          label: "Certification",
        },
        {
          stat: "Pan-India",
          label: "Coverage",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-700 shadow-xl"
        >
          <CardContent className="p-5 text-center space-y-2">
            <h3 className="text-2xl font-bold text-primary leading-none">
              {item.stat}
            </h3>

            <p className="text-sm text-white/90 leading-relaxed">
              {item.label}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* CERTIFICATION BADGES */}
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {[
        "ISO 9001:2015 — Quality Management",
        "ISO 14001:2015 — Environmental Management",
        "SINCE 1987 — 35+ Years Excellence",
        "APCD SYSTEMS — Pollution Control Compliant",
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-full border border-primary/20 bg-primary/20 px-4 py-2 text-xs font-semibold text-primary whitespace-nowrap"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>              
        {/* V2 changes SECTION */}

{/* FINAL CTA */}
<section className="py-24 bg-slate-200 relative overflow-hidden w-full">
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    
    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div className="space-y-7 pt-6">
        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div>

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

    {/* CONTACT BLOCK */}
    <div className="mt-20 rounded-3xl border border-slate-300 bg-white p-8 md:p-10 text-center shadow-xl">
      <h3 className="text-2xl font-bold text-primary">
        Continental Furnaces
      </h3>

      <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
        Plot No. 34, New DLF Industrial Area,
        Faridabad, Haryana, India
        <br />
        <br />
        📧 info@confur.net | confur.india@gmail.com
        <br />
        🌐 www.confur.net
      </p>
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
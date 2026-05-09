import { supabase } from './supabase'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Newspaper,
  ShieldCheck,
  Clock3,
  Users,
  BookOpen,
  Megaphone,
} from 'lucide-react'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}
const features = [
  {
    eyebrow: 'DAILY BRIEF',
    title: 'The 5-Minute Edition',
    body:
      'Six stories, every weekday, in the time it takes to brush your teeth. World, country, money, climate, tech, culture.',
    icon: Newspaper,
className: 'md:col-span-6 md:row-span-2 min-h-[540px]',
  },

  {
    eyebrow: 'FACTS, NOT FEEDS',
    title: 'Edited by humans',
    body:
      'Every story is fact-checked by two editors before it goes out. No algorithmic remix.',
    icon: ShieldCheck,
    className: 'md:col-span-3',
  },

  {
    eyebrow: '06:30 HRS',
    title: 'In your inbox by sunrise',
    body:
      'Drops every weekday at 6:30.',
    icon: Clock3,
    className: 'md:col-span-3',
  },

  {
    eyebrow: 'TEEN BYLINES',
    title: 'Written by your classmates',
    body:
      'A rotating staff of high-school reporters across 19 cities.',
    icon: Users,
    className: 'md:col-span-4',
  },

  {
    eyebrow: 'DEEP DIVES',
    title: 'The Sunday Long-Read',
    body:
      'One serious essay every weekend. Climate, AI, identity, money.',
    icon: BookOpen,
    className: 'md:col-span-4',
  },

  {
    eyebrow: 'OP-ED OPEN',
    title: 'Submit your voice',
    body:
      'Strong opinion? File 600 words. We publish the best one each week.',
    icon: Megaphone,
    className: 'md:col-span-4',
  },
]
export default function App() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [grade, setGrade] = useState('')

const [loading, setLoading] = useState(false)
const [submitted, setSubmitted] = useState(false)
const handleSubmit = async () => {

  if (!name || !email || !grade) {
    alert('Fill all three fields.')
    return
  }

  try {

    setLoading(true)

    const { error } = await supabase
      .from('Subscribers')
      .insert([
        {
          name,
          email,
          grade,
        },
      ])

    if (error) {
      console.error(error)
      alert('Something went wrong.')
      return
    }

    setSubmitted(true)

    setName('')
    setEmail('')
    setGrade('')

  } catch (err) {

    console.error(err)
    alert('Server error.')

  } finally {

    setLoading(false)

  }
}
  return (
    <main className="bg-[#F4F4F0] text-[#0A0A0A] overflow-x-hidden">

      {/* MASTHEAD */}

      <header className="sticky top-0 z-50 bg-[#F4F4F0] border-b-4 border-black">

        <div className="border-b-2 border-black px-6 py-2 flex flex-wrap justify-between items-center mono uppercase tracking-[0.25em] text-[10px] md:text-xs">
          <span>SATURDAY, MAY 9, 2026</span>
          <span>VOL. I — NO. 001</span>
          <span>PRICE: FREE FOR EVERY TEEN</span>
        </div>

        <div className="px-6 md:px-12 py-8 text-center">

          <h1 className="playfair text-6xl md:text-9xl font-black uppercase tracking-tight leading-none">
            Acta Diurna
          </h1>

          <div className="mt-6 border-t-[6px] border-black pt-4 mono uppercase tracking-[0.25em] text-[10px] md:text-xs">
            THE DAILY RECORD · INDEPENDENT · BY TEENS, FOR TEENS
          </div>

        </div>

      </header>

      {/* HERO */}

      <section className="border-b-4 border-black px-4 md:px-12 py-10 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 border-2 border-black bg-white p-6 md:p-10 relative"
          >

            <div className="mono uppercase tracking-[0.3em] text-xs mb-6">
              FRONT PAGE
            </div>

            <h2 className="playfair uppercase font-black leading-[0.88] tracking-tight text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem]">

              THE NEWS
              <br />

              WAS BUILT
              <br />

              <span className="italic lowercase font-light normal-case block text-[0.8em] leading-none mt-2">
                for grown-ups.
              </span>

              
<div className="mt-6">
  <span className="inline-block bg-black text-[#F4F4F0] px-3 py-1 leading-[1.05]">
    WE’RE RE-PRINTING IT FOR YOU.
  </span>
</div>



            </h2>

            <div className="border-t-2 border-black my-8"></div>

            <p className="text-lg md:text-xl leading-relaxed max-w-4xl">

              Every morning, the world prints itself in fine grey ink —
              wars, votes, climate, code, culture. Most of it gets folded
              up and handed to people who already made up their minds.

              <strong> Acta Diurna </strong>

              is a daily teen newsroom that translates that ink into a
              language built for sixteen-year-olds who refuse to be ignored.

            </p>
            <a
             href="#signup"
             className="inline-block pulse-cta mt-10 bg-black text-[#F4F4F0] px-8 py-4 border-2 border-black mono uppercase tracking-[0.25em] text-sm"
         >
             Claim My Subscription →
            </a>

            <div className="absolute top-6 right-6 rotate-[-12deg] border-2 border-black bg-[#F4F4F0] px-4 py-2 mono uppercase text-[10px] tracking-[0.25em]">
              EDITOR’S DESK
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-4 flex flex-col gap-6"
          >

            <div className="border-4 border-black bg-white overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-420px object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-105"
              />
              <div className="bg-black text-[#F4F4F0] mono uppercase tracking-[0.25em] text-xs px-4 py-2">
                PHOTO · THE READING ROOM
              </div>

              <div className="p-6 mono uppercase text-xs tracking-[0.18em] leading-relaxed">
                “IF YOU CAN READ A FEED, YOU CAN READ A PAPER.”
              </div>

            </div>

            <div className="border-4 border-black bg-white grid grid-cols-3 text-center">

              <div className="p-6 border-r-2 border-black">
                <div className="playfair text-5xl font-black">5</div>

                <div className="mono text-[10px] uppercase tracking-[0.2em] mt-2">
                  MIN DAILY
                </div>
              </div>

              <div className="p-6 border-r-2 border-black">
                <div className="playfair text-5xl font-black">0</div>

                <div className="mono text-[10px] uppercase tracking-[0.2em] mt-2">
                  AD POPUPS
                </div>
              </div>

              <div className="p-6">
                <div className="playfair text-5xl font-black">13+</div>

                <div className="mono text-[10px] uppercase tracking-[0.2em] mt-2">
                  AGES WELCOME
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* NEWS TICKER */}

<section className="border-y-2 border-black overflow-hidden">

  {/* TOP */}

  <div className="bg-black text-[#F4F4F0] py-3 overflow-hidden">

    <div className="ticker-track mono uppercase tracking-[0.25em] text-xs">

      <span className="mx-8">
        BREAKING ✦ TEEN VOTERS WILL DECIDE THE NEXT DECADE
      </span>

      <span className="mx-8">
        THE INTERNET ATE YOUR ATTENTION SPAN — WE’RE GIVING IT BACK
      </span>

      <span className="mx-8">
        CLIMATE: 2030 IS NEXT WEEK
      </span>

      <span className="mx-8">
        AI WROTE THIS HEADLINE BETTER
      </span>

      {/* DUPLICATE */}

      <span className="mx-8">
        BREAKING ✦ TEEN VOTERS WILL DECIDE THE NEXT DECADE
      </span>

      <span className="mx-8">
        THE INTERNET ATE YOUR ATTENTION SPAN — WE’RE GIVING IT BACK
      </span>

      <span className="mx-8">
        CLIMATE: 2030 IS NEXT WEEK
      </span>

      <span className="mx-8">
        AI WROTE THIS HEADLINE BETTER
      </span>

    </div>

  </div>

  {/* BOTTOM */}

  <div className="bg-[#F4F4F0] text-black py-3 overflow-hidden">

    <div className="ticker-track-reverse mono uppercase tracking-[0.25em] text-xs">

      <span className="mx-8">
        SIGN UP BELOW ✦ FREE FOREVER
      </span>

      <span className="mx-8">
        NO ALGORITHMS, JUST EDITORS
      </span>

      <span className="mx-8">
        WRITTEN BY TEENS, FACT-CHECKED BY EVERYONE
      </span>

      <span className="mx-8">
        5 MINUTES. EVERY MORNING.
      </span>

      {/* DUPLICATE */}

      <span className="mx-8">
        SIGN UP BELOW ✦ FREE FOREVER
      </span>

      <span className="mx-8">
        NO ALGORITHMS, JUST EDITORS
      </span>

      <span className="mx-8">
        WRITTEN BY TEENS, FACT-CHECKED BY EVERYONE
      </span>

      <span className="mx-8">
        5 MINUTES. EVERY MORNING.
      </span>

    </div>

  </div>

</section>
{/* MISSION SECTION */}
<section className="border-b-4 border-black px-4 md:px-12 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="mono uppercase tracking-[0.3em] text-xs mb-4">
      Section A · Editorial
    </div>

    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">

      <h2 className="playfair text-5xl md:text-7xl uppercase font-black leading-[0.9]">

        WHY A TEEN
        <br />

        <span className="italic lowercase font-light normal-case">
          SHOULD
        </span>

        {' '}READ THE NEWS.

      </h2>

      <p className="mono uppercase tracking-[0.18em] text-[10px] md:text-xs max-w-md leading-relaxed">

        AN OPEN LETTER FROM THE EDITORIAL BOARD,
        PRINTED IN THREE COLUMNS,
        BECAUSE THAT’S HOW THE TRUTH USED TO TRAVEL.

      </p>

    </div>

    {/* EDITORIAL GRID */}

    <div className="border-2 border-black bg-white grid grid-cols-1 md:grid-cols-3">

      {/* COLUMN 1 */}

      <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">

        <div className="mono uppercase tracking-[0.25em] text-xs mb-4">
          OP-ED · I
        </div>

        <h3 className="playfair text-3xl font-black leading-tight mb-6">
          The Adults Are Reading. So Should You.
        </h3>

        <p className="leading-relaxed text-lg">

          Decisions about your future are being made every day by people
          who don’t read your internet. Politics. Climate. AI. Money.
          Education. Most teenagers hear about those things through
          screenshots and outrage clips five days late.

          <br /><br />

          <strong>Acta Diurna</strong> gives you the five-minute edition —
          the version that respects both your time and your intelligence.

        </p>

        <div className="mono uppercase tracking-[0.25em] text-xs mt-8">
          — The Editors
        </div>

      </div>

      {/* COLUMN 2 */}

      <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">

        <div className="mono uppercase tracking-[0.25em] text-xs mb-4">
          OP-ED · II
        </div>

        <h3 className="playfair text-3xl font-black leading-tight mb-6">
          Doomscrolling Is Not Citizenship.
        </h3>

        <p className="leading-relaxed text-lg">

          Algorithms feed outrage because outrage keeps people scrolling.
          Newsrooms used to do the opposite — they gave context, sequence,
          and proportion.

          <br /><br />

          We built this paper like a 90s broadsheet on purpose:
          finite pages, finite stories, infinite curiosity.

        </p>

        <div className="mono uppercase tracking-[0.25em] text-xs mt-8">
          — The Editors
        </div>

      </div>

      {/* COLUMN 3 */}

      <div className="p-8">

        <div className="mono uppercase tracking-[0.25em] text-xs mb-4">
          OP-ED · III
        </div>

        <h3 className="playfair text-3xl font-black leading-tight mb-6">
          Your Generation, Filed Daily.
        </h3>

        <p className="leading-relaxed text-lg">

          Politics. Climate. Tech. Sports. Culture. Identity. Money.

          <br /><br />

          Every issue points back to the same audience:
          teenagers who are old enough to understand the world and young
          enough to still want to improve it.

          <br /><br />

          Written by teens. Edited by teens. Published before second period.

        </p>

        <div className="mono uppercase tracking-[0.25em] text-xs mt-8">
          — The Editors
        </div>

      </div>

    </div>

  </div>

</section>
{/* FEATURES */}
<section className="border-b-4 border-black px-4 md:px-12 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="mono uppercase tracking-[0.3em] text-xs mb-4">
      Section B · Inside The Paper
    </div>

    <h2 className="playfair text-5xl md:text-7xl uppercase font-black leading-[0.9] mb-12">

      WHAT LANDS
      <br />

      <span className="italic lowercase font-light normal-case">
        on your desk.
      </span>

    </h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[260px]">

      {features.map((feature, index) => {

        const Icon = feature.icon

        return (

          <div
            key={index}
            className={`${feature.className} border-2 border-black bg-white p-8 flex flex-col justify-between hover:bg-black hover:text-[#F4F4F0] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 ease-out`}
          >

            <div className="flex justify-between items-start">

              <div className="mono uppercase tracking-[0.25em] text-xs">
                {feature.eyebrow}
              </div>

              <Icon
                className="w-6 h-6"
                strokeWidth={1.5}
              />

            </div>

            <div>
             <h3 className="playfair text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-5">
                {feature.title}
              </h3>
           <p className="leading-relaxed text-base md:text-lg max-w-[28rem]">
                {feature.body}
              </p>

            </div>

          </div>

        )
      })}

    </div>

  </div>

</section>
{/* SIGNUP SECTION */}
<section id="signup" className="border-b-4 border-black px-4 md:px-12 py-16">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">

    {/* LEFT PANEL */}

    <div className="md:col-span-5 border-4 border-black bg-white p-8 md:p-12 relative min-h-[760px] flex flex-col">

      <div className="flex items-center gap-4 mb-6">

        <div className="bg-black text-[#F4F4F0] mono uppercase tracking-[0.25em] text-[10px] px-3 py-2">
          Urgent
        </div>

        <div className="mono uppercase tracking-[0.25em] text-xs">
          Telegram · Classified
        </div>

      </div>

      <h2 className="playfair text-5xl md:text-6xl uppercase font-black leading-[0.9] mb-6">

        SUBSCRIBE TO
        <br />

        <span className="italic lowercase font-light normal-case">
          the truth.
        </span>

      </h2>

      <div className="border-t-2 border-black my-8"></div>
<p className="text-xl md:text-2xl leading-[1.5] max-w-lg font-medium">

        One free issue, every weekday, before first period.
        Edited by teens. Read by the next generation of citizens.

        <br /><br />

        Cancel anytime by replying
        <strong> UNSUB</strong>.

      </p>
<div className="mt-auto pt-20 space-y-8 mono uppercase tracking-[0.14em] text-xs leading-[1.8] max-w-md">

  <div className="border-t border-black pt-4">
    · No spam, no resells, no algorithm tricks
  </div>

  <div className="border-t border-black pt-4">
    · Built for screens & still readable on paper
  </div>

  <div className="border-t border-black pt-4">
    · Press pass for student journalists included
  </div>

</div>
<div className="absolute bottom-[-12px] right-[-40px] rotate-[-12deg] border-[3px] border-black bg-[#F4F4F0] px-10 py-4 mono uppercase tracking-[0.3em] text-[10px] shadow-[8px_8px_0_0_#000]">

  Approved By The Editors

</div>

    </div>

    {/* FORM */}

    <div className="md:col-span-7 border-4 border-black bg-white">

      <div className="bg-black text-[#F4F4F0] px-6 py-4 flex justify-between items-center mono uppercase tracking-[0.25em] text-[10px] md:text-xs">

        <span>Form 01 · Subscription Request</span>

        <span>File In Ink</span>

      </div>

      <div className="p-8">

        <div className="space-y-8">

          {/* NAME */}

          <div>

            <label className="block mono uppercase tracking-[0.25em] text-xs mb-3">
              Reporter’s Name
            </label>

            
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="LAST, FIRST"
           className="w-full border-2 border-black bg-white px-5 py-4 mono uppercase tracking-[0.15em] outline-none transition-all focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0_0_#000]"
            />


          </div>

          {/* EMAIL */}

          <div>

            <label className="block mono uppercase tracking-[0.25em] text-xs mb-3">
              Mailing Address (Email)
            </label>

            
          <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="reporter@school.edu"
           className="w-full border-2 border-black bg-white px-5 py-4 mono outline-none transition-all focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0_0_#000]"
          />



          </div>

          {/* SELECT */}

          <div>

            <label className="block mono uppercase tracking-[0.25em] text-xs mb-3">
              Grade / Class
            </label>

            
            <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
             className="w-full border-2 border-black bg-white px-5 py-4 mono outline-none transition-all focus:-translate-x-[2px] focus:-translate-y-[2px] focus:shadow-[4px_4px_0_0_#000]"
           >
              <option>
                — Select your bureau —
              </option>

              <option>Middle School (6-8)</option>
              <option>9th Grade</option>
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
              <option>Just Graduated</option>

            </select>

          </div>

          {/* BUTTON */}

          <div className="pt-4">

            
         <button
         onClick={handleSubmit}
         disabled={loading}
         className="pulse-cta bg-black text-[#F4F4F0] px-8 py-5 border-2 border-black mono uppercase tracking-[0.25em] text-sm disabled:opacity-50"
          >
            
         {loading
            ? 'FILING...'
              : submitted
                ? 'SUBSCRIBED ✓'
                  : 'Subscribe To The Truth →'}

            </button>

            <p className="mono uppercase tracking-[0.15em] text-[10px] md:text-xs mt-6 leading-relaxed max-w-md">

              By clicking, you agree to read five minutes of news a day.
              That’s it.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="relative overflow-hidden">

  {/* TOP RULE */}

  <div className="border-t-[6px] border-black"></div>

  {/* MAIN */}

  <div className="px-4 md:px-12 py-20">

    <div className="max-w-7xl mx-auto">

      {/* TITLE */}

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">

        <div>

          <div className="mono uppercase tracking-[0.3em] text-xs mb-4">
            Final Edition · Vol. I
          </div>

          <h2 className="playfair text-6xl md:text-8xl uppercase font-black leading-none">

            Acta Diurna

          </h2>

        </div>

        <p className="mono uppercase tracking-[0.18em] text-[10px] md:text-xs leading-relaxed max-w-md">

          THE FIRST NEWSPAPER IN 2,000 YEARS STILL TRYING
          TO DO WHAT THE ORIGINAL ROMANS DID:
          PRINT THE DAY, PLAINLY,
          FOR ANYONE WILLING TO READ IT.

        </p>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-4 border-2 border-black bg-white">

        {/* COLUMN 1 */}

        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">

          <div className="mono uppercase tracking-[0.25em] text-xs mb-5">
            Sections
          </div>

          <div className="space-y-3 text-lg">

            <div>World</div>
            <div>Politics</div>
            <div>Technology</div>
            <div>Climate</div>
            <div>Culture</div>

          </div>

        </div>

        {/* COLUMN 2 */}

        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">

          <div className="mono uppercase tracking-[0.25em] text-xs mb-5">
            Editorial
          </div>

          <div className="space-y-3 text-lg">

            <div>About</div>
            <div>Write For Us</div>
            <div>Guidelines</div>
            <div>Archives</div>
            <div>Press Desk</div>

          </div>

        </div>

        {/* COLUMN 3 */}

        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">

          <div className="mono uppercase tracking-[0.25em] text-xs mb-5">
            Contact
          </div>

          <div className="space-y-3 text-lg">

            <div>Instagram</div>
            <div>Discord</div>
            <div>Newsletter</div>
            <div>Telegram</div>
            <div>editor@actadiurna.org</div>

          </div>

        </div>

        {/* COLUMN 4 */}

        <div className="p-8 relative">

          <div className="mono uppercase tracking-[0.25em] text-xs mb-5">
            Printing Status
          </div>

          <div className="playfair text-6xl font-black leading-none mb-6">
            LIVE
          </div>

          <p className="leading-relaxed text-lg max-w-xs">

            Today’s edition has been printed successfully and distributed
            to readers across the internet.

          </p>
          <div className="absolute bottom-[-18px] right-[-28px] rotate-[-10deg] border-[3px] border-black bg-[#F4F4F0] px-8 py-3 mono uppercase tracking-[0.3em] text-[10px] shadow-[6px_6px_0_0_#000]">

            Printed On The Open Web

          </div>

        </div>

      </div>

      {/* FINAL RULE */}

      <div className="border-t-4 border-black mt-16 pt-6 flex flex-col md:flex-row gap-4 justify-between items-center mono uppercase tracking-[0.2em] text-[10px] md:text-xs">

        <div>
          © 2026 Acta Diurna
        </div>

        <div>
          Independent · Reader Supported · By Teens
        </div>

        <div>
          — 30 —
        </div>

      </div>

    </div>

  </div>

</footer>
    </main>
  )
}

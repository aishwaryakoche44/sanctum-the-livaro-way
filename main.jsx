import React, { useEffect, useState } from 'react'

import { createRoot } from 'react-dom/client'


import sanctumLogo from "./assets/WhatsApp Image 2026-11-22 at 8.21.34 PM.jpeg";
import sanctumMark from "./assets/sanctum-mark.png";
import seniorCompanionship from "./assets/WhatsApp Image 2026-11-22 at 8.15.17 PM.jpeg";
import seniorClinicalCare from "./assets/services-clinical-care.png";
import heroNurseElderlyCare from "./assets/hero-nurse-elderly-care.png";
import aboutDoctorFamily from "./assets/d5f70b17-380d-48e3-9dd7-83046ef6857d.jpg";
import drSagarMore from "./assets/dr-sagar-more-CpS74XY0.jpeg";
import sanctumCareCard from "./assets/sanctum-care-card-BplwzVLi.png";
import serviceCareReference from "./assets/service-care-reference-D8LOM2gw.png";
import sanctumIntroductionVideo from "./assets/sanctum-introduction.mp4";
import savedVideoOne from "./assets/IMG_2130 (1).MP4";
import longExplanatoryVideo from "./assets/IMG_2133 (3).MP4";
import homeVideo2148 from "./assets/IMG_2148.MP4";
import englishVideoCover from "./assets/image.png";
import servicePhoto01 from "./assets/DR01.webp";
import servicePhoto02 from "./assets/DR02.webp";
import servicePhoto03 from "./assets/DR03.webp";
import servicePhoto04 from "./assets/DR04.webp";
import servicePhoto05 from "./assets/DR05.webp";
import servicePhoto06 from "./assets/DR06.webp";
import servicePhoto07 from "./assets/Dr07.webp";
import planPhoto01 from "./assets/Plan 1.webp";
import planPhoto02 from "./assets/plan2.webp";
import planPhoto03 from "./assets/Plan 3.webp";
import planPhoto04 from "./assets/Plan 4.webp";
import planPhoto05 from "./assets/Plan 5.webp";
import planPhoto06 from "./assets/plan 6.webp";


import {

Activity, ArrowRight, CalendarCheck, Check, ChevronDown, Clock3, Globe2,

HeartHandshake, HeartPulse, Home, Mail, MapPin, Menu, MessageCircle,

 Navigation, Phone, Play, ShieldCheck, Sparkles, Stethoscope, Users, X

} from 'lucide-react'
import './index.css'

const videoItems = [
 { src: sanctumIntroductionVideo, title: 'SANCTuM — The LivaRo Way', language: 'Hindi', type: 'Short video', poster: aboutDoctorFamily },
 { src: savedVideoOne, title: 'A moment from SANCTuM', language: 'Marathi', type: 'Short video', poster: seniorCompanionship },
 { src: longExplanatoryVideo, title: 'Understand SANCTuM — Full Introduction', language: 'Marathi', type: 'Long explainer', poster: serviceCareReference },
 { src: homeVideo2148, title: 'SANCTuM — A moment of care', language: 'English', type: 'Home video', poster: englishVideoCover },
]

const office = [
 { name: 'Dr. Sagar Subhash More', phone: '9423571673' },
 { name: 'Dr. Vidya Sagar More', phone: '9423571672' },
 { name: 'Dr. Vishal Subhash More', phone: '9975558892' },
 { name: 'Prashant More', phone: '8975284832' },
]



const overseas = [

 { flag: 'ðŸ‡¸ðŸ‡¬', name: 'Mr. Tushar N. Randhir', phone: '+91 94235 71671' },

 { flag: 'ðŸ‡ºðŸ‡¸', name: 'Dr. Rakesh Nandan', phone: '+1 (857) 413-6404' },

 { flag: 'ðŸ‡¬ðŸ‡§', name: 'Mr. Anurag Sonar', phone: '+91 83909 90202' },

{ flag: 'ðŸ‡¬ðŸ‡§', name: 'Dr. Ruchika Ingale', phone: '+44 7823 758674' },

]



const services = [
 { icon: Stethoscope, title: 'Doctor Visits & Nursing Care', text: 'Doctor visits and nursing support coordinated around each seniorâ€™s care needs.', image: servicePhoto01, imageAlt: 'An Indian doctor visits an older adult at home' },
 { icon: Activity, title: 'Physiotherapy & Rehabilitation', text: 'Physiotherapy and rehabilitation support to help older adults work toward their mobility goals.', image: servicePhoto02, imageAlt: 'An Indian physiotherapist supports an older adult with mobility exercises' },
 { icon: HeartPulse, title: 'Post-Hospitalisation Support', text: 'Coordinated support for the transition home after a hospital stay.', image: servicePhoto03, imageAlt: 'An Indian nurse helps an older adult settle at home after a hospital stay' },
 { icon: ShieldCheck, title: 'Chronic Disease Monitoring', text: 'Ongoing health monitoring and communication with the care team and family.', image: servicePhoto04, imageAlt: 'An Indian nurse checks an older adultâ€™s blood pressure at home' },
 { icon: CalendarCheck, title: 'Medicines & Tests', text: 'Help coordinating medicines and laboratory tests with the family and care team.', image: servicePhoto05, imageAlt: 'An Indian care professional reviews medicines with an older adult' },
 { icon: Phone, title: 'Emergency Support', text: 'Clear communication and coordination to help families respond when urgent needs arise.', image: servicePhoto06, imageAlt: 'An Indian doctor provides urgent home care to an older adult' },
 { icon: HeartHandshake, title: 'Sneha Bandhu Companionship', text: 'Dedicated companions focus on human connection, active listening and meaningful conversations.', image: servicePhoto07, imageAlt: 'An Indian caregiver shares a friendly moment with an older couple at home' },

]



const plans = [
 { name: 'Nilgiri', tone: 'Basic Support', text: 'Regular care coordination and support shaped around each seniorâ€™s needs.', perks: ['Doctor visits and check-ins', 'Care coordination', 'Family communication'], image: planPhoto01 },
 { name: 'Vindhyachal', tone: 'Enhanced Care', text: 'A welcoming home-care pathway with companionship and ongoing support.', perks: ['Companionship', 'Care follow-through', 'Family updates'], image: planPhoto02 },
 { name: 'Sahyadri', tone: 'Comprehensive Care', text: 'Coordinated clinical and home support for changing care requirements.', perks: ['Doctor coordination', 'Nursing support', 'Family updates'], image: planPhoto03 },
 { name: 'Himalaya', tone: 'Intensive Care', text: 'A more involved care pathway coordinated with the senior and family.', perks: ['Coordinated care', 'Health monitoring', 'Family communication'], image: planPhoto04 },
 { name: 'Sneha Salagna', tone: 'Post-Hospital Care', text: 'Support for recovery, nursing coordination and rehabilitation after a hospital stay.', perks: ['Recovery support', 'Nursing coordination', 'Rehabilitation follow-through'], image: planPhoto05 },
 { name: 'Sneha Sindhu', tone: 'Signature Care', text: 'A signature care pathway combining companionship and coordinated support.', perks: ['Companionship', 'Family connectivity', 'Coordinated care'], image: planPhoto06 },
]



const principles = [

 ['Responsibility', 'Leadership means taking ownership of outcomes.'],

 ['Trust', 'Deep trust is the foundation of compassionate care.'],

 ['Systems', 'Reliable systems reduce error and dependence on individual heroics.'],

 ['Communication', 'Clear communication is treated as a patient-safety system.'],

 ['Teamwork', 'Teams act as one unit and collective results matter more than ego.'],

 ['Accountability', 'Leaders and teams take responsibility and remain focused on results.'],

]



function App() {

 const [menu, setMenu] = useState(false)
 const [showClinicCard, setShowClinicCard] = useState(false)

 const [faq, setFaq] = useState(null)

 const [form, setForm] = useState({ name: '', phone: '', message: '' })
 const [formSubmitted, setFormSubmitted] = useState(false)
 const [submittedName, setSubmittedName] = useState('')

 const [activePage, setActivePage] = useState(() => {
  const page = window.location.hash.slice(1)
  return ['home', 'about', 'services', 'plans', 'philosophy', 'videos', 'contact'].includes(page) ? page : 'home'
 })

 const nav = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'About', id: 'about', icon: HeartHandshake },
  { label: 'Services', id: 'services', icon: Stethoscope },
  { label: 'Plans', id: 'plans', icon: Activity },
  { label: 'Philosophy', id: 'philosophy', icon: Sparkles },
  { label: 'Videos', id: 'videos', icon: Play },
  { label: 'Contact', id: 'contact', icon: MessageCircle },
 ]
 const navigateTo = (page) => {
  setActivePage(page)
  window.history.pushState(null, '', page === 'home' ? window.location.pathname : `#${page}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setMenu(false)
 }

 useEffect(() => {
  const syncPage = () => {
   const page = window.location.hash.slice(1)
   setActivePage(['home', 'about', 'services', 'plans', 'philosophy', 'videos', 'contact'].includes(page) ? page : 'home')
  }
  window.addEventListener('popstate', syncPage)
  return () => window.removeEventListener('popstate', syncPage)
 }, [])

 useEffect(() => {
  if (!showClinicCard) return
  const previousOverflow = document.body.style.overflow
  const closeOnEscape = event => { if (event.key === 'Escape') setShowClinicCard(false) }
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', closeOnEscape)
  return () => {
   document.body.style.overflow = previousOverflow
   window.removeEventListener('keydown', closeOnEscape)
  }
 }, [showClinicCard])



 useEffect(() => {

  const targets = document.querySelectorAll('.scroll-reveal, .service-card, .plan-card, .info-card, .principle-card')

  if (!('IntersectionObserver' in window)) {

   targets.forEach(target => target.classList.add('is-visible'))

   return

  }



  document.documentElement.classList.add('motion-ready')

  const observer = new IntersectionObserver(entries => {

   entries.forEach(entry => {

    if (entry.isIntersecting) {

     entry.target.classList.add('is-visible')

     observer.unobserve(entry.target)

    }

   })

  }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' })

  targets.forEach(target => observer.observe(target))



  return () => {

   observer.disconnect()

   document.documentElement.classList.remove('motion-ready')

  }

 }, [activePage])



 return (

  <div className="min-h-screen overflow-x-clip">

   <header className="site-nav sticky top-0 z-50 mb-4 px-3">

    <div className="nav-shell mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-5 lg:px-7">

     <button onClick={() => navigateTo('home')} className="brand-mark text-left" aria-label="SANCTuM home">

      <img src={sanctumMark} alt="" className="nav-logo" />

      <div>

       <div className="font-display text-lg font-semibold text-[#006b52] sm:text-xl">SANCTuM</div>

       <div className="text-[8px] font-semibold tracking-[.16em] text-[#8c7140] sm:text-[9px]">THE LIVARO WAY</div>

      </div>

     </button>

     <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">

      {nav.map(({ label, id, icon: Icon }) => <button key={id} onClick={() => navigateTo(id)} aria-current={activePage === id ? 'page' : undefined} className={`nav-link ${activePage === id ? 'is-active' : ''}`}><Icon size={15} strokeWidth={1.8}/><span>{label}</span></button>)}



      <button type="button" onClick={()=>navigateTo('contact')} className="nav-cta"><Phone size={15}/> Talk to us</button>

     </nav>

     <button aria-label={menu ? 'Close menu' : 'Open menu'} onClick={() => setMenu(v => !v)} className="nav-menu-button lg:hidden">{menu ? <X size={20}/> : <Menu size={20}/>}</button>

    </div>

    {menu && <div className="nav-mobile mx-3 mt-2 px-4 py-3 lg:hidden">

     {nav.map(({ label, id, icon: Icon }) => <button key={id} onClick={() => navigateTo(id)} aria-current={activePage === id ? 'page' : undefined} className={`nav-mobile-link ${activePage === id ? 'is-active' : ''}`}><Icon size={17}/>{label}<ArrowRight size={15} className="ml-auto"/></button>)}



     <a href="tel:+919423571673" className="mt-2 block rounded-xl bg-[#006b52] px-4 py-3 text-center font-semibold text-white">Call 9423571673</a>



    </div>}

   </header>



   <main>

    {activePage === 'home' && <section id="home" className="hero-grid relative overflow-hidden">

     <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d4b06a]/20 blur-3xl" />

     <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#006b52]/10 blur-3xl" />

     <div className="hero-inner mx-auto grid max-w-7xl items-center gap-6 px-5 py-3 lg:grid-cols-[1.05fr_.95fr] lg:gap-7 lg:px-8 lg:py-0">

      <div className="reveal">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4b06a]/50 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#8b6c31]"><Sparkles size={14}/> Care Beyond Distance</div>

       <h1 className="home-hero-heading max-w-3xl font-display text-5xl font-semibold leading-[1.03] text-[#004c3b] sm:text-5xl lg:text-[4.25rem] lg:leading-[.98]">A lifetime companion, right at home.</h1>

       <p className="mt-4 max-w-2xl text-lg leading-[1.5] text-slate-600">SANCTuM provides dignified senior care, healthcare support and lifelong companionship at home.</p>

       <div className="mt-5 flex flex-col gap-3 sm:flex-row">

        <button onClick={() => navigateTo('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#006b52] px-6 py-3 font-semibold text-white shadow-xl shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-[#004c3b]">Talk to Our Care Team <ArrowRight size={18}/></button>

        <button onClick={() => navigateTo('plans')} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#006b52]/20 bg-white/80 px-6 py-3 font-semibold text-[#006b52] transition hover:bg-white">Explore Our Care Plans <ArrowRight size={18}/></button>

       </div>

      </div>



      <figure className="hero-care-photo reveal" style={{animationDelay:'.12s'}}>
       <img src={seniorCompanionship} alt="A doctor checking in with an older couple at home" />
      </figure>

     </div>

    </section>}

    {activePage === 'home' && <>
     <section className="home-proof-strip" aria-label="SANCTuM care approach"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-5 sm:grid-cols-4 lg:px-8">{[[HeartHandshake,'Companionship'],[Stethoscope,'Clinical care'],[Globe2,'Family connection'],[ShieldCheck,'Dignified safety']].map(([Icon,label])=><div key={label} className="proof-chip"><Icon size={18}/><span>{label}</span></div>)}</div></section>

     <section className="home-discover home-services-section"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="home-section-heading"><div><Eyebrow>Care, connected</Eyebrow><h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#004c3b] sm:text-4xl">Thoughtful support for every part of the care journey.</h2><p className="home-section-intro">Doctor visits, nursing, rehabilitation and companionshipâ€”coordinated around each senior and their family.</p></div><button onClick={()=>navigateTo('services')} className="home-text-link">Explore our services <ArrowRight size={17}/></button></div>
      <div className="home-service-editorial mt-10">
       <figure className="home-service-feature-photo"><img src={serviceCareReference} alt="An Indian caregiver sharing a warm moment with an older woman at home"/><figcaption><span>Care, close to home</span><small>The LivaRo Way</small></figcaption></figure>
       <div className="home-service-index">{services.slice(0,4).map(({icon:Icon,title,text},i)=><button key={title} onClick={()=>navigateTo('services')} className="home-service-row"><span className="home-service-row-number">0{i+1}</span><span className="home-service-row-icon"><Icon size={19}/></span><span className="home-service-row-copy"><strong>{title}</strong><small>{text}</small></span><ArrowRight className="home-service-row-arrow" size={18}/></button>)}</div>
      </div>
     </div></section>

     <section className="home-journey-section"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="journey-heading"><Eyebrow>Care that stays connected</Eyebrow><h2>From a first conversation to ongoing family reassurance.</h2><p>Every family starts somewhere different. We bring health support, companionship and clear communication into one care journey.</p></div><div className="journey-steps"><article><span>01</span><div><h3>Understand the needs</h3><p>Talk with the senior and family about health, home routines and the support that would help.</p></div></article><article><span>02</span><div><h3>Coordinate the care</h3><p>Bring visits, nursing, rehabilitation and companionship together around the chosen care plan.</p></div></article><article><span>03</span><div><h3>Keep everyone connected</h3><p>Make communication part of the care journey, so family members can stay informed from wherever they live.</p></div></article></div></div></section>

     <section className="home-plans-section"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="home-section-heading"><div><Eyebrow>Our care plans</Eyebrow><h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-[#004c3b] sm:text-4xl">A thoughtful starting point for different care needs.</h2><p className="home-section-intro">Explore the six-layer care model and find a pathway to discuss with our team.</p></div><button onClick={()=>navigateTo('plans')} className="home-text-link">View all care plans <ArrowRight size={17}/></button></div><ol className="home-plan-route">{plans.map((plan,i)=><li key={plan.name}><button onClick={()=>navigateTo('plans')} className="home-plan-stop"><span className="home-plan-no">0{i+1}</span><strong>{plan.name}</strong><small>{plan.tone}</small></button></li>)}</ol></div></section>

     <section className="home-videos-section"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="home-video-heading"><div><Eyebrow light>Understand SANCTuM</Eyebrow><h2>Watch and learn about our care.</h2><p>Watch the original SANCTuM videos and introduction.</p></div><button onClick={()=>navigateTo('videos')} className="home-video-all">Visit the video gallery <ArrowRight size={17}/></button></div><div className="home-video-grid">{videoItems.map(({src,title,language,type,poster},i)=><article className="home-video-card" key={src}><video controls playsInline preload="none" poster={poster} aria-label={`${title}. ${language}`}><source src={src} type="video/mp4"/>Your browser does not support embedded video.</video><div><span>VIDEO 0{i+1} · {type} · {language}</span><h3>{title}</h3></div></article>)}</div></div></section>    </>}

    {activePage === 'about' && <>
     <section id="about" className="about-hero-section">
      <div className="about-hero-inner mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
       <div className="about-hero-copy scroll-reveal">
        <Eyebrow light>About SANCTuM</Eyebrow>
        <h1>SANCTuM — The LivaRo Way</h1>
        <p>Where Care Meets Compassion, and Every Life Is Valued.</p>
        <div className="about-hero-signoff"><span aria-hidden="true"></span><strong>A Sacred Place. A Lifetime Companion.</strong><small>Because every senior deserves not just to live longer, but to live better, with dignity, purpose and love.</small></div>
       </div>
       <figure className="about-hero-visual scroll-reveal">
        <img src={aboutDoctorFamily} alt="An Indian doctor speaking with an older couple at home" />
        <figcaption><HeartHandshake size={18}/><span><strong>Companionship, always</strong><small>Care built around life at home</small></span></figcaption>
       </figure>
      </div>
     </section>

     <section className="about-promise-section" aria-label="Our promise">
      <div className="about-promise-content mx-auto max-w-7xl px-5 lg:px-8">
       <div className="about-promise-heading"><Eyebrow light>Our promise</Eyebrow><h2>SANCTuM — The Five Pillars of Our Promise</h2><p>What guides every interaction</p></div>
       <div className="about-promise-rail">
        {[
         ['Dignified Ageing', 'Ensuring every senior lives with independence, self-respect, confidence and dignity, irrespective of age or medical condition.'],
         ['Lifetime Companionship', 'Being a trusted family beyond family — offering care, comfort, emotional connection and companionship at every stage of ageing.'],
         ['Comprehensive Holistic Care', 'Nurturing physical health, mental strength, emotional stability, social connections and spiritual well-being.'],
         ['Hospital Expertise, Home Comfort', "Extending hospital-based medical expertise, post-discharge care, rehabilitation and clinical support right to the patient's own residence — where familiarity, emotional security and a sense of belonging can make recovery more meaningful."],
         ['Family Connect & Peace of Mind', 'Bridging geographical distances between elderly parents and their loved ones through continuous communication, coordinated care, timely updates and dependable support.']
        ].map(([title,description],i)=><article className="about-promise-item scroll-reveal" key={title}><span>0{i+1}</span><div><strong>{title}</strong><p>{description}</p></div></article>)}
       </div>
      </div>
     </section>

     <section className="about-purpose-section">
      <div className="about-purpose-inner mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
       <article className="about-mission-panel scroll-reveal">
        <Eyebrow light>Our mission</Eyebrow>
        <h2>To redefine elderly care through comprehensive, compassionate and continuous healthcare that extends beyond hospital walls, integrating physical, mental, emotional, social and spiritual well-being while preserving the dignity, individuality and quality of life of every senior citizen.</h2>
        <div className="about-mission-footer"><span>01</span><span>Clinical expertise, with a human touch</span></div>
       </article>
       <article className="about-vision-panel scroll-reveal">
        <div className="about-vision-orbit" aria-hidden="true"><span><HeartPulse size={27}/></span></div>
        <Eyebrow>Our vision</Eyebrow>
        <h2>To create a world where every elderly individual experiences dignified ageing, compassionate care, emotional security and meaningful companionship — living with independence, respect and purpose in the comfort of their own home.</h2>
        <p></p>
       </article>
      </div>
      <div className="about-principles-strip mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
       {[
        ['Companionship', 'Walks, temple visits and conversations are part of the companionship journey.'],
        ['Clinical expertise', 'Doctor-led coordination, home visits, health monitoring and specialised nursing support.'],
        ['Family connection', "Regular reports and alerts help children stay connected to a parent's wellbeing wherever they live."],
        ['Dignified safety', 'Emergency coordination, home-safety awareness and continuity of support help reduce uncertainty.'],
       ].map(([title,text],i)=><article className="about-principle scroll-reveal" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
     </section>

     <section className="about-team-section">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8">
       <div className="about-team-intro scroll-reveal">
        <Eyebrow>People at the heart of care</Eyebrow>
        <h2>Many skills.<br/><em>One circle of care.</em></h2>
        <p>Different roles work together around each seniorâ€”from clinical guidance and recovery to the everyday reassurance of a trusted companion.</p>
       </div>
       <div className="about-team-list">
        {[
         ['Leadership & coordination', 'Founder Director Â· Clinical Coordinator'],
         ['Doctors & clinical care', 'Consultant Doctors Â· RMO Doctors Â· Sisters Â· Ward Boys Â· Physiotherapists'],
         ['Companionship', 'Sneha Bandhu â€” Our Strength'],
        ].map(([team,roles],i)=><div className="about-team-row scroll-reveal" key={team}><span className="about-team-number">0{i+1}</span><div><h3>{team}</h3><p>{roles}</p></div><ArrowRight size={18}/></div>)}
        <button className="clinic-card-trigger" onClick={()=>setShowClinicCard(true)} aria-haspopup="dialog">
         <span><strong>Doctor &amp; clinic card</strong><small>View the full card and contact details</small></span>
         <span className="clinic-card-trigger-icon"><ArrowRight size={18}/></span>
        </button>
       </div>
      </div>
     </section>

     <section className="about-model-section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
       <div className="about-model-heading scroll-reveal"><Eyebrow>Our 6-layer care model</Eyebrow><h2>Different paths. A shared promise of care.</h2><p>Six pathways create a clear starting point for conversations about the support that may fit each senior and family.</p></div>
       <ol className="about-model-route">
        {['Nilgiri', 'Vindhyachal', 'Sahyadri', 'Himalaya', 'Sneha Salagna', 'Sneha Sindhu'].map((layer,i)=><li className="about-model-step scroll-reveal" key={layer}><span>{String(i+1).padStart(2,'0')}</span><h3>{layer}</h3></li>)}
       </ol>
       <p className="about-model-note">For you. For your family. For life.</p>
      </div>
     </section>
    </>}

    {activePage === 'services' && <section id="services" className="bg-[#fbf8f1] py-20 lg:py-28">

     <div className="scroll-reveal mx-auto max-w-7xl px-5 lg:px-8">

      <div className="services-intro">

       <div className="max-w-3xl"><Eyebrow>Our Services</Eyebrow><h1 className="mt-4 font-display text-4xl font-semibold text-[#004c3b] sm:text-5xl">Care that covers the person, the home and the family.</h1><p className="mt-5 leading-7 text-slate-600">SANCTuM brings doctor visits, nursing, rehabilitation, family connection and emotional support together in one care experience. This is lifetime companionship beyond basic healthcareâ€”supporting independence, dignity and peace of mind at home.</p></div>

       <figure className="service-photo">

        <img src={serviceCareReference} alt="A clinician providing attentive care to an older patient" />

        <figcaption><Stethoscope size={17}/> Clinical care, delivered with warmth</figcaption>

       </figure>

      </div>

      <div className="service-gallery mt-12">{services.map(({icon:Icon,title,text,image,imageAlt},i)=><article key={title} className="service-card service-story scroll-reveal"><figure className="service-story-photo"><img src={image} alt={imageAlt} /></figure><div className="service-story-copy"><div className="service-story-index"><span>0{i+1}</span><Icon size={20}/></div><h2>{title}</h2><p>{text}</p></div></article>)}</div>

     </div>

    </section>}

    {activePage === 'services' && <section className="bg-white py-14">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Eyebrow>More for Mind & Soul</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold text-[#004c3b] sm:text-4xl">Care includes connection, activity and belonging.</h2>
      <div className="wellbeing-list mt-7">{['Nature trips for rejuvenation', 'Yoga & wellness activities', 'Social interaction & friendship'].map((item,i)=><div key={item} className="wellbeing-item"><span>0{i+1}</span><h3>{item}</h3><ArrowRight size={17}/></div>)}</div>
     </div>
    </section>}

    {activePage === 'services' && <section className="bg-[#eaf2e9] py-14">
     <div className="care-ecosystem-layout mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
     <div className="care-ecosystem-intro"><Eyebrow>Integrated Care Ecosystem</Eyebrow><h2 className="mt-4 font-display text-3xl font-semibold text-[#004c3b]">Not a nursing bureau.</h2><p className="mt-4 leading-7 text-slate-600">SANCTuM brings doctor visits, physiotherapy, nursing, laboratory coordination and emergency support together as one coordinated care ecosystem.</p></div>
     <div className="care-common-list">{['Quarterly laboratory parameters', 'Six-monthly comprehensive health package', 'Community get-togethers', 'Health talks & awareness sessions'].map((item,i)=><div key={item} className="care-common-row"><span>0{i+1}</span><strong>{item}</strong><ArrowRight size={16}/></div>)}</div>
     </div>
    </section>}

    {activePage === 'services' && <section className="bg-white py-14">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Eyebrow>How It Works</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold text-[#004c3b] sm:text-4xl">You and your family are at the center of our care.</h2>
      <ol className="care-process-track mt-8">{['Assessment & care plan', 'Regular care & monitoring', 'Family updates', 'Emergency support'].map((step,i)=><li key={step} className="care-process-step"><span>0{i+1}</span><h3>{step}</h3></li>)}</ol>
     </div>
    </section>}

    {activePage === 'services' && <section className="bg-[#f4f8f2] py-14">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Eyebrow>Flexible Mountain-Based Care Pathways</Eyebrow>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">Support can be adapted to a personâ€™s clinical and wellness needs over time, in discussion with the senior and family.</p>
      <div className="mountain-pathway-list mt-7">{['Wellness Ascent', 'Recovery Summit', 'Chronic Management', 'Palliative Peak', 'Cognitive Climb', 'Vitality Range'].map((item,i)=><span key={item} className="mountain-pathway-item"><small>0{i+1}</small>{item}</span>)}</div>
     </div>
    </section>}

    {activePage === 'plans' && <section id="plans" className="bg-[#eaf2e9] py-20 lg:py-28">

     <div className="scroll-reveal mx-auto max-w-7xl px-5 lg:px-8">

      <div className="max-w-3xl"><Eyebrow light>Membership Care Plans</Eyebrow><h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Support as unshakable as mountains.</h1><p className="mt-5 leading-7 text-slate-600">Choose the level of companionship, preventive care and coordinated support that fits your family. Contact the SANCTuM team to confirm pricing and plan inclusions.</p></div>

      <div className="plan-story-list mt-12">{plans.map((plan,i)=><article key={plan.name} className="plan-card plan-story-row scroll-reveal">
       <figure className="plan-story-photo"><img src={plan.image} alt={`${plan.name} care plan`} /></figure>
       <div className="plan-story-copy">
        <div className="plan-story-heading"><span className="plan-story-number">0{i+1}</span><div><span className="plan-story-tone">{plan.tone}</span><h2>{plan.name}</h2></div></div>
        <p className="plan-story-description">{plan.text}</p>
        <ul className="plan-story-perks">{plan.perks.map(perk=><li key={perk}><Check size={15}/>{perk}</li>)}</ul>
       </div>
      </article>)}</div>

     </div>

    </section>}

    {activePage === 'plans' && <section className="bg-white py-14">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Eyebrow>Flexible Care Plans</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold text-[#004c3b] sm:text-4xl">Because every senior is unique.</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">Choose a visit rhythm that fits the person and family. Plans can be discussed and customized with the SANCTuM team.</p>
      <div className="care-frequency-list mt-8">{['Regular visits (daily / alternate day)', 'Weekly visits (1â€“2 times per week)', 'Periodic visits (2 per month)', 'Custom plan for you'].map((item,i)=><div key={item} className="care-frequency-row"><span>0{i+1}</span><h3>{item}</h3><ArrowRight size={17}/></div>)}</div>
     </div>
    </section>}

    {activePage === 'philosophy' && <section id="philosophy" className="bg-white py-20 lg:py-28">

     <div className="philosophy-layout scroll-reveal mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">

      <div className="philosophy-intro"><img src={sanctumLogo} alt="SANCTuM, The LivaRo Way" className="sanctum-logo philosophy-logo mb-6 w-full"/><Eyebrow>The LivaRo Way</Eyebrow><div className="philosophy-belief"><h2>Ageing is not about adding years to life; it is about adding life to years.</h2><p>At SANCTuM, we believe that home is more than a place — it is an emotion, a sense of belonging and a source of strength.</p><p>We do not merely provide healthcare. We bring together medical expertise, human compassion and meaningful companionship to make every elderly person feel safe, valued, heard and cared for.</p><p>We are not just an extension of hospital care. We are an extension of family.</p></div></div>

      <div className="philosophy-values"><ol className="principle-list">{principles.map(([title,text],i)=><li key={title} className="principle-row scroll-reveal"><span className="principle-index">0{i+1}</span><div><h2>{title}</h2><p>{text}</p></div><Sparkles size={17}/></li>)}</ol><div className="purpose-panel mt-8 flex flex-col justify-between gap-3 rounded-2xl bg-[#eaf2e9] p-5 sm:flex-row sm:items-center"><div><div className="text-xs font-bold uppercase tracking-[.18em] text-[#a17d38]">Purpose</div><p className="mt-2 max-w-2xl font-display text-xl leading-7 text-[#004c3b]">Redefine healthcare delivery through trust-based teams, disciplined systems and compassionate leadership.</p></div><span className="purpose-mark" aria-hidden="true"><HeartHandshake size={25}/></span></div></div>

     </div>

    </section>}

    {activePage === 'philosophy' && <section className="bg-[#f4f8f2] py-14">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Eyebrow>Our Commitment</Eyebrow>
      <div className="commitment-line mt-8">{['Timely Care', 'Professional Expertise', 'Emotional Support', 'Peace of Mind'].map((item,i)=><div key={item} className="commitment-item"><span>0{i+1}</span><HeartPulse size={18}/><h2>{item}</h2></div>)}</div>
      <p className="mt-10 text-center font-display text-2xl text-[#004c3b]">Together for a healthier, happier tomorrow.</p>
      <p className="mt-3 text-center font-semibold text-[#a17d38]">For You. For Your Family. For Life.</p>
     </div>
    </section>}

    {activePage === 'videos' && <section id="videos" className="bg-[#f4f8f2] py-16 lg:py-20">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-3xl"><Eyebrow>Understand SANCTuM</Eyebrow><h1 className="mt-4 font-display text-4xl font-semibold text-[#004c3b] sm:text-5xl">Watch and learn about our care.</h1><p className="mt-5 leading-7 text-slate-600">Explore the original short videos and full SANCTuM introduction. Language labels and subtitles will be added when confirmed or supplied.</p></div>
     <div className="video-gallery mt-8">{videoItems.map(({src,title,language,type,poster},i)=><article key={src} className="video-card video-gallery-card"><video className="introduction-video" controls playsInline preload="none" poster={poster} aria-label={`${title}. ${language}`}><source src={src} type="video/mp4"/>Your browser does not support embedded video.</video><div className="video-card-copy"><span className="video-card-index">VIDEO 0{i+1} / 0{videoItems.length} · {language}</span><h2 className="mt-2 font-display text-xl font-semibold text-[#004c3b]">{title}</h2><p className="mt-1 text-sm text-slate-600">{type}</p></div></article>)}</div>
     </div>
    </section>}
    {activePage === 'contact' && <section id="contact" className="bg-[#eaf2e9] py-20 lg:py-28">

     <div className="scroll-reveal mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_.85fr] lg:px-8">

      <div><Eyebrow light>Start a Conversation</Eyebrow><h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Start a Conversation. Let&apos;s Make Care Feel Closer.</h1><p className="mt-5 max-w-xl leading-7 text-slate-600">When children live miles away, parents still deserve dependable care, compassionate companionship, and the reassurance that someone trustworthy is nearby.<br/><br/>SANCTuM â€” The LivaRo Way brings healthcare support, recovery assistance, family connectivity, and dignified ageing closer to home.</p>

       <div className="contact-directory mt-9">{office.map((x,i)=><div key={x.phone} className="contact-directory-row"><span className="contact-person-index">0{i+1}</span><div className="contact-person-details"><strong>{x.name}</strong><span>Mobile: <a href={`tel:+91${x.phone}`}>{x.phone}</a></span></div><div className="contact-directory-actions"><a href={`tel:+91${x.phone}`} aria-label={`Call ${x.name}`} className="contact-action"><Phone size={16}/><span>Call</span></a><a href={`https://wa.me/91${x.phone}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp ${x.name}`} className="contact-action whatsapp-action"><MessageCircle size={16}/><span>WhatsApp</span></a></div></div>)}</div>

       <div className="contact-address-block mt-7"><div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#d4b06a]" size={20}/><div className="text-sm leading-6 text-white/75"><strong className="text-white">SANCTuM â€” Shriniwas Healthcare Clinic</strong><br/>Anuram Apartment, Kathe Galli â€“ Mumbai Naka Link Road,<br/>Opp. Atal Bihari Vajpayee School, Bankar Chowk,<br/>Dwarka, Nashik, Maharashtra 422011</div></div><a href="mailto:care@snehbandhu.in" className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#d4b06a]"><Mail size={17}/> care@snehbandhu.in</a></div>

      </div>

      <div className="rounded-[2rem] bg-[#fbf8f1] p-6 text-slate-900 shadow-soft sm:p-8"><h3 className="font-display text-2xl font-semibold text-[#004c3b]">Request a callback</h3><p className="mt-2 text-sm text-slate-500">Share a few details and the team can contact you.</p><form className="mt-7 space-y-4" onSubmit={e=>{e.preventDefault(); setSubmittedName(form.name.trim() || 'there'); setForm({name:'',phone:'',message:''}); setFormSubmitted(true)}}><Field label="Name" value={form.name} onChange={v=>{setFormSubmitted(false); setForm({...form,name:v})}} placeholder="Your name"/><Field label="Phone" value={form.phone} onChange={v=>{setFormSubmitted(false); setForm({...form,phone:v})}} placeholder="Your phone number"/><label className="block"><span className="mb-2 block text-sm font-semibold">How can we help?</span><textarea value={form.message} onChange={e=>{setFormSubmitted(false); setForm({...form,message:e.target.value})}} rows="4" placeholder="Tell us what support you are looking for..." className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#006b52] focus:ring-4 focus:ring-[#006b52]/10"/></label><button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#006b52] px-5 py-3.5 font-semibold text-white transition hover:bg-[#004c3b]">Send enquiry <ArrowRight size={17}/></button></form>{formSubmitted&&<div className="enquiry-confirmation" role="status" aria-live="polite"><Check size={18}/><span>Thank you, {submittedName || 'there'}. Your enquiry has been submitted. Please contact the office directly for urgent help.</span></div>}<p className="mt-4 text-center text-xs text-slate-400">For urgent situations, please contact emergency medical services directly.</p></div>

     </div>

    </section>}

    {activePage === 'contact' && <section className="survey-section">
     <div className="mx-auto max-w-5xl px-5 lg:px-8">
      <div className="survey-heading"><Eyebrow>Share your perspective</Eyebrow><h2>Weâ€™d value your feedback.</h2><p>Complete the SANCTuM survey below.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfYDlYkZ4p11K8ug73M1VXWl0XAnlRcnBk6UtpuNgBGs_IXrw/viewform" target="_blank" rel="noreferrer">Open survey in a new tab <ArrowRight size={16}/></a></div>
      <div className="survey-frame-wrap"><iframe title="SANCTuM survey form" src="https://docs.google.com/forms/d/e/1FAIpQLSfYDlYkZ4p11K8ug73M1VXWl0XAnlRcnBk6UtpuNgBGs_IXrw/viewform?embedded=true" loading="lazy">Loading surveyâ€¦</iframe></div>
     </div>
    </section>}

    {activePage === 'contact' && <section className="family-connect-section bg-[#fbf8f1] py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="family-connect-layout grid gap-8 lg:grid-cols-[1.2fr_.8fr]"><div><Eyebrow>Family Connect</Eyebrow><h2 className="mt-3 font-display text-3xl font-semibold text-[#004c3b]">A family network that reaches across borders.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Regular communication helps families remain part of the care journey even when they cannot be physically present.</p><div className="family-contact-list mt-6">{overseas.map((x,i)=><a key={x.name} href={`tel:${x.phone.replace(/[^+\d]/g,'')}`} className="family-contact-row"><span className="family-contact-index">0{i+1}</span><span className="family-contact-flag">{x.flag}</span><span className="family-contact-person"><strong>{x.name}</strong><small>{x.phone}</small></span><ArrowRight size={17}/></a>)}</div></div><div className="network-panel rounded-3xl p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4b06a]/20 text-[#d4b06a]"><Globe2 size={24}/></div><h3 className="mt-6 font-display text-2xl font-semibold text-white">Care Beyond Distance</h3><p className="mt-3 text-sm leading-6 text-white/65">Family updates, health reports and timely communication help families stay connected.</p><div className="mt-7 space-y-3"><MiniLine icon={MessageCircle} text="WhatsApp health reports"/><MiniLine icon={HeartPulse} text="Video updates"/><MiniLine icon={ShieldCheck} text="Emergency communication"/></div></div></div></div></section>}

    {activePage === 'contact' && <section className="faq-section bg-white py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><Eyebrow>Common Questions</Eyebrow><h2 className="mt-3 font-display text-3xl font-semibold text-[#004c3b]">A few things families ask.</h2></div><div className="faq-list mt-8">{[
     ['Where is the clinic located?','SANCTuM â€” Shriniwas Healthcare Clinic is located at Anuram Apartment, Kathe Galli â€“ Mumbai Naka Link Road, opposite Atal Bihari Vajpayee School, Bankar Chowk, Dwarka, Nashik, Maharashtra 422011.'],
     ['Can children living abroad stay updated?','Family updates and health reports help children stay connected to the care journey.'],
     ['How often can visits be arranged?','Visit options include daily or alternate-day visits, weekly visits, two visits per month, or a custom plan. Contact the team to discuss current availability.'],
     ['What support can SANCTuM coordinate?','Support may include doctor visits, nursing, physiotherapy, laboratory coordination, emergency support, recovery assistance and companionship.']
    ].map(([q,a],i)=><div key={q} className="faq-row"><button onClick={()=>setFaq(faq===i?null:i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-slate-800">{q}<ChevronDown className={`shrink-0 transition ${faq===i?'rotate-180':''}`} size={19}/></button>{faq===i&&<p className="pb-5 pr-8 text-sm leading-6 text-slate-600">{a}</p>}</div>)}</div></div></section>}

   </main>

   {showClinicCard && <div className="clinic-card-lightbox" role="presentation" onClick={()=>setShowClinicCard(false)}>
    <div className="clinic-card-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Doctor and clinic card" onClick={event=>event.stopPropagation()}>
     <button className="clinic-card-lightbox-close" onClick={()=>setShowClinicCard(false)} aria-label="Close card"><X size={22}/></button>
     <img src={sanctumCareCard} alt="Full SANCTuM and Shriniwas Healthcare Clinic card for Dr. Sagar Subhash More"/>
    </div>
   </div>}



   <footer className="px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:px-8"><button onClick={()=>navigateTo('home')} className="flex items-center gap-3 text-left"><img src={sanctumMark} alt="" className="nav-logo"/><div><div className="font-display text-lg text-[#004c3b]">SANCTuM</div><div className="text-xs tracking-[.18em] text-slate-600">THE LIVARO WAY</div></div></button><div className="flex flex-wrap gap-x-6 gap-y-2 text-sm"><a href="tel:+919423571673" className="hover:text-[#006b52]">9423571673</a><a href="mailto:care@snehbandhu.in" className="hover:text-[#006b52]">care@snehbandhu.in</a><button onClick={()=>navigateTo('contact')} className="hover:text-[#006b52]">Contact</button></div><div className="text-xs text-slate-500"><div>Â© {new Date().getFullYear()} SANCTuM. The LivaRo Way.</div><div className="mt-1">Together for a healthier, happier tomorrow.</div></div></div></footer>

  </div>

 )

}



function CareOrbit() {

 const items = [

  [HeartHandshake, 'Compassion'], [Stethoscope, 'Clinical Care'], [Globe2, 'Family Connect'], [ShieldCheck, 'Safety'], [Activity, 'Recovery']

 ]

 return <div className="orbit"><div className="orbit-core"><div className="font-display whitespace-nowrap text-[16px] font-semibold leading-none">SANCTuM</div><div className="mt-1 whitespace-nowrap text-[7px] uppercase leading-none tracking-[.06em] text-[#d4b06a]">THE LIVARO WAY</div></div><div className="orbit-track">{items.map(([Icon,label],i)=><div key={label} className={`orbit-item orbit-${i}`}><div className="orbit-item-content"><span><Icon size={18}/></span><small>{label}</small></div></div>)}</div></div>

}

function Eyebrow({children, light=false}) { return <div className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] ${light?'text-[#d4b06a]':'text-[#a17d38]'}`}><span className="h-px w-8 bg-current"/>{children}</div> }

function Stat({number,label}) { return <div><div className="font-display text-2xl font-semibold text-[#006b52]">{number}</div><div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</div></div> }

function InfoCard({icon:Icon,title,text}) { return <div className="info-card rounded-2xl border border-emerald-900/10 bg-[#fbfdfb] p-4 shadow-card"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4b06a]/20 text-[#8b6c31]"><Icon size={19}/></div><h3 className="mt-3 font-display text-lg font-semibold text-[#004c3b]">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div> }

function MiniStat({icon:Icon,title,text,dark=false}) { return <div className={`rounded-2xl border p-4 ${dark?'border-white/10 bg-white/[.06] text-white':'border-emerald-900/10 bg-white'}`}><Icon size={20} className={dark?'text-[#d4b06a]':'text-[#006b52]'}/><div className={`mt-2 font-display text-sm font-semibold ${dark?'text-white':'text-[#004c3b]'}`}>{title}</div><div className={`mt-1 text-[11px] leading-5 ${dark?'text-white/55':'text-slate-500'}`}>{text}</div></div> }

function MiniLine({icon:Icon,text}) { return <div className="flex items-center gap-3 text-sm text-white/75"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#d4b06a]"><Icon size={17}/></span>{text}</div> }

function Field({label,value,onChange,placeholder}) { return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span><input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#006b52] focus:ring-4 focus:ring-[#006b52]/10"/></label> }



createRoot(document.getElementById('root')).render(<App />)

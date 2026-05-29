import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Coffee, Wifi, Shield, Plane, ArrowRight, Check, Menu, X, Sparkles, Heart, Leaf, Music } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const ROOMS = [
  {
    id: 1,
    name: 'The Medina Suite',
    price: '$120',
    description: 'Authentic Zellige tilework, a private balcony, and warm sunset views into the courtyard.',
    image: '/images/room3.jpg',
    imageAlt: 'Luxury bedroom suite with Moroccan textiles and soft ambient lighting.'
  },
  {
    id: 2,
    name: 'The Majorelle Room',
    price: '$85',
    description: 'Serene blue accents inspired by the garden, organic linens, and a spacious seating niche.',
    image: '/images/room2.jpg',
    imageAlt: 'Elegant guest room with blue accents and refined Moroccan craftsmanship.'
  },
  {
    id: 3,
    name: 'The Atlas Penthouse',
    price: '$210',
    description: 'Panoramic mountain views, private rooftop lounge, and an intimate jacuzzied terrace.',
    image: '/images/room1.jpg',
    imageAlt: 'Rooftop terrace with mountain views and luxurious lounge seating.'
  }
];

const SERVICES = [
  { icon: Plane, title: 'VIP Airport Transfer', description: 'Arrive in comfort with private airport fast-track service.' },
  { icon: MapPin, title: 'Curated Medina Tours', description: 'Local experts bring the secrets of Marrakech to life.' },
  { icon: Coffee, title: 'Rooftop Breakfast', description: 'Organic morning service with mint tea and Moroccan pastries.' },
  { icon: Shield, title: 'Secure Privacy', description: 'Discrete service, advanced digital security, and personalized care.' }
];

const EXPERIENCES = [
  {
    icon: Sparkles,
    title: 'Private Culinary Journeys',
    description: 'Chefs prepare bespoke table experiences with seasonal spice blends and local produce.'
  },
  {
    icon: Leaf,
    title: 'Wellness Rituals',
    description: 'Traditional hammam, rosewater steam, and tailored relaxation treatments.'
  },
  {
    icon: Music,
    title: 'Evening Stories',
    description: 'Candles, live oud music, and intimate tales shared on the rooftop under lantern light.'
  },
  {
    icon: Heart,
    title: 'Bespoke Hospitality',
    description: 'Every request is anticipated, every detail refined, every stay woven with sincerity.'
  }
];

const REVIEWS = [
  {
    name: 'Sarah L.',
    country: 'UK',
    text: 'The perfect blend of convenience and culture. Landing in Marrakech and being in this oasis 10 minutes later was magical.'
  },
  {
    name: 'Marc D.',
    country: 'France',
    text: 'Impeccable service. The architecture is stunning, and the traditional breakfast on the roof was the highlight of our trip.'
  },
  {
    name: 'Amina R.',
    country: 'Morocco',
    text: 'A quiet haven that honors the city&apos;s history while delivering a modern and elegant guest experience.'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setHeroOffset(Math.min(window.scrollY / 10, 40));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-stone-900 bg-stone-50 overflow-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <p className={`text-lg font-serif tracking-[0.36em] ${isScrolled ? 'text-stone-900' : 'text-white'}`}>RIAD L&apos;AÉROPORT</p>
            <p className={`text-xs uppercase tracking-[0.4em] ${isScrolled ? 'text-stone-500' : 'text-stone-200'}`}>Marrakech Luxury Retreat</p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm uppercase tracking-[0.24em] text-stone-700">
            <a href="#story" className="hover:text-amber-700 transition">Story</a>
            <a href="#rooms" className="hover:text-amber-700 transition">Rooms</a>
            <a href="#experiences" className="hover:text-amber-700 transition">Experiences</a>
            <a href="#amenities" className="hover:text-amber-700 transition">Amenities</a>
            <a href="#reviews" className="hover:text-amber-700 transition">Reviews</a>
            <button className="px-6 py-3 rounded-full bg-amber-700 text-white tracking-[0.2em] hover:bg-amber-800 transition">Book Now</button>
          </div>
          <button onClick={() => setIsNavOpen(true)} className="md:hidden text-white/90 hover:text-white transition" aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-stone-950/95 backdrop-blur-xl" />
        <div className="relative h-full px-6 py-8">
          <button onClick={() => setIsNavOpen(false)} className="mb-12 inline-flex items-center justify-center rounded-full border border-stone-700 bg-white/10 p-3 text-stone-100 hover:bg-white/15 transition" aria-label="Close menu">
            <X size={24} />
          </button>
          <nav className="flex h-full flex-col justify-center gap-10 text-3xl uppercase tracking-[0.24em] text-white">
            <a href="#story" onClick={() => setIsNavOpen(false)} className="hover:text-amber-300 transition">Story</a>
            <a href="#rooms" onClick={() => setIsNavOpen(false)} className="hover:text-amber-300 transition">Rooms</a>
            <a href="#experiences" onClick={() => setIsNavOpen(false)} className="hover:text-amber-300 transition">Experiences</a>
            <a href="#amenities" onClick={() => setIsNavOpen(false)} className="hover:text-amber-300 transition">Amenities</a>
            <a href="#reviews" onClick={() => setIsNavOpen(false)} className="hover:text-amber-300 transition">Reviews</a>
            <a href="#rooms" onClick={() => setIsNavOpen(false)} className="inline-flex w-max items-center gap-2 rounded-full bg-amber-700 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-xl shadow-amber-700/20 hover:bg-amber-800 transition">Book Now<ArrowRight size={16} /></a>
          </nav>
        </div>
      </div>

      <main className="pt-28">
        <section className="relative h-screen overflow-hidden">
          <img
            src="/images/hero-bg.jpg"
            alt="Central courtyard of a luxury riad at dusk"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: `translateY(${heroOffset / 2}px)`, opacity: Math.max(0.95 - heroOffset / 200, 0.75) }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" style={{ transform: `translateY(${heroOffset / 4}px)` }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_50%)]" style={{ transform: `translateY(${heroOffset / 6}px)` }} />

          <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl" style={{ y: heroOffset }}>
              <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-6">A refined arrival in the heart of Marrakech</motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif uppercase leading-tight text-white drop-shadow-xl">An Oasis of Serenity<br />Steps From the Sky</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">Experience handcrafted Moroccan architecture, intimate rooftop service, and curated concierge support just minutes from Menara Airport.</motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a href="#rooms" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full bg-amber-700 px-8 py-4 text-sm uppercase tracking-[0.18em] text-white shadow-xl shadow-amber-700/20 hover:bg-amber-800 transition"><span>Explore Rooms</span><ArrowRight className="ml-3" size={18} /></motion.a>
                <a href="#amenities" className="text-sm uppercase tracking-[0.18em] text-stone-200 hover:text-white transition">View Amenities</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="story" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4">A private refuge</p>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Riad L&apos;Aéroport is more than a stay—it&apos;s a story.</h2>
              <p className="text-stone-600 leading-relaxed mb-6">Nestled within a quiet enclave near the airport, our riad is crafted for travelers who seek warmth, elegance, and effortless arrival. Every moment of your stay is designed to feel deeply personal, from the welcome mint tea to the candlelit supper on the rooftop.</p>
              <p className="text-stone-600 leading-relaxed mb-8">Here, Marrakech is experienced with all five senses: the scent of orange blossom, the glow of lantern-lit plaster, the gentle rhythm of water in the courtyard, and the comforting weight of bespoke linens.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Authentic Moroccan craftsmanship',
                  'Discreet 24/7 concierge service',
                  'Intimate design with modern privacy',
                  'Curated local experiences on demand'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-stone-700">
                    <Check size={20} className="mt-1 text-amber-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/10">
                <img src="/images/zellige.jpg" alt="Intricate Moroccan zellige tilework" className="h-80 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/10">
                <img src="/images/piscine.jpg" alt="Tranquil riad pool area" className="h-80 w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-stone-100 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">The Essence of Marrakech</p>
              <h2 className="text-4xl font-serif text-stone-900">A city of color, scent and whispered stories.</h2>
              <p className="mt-4 text-stone-600 max-w-2xl mx-auto">From the saffron-kissed kitchens of the souk to the ochre walls of the medina, Marrakech is an irresistible blend of lively markets, hidden riads, and ancient artisan traditions. At Riad L&apos;Aéroport, we open the city&apos;s most intimate chapters for you.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Hidden Courtyards',
                  description: 'Discover secret garden courtyards, ornate mosaics, and calm interior spaces tucked behind the Medina&apos;s vibrant streets.'
                },
                {
                  title: 'Cultural Passage',
                  description: 'Your stay includes private access to artisans, perfumers, and local storytellers who bring the city&apos;s heritage to life.'
                },
                {
                  title: 'Timeless Elegance',
                  description: 'Architecture, color and light are chosen to reflect both the peaceful soul of the riad and the rich warmth of Moroccan design.'
                }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="rounded-[2rem] bg-white p-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.18)] border border-stone-200">
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="py-24 px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Our Sanctuaries</p>
            <h2 className="text-4xl font-serif text-stone-900">Private rooms that feel like home.</h2>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">Each suite blends local craftsmanship, modern amenities, and personalized service for an elevated Marrakech stay.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-8 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <motion.article key={room.id} variants={fadeUp} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_35px_120px_-50px_rgba(15,23,42,0.25)] transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img src={room.image} alt={room.imageAlt} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-end justify-between gap-4 mb-5">
                    <h3 className="text-2xl font-serif text-stone-900">{room.name}</h3>
                    <span className="text-amber-700 font-semibold">{room.price}<span className="text-sm text-stone-400">/night</span></span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6">{room.description}</p>
                  <div className="flex items-center justify-between text-stone-400 border-t border-stone-100 pt-4">
                    <Wifi size={18} />
                    <Coffee size={18} />
                    <Shield size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="experiences" className="py-24 bg-stone-100 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Curated experiences</p>
              <h2 className="text-4xl font-serif text-stone-900">Getting here is only the beginning.</h2>
              <p className="mt-4 text-stone-600 max-w-2xl mx-auto">Our experiences are designed so the city feels effortless and the riad remains your private retreat. Every moment is curated to feel rare, warm, and authentically Marrakech.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {EXPERIENCES.map((experience, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="rounded-[2rem] bg-white p-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.18)] border border-stone-200 flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-700 text-white">
                    <experience.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-stone-900 mb-3">{experience.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="dining" className="relative overflow-hidden bg-fixed bg-center bg-cover bg-[url('/images/food.jpg')] py-28">
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,214,116,0.18),_transparent_35%)]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">Dining & private events</p>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">A table for every occasion, served with quiet elegance.</h2>
                <p className="text-stone-100 max-w-2xl leading-relaxed text-lg mb-10">From intimate candlelit dinners on the rooftop to private event dinners in the courtyard, our culinary program honors Moroccan tradition through refined seasonal menus and graceful service.</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-200 mb-3">Signature dining</p>
                    <h3 className="text-2xl font-semibold text-white mb-3">Moroccan luxury cuisine</h3>
                    <p className="text-stone-200 leading-relaxed">Begin with honeyed dates and preserved lemon olives, then move to slow-braised lamb tagine, saffron couscous, and mint tea as the evening deepens.</p>
                  </div>
                  <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-200 mb-3">Private events</p>
                    <h3 className="text-2xl font-semibold text-white mb-3">Elegant gatherings made effortless</h3>
                    <p className="text-stone-200 leading-relaxed">Host a family dinner or executive reception beneath lanterns and jasmine, with menus and styling tailored to your vision.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
                  <img src="/images/food.jpg" alt="Fine dining presentation" className="h-96 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
                  <img src="/images/terrasse.jpg" alt="Rooftop dining experience" className="h-96 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="amenities" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">What awaits</p>
            <h2 className="text-4xl font-serif text-stone-900">Exclusive services designed for a seamless stay.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm hover:shadow-xl transition">
                <service.icon size={34} className="mx-auto mb-6 text-amber-700" />
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="reviews" className="py-24 bg-stone-100 px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-3">Guest impressions</p>
            <h2 className="text-4xl font-serif text-stone-900">Words from travelers who chose calm over chaos.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {REVIEWS.map((review, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }} className="rounded-[2rem] bg-white p-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.2)] border border-stone-200">
                <div className="flex gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed mb-8">“{review.text}”</p>
                <p className="text-stone-900 font-semibold">{review.name} <span className="text-stone-400 font-medium">| {review.country}</span></p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl rounded-[3rem] bg-stone-950 px-8 py-16 text-center text-white shadow-2xl shadow-stone-950/40">
            <h2 className="text-4xl font-serif mb-6">Ready for your next arrival?</h2>
            <p className="text-stone-300 max-w-3xl mx-auto leading-relaxed mb-10">We combine attentive luxury, effortless logistics, and immersive design so every stay in Marrakech begins with calm and ends with wonder.</p>
            <a href="#rooms" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-4 text-sm uppercase tracking-[0.18em] font-semibold text-stone-950 shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition"><span>Reserve your stay</span><ArrowRight className="ml-3" size={18} /></a>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4">Contact & Arrival</p>
              <h2 className="text-4xl font-serif text-stone-900 mb-6">Reach us directly for private arrival planning.</h2>
              <p className="text-stone-600 leading-relaxed mb-8">For tailored transfers, last-minute requests, or exclusive rooftop dining reservations, our concierge team is available around the clock.</p>
              <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <MapPin size={24} className="mt-1 text-amber-700" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-amber-700 mb-2">Address</p>
                    <p className="text-stone-700">77 Lotissement Miftah Al Atlas, Marrakech</p>
                    <p className="text-stone-500">HXPC+V7 Marrakech</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-5">
                  <Phone size={24} className="mt-1 text-amber-700" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-amber-700 mb-2">Phone</p>
                    <p className="text-stone-700">06 88 71 46 61</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles size={24} className="mt-1 text-amber-700" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-amber-700 mb-2">Service</p>
                    <p className="text-stone-700">24/7 concierge for arrivals, dining, and bespoke experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_-50px_rgba(15,23,42,0.35)]">
              <img src="/images/marrakech.jpg" alt="Luxury riad entrance corridor" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-serif text-white tracking-[0.24em] mb-2">RIAD L&apos;AÉROPORT</p>
            <p className="text-sm text-stone-500">77 Lotissement Miftah Al Atlas, Marrakech</p>
            <p className="text-sm text-stone-500">HXPC+V7 Marrakech</p>
          </div>
          <div className="space-y-1 text-sm text-stone-500 md:text-right">
            <p>06 88 71 46 61</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-stone-600">© 2026 Riad L&apos;Aéroport. All rights reserved. Secure booking and discreet hospitality.</p>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { supabase, Event, Testimonial, GalleryImage } from "@/lib/supabase";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: eventsData } = await supabase.from("events").select("*").order("date", { ascending: true });
        const { data: testimonialsData } = await supabase.from("testimonials").select("*").order("date", { ascending: false }).limit(6);
        const { data: galleryData } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });

        if (eventsData) setEvents(eventsData);
        if (testimonialsData) setTestimonials(testimonialsData);
        if (galleryData) setGallery(galleryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Scroll effect for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-black text-[#d4af37] tracking-widest">MSAXTER</h1>
            <div className="hidden md:flex space-x-10">
              <a href="#home" className="text-white hover:text-[#d4af37] transition text-sm font-semibold tracking-wider uppercase">Acasă</a>
              <a href="#despre" className="text-white hover:text-[#d4af37] transition text-sm font-semibold tracking-wider uppercase">Despre</a>
              <a href="#evenimente" className="text-white hover:text-[#d4af37] transition text-sm font-semibold tracking-wider uppercase">Evenimente</a>
              <a href="#galerie" className="text-white hover:text-[#d4af37] transition text-sm font-semibold tracking-wider uppercase">Galerie</a>
              <a href="#contact" className="text-white hover:text-[#d4af37] transition text-sm font-semibold tracking-wider uppercase">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Dramatic */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {gallery.filter(g => g.featured)[0] ? (
            <img 
              src={gallery.filter(g => g.featured)[0].url} 
              alt="Msaxter Hero"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-black"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-[#d4af37] text-lg md:text-xl font-semibold tracking-[0.3em] uppercase mb-4 animate-pulse">
            Saxofonist Profesionist
          </p>
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
            <span className="gold-gradient">MSAXTER</span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/80 mb-8 font-light">
            Cel mai bun saxofonist din <span className="text-[#d4af37] font-semibold">România</span>
          </p>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Cosmin din Iași - Artist desăvârșit care transformă fiecare eveniment într-o experiență de neuitat
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#contact" className="btn-gold px-10 py-5 rounded-none text-lg min-w-[200px]">
              Rezervă Acum
            </a>
            <a href="#galerie" className="btn-outline px-10 py-5 rounded-none text-lg min-w-[200px]">
              Vezi Show-ul
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-[#d4af37]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Despre Section - Dark Elegant */}
      <section id="despre" className="py-32 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10">
                {gallery.filter(g => g.category === 'portrait')[0] ? (
                  <img 
                    src={gallery.filter(g => g.category === 'portrait')[0].url} 
                    alt="Cosmin Msaxter"
                    className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition duration-700"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                    <span className="text-9xl">🎷</span>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4af37]/30 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#d4af37]/10 blur-3xl"></div>
            </div>

            {/* Text Side */}
            <div className="space-y-8">
              <div>
                <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Despre Artist</p>
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  COSMIN <span className="gold-gradient">"MSAXTER"</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">Saxofonistul care a redefinit arta spectacolului în România.</strong> Cu o prezență scenică magnetică și un talent extraordinar, transformă fiecare eveniment într-o experiență de neuitat.
                </p>
                <p>
                  Din inima Iașului, am pornit o călătorie muzicală care m-a purtat pe cele mai prestigioase scene din țară. Fie că este vorba de o nuntă intimă, un eveniment corporate elegant sau o petrecere în club, aduc aceeași pasiune și profesionalism.
                </p>
                <p>
                  Ceea ce mă definește nu este doar tehnica impecabilă la saxofon, ci <strong className="text-[#d4af37]">capacitatea de a conecta publicul cu muzica</strong>. Când încep să cânt, oamenii nu mai stau la mese – se ridică, dansează și trăiesc fiecare notă.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="text-4xl font-black text-[#d4af37]">500+</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider mt-1">Evenimente</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[#d4af37]">15+</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider mt-1">Ani Experiență</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[#d4af37]">100%</p>
                  <p className="text-sm text-white/50 uppercase tracking-wider mt-1">Satisfacție</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evenimente Section - Grid Layout */}
      <section id="evenimente" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Calendar</p>
            <h2 className="text-5xl md:text-7xl font-black">
              EVENIMENTE <span className="gold-gradient">VIITOARE</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="group relative bg-black border border-white/10 hover:border-[#d4af37] transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden">
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                        <span className="text-7xl opacity-50">
                          {event.type === 'nunta' ? '💒' : event.type === 'corporate' ? '🏢' : event.type === 'club' ? '🎉' : '🎪'}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider">
                        {event.type}
                      </span>
                      <span className="text-white/50 text-sm">
                        {new Date(event.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition">
                      {event.title}
                    </h3>
                    <p className="text-white/60 mb-3">📍 {event.location}</p>
                    {event.description && (
                      <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Galerie Section - Masonry Style */}
      <section id="galerie" className="py-32 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Portofoliu</p>
            <h2 className="text-5xl md:text-7xl font-black">
              GALERIE <span className="gold-gradient">FOTO</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((image) => (
                <div 
                  key={image.id} 
                  className={`group relative overflow-hidden cursor-pointer ${
                    image.featured ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className={`aspect-square ${image.featured ? 'md:aspect-auto md:h-full' : ''}`}>
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#d4af37] font-bold text-lg">{image.title}</p>
                      <p className="text-white/60 text-sm uppercase tracking-wider">{image.category}</p>
                    </div>
                  </div>

                  {image.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimoniale Section - Dark Cards */}
      <section id="testimoniale" className="py-32 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Recenzii</p>
            <h2 className="text-5xl md:text-7xl font-black">
              CE SPUN <span className="gold-gradient">CLIENȚII</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-black p-8 border border-white/10 hover:border-[#d4af37] transition duration-500 group"
                >
                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-[#d4af37]' : 'text-white/10'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-white/80 mb-8 text-lg leading-relaxed italic">"{testimonial.message}"</p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <p className="font-bold text-white group-hover:text-[#d4af37] transition">{testimonial.name}</p>
                      <p className="text-sm text-white/40 uppercase tracking-wider">{testimonial.event_type}</p>
                    </div>
                    <span className="text-xs text-white/30">
                      {new Date(testimonial.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section - Dramatic */}
      <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              REZERVĂ <span className="gold-gradient">DATA</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Pentru disponibilitate și oferte personalizate pentru evenimentul tău
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0a0a0a] p-8 text-center border border-white/10 hover:border-[#d4af37] transition group">
              <span className="text-5xl mb-4 block">📍</span>
              <p className="text-white font-semibold mb-2">Locație</p>
              <p className="text-white/50">Iași, România</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 text-center border border-white/10 hover:border-[#d4af37] transition group">
              <span className="text-5xl mb-4 block">📧</span>
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mailto:contact@msaxter.ro" className="text-[#d4af37] hover:text-[#f4cf57] transition">
                contact@msaxter.ro
              </a>
            </div>
            <div className="bg-[#0a0a0a] p-8 text-center border border-white/10 hover:border-[#d4af37] transition group">
              <span className="text-5xl mb-4 block">📱</span>
              <p className="text-white font-semibold mb-2">Telefon</p>
              <a href="tel:+40700000000" className="text-[#d4af37] hover:text-[#f4cf57] transition">
                +40 7XX XXX XXX
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a href="#" className="w-16 h-16 bg-[#0a0a0a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-3xl transition transform hover:scale-110">
              📘
            </a>
            <a href="#" className="w-16 h-16 bg-[#0a0a0a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-3xl transition transform hover:scale-110">
              📸
            </a>
            <a href="#" className="w-16 h-16 bg-[#0a0a0a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-3xl transition transform hover:scale-110">
              🎬
            </a>
            <a href="#" className="w-16 h-16 bg-[#0a0a0a] border border-white/10 hover:border-[#d4af37] flex items-center justify-center text-3xl transition transform hover:scale-110">
              🎵
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black text-[#d4af37] tracking-widest mb-4">MSAXTER</h3>
          <p className="text-white/40 text-sm">
            © 2026 Cosmin "Msaxter" - Saxofonist Profesionist din Iași. Toate drepturile rezervate.
          </p>
          <p className="text-white/20 text-xs mt-2">
            Powered by Next.js & Supabase
          </p>
        </div>
      </footer>
    </main>
  );
}

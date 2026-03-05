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

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredImage = gallery.filter(g => g.featured)[0]?.url || '/images/DYR84074.JPG';
  const portraitImage = gallery.filter(g => g.category === 'portrait')[0]?.url;

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="navbar-brand">MSAXTER</a>
          <ul className="navbar-menu">
            <li><a href="#home" className="navbar-link">Acasă</a></li>
            <li><a href="#despre" className="navbar-link">Despre</a></li>
            <li><a href="#evenimente" className="navbar-link">Evenimente</a></li>
            <li><a href="#galerie" className="navbar-link">Galerie</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${featuredImage})` }}></div>
        <div className="hero-overlay"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="section-subtitle">Saxofonist Profesionist</span>
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            <span className="gold-gradient">MSAXTER</span>
          </h1>
          <p className="text-2xl md:text-4xl text-white/80 mb-4 font-light">
            Cel mai bun saxofonist din <span className="text-[#d4af37] font-semibold">România</span>
          </p>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Cosmin din Iași - Artist desăvârșit care transformă fiecare eveniment într-o experiență de neuitat
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#contact" className="btn-rockon btn-primary">Rezervă Acum</a>
            <a href="#galerie" className="btn-rockon btn-outline">Vezi Show-ul</a>
          </div>
        </div>
      </section>

      {/* Despre Section */}
      <section id="despre" className="py-32 px-6 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="card-rockon">
              <div className="card-image">
                {portraitImage ? (
                  <img src={portraitImage} alt="Cosmin Msaxter" className="aspect-[3/4]" />
                ) : (
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                    <span className="text-9xl">🎷</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-subtitle">Despre Artist</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 section-title">
                COSMIN <span className="gold-gradient">"MSAXTER"</span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-10">
                <p>
                  <strong className="text-white font-semibold">Saxofonistul care a redefinit arta spectacolului în România.</strong> Cu o prezență scenică magnetică și un talent extraordinar, transformă fiecare eveniment într-o experiență de neuitat.
                </p>
                <p>
                  Din inima Iașului, am pornit o călătorie muzicală care m-a purtat pe cele mai prestigioase scene din țară.
                </p>
                <p>
                  Ceea ce mă definește nu este doar tehnica impecabilă la saxofon, ci <strong className="text-[#d4af37]">capacitatea de a conecta publicul cu muzica</strong>. Când încep să cânt, oamenii nu mai stau la mese – se ridică, dansează și trăiesc fiecare notă.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Evenimente</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Ani Experiență</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfacție</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evenimente Section */}
      <section id="evenimente" className="py-32 px-6 section-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Calendar</span>
            <h2 className="text-5xl md:text-6xl font-bold section-title">
              EVENIMENTE <span className="gold-gradient">VIITOARE</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div key={event.id} className="card-rockon">
                  <div className="card-image h-64">
                    {event.image ? (
                      <img src={event.image} alt={event.title} />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                        <span className="text-7xl opacity-50">
                          {event.type === 'nunta' ? '💒' : event.type === 'corporate' ? '🏢' : event.type === 'club' ? '🎉' : '🎪'}
                        </span>
                      </div>
                    )}
                  </div>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-32 px-6 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Portofoliu</span>
            <h2 className="text-5xl md:text-6xl font-bold section-title">
              GALERIE <span className="gold-gradient">FOTO</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="gallery-grid">
              {gallery.map((image) => (
                <div 
                  key={image.id} 
                  className={`gallery-item ${image.featured ? 'featured' : ''}`}
                >
                  <img src={image.url} alt={image.title} />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{image.title}</span>
                    <span className="gallery-category">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimoniale Section */}
      <section id="testimoniale" className="py-32 px-6 section-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Recenzii</span>
            <h2 className="text-5xl md:text-6xl font-bold section-title">
              CE SPUN <span className="gold-gradient">CLIENȚII</span>
            </h2>
          </div>

          {loading ? (
            <div className="text-center text-[#d4af37] text-xl">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < testimonial.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.message}"</p>
                  <div>
                    <div className="testimonial-author">{testimonial.name}</div>
                    <div className="testimonial-event">{testimonial.event_type}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-subtitle">Contact</span>
            <h2 className="text-5xl md:text-6xl font-bold section-title">
              REZERVĂ <span className="gold-gradient">DATA</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
              Pentru disponibilitate și oferte personalizate pentru evenimentul tău
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="contact-box">
              <div className="contact-icon">📍</div>
              <h3 className="contact-title">Locație</h3>
              <p className="contact-text">Iași, România</p>
            </div>
            <div className="contact-box">
              <div className="contact-icon">📧</div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-text">
                <a href="mailto:contact@msaxter.ro">contact@msaxter.ro</a>
              </p>
            </div>
            <div className="contact-box">
              <div className="contact-icon">📱</div>
              <h3 className="contact-title">Telefon</h3>
              <p className="contact-text">
                <a href="tel:+40700000000">+40 7XX XXX XXX</a>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="social-btn">📘</a>
            <a href="#" className="social-btn">📸</a>
            <a href="#" className="social-btn">🎬</a>
            <a href="#" className="social-btn">🎵</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="footer-brand">MSAXTER</div>
          <p className="footer-text">
            © 2026 Cosmin "Msaxter" - Saxofonist Profesionist din Iași. Toate drepturile rezervate.
          </p>
          <p className="footer-text mt-2 text-sm">
            Powered by Next.js & Supabase
          </p>
        </div>
      </footer>
    </main>
  );
}

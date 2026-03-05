"use client";

import { useEffect, useState } from "react";
import { supabase, Event, Testimonial, GalleryImage } from "@/lib/supabase";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch events
        const { data: eventsData } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        // Fetch testimonials
        const { data: testimonialsData } = await supabase
          .from("testimonials")
          .select("*")
          .order("date", { ascending: false })
          .limit(6);

        // Fetch gallery
        const { data: galleryData } = await supabase
          .from("gallery")
          .select("*")
          .order("created_at", { ascending: false });

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
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#d4af37] tracking-wider">MSAXTER</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#d4af37] transition">Acasă</a>
              <a href="#despre" className="hover:text-[#d4af37] transition">Despre</a>
              <a href="#evenimente" className="hover:text-[#d4af37] transition">Evenimente</a>
              <a href="#testimoniale" className="hover:text-[#d4af37] transition">Testimoniale</a>
              <a href="#galerie" className="hover:text-[#d4af37] transition">Galerie</a>
              <a href="#contact" className="hover:text-[#d4af37] transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-[#d4af37]">Msaxter</span>
          </h2>
          <p className="text-2xl md:text-3xl mb-4 text-[#f5f5f5]/90">
            Cel mai bun saxofonist din România
          </p>
          <p className="text-xl md:text-2xl mb-8 text-[#f5f5f5]/70">
            Cosmin din Iași - Artist desăvârșit
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4cf57] text-[#0a0a0a] font-bold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 transition transform hover:scale-105">
              Rezervă Acum
            </a>
            <a href="#galerie" className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37]/10 transition">
              Vezi Galerie
            </a>
          </div>
        </div>
      </section>

      {/* Despre Section */}
      <section id="despre" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Despre Mine</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="text-[#d4af37]">Cosmin, cunoscut ca "Msaxter"</strong>, este saxofonistul care a redefinit arta spectacolului în România. Cu o prezență scenică magnetică și un talent extraordinar, transformă fiecare eveniment într-o experiență de neuitat.
              </p>
              <p>
                Din inima Iașului, am pornit o călătorie muzicală care m-a purtat pe cele mai prestigioase scene din țară. Fie că este vorba de o nuntă intimă, un eveniment corporate elegant sau o petrecere în club, aduc aceeași pasiune și profesionalism.
              </p>
              <p>
                Ceea ce mă definește nu este doar tehnica impecabilă la saxofon, ci capacitatea de a <strong className="text-[#d4af37]">conecta publicul cu muzica</strong>. Când încep să cânt, oamenii nu mai stau la mese – se ridică, dansează și trăiesc fiecare notă.
              </p>
              <p>
                Cu un repertoriu vast care cuprinde jazz clasic, piese contemporane, muzică populară românească și hituri internaționale, creez atmosfera perfectă pentru orice moment special.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full flex items-center justify-center overflow-hidden">
                {gallery.filter(g => g.category === 'portrait' && g.featured)[0] ? (
                  <img 
                    src={gallery.filter(g => g.category === 'portrait' && g.featured)[0].url} 
                    alt="Msaxter Portrait"
                    className="w-3/4 h-3/4 object-cover rounded-full border-4 border-[#d4af37]"
                  />
                ) : (
                  <div className="w-3/4 h-3/4 bg-[#0a0a0a] rounded-full flex items-center justify-center border-2 border-[#d4af37]">
                    <span className="text-6xl">🎷</span>
                  </div>
                )}
              </div>
              <p className="text-center mt-6 text-[#d4af37] italic">
                "Muzica nu e doar sunet, e emoție pură"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evenimente Section */}
      <section id="evenimente" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Evenimente Viitoare</h2>
          {loading ? (
            <div className="text-center text-[#d4af37]">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition group">
                  {event.image ? (
                    <div className="h-48 overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#d4af37]/20 to-[#0a0a0a] flex items-center justify-center">
                      <span className="text-6xl">
                        {event.type === 'nunta' ? '💒' : event.type === 'corporate' ? '🏢' : event.type === 'club' ? '🎉' : '🎪'}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-sm rounded-full capitalize">
                        {event.type}
                      </span>
                      <span className="text-[#f5f5f5]/60 text-sm">
                        {new Date(event.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#d4af37]">{event.title}</h3>
                    <p className="text-[#f5f5f5]/70 mb-3">📍 {event.location}</p>
                    {event.description && (
                      <p className="text-[#f5f5f5]/60">{event.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimoniale Section */}
      <section id="testimoniale" className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Ce Spun Clienții</h2>
          {loading ? (
            <div className="text-center text-[#d4af37]">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#1a1a1a]/50 p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-[#d4af37]' : 'text-[#f5f5f5]/20'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[#f5f5f5]/80 mb-6 italic leading-relaxed">"{testimonial.message}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#d4af37]">{testimonial.name}</p>
                      <p className="text-sm text-[#f5f5f5]/50 capitalize">{testimonial.event_type}</p>
                    </div>
                    <span className="text-xs text-[#f5f5f5]/40">
                      {new Date(testimonial.date).toLocaleDateString('ro-RO')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Galerie Foto</h2>
          {loading ? (
            <div className="text-center text-[#d4af37]">Se încarcă...</div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((image) => (
                <div 
                  key={image.id} 
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition group cursor-pointer ${
                    image.featured ? 'border-[#d4af37]' : 'border-[#d4af37]/20 hover:border-[#d4af37]'
                  }`}
                >
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {image.featured && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-[#d4af37] text-[#0a0a0a] text-xs font-bold rounded">
                      FEATURED
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Contact</h2>
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl border border-[#d4af37]/20 shadow-xl shadow-[#d4af37]/5">
            <div className="text-center mb-8">
              <p className="text-2xl mb-4 text-[#d4af37]">Rezervă-ți data acum!</p>
              <p className="text-[#f5f5f5]/70">
                Pentru disponibilitate și oferte personalizate
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">📍</span>
                <span className="text-xl">Iași, România</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">📧</span>
                <a href="mailto:contact@msaxter.ro" className="text-xl text-[#d4af37] hover:text-[#f4cf57] transition">
                  contact@msaxter.ro
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">📱</span>
                <a href="tel:+40700000000" className="text-xl text-[#d4af37] hover:text-[#f4cf57] transition">
                  +40 7XX XXX XXX
                </a>
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition transform hover:scale-125">
                📘
              </a>
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition transform hover:scale-125">
                📸
              </a>
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition transform hover:scale-125">
                🎬
              </a>
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition transform hover:scale-125">
                🎵
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto text-center text-[#f5f5f5]/50">
          <p>© 2026 Msaxter. Toate drepturile rezervate.</p>
          <p className="mt-2">Cosmin "Msaxter" - Saxofonist Profesionist din Iași</p>
          <p className="mt-1 text-xs">Powered by Next.js & Supabase</p>
        </div>
      </footer>
    </main>
  );
}

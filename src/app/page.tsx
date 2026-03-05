"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#d4af37]">MSAXTER</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#d4af37] transition">Acasă</a>
              <a href="#despre" className="hover:text-[#d4af37] transition">Despre</a>
              <a href="#servicii" className="hover:text-[#d4af37] transition">Servicii</a>
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
            <a href="#contact" className="px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold rounded-full hover:bg-[#f4cf57] transition">
              Rezervă Acum
            </a>
            <a href="#galerie" className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37]/10 transition">
              Vezi Galerie
            </a>
          </div>
        </div>
      </section>

      {/* Despre Section */}
      <section id="despre" className="py-24 px-6 bg-[#1a1a1a]">
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
              <div className="aspect-square bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-[#0a0a0a] rounded-full flex items-center justify-center border-2 border-[#d4af37]">
                  <span className="text-6xl">🎷</span>
                </div>
              </div>
              <p className="text-center mt-6 text-[#d4af37] italic">
                "Locul tău pentru fotografii"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Servicii</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nunti */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <div className="text-5xl mb-6">💒</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Nunți & Evenimente Private</h3>
              <p className="text-[#f5f5f5]/80 leading-relaxed">
                Transform nunta ta într-o poveste magică. De la ceremonia religioasă până la petrecerea de noapte, creez momente memorabile cu un repertoriu adaptat fiecărui moment special.
              </p>
              <ul className="mt-6 space-y-2 text-[#f5f5f5]/70">
                <li>✓ Ceremonie & Cocktail</li>
                <li>✓ Primirea mirilor</li>
                <li>✓ Petrecere & Dans</li>
                <li>✓ Repertoriu personalizat</li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Evenimente Corporate</h3>
              <p className="text-[#f5f5f5]/80 leading-relaxed">
                Eleganță și profesionalism pentru evenimentele tale de afaceri. Gală, conferință, team-building sau lansare de produs – aduc sofisticarea muzicii live.
              </p>
              <ul className="mt-6 space-y-2 text-[#f5f5f5]/70">
                <li>✓ Gală & Cocktail</li>
                <li>✓ Conferințe & Lansări</li>
                <li>✓ Petreceri companie</li>
                <li>✓ Atmosferă elegantă</li>
              </ul>
            </div>

            {/* Club */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">Program Club</h3>
              <p className="text-[#f5f5f5]/80 leading-relaxed">
                Show-ul care ridică sala de la mese! Programul meu de club este legend – când încep să cânt, toată lumea dansează. Energie pură și momente de neuitat.
              </p>
              <ul className="mt-6 space-y-2 text-[#f5f5f5]/70">
                <li>✓ Show interactiv</li>
                <li>✓ Energie maximă</li>
                <li>✓ Hituri & Improvizații</li>
                <li>✓ Publicul dansează lângă scenă</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Galerie Foto</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84074.JPG" alt="Msaxter performance" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84117.JPG" alt="Msaxter saxofon" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84199.JPG" alt="Msaxter live" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84223.JPG" alt="Msaxter concert" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84298.JPG" alt="Msaxter show" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84363.JPG" alt="Msaxter performance" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84409.JPG" alt="Msaxter club" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84505.JPG" alt="Msaxter event" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84531.JPG" alt="Msaxter wedding" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84562.JPG" alt="Msaxter corporate" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84574.JPG" alt="Msaxter stage" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37] transition">
              <img src="/images/DYR84615.JPG" alt="Msaxter artist" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-[#d4af37]">Contact</h2>
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl border border-[#d4af37]/20">
            <div className="text-center mb-8">
              <p className="text-2xl mb-4">Rezervă-ți data acum!</p>
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
                <a href="mailto:contact@msaxter.ro" className="text-xl text-[#d4af37] hover:text-[#f4cf57]">
                  contact@msaxter.ro
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">📱</span>
                <a href="tel:+40700000000" className="text-xl text-[#d4af37] hover:text-[#f4cf57]">
                  +40 7XX XXX XXX
                </a>
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition">
                📘
              </a>
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition">
                📸
              </a>
              <a href="#" className="text-4xl text-[#d4af37] hover:text-[#f4cf57] transition">
                🎬
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
        </div>
      </footer>
    </main>
  );
}

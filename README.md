# Msaxter Website 🎷

Site oficial pentru **Cosmin "Msaxter"** - cel mai bun saxofonist din România.

## 🚀 Deploy pe Vercel

### Pasul 1: Configurează Supabase (opțional pentru acum)

1. Creează cont pe [supabase.com](https://supabase.com)
2. Creează un proiect nou
3. Copiază URL-ul și cheia API în `.env.local`

### Pasul 2: Adaugă fotografiile

Pune toate fotografiile în folderul:
```
msaxter-site/public/images/
```

### Pasul 3: Deploy pe Vercel

1. Instalează Vercel CLI:
```bash
npm install -g vercel
```

2. Conectează-te:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Pentru production:
```bash
vercel --prod
```

## 🛠️ Development Local

```bash
cd msaxter-site
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000)

## 📁 Structură

```
msaxter-site/
├── public/
│   └── images/          # Adaugă fotografiile aici
├── src/
│   └── app/
│       ├── page.tsx     # Pagina principală
│       ├── layout.tsx   # Layout global
│       └── globals.css  # Stiluri globale
├── package.json
└── README.md
```

## 🎨 Design

- **Tematică:** Dark (negru + auriu)
- **Culori:** 
  - Background: `#0a0a0a`
  - Auriu: `#d4af37`
  - Text: `#f5f5f5`

## 📝 Conținut

Site-ul include:
- ✅ Hero section cu prezentare
- ✅ Despre Msaxter
- ✅ Servicii (Nunți, Corporate, Club)
- ✅ Galerie foto (ready pentru imaginile tale)
- ✅ Contact

---

**Creat cu ❤️ pentru Msaxter**

import { useEffect, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  )
}

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('hosan-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // The page also works when browser storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('hosan-theme', theme)
    } catch {
      // Keep the theme usable for this visit without persistent storage.
    }
  }, [theme])

  return (
    <div className="page">
      <a className="skip-link" href="#main">Asosiy mazmunga o‘tish</a>
      <header className="header">
        <a className="brand" href="#main" aria-label="HOSAN bosh sahifa">
          <span className="brand-mark" aria-hidden="true">H</span>
          HOSAN<span className="brand-dot">.</span>
        </a>
        <button
          className="theme-toggle"
          type="button"
          aria-label="Tungi rejim"
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span>
          {theme === 'light' ? 'Tungi rejim' : 'Kunduzgi rejim'}
        </button>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow"><span aria-hidden="true" /> YANGI BOSHLANISH</p>
          <h1 id="hero-title">Har bir katta g‘oya<br /><span>ilk qadamdan.</span></h1>
          <p className="intro">
            HOSAN’ga xush kelibsiz. Bu — yangi loyihamizning ilk sahifasi.
            Keyingi g‘oyalarni birgalikda shu yerda rivojlantiramiz.
          </p>
          <div className="actions">
            <a className="button primary" href="https://github.com/nmeenamee-cell/HOSAN">
              Loyihani ko‘rish <ArrowUpRight />
            </a>
            <a className="button secondary" href="#about">
              Batafsil <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-core">h<span>.</span></div>
            <span className="art-caption">BOSHLANISH NUQTASI / 01</span>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div>
            <p className="section-label">LOYIHA HAQIDA</p>
            <h2 id="about-title">Avval poydevor.<br />Keyin imkoniyatlar.</h2>
          </div>
          <div className="about-copy">
            <p>
              Hozircha bu boshlang‘ich sahifa. HOSAN’ning yangi bo‘limlari va
              imkoniyatlari loyiha rivojlanishi bilan shu yerda paydo bo‘ladi.
            </p>
            <a className="text-link" href="https://github.com/nmeenamee-cell/HOSAN/blob/main/README.md">
              Loyiha qo‘llanmasi <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer><span>HOSAN</span><span>Yaxshi g‘oyalar uchun ochiq makon.</span></footer>
    </div>
  )
}

export default App

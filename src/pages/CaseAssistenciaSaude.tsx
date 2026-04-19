import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Pill, Video, Users, Layers, Users2, Eye, Zap, DatabaseZap, Folder, Bell, User, MoreHorizontal, Stethoscope, Building2 } from 'lucide-react'

const caseCss = `
/* ── TOKENS ── */
:root {
  --bg:         #0D0D0D;
  --bg-card:    #161616;
  --bg-card-alt:#1C1C1C;
  --text:       #FFFFFF;
  --text-muted: rgba(255,255,255,0.55);
  --text-dim:   rgba(255,255,255,0.35);
  --bordô:      #6EE840;
  --bordô-light:#8FF563;
  --bordô-bg:   rgba(110,232,64,0.06);
  --bordô-border:rgba(110,232,64,0.18);
  --dourado:    #6EE840;
  --dourado-light:#8FF563;
  --dourado-bg: rgba(110,232,64,0.07);
  --dourado-border:rgba(110,232,64,0.20);
  --border:     rgba(255,255,255,0.08);
  --shadow:     0 2px 16px rgba(0,0,0,0.3);
  --shadow-md:  0 8px 32px rgba(0,0,0,0.4);
  --shadow-lg:  0 20px 60px rgba(0,0,0,0.5);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
h1 { font-family: 'Raleway', sans-serif; font-size: clamp(36px, 5vw, 68px); font-weight: 800; line-height: 1.06; letter-spacing: -0.03em; color: var(--text); }
h2 { font-family: 'Raleway', sans-serif; font-size: clamp(24px, 3vw, 40px); font-weight: 700; line-height: 1.12; letter-spacing: -0.025em; color: var(--text); }
h3 { font-family: 'Raleway', sans-serif; font-size: 18px; font-weight: 700; letter-spacing: -0.01em; color: var(--text); }
p { font-size: 16px; line-height: 1.75; color: var(--text-muted); font-family: 'Inter', sans-serif; }
.stat-num { font-family: 'Inter', sans-serif; font-size: clamp(40px, 4.5vw, 64px); font-weight: 900; letter-spacing: -0.03em; line-height: 1; color: var(--bordô); }
.stat-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.10em; color: var(--text-dim); margin-top: 8px; font-family: 'Inter', sans-serif; }

/* ── NAV ── */
nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 20px 56px; background: rgba(13,13,13,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); transition: box-shadow 0.3s; }
nav.scrolled { box-shadow: var(--shadow); }
.nav-left { display: flex; align-items: center; gap: 20px; }
.nav-back { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: var(--text-dim); text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
.nav-back:hover { color: var(--bordô); }
.nav-sep { width: 1px; height: 16px; background: var(--border); }
.nav-brand { font-family: 'Raleway', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; color: var(--text-muted); text-transform: uppercase; }
.nav-brand span { color: var(--bordô); }
.nav-dots { display: flex; gap: 10px; align-items: center; }
.nav-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border); border: 1.5px solid var(--text-dim); cursor: pointer; transition: all 0.3s; }
.nav-dot.active { background: var(--bordô); border-color: var(--bordô); transform: scale(1.5); }

/* ── LAYOUT ── */
section { min-height: 100vh; padding: 120px 64px 80px; display: flex; flex-direction: column; justify-content: center; position: relative; }
.container { max-width: 1080px; margin: 0 auto; width: 100%; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }

/* ── CARDS ── */
.card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 28px; box-shadow: var(--shadow); transition: all 0.3s; }
.card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: rgba(0,0,0,0.12); }
.card-bordô { border-color: var(--bordô-border); background: var(--bordô-bg); }
.card-dourado { border-color: var(--dourado-border); background: var(--dourado-bg); }
.card-neutral { background: var(--bg-card-alt); border-color: var(--border); }

/* ── SECTION LABEL ── */
.section-label { display: inline-flex; align-items: center; gap: 10px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--bordô); margin-bottom: 20px; }
.section-label::before { content: ''; display: block; width: 24px; height: 2px; background: var(--bordô); border-radius: 2px; }

/* ── BADGE ── */
.badge { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; display: inline-block; }
.badge-validada { background: rgba(34,139,34,0.10); color: #1a6b1a; border: 1px solid rgba(34,139,34,0.25); }
.badge-refutada { background: rgba(100,100,100,0.10); color: #555; border: 1px solid rgba(100,100,100,0.25); }
.badge-bordô { background: var(--bordô-bg); color: var(--bordô); border: 1px solid var(--bordô-border); }
.badge-dourado { background: var(--dourado-bg); color: var(--dourado); border: 1px solid var(--dourado-border); }

/* ── QUOTE BLOCK ── */
.quote-block { border-left: 3px solid var(--bordô); padding: 18px 24px; background: var(--bordô-bg); border-radius: 0 12px 12px 0; font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.72; color: var(--text); font-style: italic; margin: 24px 0; }
.quote-block cite { display: block; margin-top: 10px; font-size: 12px; font-style: normal; font-weight: 600; color: var(--text-dim); letter-spacing: 0.04em; }

/* ── DIVIDER ── */
.divider { width: 100%; height: 1px; background: var(--border); margin: 40px 0; }

/* ── SUMMARY BLOCK ── */
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin: 40px 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); box-shadow: var(--shadow); }
.summary-item { background: var(--bg-card); padding: 28px 24px; }
.summary-item:not(:last-child) { border-right: 1px solid var(--border); }
.summary-key { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--bordô); margin-bottom: 10px; }
.summary-val { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.65; color: var(--text-muted); }

/* ── TIMELINE ── */
.timeline { display: flex; align-items: flex-start; position: relative; margin-top: 40px; }
.timeline-step { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
.timeline-step:not(:last-child)::after { content: ''; position: absolute; top: 20px; left: 50%; width: 100%; height: 2px; background: linear-gradient(90deg, var(--bordô), rgba(127,29,29,0.08)); }
.timeline-circle { width: 40px; height: 40px; border-radius: 50%; background: var(--bordô); display: flex; align-items: center; justify-content: center; font-family: 'Raleway', sans-serif; font-size: 15px; font-weight: 800; color: #0D0D0D; position: relative; z-index: 1; box-shadow: 0 0 0 6px rgba(110,232,64,0.10); }
.timeline-content { margin-top: 16px; padding: 0 8px; }
.timeline-title { font-family: 'Raleway', sans-serif; font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 5px; }
.timeline-desc { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-muted); line-height: 1.5; }
.timeline-v { display: flex; flex-direction: column; gap: 0; margin-top: 32px; }
.timeline-v-item { display: flex; gap: 20px; align-items: flex-start; }
.timeline-v-item:not(:last-child) .timeline-v-line-wrap::after { content: ''; display: block; width: 2px; background: var(--bordô-border); flex: 1; min-height: 32px; margin: 4px auto 0; }
.timeline-v-line-wrap { display: flex; flex-direction: column; align-items: center; width: 36px; flex-shrink: 0; }
.timeline-v-circle { width: 36px; height: 36px; border-radius: 50%; background: var(--bordô); display: flex; align-items: center; justify-content: center; font-family: 'Raleway', sans-serif; font-size: 14px; font-weight: 800; color: #FAFAF8; flex-shrink: 0; }
.timeline-v-content { padding-bottom: 32px; flex: 1; }
.timeline-v-title { font-family: 'Raleway', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 6px; margin-top: 6px; }
.timeline-v-desc { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--text-muted); }

/* ── HIP ROW ── */
.hip-row { display: flex; align-items: flex-start; gap: 14px; padding: 14px 18px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 8px; transition: all 0.2s; }
.hip-row:hover { background: var(--bg-card-alt); }
.hip-status { align-self: center; display: flex; align-items: center; }
.hip-text strong { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: var(--text); display: block; margin-bottom: 2px; }
.hip-text span { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-muted); }

/* ── PHOTO GRID ── */
.photo-grid-3 { display: grid; grid-template-columns: 1.4fr 1fr 1fr; grid-template-rows: auto auto; gap: 12px; margin-top: 28px; --media-h: clamp(180px, 18vw, 240px); }
.photo-grid-3 .photo-media { height: var(--media-h); aspect-ratio: auto; }
.photo-grid-3 .photo-media img { object-fit: cover; }
.photo-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 28px; }
.photo-grid-mixed { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 28px; --media-h: clamp(180px, 18vw, 240px); }
.photo-grid-mixed .photo-media { height: var(--media-h); aspect-ratio: auto; }
.photo-grid-mixed .photo-media img { object-fit: cover; }
.photo-grid-mixed .photo-item.rotate-ccw .photo-media { height: clamp(240px, 24vw, 340px); }
.photo-grid-mixed .photo-item.rotate-ccw .photo-media img { object-fit: contain; transform: rotate(-90deg) scale(1.02); transform-origin: center; }
.photo-item { position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); background: #F0ECE6; cursor: zoom-in; display: flex; flex-direction: column; }
.photo-media { width: 100%; aspect-ratio: var(--ar, 16 / 10); background: #F0ECE6; }
.photo-media img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 0.4s ease; }
.photo-item:hover img { transform: scale(1.03); }
.photo-item.tall { grid-row: span 2; }
.photo-item.phone { --ar: 9 / 16; }
.photo-item.phone .photo-media img { object-fit: contain; }
.photo-caption { padding: 8px 12px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); background: var(--bg-card); border-top: 1px solid var(--border); margin-top: auto; }

/* ── BEFORE/AFTER ── */
.before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; border-radius: 14px; overflow: hidden; border: 1px solid var(--border); box-shadow: var(--shadow); margin-top: 28px; }
.before-side, .after-side { padding: 28px; }
.before-side { background: var(--bg-card-alt); border-right: 1px solid var(--border); }
.after-side { background: var(--bg-card); }
.ba-label { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; }
.ba-label.before { color: var(--text-dim); }
.ba-label.after { color: var(--bordô); }
.ba-item { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); font-family: 'Inter', sans-serif; font-size: 14px; color: var(--text); }
.ba-item:last-child { border-bottom: none; }

/* ── INFLUÊNCIA CARDS ── */
.influence-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin-top: 28px; }
.influence-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; box-shadow: var(--shadow); transition: all 0.3s; border-left: 3px solid var(--dourado); }
.influence-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.influence-who { font-family: 'Raleway', sans-serif; font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.influence-need { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--dourado); margin-bottom: 10px; }
.influence-how { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.65; color: var(--text-muted); }

/* ── RESULTADO METRICS ── */
.result-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 32px; }
.result-card { background: var(--bg-card); border: 1px solid var(--dourado-border); border-radius: 16px; padding: 32px 24px; text-align: center; box-shadow: var(--shadow); }
.result-num { font-family: 'Inter', sans-serif; font-size: clamp(24px,2.8vw,36px); font-weight: 900; letter-spacing: -0.03em; color: var(--bordô); line-height: 1; }
.result-label { font-family: 'Raleway', sans-serif; font-size: 14px; font-weight: 700; color: var(--text); margin-top: 10px; margin-bottom: 6px; }
.result-desc { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-muted); line-height: 1.5; }

/* ── APRENDIZADOS ── */
.aprendizado-item { display: flex; gap: 20px; align-items: flex-start; padding: 28px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; margin-bottom: 12px; box-shadow: var(--shadow); transition: all 0.3s; }
.aprendizado-item:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.aprendizado-num { font-family: 'Raleway', sans-serif; font-size: 28px; font-weight: 900; color: var(--bordô-border); line-height: 1; flex-shrink: 0; width: 36px; }
.aprendizado-title { font-family: 'Raleway', sans-serif; font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
.aprendizado-desc { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--text-muted); }

/* ── REFRAME BLOCK ── */
.reframe-block { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 36px; position: relative; overflow: hidden; box-shadow: var(--shadow); margin-top: 28px; }
.reframe-block::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--bordô), var(--dourado)); }
.reframe-vs { display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px; align-items: center; margin-top: 24px; }
.reframe-side { padding: 18px 22px; border-radius: 10px; }
.reframe-side.before { background: rgba(0,0,0,0.03); border: 1px solid var(--border); }
.reframe-side.after { background: var(--bordô-bg); border: 1px solid var(--bordô-border); }
.reframe-lbl { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px; }
.reframe-lbl.before { color: var(--text-dim); }
.reframe-lbl.after { color: var(--bordô); }
.reframe-txt { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: var(--text); line-height: 1.5; }
.reframe-arrow { font-size: 22px; color: var(--text-dim); text-align: center; }

/* ── HERO SECTION ── */
#hero { min-height: 100vh; background: var(--bg); position: relative; }
#hero::before { content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: linear-gradient(135deg, transparent, rgba(127,29,29,0.03)); pointer-events: none; }
.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
.hero-company { display: flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: var(--text-muted); }
.company-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--bordô); }
.hero-read-time { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-dim); }
.hero-image { margin-top: 48px; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border); }
.hero-image img { width: 100%; display: block; background: #f0ece6; }

/* ── PILL ROW ── */
.pill { font-family: 'Inter', sans-serif; background: var(--bg-card); border: 1px solid var(--border); border-radius: 100px; padding: 6px 14px; font-size: 13px; font-weight: 500; color: var(--text); display: inline-block; }
.pill-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }

/* ── LIGHTBOX ── */
.lightbox-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(26,26,26,0.94); display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; backdrop-filter: blur(8px); padding: 24px; }
.lightbox-overlay.open { opacity: 1; pointer-events: all; }
.lightbox-inner { position: relative; max-width: 92vw; max-height: 90vh; }
.lightbox-inner img { max-width: 100%; max-height: 88vh; border-radius: 12px; object-fit: contain; display: block; box-shadow: 0 32px 80px rgba(0,0,0,0.5); }
.lightbox-close { position: absolute; top: -14px; right: -14px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
.lightbox-close:hover { background: rgba(255,255,255,0.25); }
.lightbox-caption { text-align: center; margin-top: 14px; font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 500; letter-spacing: 0.02em; }

/* ── FADE UP ── */
.fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }

/* ── STAT GRID ── */
.stat-grid { display: grid; grid-template-columns: repeat(4, auto); gap: 0 48px; justify-content: start; margin-top: 48px; padding-top: 40px; border-top: 1px solid var(--border); }

/* ── RESPONSIVO ── */
@media (max-width: 900px) {
  section { padding: 100px 24px 60px; }
  nav { padding: 16px 24px; }
  .grid-2, .grid-3, .photo-grid-3, .photo-grid-2, .photo-grid-mixed,
  .summary-grid, .before-after, .influence-grid, .result-grid,
  .reframe-vs { grid-template-columns: 1fr; }
  .before-side { border-right: none; border-bottom: 1px solid var(--border); }
  .timeline { flex-direction: column; align-items: stretch; gap: 0; }
  .timeline-step { flex: none; width: 100%; display: flex; flex-direction: row; align-items: flex-start; gap: 16px; text-align: left; padding-bottom: 32px; }
  .timeline-step:last-child { padding-bottom: 0; }
  .timeline-circle { flex-shrink: 0; }
  .timeline-content { margin-top: 12px; padding: 0; }
  .timeline-step:not(:last-child)::after { top: 40px; left: 19px; width: 2px; height: calc(100% - 40px); background: linear-gradient(180deg, var(--bordô), rgba(127,29,29,0.08)); }
  .photo-item.tall { grid-row: span 1; }
  .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 24px 16px; }
  .stat-num { font-size: 26px; }
  #heroCover { cursor: zoom-in; }
}
`

export default function CaseAssistenciaSaude() {
  useEffect(() => {
    // Inject CSS
    const styleEl = document.createElement('style')
    styleEl.id = 'case-assistencia-styles'
    styleEl.textContent = caseCss
    document.head.appendChild(styleEl)

    // Nav scroll
    const nav = document.getElementById('mainNav')
    const handleScroll = () => { nav?.classList.toggle('scrolled', window.scrollY > 20) }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Nav dots
    const sectionIds = ['hero', 'diagnostico', 'evidencias', 'solucao', 'impacto', 'resultado']
    const dots = document.querySelectorAll('.nav-dot')

    const sectObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = sectionIds.indexOf(e.target.id)
          dots.forEach(d => d.classList.remove('active'))
          if (idx >= 0) dots[idx].classList.add('active')
        }
      })
    }, { threshold: 0.15, rootMargin: '-10% 0px -10% 0px' })

    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) sectObs.observe(el) })
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    // Lightbox
    const overlay = document.getElementById('lightbox')
    const lbImg = document.getElementById('lightboxImg') as HTMLImageElement | null
    const lbCap = document.getElementById('lightboxCaption')
    const lbClose = document.getElementById('lightboxClose')

    const openLightbox = (src: string, caption: string) => {
      if (lbImg) lbImg.src = src
      if (lbCap) lbCap.textContent = caption || ''
      overlay?.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
    const closeLightbox = () => {
      overlay?.classList.remove('open')
      document.body.style.overflow = ''
      setTimeout(() => { if (lbImg) lbImg.src = '' }, 300)
    }

    document.querySelectorAll('.photo-item img').forEach(img => {
      img.addEventListener('click', () =>
        openLightbox((img as HTMLImageElement).src, (img as HTMLImageElement).alt)
      )
    })

    const heroCover = document.getElementById('heroCover') as HTMLImageElement | null
    heroCover?.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        openLightbox(heroCover.src, heroCover.alt)
      }
    })
    overlay?.addEventListener('click', e => { if (e.target === overlay) closeLightbox() })
    lbClose?.addEventListener('click', closeLightbox)

    // Fade up
    const fadeEls = document.querySelectorAll('.fade-up')
    const fadeObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08 })
    fadeEls.forEach(el => fadeObs.observe(el))

    // Keyboard
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeLightbox(); return }
      const cur = Array.from(dots).findIndex(d => d.classList.contains('active'))
      if ((e.key === 'ArrowDown' || e.key === ' ') && cur < sectionIds.length - 1) {
        if (e.key === ' ') e.preventDefault()
        document.getElementById(sectionIds[cur + 1])?.scrollIntoView({ behavior: 'smooth' })
      }
      if (e.key === 'ArrowUp' && cur > 0) {
        e.preventDefault()
        document.getElementById(sectionIds[cur - 1])?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.getElementById('case-assistencia-styles')?.remove()
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
      sectObs.disconnect()
      fadeObs.disconnect()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav id="mainNav">
        <div className="nav-left">
          <Link to="/" className="nav-back"><ArrowLeft size={18} /></Link>
          <div className="nav-sep"></div>
          <div className="nav-brand">Assistência Saúde</div>
        </div>
        <div className="nav-dots">
          <div className="nav-dot active" data-section="hero"></div>
          <div className="nav-dot" data-section="diagnostico"></div>
          <div className="nav-dot" data-section="evidencias"></div>
          <div className="nav-dot" data-section="solucao"></div>
          <div className="nav-dot" data-section="impacto"></div>
          <div className="nav-dot" data-section="resultado"></div>
        </div>
      </nav>

      {/* LIGHTBOX */}
      <div className="lightbox-overlay" id="lightbox">
        <div className="lightbox-inner">
          <div className="lightbox-close" id="lightboxClose">✕</div>
          <img src="" id="lightboxImg" alt="" />
          <div className="lightbox-caption" id="lightboxCaption"></div>
        </div>
      </div>

      {/* ═══════════════════ SEÇÃO 1 — HERO ═══════════════════ */}
      <section id="hero">
        <div className="container">

          <div className="fade-up">
            <div className="hero-meta">
              <div className="hero-company">
                <div className="company-dot"></div>
                PicPay · Seguros &amp; Saúde · 2025
              </div>
              <div className="hero-read-time">· 8 min de leitura</div>
            </div>
          </div>

          <div className="fade-up stagger-1">
            <h1>O problema não era churn.<br />Era percepção de valor.</h1>
          </div>

          <div className="fade-up stagger-2" style={{ marginTop: '20px' }}>
            <p>Com 16% de churn em um produto de assistência saúde, o time buscava soluções de retenção. Identifiquei que estava atacando o sintoma errado, e mudei a direção antes de qualquer investimento em retenção.</p>
          </div>

          {/* Stats */}
          <div className="stat-grid fade-up stagger-3">
            <div><div className="stat-num" style={{ color: 'var(--text)' }}>16%</div><div className="stat-label">Churn inicial</div></div>
            <div><div className="stat-num">↓ 0,97 p.p.</div><div className="stat-label">Redução após mudanças</div></div>
            <div><div className="stat-num">~5 mil</div><div className="stat-label">Apólices preservadas</div></div>
            <div><div className="stat-num">R$50k</div><div className="stat-label">Receita preservada</div></div>
          </div>

          {/* Summary */}
          <div className="fade-up stagger-4">
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-key">Desafio</div>
                <div className="summary-val">Produto com 16% de churn. O time buscava retenção enquanto o problema real estava na experiência de pós-venda.</div>
              </div>
              <div className="summary-item">
                <div className="summary-key">Estratégia</div>
                <div className="summary-val">Redefini o problema: churn era sintoma de desalinhamento entre promessa e experiência. Validei em duas camadas antes de propor qualquer solução.</div>
              </div>
              <div className="summary-item">
                <div className="summary-key">Resultados</div>
                <div className="summary-val">↓ 0,97 p.p. no churn. ~5 mil apólices preservadas. Tracking implementado onde antes havia ausência total de dado.</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-up" style={{ marginTop: '48px' }}>
            <div className="hero-image">
              <img id="heroCover" src="/cases/assistencia-saude/cover.svg" alt="Capa do case — Assistência Saúde" style={{ objectFit: 'contain', background: '#f5f5f5' }} loading="eager" />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 2 — DIAGNÓSTICO ═══════════════════ */}
      <section id="diagnostico">
        <div className="container">

          <div className="fade-up">
            <div className="section-label">Diagnóstico · Leitura do sistema</div>
            <h2>O time via churn.<br />Eu vi colapso de valor percebido.</h2>
          </div>

          <div className="fade-up stagger-1" style={{ marginTop: '20px' }}>
            <p>O produto era uma assistência saúde de baixo ticket. O plano de entrada oferecia telemedicina por R$3,80. O plano mais completo, por R$10,90, adicionava desconto em farmácia e consultas presenciais. Contratação em um clique, primeiro mês grátis. O modelo facilitava a entrada, mas reduzia o nível de consciência na decisão.</p>
          </div>

          {/* Reframe */}
          <div className="fade-up stagger-2">
            <div className="reframe-block">
              <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '4px' }}>O reframe</p>
              <h3>Esse não era um problema de interface. Era um problema de leitura de sistema.</h3>
              <div className="reframe-vs">
                <div className="reframe-side before">
                  <div className="reframe-lbl before">Como o time via</div>
                  <div className="reframe-txt">Churn alto → precisamos de iniciativas de retenção no final da jornada</div>
                </div>
                <div className="reframe-arrow">→</div>
                <div className="reframe-side after">
                  <div className="reframe-lbl after">Como eu li</div>
                  <div className="reframe-txt">Churn é sintoma → quebra de percepção de valor em dois momentos da jornada: na contratação (baixa consciência) e no uso (experiência que não sustenta a promessa)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up stagger-3" style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '12px' }}>Como cheguei nessa leitura</h3>
            <p>Entrei no produto sem histórico. Esse distanciamento foi uma vantagem: ao navegar pelo pós-venda pela primeira vez, minha reação imediata foi <em>"qual é a proposta de valor desse produto?"</em> Antes de levar qualquer hipótese para o time, contratei o produto e tentei utilizar cada benefício. Tive dificuldades reais. Isso confirmou que havia algo estruturalmente errado na experiência, não apenas na comunicação da oferta.</p>
          </div>

          <div className="fade-up stagger-4" style={{ marginTop: '32px' }}>
            <div className="card card-neutral" style={{ padding: '32px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '20px' }}>A quebra acontecia em dois momentos</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Na contratação</div>
                  <p style={{ fontSize: '14px', margin: 0 }}>O modelo de entrada — primeiro mês grátis e contratação em um clique — facilitava a aquisição, mas reduzia o nível de consciência sobre o que estava sendo contratado. Reclamações recorrentes na categoria confirmavam um padrão: usuários sem clareza sobre o produto ou sobre a cobrança subsequente.</p>
                </div>
                <div style={{ height: '1px', background: 'var(--border)' }}></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>No uso</div>
                  <p style={{ fontSize: '14px', margin: 0 }}>Mesmo quando havia intenção de usar o produto, o usuário não conseguia acessar ou compreender os benefícios disponíveis. A experiência não sustentava a promessa feita na oferta — o valor percebido colapsava antes da primeira cobrança.</p>
                </div>
              </div>
              <p style={{ marginTop: '20px', fontSize: '14px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>Os dois fatores atuavam de forma combinada: o usuário entrava com baixo entendimento e, ao tentar usar o produto, não conseguia reconhecer ou acessar valor. Isso encurtava o tempo disponível para que o produto se provasse relevante.</p>
            </div>
          </div>

          <div className="fade-up" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '12px' }}>Como decidi em qual driver atuar</h3>
            <p>O driver relacionado à baixa consciência na contratação apresentava potencial de impacto relevante, mas envolvia mudanças diretas no modelo de entrada do produto, com impacto esperado em conversão e aquisição. Esse modelo era estrutural para o negócio naquele momento, o que limitava a possibilidade de atuação dentro do escopo do projeto.</p>
            <p style={{ marginTop: '12px' }}>Diante desse contexto, a decisão foi direcionar os esforços para o desalinhamento entre promessa e experiência no pós-venda.</p>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 3 — EVIDÊNCIAS ═══════════════════ */}
      <section id="evidencias">
        <div className="container">

          <div className="fade-up">
            <div className="section-label">Evidências · Validação em camadas</div>
            <h2>Primeiro a direção.<br />Depois o investimento.</h2>
          </div>

          <div className="fade-up stagger-1" style={{ marginTop: '16px' }}>
            <p>Estruturei a validação em duas camadas deliberadas: uma guerrilha rápida para ter direção antes de pedir recurso, e um teste estruturado aprovado pela liderança para confirmar e aprofundar.</p>
          </div>

          <div className="divider"></div>

          {/* Camada 1 — Guerrilha */}
          <div className="fade-up stagger-2">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
              <h3>Camada 1 — Guerrilha</h3>
              <span className="badge badge-bordô">5 usuários · Rápido · Direcionado</span>
            </div>
            <p>Abordei 5 pessoas com perfil de cliente PicPay e observei enquanto navegavam pela jornada de contratação e pós-venda no meu celular. O objetivo não era exploração aberta, era testar hipóteses específicas sobre o desalinhamento.</p>
          </div>

          {/* Hipóteses */}
          <div className="fade-up stagger-3" style={{ marginTop: '24px' }}>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-validada">Validada</span></div>
              <div className="hip-text"><strong>O cliente entende a proposta de valor?</strong><span>Todos entenderam que era um produto de saúde com telemedicina e consultas. O problema não era o entendimento do produto — era o acesso aos benefícios.</span></div>
            </div>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-validada">Validada</span></div>
              <div className="hip-text"><strong>O pós-venda é confuso?</strong><span>Todos associaram "acionar seguro" à telemedicina, esse não era o caminho correto.</span></div>
            </div>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-validada">Validada</span></div>
              <div className="hip-text"><strong>O desconto farmácia é fácil de acessar?</strong><span>Nenhum usuário encontrou. Um fechou o app, foi ao Google e caiu na FAQ de um produto descontinuado.</span></div>
            </div>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-validada">Validada</span></div>
              <div className="hip-text"><strong>"Beneficiário" e "dependente" geram confusão?</strong><span>A interface priorizava quem recebe o seguro em falecimento, não quem usa os benefícios. Nenhum usuário distinguiu os dois.</span></div>
            </div>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-refutada">Refutada</span></div>
              <div className="hip-text"><strong>Contratam o plano caro porque vem selecionado?</strong><span>Não, contratam pelo valor percebido no desconto farmácia frente à pequena diferença de preço.</span></div>
            </div>
            <div className="hip-row">
              <div className="hip-status"><span className="badge badge-refutada">Refutada</span></div>
              <div className="hip-text"><strong>O usuário diferencia "usar assistência" de "acionar seguro"?</strong><span>4 dos 5 testaram botões aleatoriamente até encontrar a telemedicina.</span></div>
            </div>
          </div>

          {/* Quotes */}
          <div className="fade-up stagger-4" style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', borderLeft: '2px solid var(--bordô)', paddingLeft: '16px', marginBottom: '20px' }}>O que os testes revelaram foi além do esperado. Dois participantes verbalizaram em tempo real que teriam cancelado o produto se não estivessem sendo observados. A frustração não era silenciosa — era declarada.</p>
            <div className="quote-block">
              "Onde eu acho meu desconto farmácia? Achei que teria algum cupom aqui pra usar na farmácia."
              <cite>Usuário durante guerrilha — comprou o produto por um benefício que não conseguia acessar</cite>
            </div>
            <div className="quote-block">
              "Acionar seguro — isso é para caso eu tenha problemas na minha telemedicina?"
              <cite>Usuário durante guerrilha — confusão entre linguagem securitária e produto de saúde cotidiana</cite>
            </div>
          </div>

          {/* Fotos guerrilha */}
          <div className="fade-up" style={{ marginTop: '28px' }}>
            <div className="section-label">Bastidores — Guerrilha</div>
            <div className="photo-grid-3">
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/roteiro-guerrilha.jpg" alt="Roteiro de hipóteses" loading="lazy" />
                </div>
                <div className="photo-caption">Roteiro de Hipóteses</div>
              </div>
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/notas-guerrilha.png" alt="Anotações ao vivo" loading="lazy" />
                </div>
                <div className="photo-caption">Anotações ao vivo</div>
              </div>
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/persona1.png" alt="Produto atual no teste" loading="lazy" />
                </div>
                <div className="photo-caption">Produto usado durante guerrilha</div>
              </div>
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/persona2.png" alt="Participante 2" loading="lazy" />
                </div>
                <div className="photo-caption">Produto usado durante guerrilha</div>
              </div>
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/persona3.png" alt="Participante 3" loading="lazy" />
                </div>
                <div className="photo-caption">Produto usado durante guerrilha</div>
              </div>
              <div className="photo-item">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/teste-estruturado-2.png" alt="Teste estruturado em andamento" loading="lazy" />
                </div>
                <div className="photo-caption">Produto usado durante guerrilha</div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Camada 2 — Pesquisa Estruturada */}
          <div className="fade-up">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
              <h3>Camada 2 — Pesquisa Estruturada</h3>
              <span className="badge badge-dourado">10 participantes · 20 dias · Aprovado pela liderança</span>
            </div>
            <p>Com os sinais da guerrilha, apresentei para GPM, Head de Produto e PM. Mostrei que havia feito uma primeira rodada rápida para ter direção, e que precisava aumentar a amostragem para confirmar o desalinhamento como driver do churn. O time aprovou. Estruturei um plano de 20 dias dentro de uma janela de 30 dias disponível para implementação.</p>
          </div>

          {/* Timeline do plano */}
          <div className="fade-up stagger-1" style={{ marginTop: '28px' }}>
            <div className="section-label" style={{ marginBottom: '8px' }}>Plano de pesquisa — 20 dias</div>
            <div className="timeline">
              <div className="timeline-step">
                <div className="timeline-circle">1</div>
                <div className="timeline-content"><div className="timeline-title">Exploratório</div><div className="timeline-desc">Ampliar amostra da guerrilha</div></div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">2</div>
                <div className="timeline-content"><div className="timeline-title">Proposta de UI</div><div className="timeline-desc">17/02 a 18/02</div></div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">3</div>
                <div className="timeline-content"><div className="timeline-title">Recrutamento</div><div className="timeline-desc">20/02 a 21/02</div></div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">4</div>
                <div className="timeline-content"><div className="timeline-title">Teste + Card Sorting</div><div className="timeline-desc">24/02 a 27/02</div></div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">5</div>
                <div className="timeline-content"><div className="timeline-title">Report Final</div><div className="timeline-desc">28/02</div></div>
              </div>
            </div>
          </div>

          {/* 3 camadas do teste */}
          <div className="fade-up stagger-2" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>Três camadas sequenciais do teste</h3>
            <div className="aprendizado-item">
              <div className="aprendizado-num">01</div>
              <div>
                <div className="aprendizado-title">Produto atual — ampliar a amostra</div>
                <div className="aprendizado-desc">Garantir que os problemas identificados na guerrilha não eram artefato do teste anterior. Aumentar a base de evidência antes de propor solução.</div>
              </div>
            </div>
            <div className="aprendizado-item">
              <div className="aprendizado-num">02</div>
              <div>
                <div className="aprendizado-title">Card sorting — hierarquia definida por comportamento real</div>
                <div className="aprendizado-desc">Entreguei cards com informações do pós-venda e pedi que os participantes organizassem da forma que fizesse mais sentido. 80% priorizaram consultas e desconto farmácia no topo. "Consulta online" venceu "telemedicina". "Detalhes do seguro" venceu "gestão do seguro". Essas escolhas foram diretamente para a hierarquia e nomenclatura da nova interface, não como sugestão, como decisão de produto.</div>
              </div>
            </div>
            <div className="aprendizado-item">
              <div className="aprendizado-num">03</div>
              <div>
                <div className="aprendizado-title">Nova proposta — as mesmas tarefas que haviam falhado</div>
                <div className="aprendizado-desc">Participantes realizaram as mesmas tarefas do produto atual na nova interface. Encontraram o desconto farmácia. Conseguiram iniciar a telemedicina. Navegaram sem as dúvidas anteriores. O teste não apenas diagnosticou, validou que a solução funcionava.</div>
              </div>
            </div>
          </div>

          {/* Fotos card sorting */}
          <div className="fade-up stagger-3" style={{ marginTop: '28px' }}>
            <div className="section-label">Card Sorting — 10 participantes</div>
            <div className="photo-grid-mixed">
              <div className="photo-item rotate-ccw">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/card-sorting.jpeg" alt="Sessão com moderação" loading="lazy" />
                </div>
                <div className="photo-caption">Resultado - Participante 1</div>
              </div>
              <div className="photo-item rotate-ccw">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/card-sorting2.jpeg" alt="Organização dos cards" loading="lazy" />
                </div>
                <div className="photo-caption">Resultado - Participante 2</div>
              </div>
              <div className="photo-item rotate-ccw">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/card-sorting3.jpeg" alt="Resultado do sorting" loading="lazy" />
                </div>
                <div className="photo-caption">Resultado - Participante 3</div>
              </div>
              <div className="photo-item rotate-ccw">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/card-sorting4.jpeg" alt="Moderação ao vivo" loading="lazy" />
                </div>
                <div className="photo-caption">Resultado - Participante 4</div>
              </div>
              <div className="photo-item rotate-ccw">
                <div className="photo-media">
                  <img src="/cases/assistencia-saude/card-sorting5.jpeg" alt="Resultado 2" loading="lazy" />
                </div>
                <div className="photo-caption">Resultado - Participante 5</div>
              </div>
              <div className="photo-item">
                <div className="photo-media" style={{ flex: 1, height: 'auto' }}>
                  <img src="/cases/assistencia-saude/Teste-Estruturado.jpeg" alt="Teste estruturado em andamento" loading="lazy" style={{ objectPosition: 'center center' }} />
                </div>
                <div className="photo-caption">Resultado - Participante 6</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 4 — SOLUÇÃO ═══════════════════ */}
      <section id="solucao">
        <div className="container">

          <div className="fade-up">
            <div className="section-label">Solução · Decisões de projeto</div>
            <h2>Não foi um redesign.<br />Foi uma decisão sobre o que era possível mudar.</h2>
          </div>

          <div className="fade-up stagger-1" style={{ marginTop: '20px' }}>
            <p>O produto operava com processos definidos pela seguradora parceira. Partir dessa clareza foi o que evitou que eu investisse tempo em soluções inviáveis, e direcionou o foco para a camada onde era possível gerar impacto real.</p>
          </div>

          {/* Restrições */}
          <div className="fade-up stagger-2" style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Restrições que definiram o escopo</h3>
            <div className="grid-2">
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Pill size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>Desconto farmácia</h3>
                <p style={{ fontSize: '14px' }}>Continuaria sendo acessado fora da plataforma. Fluxo definido pela seguradora parceira.</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Video size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>Telemedicina</h3>
                <p style={{ fontSize: '14px' }}>Continuaria sendo iniciada via WhatsApp. Canal definido pela parceira.</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Users size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>Cadastro de dependentes</h3>
                <p style={{ fontSize: '14px' }}>Continuaria dependendo de contato telefônico.</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Layers size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>Design system legado</h3>
                <p style={{ fontSize: '14px' }}>Decisão intencional: construir no sistema existente acelerava a implementação. Velocidade pesou mais que perfeição técnica.</p>
              </div>
            </div>
          </div>

          {/* Decisão estratégica */}
          <div className="fade-up stagger-3" style={{ marginTop: '32px' }}>
            <div className="card card-bordô">
              <div className="section-label" style={{ marginBottom: '8px' }}>A decisão estratégica</div>
              <p>Se não posso mudar o processo, garanto que o usuário sabe o que vai acontecer em cada etapa. Para cada benefício, o esqueleto informativo foi o mesmo:</p>
              <div className="pill-row" style={{ marginTop: '12px' }}>
                <span className="pill">Como funciona?</span>
                <span className="pill">Onde encontro?</span>
                <span className="pill">O que fazer agora?</span>
                <span className="pill">O que acontece depois?</span>
              </div>
            </div>
          </div>

          {/* Before / After */}
          <div className="fade-up stagger-4" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '8px' }}>O que mudou — antes e depois</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '0' }}>Da lógica do produto para a lógica do uso.</p>
            <div className="before-after">
              <div className="before-side">
                <div className="ba-label before">Antes — Lógica do produto</div>
                <div className="ba-item"><Folder size={15} color="var(--text-dim)" /> Usar assistência</div>
                <div className="ba-item"><Bell size={15} color="var(--text-dim)" /> Acionar seguro</div>
                <div className="ba-item"><User size={15} color="var(--text-dim)" /> Beneficiários do seguro</div>
                <div className="ba-item"><MoreHorizontal size={15} color="var(--text-dim)" /> Mais opções</div>
                <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--text-dim)' }}>O usuário precisava entender a estrutura do produto para navegar.</p>
              </div>
              <div className="after-side">
                <div className="ba-label after">Depois — Lógica do uso</div>
                <div className="ba-item"><Stethoscope size={15} color="var(--bordô)" /> Consulta online</div>
                <div className="ba-item"><Building2 size={15} color="var(--bordô)" /> Consulta presencial</div>
                <div className="ba-item"><Pill size={15} color="var(--bordô)" /> Desconto farmácia</div>
                <div className="ba-item"><Users size={15} color="var(--bordô)" /> Dependentes</div>
                <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--text-dim)' }}>Hierarquia validada pelo card sorting. O usuário encontra pelo que quer fazer.</p>
              </div>
            </div>
          </div>

          {/* Fotos AS IS / TO BE */}
          <div className="fade-up" style={{ marginTop: '32px' }}>
            <div className="photo-grid-2">
              <div className="photo-item">
                <img src="/cases/assistencia-saude/cover.svg" alt="Hub pós-venda AS IS vs TO BE" loading="lazy" style={{ objectFit: 'contain', maxHeight: '400px', background: '#f5f5f5' }} />
                <div className="photo-caption">Hub de pós-venda — AS IS vs TO BE</div>
              </div>
              <div className="photo-item">
                <img src="/cases/assistencia-saude/Uso Beneficios - As IS - To BE.svg" alt="Benefícios AS IS vs TO BE" loading="lazy" style={{ objectFit: 'contain', maxHeight: '400px', background: '#f5f5f5' }} />
                <div className="photo-caption">Uso de benefícios — AS IS vs TO BE</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 5 — IMPACTO ═══════════════════ */}
      <section id="impacto">
        <div className="container">

          <div className="fade-up">
            <div className="section-label">Influência · Alinhamento organizacional</div>
            <h2>Não apresentei dados.<br />Fiz o time ver o problema.</h2>
          </div>

          <div className="fade-up stagger-1" style={{ marginTop: '20px' }}>
            <p>A mudança de direção não foi resultado só de uma análise bem feita. Foi resultado de um processo deliberado de construção de evidência compartilhada. Mapeei quem precisava ser influenciado e o que movia cada um, cada abordagem foi diferente.</p>
          </div>

          {/* Mapa de influência */}
          <div className="fade-up stagger-2" style={{ marginTop: '32px' }}>
            <div className="grid-2">
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Users2 size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>GPM e PM</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bordô)', marginBottom: '10px' }}>Precisavam ver ao vivo</p>
                <p style={{ fontSize: '14px' }}>Convidei o GPM e a PM para estarem na sala como ouvintes. Os insights chegaram diretamente, não filtrados por relatório. Isso eliminou a distância entre o problema e a decisão.</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Eye size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>Liderança cética</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bordô)', marginBottom: '10px' }}>Em vez de argumentar, convidei para ver</p>
                <p style={{ fontSize: '14px' }}>Uma liderança de outro time não acreditava que a solução traria ganhos reais. Quando viu as dúvidas dos usuários ao vivo, a posição mudou. A fala foi direta: "não havia dimensionado o quanto aquela agenda seria rica."</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><Zap size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>CTO</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bordô)', marginBottom: '10px' }}>A evidência falou por si</p>
                <p style={{ fontSize: '14px' }}>Quando questionou a priorização do redesign, a resposta foi o material completo, da guerrilha ao teste estruturado. Depois de ler, não havia mais questionamento.</p>
              </div>
              <div className="card card-neutral">
                <div style={{ marginBottom: '12px' }}><DatabaseZap size={20} color="var(--bordô)" /></div>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>Além do escopo</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--bordô)', marginBottom: '10px' }}>Infraestrutura de dados</p>
                <p style={{ fontSize: '14px' }}>As telas não tinham tracking. Aproveitei a janela para resolver isso. O que antes era uma tela sem rastreabilidade se tornou três telas com tracking próprio. O time passou a ter visibilidade de comportamento onde antes havia ausência total de dado.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════ SEÇÃO 6 — RESULTADO ═══════════════════ */}
      <section id="resultado">
        <div className="container">

          <div className="fade-up">
            <div className="section-label">Resultado · Aprendizados</div>
            <h2>0,97 p.p. de redução.<br />5 mil apólices preservadas.</h2>
          </div>

          {/* Métricas */}
          <div className="fade-up stagger-1">
            <div className="result-grid">
              <div className="result-card">
                <div className="result-num">↓ 0,97 p.p.</div>
                <div className="result-label">Churn reduzido</div>
                <div className="result-desc">Em relação ao patamar inicial de 16%, estabilizando nesse novo nível</div>
              </div>
              <div className="result-card">
                <div className="result-num">~5 mil</div>
                <div className="result-label">Apólices preservadas</div>
                <div className="result-desc">Equivalente a R$50k em receita</div>
              </div>
              <div className="result-card">
                <div className="result-num">100%</div>
                <div className="result-label">Dores sanadas</div>
                <div className="result-desc">Das mapeadas na guerrilha, todas foram resolvidas na nova interface</div>
              </div>
            </div>
          </div>

          {/* Nota de calibração */}
          <div className="fade-up stagger-2" style={{ marginTop: '24px' }}>
            <p>O resultado confirma que o desalinhamento entre promessa e experiência era um driver real do churn. Ao mesmo tempo, a magnitude da redução indica que atuar exclusivamente no pós-venda não resolve o problema de forma estrutural.</p>
            <p style={{ marginTop: '12px' }}>A leitura que se sustenta é que a quebra de percepção de valor está distribuída ao longo da jornada — entre entrada e uso. Resolver um dos dois não é suficiente.</p>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--text-dim)', borderLeft: '2px solid var(--border)', paddingLeft: '16px', marginTop: '16px' }}>Não é possível atribuir integralmente esse resultado às mudanças realizadas. Dois tipos de evidência sustentam a correlação: quantitativa, a redução coincidiu diretamente com as mudanças, e qualitativa, todas as dores mapeadas foram sanadas no teste estruturado.</p>
            <div className="card card-bordô" style={{ marginTop: '20px' }}>
              <div className="section-label" style={{ marginBottom: '8px' }}>O próximo passo</div>
              <p style={{ fontSize: '14px' }}>Atuar na contratação — testando o impacto do aumento de consciência sobre churn e LTV. A hipótese é introduzir fricção intencional no fluxo, priorizando a qualidade da base em vez de volume de aquisição: menor churn, maior uso, maior LTV.</p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Aprendizados */}
          <div className="fade-up stagger-3">
            <h3 style={{ marginBottom: '20px' }}>Aprendizados</h3>
            <div className="aprendizado-item">
              <div className="aprendizado-num">01</div>
              <div>
                <div className="aprendizado-title">O processo não é linear — reconhecer isso em tempo real é uma habilidade</div>
                <div className="aprendizado-desc">Decidi encaixar o card sorting no teste já planejado não porque estava no roteiro, mas porque havia uma dúvida real que precisava de dado. Essa decisão mudou a interface. Processo bem executado não é sequência, é leitura contínua do que ainda está em aberto.</div>
              </div>
            </div>
            <div className="aprendizado-item">
              <div className="aprendizado-num">02</div>
              <div>
                <div className="aprendizado-title">A primeira versão é hipótese, não solução</div>
                <div className="aprendizado-desc">Construí a primeira proposta com base nos insights da guerrilha. Depois do card sorting, revisei nomenclaturas. Depois do teste, a linguagem mudou novamente, os participantes chamavam o produto de "plano de saúde". Cada camada trouxe uma correção. Quem fecha o ciclo cedo demais perde essas correções.</div>
              </div>
            </div>
            <div className="aprendizado-item">
              <div className="aprendizado-num">03</div>
              <div>
                <div className="aprendizado-title">Influenciar não é apresentar — é fazer as pessoas verem</div>
                <div className="aprendizado-desc">Cada stakeholder precisava de uma abordagem diferente. Nenhuma foi igual. Todas foram intencionais. O resultado foi que nenhuma das melhorias precisou ser justificada depois, porque todos que precisavam decidir já haviam visto o problema de perto.</div>
              </div>
            </div>
          </div>

          {/* Próximos cases */}
          <div className="fade-up stagger-4" style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--text-dim)' }}>Próximos cases</h3>
            <div style={{ maxWidth: '360px' }}>
              <div className="card" style={{ opacity: 0.6 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '8px' }}>PicPay · Em breve</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--text-dim)' }}>Um novo seguro de vida + IA</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

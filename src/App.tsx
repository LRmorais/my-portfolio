import { useEffect, useState } from 'react'
import { profile, experiences, skills, projects, publications, stats, education, certifications, clients } from './data'
import avatar from './images/perfil.jpg'

function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    const s = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    return s === 'dark' || (!s && prefers)
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return { dark, setDark }
}

function Nav() {
  const { setDark, dark } = useTheme()
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-900/80">
      <div className="section h-14 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight">{profile.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#experiencia" className="hover:opacity-70 transition-opacity">Experiência</a>
          <a href="#stack" className="hover:opacity-70 transition-opacity">Stack</a>
          <a href="#projetos" className="hover:opacity-70 transition-opacity">Projetos</a>
          <a href="#publicacoes" className="hover:opacity-70 transition-opacity">Publicações</a>
          <a href="#contato" className="hover:opacity-70 transition-opacity">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            GitHub
          </a>
          <button
            onClick={() => setDark(v => !v)}
            className="text-sm p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Alternar tema"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <a href={profile.cvUrl} download className="hidden sm:inline-flex btn btn-primary text-sm">
            ⬇ Baixar CV
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="section pt-16 pb-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-brand/10 text-brand border border-brand/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Disponível para oportunidades
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900">
              🏛️ Patente INPI · 📄 IEEE
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-brand font-medium">{profile.role}</p>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={profile.cvUrl} download className="btn btn-primary text-sm">
              ⬇ Baixar currículo (PDF)
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
              LinkedIn →
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
              GitHub →
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-5 items-center">
            <span className="text-xs text-neutral-400 mr-1">Trabalhei com:</span>
            {clients.map(c => <span key={c} className="chip">{c}</span>)}
          </div>
          <p className="mt-3 text-xs text-neutral-400">📍 {profile.location} · trabalho remoto</p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 translate-y-6 md:translate-y-8 md:translate-x-6 blur-3xl opacity-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-[2rem]" />
          <figure className="rounded-[2rem] overflow-hidden border border-neutral-200/70 dark:border-neutral-800/70 shadow-soft max-w-[14rem] md:max-w-[18rem]">
            <img src={avatar} alt={`${profile.name} — foto de perfil`} className="w-full h-full object-cover object-center" loading="eager" />
          </figure>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="section pb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card p-5 flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand leading-none">{s.value}</div>
            <div className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const typeColors: Record<string, string> = {
    CLT: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-900',
    PJ: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900',
    Pesquisa: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900',
    EJ: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900',
  }
  return (
    <section id="experiencia" className="section pt-14">
      <h2 className="text-2xl font-bold">Experiência</h2>
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800 mt-6 space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="ms-4 relative">
            <div className="absolute w-3 h-3 rounded-full bg-brand -start-1.5 mt-1.5" />
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <time className="text-xs text-neutral-500 dark:text-neutral-400">{exp.period}</time>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${typeColors[exp.type] ?? ''}`}>
                {exp.type}
              </span>
            </div>
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-sm text-brand mb-2">{exp.company}</p>
            <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="section pt-14">
      <h2 className="text-2xl font-bold">Stack técnico</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="card p-5">
            <h3 className="text-sm font-semibold mb-3 text-neutral-700 dark:text-neutral-300">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(item => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('Todos')
  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projetos" className="section pt-14">
      <h2 className="text-2xl font-bold">Projetos</h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Sistemas reais entregues em produção</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === cat
                ? 'bg-brand text-white border-transparent'
                : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {cat}
            {cat !== 'Todos' && (
              <span className="ml-1.5 opacity-60">
                {projects.filter(p => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        {filtered.map((p, idx) => (
          <article key={idx} className="card p-5 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold leading-tight">{p.title}</h3>
              <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20">
                {p.badge}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-1 leading-relaxed">{p.blurb}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
            </div>
            {p.href !== '#' && (
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-4 btn btn-ghost text-xs self-start">
                Ver projeto ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publicacoes" className="section pt-14">
      <h2 className="text-2xl font-bold">Publicações & Patente</h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Produção científica e propriedade intelectual</p>
      <div className="grid md:grid-cols-2 gap-5 mt-6">
        {publications.map((pub, idx) => (
          <article key={idx} className="card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{pub.icon}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20">
                {pub.type}
              </span>
            </div>
            <h3 className="font-semibold leading-snug">{pub.title}</h3>
            <p className="text-xs text-brand mt-1 mb-3">{pub.meta}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">{pub.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section pt-14">
      <h2 className="text-2xl font-bold">Formação & Certificações</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <div className="card p-6">
          <div className="text-2xl mb-2">🎓</div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-sm text-brand mt-0.5">{education.institution}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{education.period}</p>
        </div>
        <div className="card p-6">
          <div className="text-2xl mb-2">📋</div>
          <h3 className="font-semibold mb-3">Certificações</h3>
          <ul className="space-y-2">
            {certifications.map((c, i) => (
              <li key={i} className="flex items-center justify-between gap-2">
                <span className="text-sm">{c.name}</span>
                <span className="text-xs text-neutral-400 shrink-0">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section pt-14 pb-16">
      <div className="card p-8 sm:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-3 text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Estou aberto a oportunidades de engenheiro sênior ou tech lead em empresas que valorizam qualidade técnica, autonomia e impacto real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a href={`mailto:${profile.email}`} className="btn btn-primary w-full sm:w-auto justify-center">
              ✉️ {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto justify-center">
              LinkedIn →
            </a>
            <a href={profile.cvUrl} download className="btn btn-ghost w-full sm:w-auto justify-center">
              ⬇ Baixar CV
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-400">📍 {profile.location} · trabalho remoto</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-8">
      <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="#home" className="hover:opacity-70 transition-opacity">↑ Topo</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Stack />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

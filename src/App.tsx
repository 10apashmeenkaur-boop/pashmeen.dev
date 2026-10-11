import { useEffect, useRef, useState } from 'react'
import { profile, arsenal, ratings, career, education, works, commendations, coursework, toolbox, numbers } from './content'

const year = new Date().getFullYear()

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) return <span className="todo">{children}</span>
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function Ribbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="ribbon-row">
      <span className="ribbon-line short" />
      <h2 className="ribbon">❖ {children} ❖</h2>
      <span className="ribbon-line" />
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div className="value">{children}</div>
    </div>
  )
}

/** Types the tagline one letter at a time; a new `run` value restarts it. */
function Typewriter({ text, run }: { text: string; run: number }) {
  const [n, setN] = useState(text.length)
  useEffect(() => {
    if (reducedMotion()) return setN(text.length)
    setN(1) // the opening quote mark
    let i = 1
    let timer = 0
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        i += 1
        setN(i)
        if (i >= text.length) window.clearInterval(timer)
      }, 60)
    }, 300)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(timer)
    }
  }, [text, run])
  return (
    <p className="tagline" aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span className="cursor" aria-hidden="true" />
    </p>
  )
}

function useCopyEmail() {
  const [note, setNote] = useState(false)
  return {
    note,
    go: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' })
      navigator.clipboard?.writeText(profile.email).catch(() => {})
      setNote(true)
      window.setTimeout(() => setNote(false), 2200)
    },
  }
}

export default function App() {
  const [run, setRun] = useState(0)
  const photo = useRef<HTMLDivElement>(null)
  const { note, go } = useCopyEmail()

  const develop = () => {
    const el = photo.current
    if (!el) return
    el.classList.remove('developing')
    void el.offsetWidth // restart the CSS animation
    el.classList.add('developing')
    setRun((r) => r + 1)
  }

  // Fade sections up and fill proficiency bars as they scroll into view.
  useEffect(() => {
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal, .bars').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="paper">
        {/* 1. Date bar */}
        <div className="datebar">
          <span>Vol. I · As Old As Time</span>
          <span>✦ Portfolio Edition ✦</span>
          <span>Price: Your Attention</span>
        </div>

        <div className="page">
          {/* 2. Masthead */}
          <header className="masthead">
            <div className="the">The</div>
            <h1>
              Developer
              <br />
              Chronicle
            </h1>
            <div className="est">
              <span className="gold-line" />
              <span className="orn">❖</span>
              <span>Est. Digitally • Vol. I</span>
              <span className="orn">❖</span>
              <span className="gold-line" />
            </div>
            <Typewriter text={profile.tagline} run={run} />
          </header>
          <div className="double-rule" />

          {/* 3. Front page */}
          <section className="front">
            <div className="col dossier">
              <h3 className="col-head">✦ Personal Dossier ✦</h3>
              <Field label="Full Name">
                <span className="big-name">{profile.name}</span>
              </Field>
              <Field label="Professional Title">
                <em>{profile.title}</em>
              </Field>
              <Field label="Location">{profile.location}</Field>
              <Field label="Electronic Correspondence">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </Field>
              <Field label="GitHub Repository">
                <Link href={profile.githubUrl}>{profile.github}</Link>
              </Field>
              <Field label="LinkedIn">
                <Link href={profile.linkedinUrl}>{profile.linkedin}</Link>
              </Field>
              <Field label="Résumé">
                <a href={profile.resume} download>
                  Download résumé (PDF) ↓
                </a>
              </Field>
              <div className="box dispatch">
                <div className="label">Dispatch Summary</div>
                <p>{profile.summary}</p>
              </div>
            </div>

            <div className="col report">
              <figure className="car">
                <button className="car-frame" onClick={develop} aria-label="Replay the photo developing">
                  <div ref={photo} className="car-photo developing">
                    <img
                      src="/car.jpg"
                      alt="Sepia illustration of a vintage open-top roadster on cobblestones"
                      width={443}
                      height={261}
                    />
                  </div>
                  <span className="hint">Tap to develop again</span>
                </button>
                <figcaption>A Magnificent Machine Befitting a Remarkable Engineer</figcaption>
              </figure>
              <div className="kicker">✦ Special Report ✦</div>
              <h2 className="headline">Local Developer Astonishes Industry with Flawless Front-End Artistry</h2>
              <p className="standfirst">
                Sources confirm that the developer in question has mastered the arcane arts of React, Python, RAG
                pipelines and agentic AI — leaving clients thoroughly impressed and competitors in disarray.
              </p>
              <div className="byline">
                <span>
                  By <b>The Chronicle Staff</b>
                </span>
                <span className="gold">As Old As Time</span>
              </div>
              <button className="hire" onClick={go}>
                <span className="hire-title">◆ Available for Hire ◆</span>
                <span>Open to SDE & AI Engineering Internships, Full-Time & Freelance Roles</span>
              </button>
            </div>

            <div className="col arsenal">
              <h3 className="col-head">✦ Technical Arsenal ✦</h3>
              {arsenal.map((g) => (
                <div className="group" key={g.label}>
                  <div className="label">{g.label}</div>
                  <p>{g.items.join(' · ')}</p>
                </div>
              ))}
              <h4 className="ratings-head">— Proficiency Ratings —</h4>
              <div className="bars">
                {ratings.map((r) => (
                  <div className="bar" key={r.name}>
                    <span>{r.name}</span>
                    <span className="track">
                      <span className="fill" style={{ width: `${r.pct}%` }} />
                    </span>
                    <span className="gold">[{r.level}]</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="double-rule" />

          {/* 4. Career */}
          <section className="reveal block">
            <Ribbon>Career Chronicle: Professional Engagements</Ribbon>
            <div className="table-wrap">
              <table className="career stackable">
                <thead>
                  <tr>
                    <th>Company / Employer</th>
                    <th>Role / Position</th>
                    <th>Period of Service</th>
                    <th>Key Dispatches & Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  {career.map((c) => (
                    <tr key={c.company}>
                      <td data-h="Company / Employer">
                        <strong>{c.company}</strong>
                        <small>{c.sector}</small>
                      </td>
                      <td data-h="Role / Position">
                        <strong>{c.role}</strong>
                        <small>{c.type}</small>
                      </td>
                      <td data-h="Period of Service" className="period">
                        {c.period[0]} —<br />
                        {c.period[1]}
                      </td>
                      <td data-h="Key Dispatches & Achievements">
                        <ul className="diamonds">
                          {c.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                        <div className="stack">
                          <b>Stack:</b> {c.stack.join(' · ')}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="footnote center">
              † All positions verified by the Editorial Board of the Developer Chronicle. Additional references available
              upon request.
            </p>
          </section>
          <div className="double-rule" />

          {/* 5. Academics + works */}
          <section className="two-col reveal block">
            <div>
              <Ribbon>Academic Credentials</Ribbon>
              <div className="table-wrap">
                <table className="edu stackable">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Institution</th>
                      <th className="c">Year(s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((e) => (
                      <tr key={e.degree}>
                        <td data-h="Degree">
                          <strong>{e.degree}</strong>
                          <small>{e.major}</small>
                        </td>
                        <td data-h="Institution">
                          <strong>{e.school}</strong>
                          {e.place && <small>{e.place}</small>}
                        </td>
                        <td data-h="Year(s)" className="period c">
                          {e.years.join(' — ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="footnote">† Transcripts and diplomas available for inspection upon formal request.</p>
              <div className="spacer" />
              <Ribbon>Commendations & Extras</Ribbon>
              <div className="table-wrap">
                <table className="commend stackable">
                  <thead>
                    <tr>
                      <th>Accolade / Certification / Interest</th>
                      <th className="c">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commendations.map((c) => (
                      <tr key={c.title}>
                        <td data-h="Accolade">
                          <strong>{c.title}</strong>
                          <small>{c.note}</small>
                        </td>
                        <td data-h="Year" className="period c">
                          {c.year}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="vrule" />
            <div>
              <Ribbon>Notable Works & Dispatches</Ribbon>
              <div className="table-wrap">
                <table className="works stackable">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Description & Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {works.map((w) => (
                      <tr key={w.name}>
                        <td data-h="Project Name">
                          <strong>{w.name}</strong>
                          <small className="plain">{w.stack}</small>
                          {w.links.map((l) => (
                            <a className="work-link" key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                              {l.label} ↗
                            </a>
                          ))}
                        </td>
                        <td data-h="Description & Impact">
                          <p>{w.desc}</p>
                          <small>{w.impact.startsWith('Impact') ? w.impact : `Impact: ${w.impact}`}</small>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="footnote">
                † Source code and live demonstrations available at the addresses listed. More dispatches at{' '}
                <Link href={profile.githubUrl}>{profile.github}</Link>.
              </p>
            </div>
          </section>
          <div className="double-rule" />
        </div>

        {/* 6. Dark strip */}
        <div className="strip">
          <span>The Developer Chronicle — Portfolio Edition</span>
          <em>"All the Code That's Fit to Ship"</em>
          <span>
            © {year} {profile.name}
          </span>
        </div>

        {/* 7. Commendations, contact, numbers */}
        <div className="page">
          <section className="back reveal">
            <div className="col">
              <Ribbon>Coursework & Toolbox</Ribbon>
              <div className="box langs">
                <div className="label">Relevant Coursework</div>
                {coursework.map((c) => (
                  <div className="lang" key={c}>
                    <strong>{c}</strong>
                  </div>
                ))}
              </div>
              <div className="box langs">
                <div className="label">The AI Toolbox</div>
                {toolbox.map((l) => (
                  <div className="lang" key={l.name}>
                    <strong>{l.name}</strong>
                    <em>{l.level}</em>
                  </div>
                ))}
              </div>
            </div>

            <div className="col" id="contact">
              <Ribbon>Contact Directory</Ribbon>
              <div className="table-wrap">
                <table className="contact">
                  <thead>
                    <tr>
                      <th>Channel</th>
                      <th>Address / Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="chan">Email</td>
                      <td>
                        <a href={`mailto:${profile.email}`}>
                          {profile.email.split('@')[0]}@<wbr />
                          {profile.email.split('@')[1]}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="chan">GitHub</td>
                      <td>
                        <Link href={profile.githubUrl}>{profile.github}</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="chan">LinkedIn</td>
                      <td>
                        <Link href={profile.linkedinUrl}>{profile.linkedin}</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="chan">Résumé</td>
                      <td>
                        <a href={profile.resume} download>
                          Download PDF ↓
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="story" onClick={go}>
                <span className="story-title">Open for Your Next Great Story</span>
                <span>
                  Dispatch a telegraph to the address above. This developer responds promptly, works diligently, and
                  ships clean code.
                </span>
                <em>— Available immediately —</em>
              </button>
            </div>

            <div className="col">
              <Ribbon>By the Numbers</Ribbon>
              <div className="numbers">
                {numbers.map((n) => (
                  <div className="num" key={n.label}>
                    <div className="tile">{n.value}</div>
                    <div>
                      <strong>{n.label}</strong>
                      <small>{n.note}</small>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="quote">
                <span className="qmark">"</span>
                <p>
                  The details are not the details — they make the design. And good design is about making something
                  memorable.
                </p>
                <cite>— Charles Eames</cite>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
      <div className={`toast ${note ? 'show' : ''}`} role="status">
        ✦ Telegram copied — {profile.email}
      </div>
    </>
  )
}

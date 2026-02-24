import { useState, useEffect, useRef } from 'react'

// Color palette - refined and softer
const C = {
  bg: '#08080A',
  bg2: '#0D0D10',
  bg3: '#131316',
  card: '#19191D',
  brd: '#1F1F24',
  brdL: '#2A2A30',
  tx: '#E8E6ED',
  tS: '#8A8890',
  tF: '#55535A',
  gen: '#C9A0FF',  // AI generation - purple
  ai: '#6B9FFF',   // Agent - blue
  human: '#F0A878', // Human work - warm orange
  gn: '#4EDBA0',   // Success/delivery - green
  wh: '#F5F5F5',
}

// Intersection Observer hook
function useInView(threshold = 0.12): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

// Typing animation hook
function useTyping(sentences: string[], speed = 28, pause = 2000) {
  const [text, setText] = useState('')
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const sentence = sentences[sentenceIndex]
    let timeout: number
    if (!deleting && charIndex < sentence.length) {
      timeout = setTimeout(() => {
        setText(sentence.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (!deleting && charIndex === sentence.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(sentence.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2.5)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setSentenceIndex((sentenceIndex + 1) % sentences.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, sentenceIndex, sentences, speed, pause])

  return text
}

// Cursor component
function Cursor() {
  return (
    <span style={{
      display: 'inline-block',
      width: 2,
      height: 16,
      background: C.ai,
      animation: 'blink 1s step-end infinite',
      verticalAlign: 'text-bottom',
      marginLeft: 1,
    }} />
  )
}

// Dot component
function Dot({ color, size = 5 }: { color: string; size?: number }) {
  return (
    <span style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      display: 'inline-block',
      flexShrink: 0,
    }} />
  )
}

// Timeline node component
function TimeNode({ color, label, active = true }: { color: string; label?: string; active?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative' }}>
      <div style={{ width: 1, height: 48, background: `linear-gradient(${C.bg}, ${active ? color + '50' : C.brd})` }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: active ? color : C.brd,
          boxShadow: active ? `0 0 20px ${color}30` : 'none',
          transition: 'all 0.4s',
        }} />
        {label && (
          <span style={{
            position: 'absolute',
            left: 28,
            whiteSpace: 'nowrap',
            fontSize: 11,
            color: active ? color : C.tF,
            fontFamily: 'monospace',
            letterSpacing: '0.06em',
            fontWeight: 500,
          }}>{label}</span>
        )}
      </div>
      <div style={{ width: 1, height: 48, background: `linear-gradient(${active ? color + '50' : C.brd}, ${C.bg})` }} />
    </div>
  )
}

// Hero section
function Hero() {
  const [stage, setStage] = useState(0)
  const typed = useTyping([
    'Customer story for HP — interview APAC lead, Singapore, 30s hero + 3 social cuts...',
    'Product launch video — London, AI voice-over, 4 languages, same-week delivery...',
    'Employer brand series — 4 APAC cities, local crews, cinematic B-roll...',
  ])

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 100)
    const t2 = setTimeout(() => setStage(2), 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '0 32px',
    }}>
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,154,255,0.06), transparent 60%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
        <div style={{
          opacity: stage >= 1 ? 1 : 0,
          filter: stage >= 1 ? 'blur(0)' : 'blur(6px)',
          transform: stage >= 1 ? 'translateY(0)' : 'translateY(14px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <p style={{ fontSize: 13.5, color: C.tS, marginBottom: 14, letterSpacing: '0.02em' }}>Follow the journey of a video</p>
          <h1 style={{
            fontSize: 'clamp(40px, 5.5vw, 58px)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: C.tx,
            marginBottom: 20,
          }}>
            It starts with<br />a single prompt.
          </h1>
          <p style={{ fontSize: 16.5, color: C.tS, lineHeight: 1.55, marginBottom: 32 }}>
            Watch how one sentence becomes a finished production — AI generation, intelligent orchestration, and real-world creators, all on one platform.
          </p>
        </div>

        <div style={{
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div style={{
            border: `1px solid ${C.brd}`,
            borderRadius: 12,
            background: C.bg2,
            overflow: 'hidden',
            textAlign: 'left',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}>
            <div style={{ padding: '18px 20px', minHeight: 56 }}>
              <span style={{ fontSize: 15, color: C.tF, lineHeight: 1.55 }}>{typed}<Cursor /></span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 18px',
              borderTop: `1px solid ${C.brd}`,
              background: C.bg3,
            }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['AI + Human', '110 Countries', '6 Models'].map(t => (
                  <span key={t} style={{
                    fontSize: 11,
                    color: C.tF,
                    border: `1px solid ${C.brd}`,
                    padding: '4px 10px',
                    borderRadius: 6,
                  }}>{t}</span>
                ))}
              </div>
              <button style={{
                background: C.wh,
                color: C.bg,
                border: 'none',
                borderRadius: 7,
                padding: '8px 20px',
                fontSize: 13,
                fontWeight: 550,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '-0.01em',
              }}>Create</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ width: 1, height: 80, background: `linear-gradient(transparent, ${C.brd})` }} />
        <span style={{ fontSize: 10, color: C.tF, fontFamily: 'monospace', marginTop: 6 }}>Scroll to follow</span>
      </div>
    </section>
  )
}

// Stage 1: Agent Plans
function StagePlan() {
  const [ref, vis] = useInView()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: '40px 32px 80px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TimeNode color={C.ai} label="AGENT ACTIVATES" active={vis} />
      </div>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 10 }}>
            The agent reads your brief and builds a plan.
          </h2>
          <p style={{ fontSize: 15, color: C.tS, maxWidth: 480, margin: '0 auto' }}>
            It decides what AI can generate, what needs real crews, where to shoot, who to hire, and when everything needs to happen.
          </p>
        </div>
        <div style={{
          border: `1px solid ${C.brd}`,
          borderRadius: 12,
          background: C.bg2,
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            padding: '12px 18px',
            borderBottom: `1px solid ${C.brd}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Dot color={C.gn} size={6} />
              <span style={{ fontSize: 13, fontWeight: 550, color: C.tx }}>Production Plan — HP APAC</span>
            </div>
            <span style={{ fontSize: 10, color: C.tF, fontFamily: 'monospace' }}>Just now</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: `1px solid ${C.brd}` }}>
            {[
              { v: '10 days', l: 'Timeline' },
              { v: '$4,200–5,800', l: 'Budget' },
              { v: 'Singapore', l: 'Primary location' },
            ].map((s, i) => (
              <div key={s.l} style={{ padding: '16px 18px', borderRight: i < 2 ? `1px solid ${C.brd}` : 'none' }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: C.tx, letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 11.5, color: C.tF, marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '4px 0' }}>
            {[
              { n: '01', nm: 'Script development', m: 'AI', st: 'Queued', c: C.gen },
              { n: '02', nm: 'Voice-over — EN + ZH', m: 'AI', st: 'Queued', c: C.gen },
              { n: '03', nm: 'B-roll generation (4 clips)', m: 'AI', st: 'Queued', c: C.gen },
              { n: '04', nm: 'Music score', m: 'AI', st: 'Queued', c: C.gen },
              { n: '05', nm: 'Crew match — Singapore, 2-person', m: 'Agent', st: 'Queued', c: C.ai },
              { n: '06', nm: 'Interview shoot — APAC Lead', m: 'Human', st: 'Scheduled', c: C.human },
              { n: '07', nm: 'Professional edit + motion', m: 'Human', st: 'Queued', c: C.human },
              { n: '08', nm: 'QA review + approval', m: 'Agent', st: 'Queued', c: C.ai },
              { n: '09', nm: 'Delivery — hero + 3 cutdowns', m: 'Agent', st: '—', c: C.ai },
            ].map((s, i) => (
              <div key={s.n} style={{
                display: 'grid',
                gridTemplateColumns: '32px 1fr 60px 64px',
                alignItems: 'center',
                padding: '10px 18px',
                borderBottom: i < 8 ? `1px solid ${C.brd}` : 'none',
                opacity: vis ? 1 : 0,
                transition: `opacity 0.25s ease ${0.3 + i * 0.06}s`,
              }}>
                <span style={{ fontSize: 10.5, color: C.tF, fontFamily: 'monospace' }}>{s.n}</span>
                <span style={{ fontSize: 13, color: C.tx }}>{s.nm}</span>
                <span style={{ fontSize: 10.5, color: s.c, fontFamily: 'monospace', textAlign: 'right' }}>{s.m}</span>
                <span style={{ fontSize: 10.5, color: C.tF, fontFamily: 'monospace', textAlign: 'right' }}>{s.st}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Stage 2: AI Generates
function StageGenerate() {
  const [ref, vis] = useInView()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: '40px 32px 80px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TimeNode color={C.gen} label="AI GENERATES" active={vis} />
      </div>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 10 }}>
            AI outputs are created in parallel.
          </h2>
          <p style={{ fontSize: 15, color: C.tS, maxWidth: 480, margin: '0 auto' }}>
            Scripts, voice-overs, B-roll, and music are generated automatically while the agent coordinates real-world production.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { nm: 'Script — 30s hero', f: 'script_hp_apac_v1.txt', st: 'Done', dur: '8s' },
            { nm: 'Voice-over — English', f: 'vo_en_hp_hero.mp3', st: 'Done', dur: '12s' },
            { nm: 'Voice-over — Chinese', f: 'vo_zh_hp_hero.mp3', st: 'Done', dur: '14s' },
            { nm: 'B-roll — Singapore office', f: 'broll_sg_01.mp4', st: 'Done', dur: '45s' },
            { nm: 'B-roll — Team working', f: 'broll_team_02.mp4', st: 'Done', dur: '38s' },
            { nm: 'Music score', f: 'music_corporate_01.mp3', st: 'Done', dur: '22s' },
          ].map((item, i) => (
            <div key={item.f} style={{
              border: `1px solid ${C.brd}`,
              borderRadius: 10,
              background: C.bg2,
              padding: '14px 16px',
              opacity: vis ? 1 : 0,
              transition: `opacity 0.3s ease ${0.2 + i * 0.08}s`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: C.tx, fontWeight: 500 }}>{item.nm}</span>
                <span style={{ fontSize: 10, color: C.gn, fontFamily: 'monospace' }}>{item.st}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.tF, fontFamily: 'monospace' }}>{item.f}</span>
                <span style={{ fontSize: 10, color: C.tF }}>{item.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stage 3: Crew Shoots
function StageShoot() {
  const [ref, vis] = useInView()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: '40px 32px 80px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TimeNode color={C.human} label="CREW SHOOTS" active={vis} />
      </div>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 10 }}>
            Real-world production happens.
          </h2>
          <p style={{ fontSize: 15, color: C.tS, maxWidth: 480, margin: '0 auto' }}>
            Local crews are matched, talent is coordinated, and footage is captured while AI assets continue generating.
          </p>
        </div>
        <div style={{
          border: `1px solid ${C.brd}`,
          borderRadius: 12,
          background: C.bg2,
          overflow: 'hidden',
        }}>
          <div style={{ padding: '16px 18px', borderBottom: `1px solid ${C.brd}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Dot color={C.human} size={8} />
              <span style={{ fontSize: 14, fontWeight: 550, color: C.tx }}>Shoot Day — Singapore</span>
            </div>
            <span style={{ fontSize: 11, color: C.tF, fontFamily: 'monospace' }}>Day 6 of 10</span>
          </div>
          <div style={{ padding: '20px 18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: 11, color: C.tF, marginBottom: 8, fontFamily: 'monospace' }}>CREW</div>
                <div style={{ fontSize: 14, color: C.tx, marginBottom: 4 }}>Maya Chen — DP / Camera</div>
                <div style={{ fontSize: 14, color: C.tx }}>James Tan — Sound / Gaffer</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: C.tF, marginBottom: 8, fontFamily: 'monospace' }}>TALENT</div>
                <div style={{ fontSize: 14, color: C.tx }}>Sarah Wong — APAC Lead, HP</div>
              </div>
            </div>
            <div style={{ marginTop: 20, padding: '14px 16px', background: C.bg3, borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: C.tF, marginBottom: 6, fontFamily: 'monospace' }}>LOCATION</div>
              <div style={{ fontSize: 14, color: C.tx }}>HP Singapore HQ, Level 23 Conference Room</div>
              <div style={{ fontSize: 12, color: C.tS, marginTop: 4 }}>Marina Bay Financial Centre, Tower 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stage 4: Delivery
function StageDeliver() {
  const [ref, vis] = useInView()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: '40px 32px 120px', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TimeNode color={C.gn} label="DELIVERED" active={vis} />
      </div>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 30, fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 10 }}>
            Final delivery in 10 days.
          </h2>
          <p style={{ fontSize: 15, color: C.tS, maxWidth: 480, margin: '0 auto' }}>
            Hero video and social cutdowns delivered, QA approved, ready for distribution.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { nm: 'Hero — 30s', res: '4K', fmt: 'MP4' },
            { nm: 'Social — Square', res: '1080p', fmt: 'MP4' },
            { nm: 'Social — Story', res: '1080p', fmt: 'MP4' },
            { nm: 'Social — Wide', res: '1080p', fmt: 'MP4' },
          ].map((d, i) => (
            <div key={d.nm} style={{
              border: `1px solid ${C.gn}30`,
              borderRadius: 10,
              background: `${C.gn}08`,
              padding: '16px',
              textAlign: 'center',
              opacity: vis ? 1 : 0,
              transition: `opacity 0.3s ease ${0.3 + i * 0.1}s`,
            }}>
              <div style={{ fontSize: 13, color: C.tx, fontWeight: 500, marginBottom: 8 }}>{d.nm}</div>
              <div style={{ fontSize: 11, color: C.tF }}>
                <span style={{ color: C.gn }}>{d.res}</span> · {d.fmt}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button style={{
            background: C.wh,
            color: C.bg,
            border: 'none',
            borderRadius: 10,
            padding: '14px 32px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
            Start your video journey
          </button>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={{ padding: '48px 40px', background: C.bg2, borderTop: `1px solid ${C.brd}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.tx }}>90 Seconds</span>
          <span style={{ color: C.tF }}>/</span>
          <span style={{ fontSize: 13, color: C.ai }}>Video Creation Agent</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Documentation', 'API', 'Support'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: C.tS, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function VideoCreationAgent() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.tx }}>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
      <Hero />
      <StagePlan />
      <StageGenerate />
      <StageShoot />
      <StageDeliver />
      <Footer />
    </div>
  )
}

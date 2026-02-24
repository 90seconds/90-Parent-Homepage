import { useState, useEffect } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const BRAND = '#FF9DB3'
const BRAND_LIGHT = '#FFB8C8'

const C = {
  bg: '#08080A',
  bg2: '#0D0D10',
  tx: '#E8E6ED',
  tS: '#8A8890',
  tF: '#55535A',
  brd: '#1F1F24',
}

export default function TheAgency() {
  const [ready, setReady] = useState(false)
  const [diffRef, diffVis] = useVisibility()
  const [servicesRef, servicesVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  useEffect(() => { setReady(true) }, [])

  const services = [
    { title: 'Video Strategy', description: 'Content audits, competitive analysis, creative strategy, campaign planning.', icon: '◇' },
    { title: 'Creative Development', description: 'Concepts, scripts, storyboards, visual design, brand integration.', icon: '◆' },
    { title: 'Production Management', description: 'End-to-end production oversight, vendor coordination, quality control.', icon: '◉' },
    { title: 'Post-Production', description: 'Editing, motion graphics, sound design, color grading, finishing.', icon: '◈' },
    { title: 'Localization', description: 'Translation, dubbing, cultural adaptation for global markets.', icon: '◎' },
    { title: 'Optimization', description: 'Performance analysis, A/B testing, iteration, continuous improvement.', icon: '★' },
  ]

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.tx }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '120px 40px 80px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 40%, ${BRAND}15 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${BRAND}10 0%, transparent 40%)`, opacity: ready ? 1 : 0, transition: 'opacity 1.5s' }} />

        <div style={{ fontSize: 80, marginBottom: 32, opacity: ready ? 1 : 0, transform: ready ? 'scale(1)' : 'scale(0.8)', transition: 'all 0.8s', filter: `drop-shadow(0 0 60px ${BRAND})` }}>✦</div>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.2em', color: BRAND_LIGHT, textTransform: 'uppercase', marginBottom: 24, opacity: ready ? 1 : 0, transition: 'opacity 0.8s 0.2s' }}>The Agency</div>
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 700, textAlign: 'center', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 1000, marginBottom: 32, opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s 0.3s' }}>
          Human creativity. <span style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT}, ${BRAND})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Platform power.</span>
        </h1>
        <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: 700, lineHeight: 1.6, marginBottom: 48, opacity: ready ? 1 : 0, transition: 'opacity 0.8s 0.5s' }}>
          A tech-enabled video agency. Human strategists, producers, and creatives—powered by the full 90 Seconds infrastructure.
        </p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', opacity: ready ? 1 : 0, transition: 'opacity 0.8s 0.7s' }}>
          {[{ label: 'Strategy', desc: 'Human insight' }, { label: 'Execution', desc: 'Platform speed' }, { label: 'Results', desc: 'Guaranteed' }].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: 20, fontWeight: 700, color: BRAND_LIGHT, marginBottom: 4 }}>{item.label}</div><div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div></div>
          ))}
        </div>
      </section>

      <section ref={diffRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: C.bg2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80, opacity: diffVis ? 1 : 0, transition: 'opacity 0.8s' }}>
            <div style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', marginBottom: 16 }}>THE DIFFERENCE</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Not your traditional agency</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div style={{ opacity: diffVis ? 1 : 0, transform: diffVis ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.8s 0.2s' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: 'rgba(255,255,255,0.4)', paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Traditional Agency</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Opaque pricing, surprise costs', 'Long timelines, missed deadlines', 'Limited scalability', 'Manual everything', 'Communication black holes', 'One project at a time'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>○</span><span style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{item}</span></div>
                ))}
              </div>
            </div>
            <div style={{ background: `linear-gradient(135deg, ${BRAND}10, transparent)`, border: `1px solid ${BRAND}30`, borderRadius: 20, padding: 32, opacity: diffVis ? 1 : 0, transform: diffVis ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s 0.4s' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: BRAND_LIGHT, paddingBottom: 16, borderBottom: `1px solid ${BRAND}30` }}>The Agency</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Transparent pricing, no surprises', 'Platform-accelerated timelines', 'Global scale on demand', 'AI-powered efficiency', 'Real-time visibility & updates', 'Unlimited parallel capacity'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ color: BRAND, fontSize: 16 }}>✦</span><span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60, opacity: servicesVis ? 1 : 0, transition: 'opacity 0.8s' }}>
            <div style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', marginBottom: 16 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Full-service. Full capability.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {services.map((service, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 32, opacity: servicesVis ? 1 : 0, transform: servicesVis ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ${0.1 + i * 0.08}s` }}>
                <div style={{ fontSize: 32, marginBottom: 20, color: BRAND_LIGHT }}>{service.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: C.bg2 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', opacity: ctaVis ? 1 : 0, transform: ctaVis ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>Let's make something together</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Tell us what you're trying to achieve. We'll show you what's possible.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 16, background: BRAND }}>Start a Conversation</button>
            <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16 }}>View Our Work</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: 40, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}><span style={{ fontSize: 24, color: BRAND_LIGHT }}>✦</span><span style={{ fontSize: 18, fontWeight: 600 }}>The Agency</span></div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Part of the 90 Seconds video infrastructure</p>
      </footer>
    </div>
  )
}

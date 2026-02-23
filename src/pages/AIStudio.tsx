import { useState, useEffect } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const BRAND = '#8b5cf6'
const BRAND_LIGHT = '#a78bfa'

export default function AIStudio() {
  const [ready, setReady] = useState(false)
  const [featuresRef, featuresVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  useEffect(() => { setReady(true) }, [])

  const features = [
    { title: 'Multi-Model Access', description: 'Access GPT-4, Claude, Gemini, Sora, Runway, and more—all in one place.', icon: '◎' },
    { title: 'Video Generation', description: 'AI-generated b-roll, backgrounds, and visual elements on demand.', icon: '◇' },
    { title: 'Voice & Audio', description: 'AI voice-overs in any language, music scoring, sound design.', icon: '◆' },
    { title: 'Script Writing', description: 'AI-assisted scriptwriting with your brand voice and guidelines.', icon: '✦' },
    { title: 'Translation & Dubbing', description: 'Instant localization with lip-sync dubbing in 50+ languages.', icon: '◈' },
    { title: 'Quality Control', description: 'AI reviews output for brand compliance and quality standards.', icon: '★' },
  ]

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 48px 80px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 800, background: `radial-gradient(circle, ${BRAND}15, transparent 60%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 800, opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: `linear-gradient(135deg, ${BRAND}20, ${BRAND}05)`, border: `1px solid ${BRAND}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: 36, color: BRAND }}>◎</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BRAND}15`, padding: '6px 14px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 12, color: BRAND, fontWeight: 600, letterSpacing: '0.05em' }}>THE BRAIN</span>
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 24 }}>90 AI<br />Studio</h1>
            <p style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: BRAND, fontWeight: 500, marginBottom: 24 }}>All the AI. None of the complexity.</p>
            <p style={{ fontSize: 18, color: '#a1a1aa', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>Unified AI marketplace and operating layer. Access every major AI model for video—generation, voice, script, translation—through a single, enterprise-ready interface.</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 16, background: BRAND }}>Try AI Studio</button>
              <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16 }}>View models</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 64, marginTop: 80, opacity: ready ? 1 : 0, transition: 'all 0.8s 0.3s' }}>
            {[{ value: '20+', label: 'AI models' }, { value: '50+', label: 'Languages' }, { value: '1', label: 'Interface' }].map((m) => (
              <div key={m.label}><div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{m.value}</div><div style={{ fontSize: 14, color: '#71717a' }}>{m.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuresRef as React.RefObject<HTMLElement>} style={{ padding: '120px 48px', background: '#06060a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', opacity: featuresVis ? 1 : 0, transform: featuresVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', display: 'block', marginBottom: 16 }}>CAPABILITIES</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Every AI capability you need</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {features.map((f, i) => (
              <div key={f.title} style={{ background: '#111118', border: '1px solid #27272a', borderRadius: 16, padding: 32, opacity: featuresVis ? 1 : 0, transform: featuresVis ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.5s ${i * 0.08}s` }}>
                <div style={{ fontSize: 28, color: BRAND, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#71717a', lineHeight: 1.6 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '140px 48px', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', opacity: ctaVis ? 1 : 0, transform: ctaVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>Ready to harness AI for video?</h2>
          <p style={{ fontSize: 20, color: '#a1a1aa', marginBottom: 48 }}>Access the best AI models without the complexity.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 36px', fontSize: 16, background: BRAND }}>Get started free</button>
            <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: 16 }}>Talk to sales</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: 48, background: '#06060a', borderTop: '1px solid #27272a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}><span style={{ fontSize: 16, fontWeight: 700 }}>90 Seconds</span><span style={{ color: '#71717a' }}>/</span><span style={{ fontSize: 14, color: BRAND }}>90 AI Studio</span></div>
          <div style={{ display: 'flex', gap: 32 }}><a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>API Docs</a><a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>Support</a></div>
        </div>
      </footer>
    </div>
  )
}

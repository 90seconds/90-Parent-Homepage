import { useState, useEffect } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const BRAND = '#5EEAD4'
const BRAND_LIGHT = '#99F6E4'

export default function Affiliate() {
  const [ready, setReady] = useState(false)
  const [featuresRef, featuresVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  useEffect(() => { setReady(true) }, [])

  const features = [
    { title: 'White-Label Video', description: 'Sell video production under your brand—we handle everything else.', icon: '◆' },
    { title: 'Revenue Share', description: 'Generous commission structure on every project you bring in.', icon: '◇' },
    { title: 'Full Fulfillment', description: 'We handle production, delivery, and support. You focus on sales.', icon: '◈' },
    { title: 'Sales Enablement', description: 'Pitch decks, case studies, and collateral to help you sell.', icon: '★' },
    { title: 'Partner Portal', description: 'Track leads, projects, commissions, and payouts in real-time.', icon: '✦' },
    { title: 'Dedicated Support', description: 'Partner success team to help you grow your video revenue.', icon: '◉' },
  ]

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 48px 80px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 800, background: `radial-gradient(circle, ${BRAND}15, transparent 60%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 800, opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: `linear-gradient(135deg, ${BRAND}20, ${BRAND}05)`, border: `1px solid ${BRAND}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: 36, color: BRAND }}>◆</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BRAND}15`, padding: '6px 14px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 12, color: BRAND, fontWeight: 600, letterSpacing: '0.05em' }}>PARTNER PROGRAM</span>
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 24 }}>Affiliate</h1>
            <p style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: BRAND, fontWeight: 500, marginBottom: 24 }}>Sell video. We deliver. You earn.</p>
            <p style={{ fontSize: 18, color: '#a1a1aa', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>Become a 90 Seconds partner and add video production to your service offering. White-label our capabilities, earn revenue share, and let us handle fulfillment.</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 16, background: BRAND, color: '#000' }}>Become a partner</button>
              <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16 }}>Learn more</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 64, marginTop: 80, opacity: ready ? 1 : 0, transition: 'all 0.8s 0.3s' }}>
            {[{ value: '20%+', label: 'Commission' }, { value: '500+', label: 'Partners' }, { value: '$10M+', label: 'Partner revenue' }].map((m) => (
              <div key={m.label}><div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{m.value}</div><div style={{ fontSize: 14, color: '#71717a' }}>{m.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuresRef as React.RefObject<HTMLElement>} style={{ padding: '120px 48px', background: '#06060a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', opacity: featuresVis ? 1 : 0, transform: featuresVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', display: 'block', marginBottom: 16 }}>PROGRAM BENEFITS</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>What partners get</h2>
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
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>Ready to partner?</h2>
          <p style={{ fontSize: 20, color: '#a1a1aa', marginBottom: 48 }}>Add video production to your offerings and grow your revenue.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 36px', fontSize: 16, background: BRAND, color: '#000' }}>Apply now</button>
            <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: 16 }}>Talk to partnerships</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: 48, background: '#06060a', borderTop: '1px solid #27272a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}><span style={{ fontSize: 16, fontWeight: 700 }}>90 Seconds</span><span style={{ color: '#71717a' }}>/</span><span style={{ fontSize: 14, color: BRAND }}>Affiliate Program</span></div>
          <div style={{ display: 'flex', gap: 32 }}><a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>Partner Portal</a><a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>Support</a></div>
        </div>
      </footer>
    </div>
  )
}

import { useVisibility } from '../hooks/useVisibility'

const BRAND = '#a855f7'
const BRAND_LIGHT = '#c084fc'

const chapters = [
  { year: '2010', title: 'The Beginning', description: 'Tim Norton starts 90 Seconds in New Zealand with a simple idea: make professional video accessible to every business.', highlight: 'First platform launch' },
  { year: '2013', title: 'Going Global', description: 'Expansion into Asia-Pacific. Building the creator network that would become our competitive advantage.', highlight: 'Creator network established' },
  { year: '2017', title: 'Enterprise Focus', description: 'Major enterprise clients come on board. We learn what it takes to operate at Fortune 500 scale.', highlight: 'First enterprise clients' },
  { year: '2021', title: 'Platform Evolution', description: 'Complete platform rebuild. Nine integrated products. Infrastructure-first architecture.', highlight: 'Product suite launched' },
  { year: '2024', title: 'AI-Native', description: 'The AI operating layer transforms everything. Video Creation Agent launches. The agency model evolves.', highlight: 'AI integration complete' },
]

const dna = [
  { strand: 'Agency DNA', traits: ['Creative excellence', 'Strategic thinking', 'Client obsession', 'Quality control'], color: '#ec4899', icon: '✦' },
  { strand: 'Production DNA', traits: ['Global operations', 'Creator relationships', 'Logistics expertise', 'Real-world execution'], color: '#22c55e', icon: '◉' },
  { strand: 'Product DNA', traits: ['Platform thinking', 'AI-first mindset', 'Scalable systems', 'Developer experience'], color: '#3b82f6', icon: '◆' },
]

const convictions = [
  { title: 'Real Shoots Still Matter', description: "AI generates. Humans create. We believe in authentic, filmed content as the foundation—enhanced and multiplied by technology.", icon: '◉' },
  { title: 'AI-First, Not AI-Only', description: 'AI accelerates everything we do. But the strategic thinking, creative judgment, and human connection remain irreplaceable.', icon: '⚡' },
  { title: 'Cheaper, Faster, Better', description: "Technology should make things better AND more accessible. We're building infrastructure that democratizes professional video.", icon: '✦' },
]

export default function About() {
  const [heroRef, heroVis] = useVisibility()
  const [journeyRef, journeyVis] = useVisibility()
  const [dnaRef, dnaVis] = useVisibility()
  const [visionRef, visionVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  return (
    <div style={{ background: '#030305', minHeight: '100vh', color: '#fff' }}>
      {/* Hero */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '120px 40px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 30% 40%, ${BRAND}12 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${BRAND}08 0%, transparent 40%)`,
            opacity: heroVis ? 1 : 0,
            transition: 'opacity 1.5s ease',
          }}
        />

        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: BRAND_LIGHT,
            textTransform: 'uppercase',
            marginBottom: 24,
            opacity: heroVis ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s',
          }}
        >
          About Us
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: 1100,
            marginBottom: 32,
            opacity: heroVis ? 1 : 0,
            transform: heroVis ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.3s',
          }}
        >
          15 years of building{' '}
          <span className="text-gradient">the future of video.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.6,
            marginBottom: 48,
            opacity: heroVis ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          From a single idea in New Zealand to creation infrastructure serving 4,500+ brands worldwide.
        </p>

        <div style={{ display: 'flex', gap: 48, opacity: heroVis ? 1 : 0, transition: 'opacity 0.8s ease 0.7s' }}>
          {[
            { value: '2010', label: 'Founded' },
            { value: '4,500+', label: 'Brands' },
            { value: '110+', label: 'Countries' },
            { value: '$2B+', label: 'Production managed' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: BRAND_LIGHT }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section ref={journeyRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: '#06060a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80, opacity: journeyVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', marginBottom: 16 }}>THE JOURNEY</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em' }}>Five chapters of innovation</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 120,
                top: 0,
                bottom: 0,
                width: 2,
                background: `linear-gradient(180deg, ${BRAND}40, ${BRAND}, ${BRAND}40)`,
                opacity: journeyVis ? 1 : 0,
                transition: 'opacity 0.8s ease 0.3s',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {chapters.map((chapter, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 48,
                    opacity: journeyVis ? 1 : 0,
                    transform: journeyVis ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s ease ${0.3 + i * 0.12}s`,
                  }}
                >
                  <div style={{ width: 80, fontSize: 20, fontWeight: 700, color: BRAND, textAlign: 'right', flexShrink: 0 }}>{chapter.year}</div>
                  <div style={{ position: 'relative', width: 20, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: BRAND, border: '3px solid #06060a', boxShadow: `0 0 20px ${BRAND}50` }} />
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 32px' }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{chapter.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 16 }}>{chapter.description}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: `${BRAND}15`, borderRadius: 8, fontSize: 13, color: BRAND_LIGHT, fontWeight: 500 }}>
                      <span>✦</span>
                      {chapter.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DNA */}
      <section ref={dnaRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: '#030305' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60, opacity: dnaVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', marginBottom: 16 }}>OUR DNA</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>Three strands, one company</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto' }}>We're an agency, a production company, and a product company—all in one.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {dna.map((strand, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(180deg, ${strand.color}10, transparent)`,
                  border: `1px solid ${strand.color}25`,
                  borderRadius: 24,
                  padding: '36px 28px',
                  opacity: dnaVis ? 1 : 0,
                  transform: dnaVis ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${0.2 + i * 0.12}s`,
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${strand.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <span style={{ fontSize: 24, color: strand.color }}>{strand.icon}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: strand.color }}>{strand.strand}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {strand.traits.map((trait, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: strand.color }} />
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 60,
              padding: 40,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              display: 'flex',
              justifyContent: 'space-around',
              opacity: dnaVis ? 1 : 0,
              transition: 'opacity 0.8s ease 0.6s',
            }}
          >
            {[
              { value: '450+', label: 'Team members' },
              { value: '14,000+', label: 'Creator network' },
              { value: '25+', label: 'Countries' },
              { value: '15', label: 'Years experience' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: BRAND }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section ref={visionRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: '#06060a' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60, opacity: visionVis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', marginBottom: 16 }}>THE VISION</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>Three convictions</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto' }}>What we believe about the future of video creation.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {convictions.map((conviction, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 24,
                  padding: 36,
                  background: `linear-gradient(90deg, ${BRAND}08, transparent)`,
                  border: `1px solid ${BRAND}20`,
                  borderRadius: 20,
                  opacity: visionVis ? 1 : 0,
                  transform: visionVis ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s ease ${0.2 + i * 0.12}s`,
                }}
              >
                <div style={{ width: 60, height: 60, borderRadius: 16, background: `${BRAND}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 28, color: BRAND }}>{conviction.icon}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{conviction.title}</h3>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{conviction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '120px 40px', background: '#030305' }}>
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            textAlign: 'center',
            opacity: ctaVis ? 1 : 0,
            transform: ctaVis ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>Join us on the journey</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
            Whether you're a brand, a creator, or a future team member—we'd love to meet you.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 16 }}>Start a Project</button>
            <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16 }}>View Careers</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 40, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 24, color: BRAND_LIGHT }}>◆</span>
          <span style={{ fontSize: 18, fontWeight: 600 }}>90 Seconds</span>
        </div>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Creation infrastructure meets AI-native agency</p>
      </footer>
    </div>
  )
}

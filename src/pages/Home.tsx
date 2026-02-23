import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVisibility } from '../hooks/useVisibility'

const coreModes = [
  {
    name: 'Video Creation Agent',
    description: 'AI-led planning that transforms your brief into a production-ready video plan in days, not weeks',
    metric: '3 weeks → 3 days',
    color: '#a855f7',
    icon: '⚡',
    tagline: 'AI-powered planning',
    path: '/video-creation-agent',
  },
  {
    name: 'Enterprise Platform',
    description: 'The system of record for enterprise video operations. Manage global production at scale.',
    metric: '4,500+ brands',
    color: '#3b82f6',
    icon: '◆',
    tagline: 'Video operations hub',
    path: '/enterprise-platform',
  },
  {
    name: 'The Agency',
    description: 'Human strategists + AI operators delivering full-service video production and creative strategy',
    metric: 'Full service',
    color: '#ec4899',
    icon: '✦',
    tagline: 'Managed video services',
    path: '/agency',
  },
]

const videoApps = [
  { name: 'Content Agent', description: 'Manages your video library and repurposes existing assets automatically', metric: '10x faster', color: '#22d3ee', icon: '◈', path: '/content-agent' },
  { name: 'Customer Story Platform', description: 'Productized B2B customer proof at scale', metric: '200+ stories/quarter', color: '#f97316', icon: '★', path: '/customer-story' },
  { name: 'Real Shoots', description: 'Global production through local creator teams', metric: '110+ countries', color: '#22c55e', icon: '◉', path: '/real-shoots' },
  { name: '90 AI Studio', description: 'Unified AI marketplace and operating layer', metric: 'Every AI model', color: '#8b5cf6', icon: '◎', path: '/ai-studio' },
  { name: 'Creator Pro', description: 'SaaS platform for creators to run their video business', metric: 'Your business, powered', color: '#fbbf24', icon: '◇', path: '/creator-pro' },
  { name: 'Affiliate', description: 'Sell video to your customers. We deliver. You earn.', metric: 'Partner program', color: '#14b8a6', icon: '◆', path: '/affiliate' },
]

const stats = [
  { value: '4,500+', label: 'Enterprise brands' },
  { value: '110+', label: 'Countries' },
  { value: '14,000+', label: 'Creators' },
  { value: '$2B+', label: 'Managed production' },
]

const electric = {
  core: '#00f0ff',
  dim: '#0a4a4f',
}

export default function Home() {
  const [ready, setReady] = useState(false)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [howItWorksRef, howItWorksVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 48px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background ambience */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${electric.core}06, transparent)`,
            pointerEvents: 'none',
          }}
        />

        {/* Floating particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${5 + i * 5}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                width: 2,
                height: 2,
                borderRadius: '50%',
                background: electric.core,
                opacity: 0.3,
                animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Hero Text */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 48,
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(44px, 5.5vw, 72px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'white',
                marginBottom: 24,
              }}
            >
              The Video Infrastructure
              <br />
              <span className="text-gradient">For Enterprise</span>
            </h1>
            <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: '#a1a1aa', maxWidth: 700, margin: '0 auto', lineHeight: 1.5 }}>
              Three core modes. Six specialized apps. One unified backbone.
            </p>
          </div>

          {/* CORE MODES Label */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 20,
              opacity: ready ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            <span style={{ fontSize: 11, color: '#a855f7', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Core Modes
            </span>
          </div>

          {/* Apps + Backbone Container */}
          <div style={{ position: 'relative', marginBottom: 60 }}>
            {/* TOP ROW - 3 Core Modes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48, position: 'relative', zIndex: 2 }}>
              {coreModes.map((mode, i) => {
                const isHovered = hoveredRow === 'top' && hoveredIndex === i
                return (
                  <Link
                    key={mode.name}
                    to={mode.path}
                    onMouseEnter={() => {
                      setHoveredRow('top')
                      setHoveredIndex(i)
                    }}
                    onMouseLeave={() => {
                      setHoveredRow(null)
                      setHoveredIndex(null)
                    }}
                    style={{
                      background: isHovered ? `linear-gradient(180deg, ${mode.color}15, ${mode.color}05)` : 'linear-gradient(180deg, #0a0a0a, #111111)',
                      border: `1px solid ${isHovered ? mode.color : '#222'}`,
                      borderRadius: 20,
                      padding: 28,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                      transform: ready ? (isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0)') : 'translateY(30px)',
                      opacity: ready ? 1 : 0,
                      transitionDelay: `${0.1 + i * 0.08}s`,
                      boxShadow: isHovered ? `0 20px 60px ${mode.color}30, 0 0 40px ${mode.color}20` : '0 4px 20px rgba(0,0,0,0.3)',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Energy beam connector */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -48,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isHovered ? 4 : 2,
                        height: 48,
                        background: isHovered
                          ? `linear-gradient(to bottom, ${mode.color}, ${electric.core})`
                          : `linear-gradient(to bottom, ${electric.dim}, ${electric.core}40)`,
                        borderRadius: 2,
                        transition: 'all 0.3s',
                        boxShadow: isHovered ? `0 0 20px ${mode.color}, 0 0 40px ${electric.core}` : 'none',
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            background: isHovered ? `${mode.color}30` : `${mode.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: isHovered ? `0 0 30px ${mode.color}60` : 'none',
                          }}
                        >
                          <span style={{ fontSize: 24, color: mode.color, filter: isHovered ? `drop-shadow(0 0 10px ${mode.color})` : 'none' }}>
                            {mode.icon}
                          </span>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: mode.color, fontWeight: 500, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {mode.tagline}
                          </div>
                          <div style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{mode.name}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: isHovered ? '#a1a1aa' : '#71717a', lineHeight: 1.6, marginBottom: 16, transition: 'color 0.3s' }}>
                        {mode.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, color: mode.color, fontWeight: 600, filter: isHovered ? `drop-shadow(0 0 8px ${mode.color})` : 'none' }}>
                          {mode.metric}
                        </span>
                        <span style={{ fontSize: 13, color: '#71717a' }}>Learn more →</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* THE BACKBONE */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: -100,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: electric.core,
                  textShadow: `0 0 30px ${electric.core}`,
                  opacity: ready ? 1 : 0,
                  transition: 'opacity 0.8s 0.5s',
                }}
              >
                BACKBONE
              </div>

              <div
                style={{
                  flex: 1,
                  height: 14,
                  background: `linear-gradient(90deg, ${electric.dim}, ${electric.core}50, ${electric.core}50, ${electric.dim})`,
                  borderRadius: 7,
                  position: 'relative',
                  animation: ready ? 'backbone-glow 3s ease-in-out infinite' : 'none',
                  opacity: ready ? 1 : 0,
                  transition: 'opacity 0.8s 0.4s',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 4,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: `linear-gradient(90deg, transparent 5%, ${electric.core}80 15%, ${electric.core} 50%, ${electric.core}80 85%, transparent 95%)`,
                    borderRadius: 3,
                    animation: 'pulse-backbone 2s ease-in-out infinite',
                  }}
                />

                {/* Connection nodes for TOP row */}
                {coreModes.map((mode, i) => {
                  const isHovered = hoveredRow === 'top' && hoveredIndex === i
                  const leftPos = ((i + 0.5) / 3) * 100
                  return (
                    <div
                      key={`top-${i}`}
                      style={{
                        position: 'absolute',
                        left: `${leftPos}%`,
                        top: -7,
                        transform: 'translateX(-50%)',
                        width: isHovered ? 22 : 16,
                        height: isHovered ? 22 : 16,
                        borderRadius: '50%',
                        background: isHovered ? mode.color : electric.core,
                        boxShadow: isHovered
                          ? `0 0 25px ${mode.color}, 0 0 50px ${mode.color}`
                          : `0 0 15px ${electric.core}, 0 0 30px ${electric.core}50`,
                        transition: 'all 0.3s',
                        zIndex: 5,
                      }}
                    />
                  )
                })}

                {/* Connection nodes for BOTTOM row */}
                {videoApps.map((app, i) => {
                  const isHovered = hoveredRow === 'bottom' && hoveredIndex === i
                  const leftPos = ((i + 0.5) / 6) * 100
                  return (
                    <div
                      key={`bottom-${i}`}
                      style={{
                        position: 'absolute',
                        left: `${leftPos}%`,
                        bottom: -7,
                        transform: 'translateX(-50%)',
                        width: isHovered ? 18 : 12,
                        height: isHovered ? 18 : 12,
                        borderRadius: '50%',
                        background: isHovered ? app.color : electric.core,
                        boxShadow: isHovered
                          ? `0 0 20px ${app.color}, 0 0 40px ${app.color}`
                          : `0 0 12px ${electric.core}, 0 0 24px ${electric.core}50`,
                        transition: 'all 0.3s',
                        zIndex: 5,
                      }}
                    />
                  )
                })}

                {/* Traveling energy pulse */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: 200,
                    height: '100%',
                    background: `linear-gradient(90deg, transparent, ${electric.core}90, transparent)`,
                    borderRadius: 7,
                    animation: 'travel 3s linear infinite',
                  }}
                />
              </div>
            </div>

            {/* VIDEO APPS Label */}
            <div
              style={{
                textAlign: 'center',
                marginTop: 40,
                marginBottom: 20,
                opacity: ready ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s',
              }}
            >
              <span style={{ fontSize: 10, color: '#71717a', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Specialized Video Apps
              </span>
            </div>

            {/* BOTTOM ROW - 6 Video Apps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, position: 'relative', zIndex: 2 }}>
              {videoApps.map((app, i) => {
                const isHovered = hoveredRow === 'bottom' && hoveredIndex === i
                return (
                  <Link
                    key={app.name}
                    to={app.path}
                    onMouseEnter={() => {
                      setHoveredRow('bottom')
                      setHoveredIndex(i)
                    }}
                    onMouseLeave={() => {
                      setHoveredRow(null)
                      setHoveredIndex(null)
                    }}
                    style={{
                      background: isHovered ? `linear-gradient(0deg, ${app.color}15, ${app.color}05)` : 'linear-gradient(180deg, #0a0a0a, #111111)',
                      border: `1px solid ${isHovered ? app.color : '#222'}`,
                      borderRadius: 16,
                      padding: 20,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                      transform: ready ? (isHovered ? 'translateY(8px) scale(1.02)' : 'translateY(0)') : 'translateY(-30px)',
                      opacity: ready ? 1 : 0,
                      transitionDelay: `${0.5 + i * 0.06}s`,
                      boxShadow: isHovered ? `0 -20px 60px ${app.color}30, 0 0 40px ${app.color}20` : '0 4px 20px rgba(0,0,0,0.3)',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Energy beam connector UP */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isHovered ? 4 : 2,
                        height: 40,
                        background: isHovered
                          ? `linear-gradient(to top, ${app.color}, ${electric.core})`
                          : `linear-gradient(to top, ${electric.dim}, ${electric.core}40)`,
                        borderRadius: 2,
                        transition: 'all 0.3s',
                        boxShadow: isHovered ? `0 0 20px ${app.color}, 0 0 40px ${electric.core}` : 'none',
                      }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: isHovered ? `${app.color}30` : `${app.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: isHovered ? `0 0 20px ${app.color}60` : 'none',
                          }}
                        >
                          <span style={{ fontSize: 14, color: app.color, filter: isHovered ? `drop-shadow(0 0 8px ${app.color})` : 'none' }}>
                            {app.icon}
                          </span>
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{app.name}</div>
                      </div>
                      <p style={{ fontSize: 11, color: isHovered ? '#a1a1aa' : '#71717a', lineHeight: 1.5, marginBottom: 10, transition: 'color 0.3s' }}>
                        {app.description}
                      </p>
                      <div style={{ fontSize: 11, color: app.color, fontWeight: 600, filter: isHovered ? `drop-shadow(0 0 6px ${app.color})` : 'none' }}>
                        {app.metric}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 48,
              justifyContent: 'center',
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: '#71717a' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef as React.RefObject<HTMLElement>}
        style={{ padding: '120px 48px', background: '#0a0a0a' }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            opacity: howItWorksVis ? 1 : 0,
            transform: howItWorksVis ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 12, color: '#a855f7', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
              How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 20 }}>
              One platform, multiple paths
            </h2>
            <p style={{ fontSize: 18, color: '#a1a1aa', maxWidth: 600, margin: '0 auto' }}>
              Choose your entry point based on your needs. Everything connects.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 48, left: '16.67%', right: '16.67%', height: 2, background: '#222', zIndex: 0 }} />
            {[
              { num: '01', title: 'Self-Serve', desc: 'Sign up, access the platform, use the apps directly. Full control over your video operations.', color: '#3b82f6' },
              { num: '02', title: 'Guided', desc: 'Work with our team to onboard, configure, and optimize for your specific needs.', color: '#a855f7' },
              { num: '03', title: 'Managed', desc: "Our agency runs everything. Strategy, creative, production, delivery. You approve, we execute.", color: '#ec4899' },
            ].map((item) => (
              <div key={item.num} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: '50%',
                    background: '#030303',
                    border: `2px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    boxShadow: `0 0 30px ${item.color}15`,
                  }}
                >
                  <span style={{ fontSize: 28, fontWeight: 700, color: item.color }}>{item.num}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '140px 48px', background: '#030303' }}>
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            textAlign: 'center',
            opacity: ctaVis ? 1 : 0,
            transform: ctaVis ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))',
              border: '2px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 20px #a855f7' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 24 }}>
            Ready to build?
          </h2>
          <p style={{ fontSize: 20, color: '#a1a1aa', marginBottom: 48, lineHeight: 1.6 }}>Start with any mode. Expand as you grow.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 36px', fontSize: 16 }}>
              Get started free
            </button>
            <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: 16 }}>
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '64px 48px', background: '#0a0a0a', borderTop: '1px solid #222' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'white', display: 'block', marginBottom: 8 }}>90 Seconds</span>
            <span style={{ fontSize: 14, color: '#71717a' }}>The video infrastructure for enterprise.</span>
          </div>
          <div style={{ display: 'flex', gap: 64 }}>
            {[
              { title: 'Core Modes', items: ['Video Creation Agent', 'Enterprise Platform', 'The Agency'] },
              { title: 'Video Apps', items: ['Content Agent', 'Customer Stories', 'Real Shoots', '90 AI Studio', 'Creator Pro', 'Affiliate'] },
              { title: 'Company', items: ['About', 'Careers', 'Press', 'Contact'] },
            ].map((col) => (
              <div key={col.title}>
                <span style={{ fontSize: 11, color: '#71717a', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
                  {col.title}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((it) => (
                    <a key={it} href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>
                      {it}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

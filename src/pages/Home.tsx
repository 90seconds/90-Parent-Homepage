import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVisibility } from '../hooks/useVisibility'

// Softer, refined color palette
const C = {
  bg: '#08080A',
  bg2: '#0D0D10',
  tx: '#E8E6ED',
  tS: '#8A8890',
  tF: '#55535A',
  brd: '#1F1F24',
}

const coreModes = [
  {
    name: 'Video Creation Agent',
    description: 'AI-led planning that transforms your brief into a production-ready video plan in days, not weeks',
    metric: 'Fully agentic',
    color: '#C9A0FF',
    icon: '⚡',
    tagline: 'AI-powered planning',
    path: '/video-creation-agent',
  },
  {
    name: 'Enterprise Platform',
    description: 'The system of record for enterprise video operations. Manage global production at scale.',
    metric: 'Built for enterprise',
    color: '#6B9FFF',
    icon: '◆',
    tagline: 'Video operations hub',
    path: '/enterprise-platform',
  },
  {
    name: 'The Agency',
    description: 'Human strategists + AI operators delivering full-service video production and creative strategy',
    metric: 'Full service',
    color: '#FF9DB3',
    icon: '✦',
    tagline: 'Managed video services',
    path: '/agency',
  },
]

const videoApps = [
  { name: 'Real Shoots', description: 'Global production through local creator teams', metric: '110+ countries', color: '#4EDBA0', icon: '◉', path: '/real-shoots' },
  { name: '90 AI Studio', description: 'Unified AI marketplace and operating layer', metric: 'Every AI model', color: '#A78BFA', icon: '◎', path: '/ai-studio' },
  { name: 'Customer Story App', description: 'Productized B2B customer proof at scale', metric: '200+ stories/quarter', color: '#F0A878', icon: '★', path: '/customer-story' },
  { name: 'Content Pro', description: 'Manages your video library and repurposes existing assets automatically', metric: '10x faster', color: '#7DD3E8', icon: '◈', path: '/content-agent' },
  { name: 'Creator Pro', description: 'SaaS platform for creators to run their video business', metric: 'Your business, powered', color: '#FBBF24', icon: '◇', path: '/creator-pro' },
  { name: 'Affiliate', description: 'Sell video to your customers. We deliver. You earn.', metric: 'Partner program', color: '#5EEAD4', icon: '◆', path: '/affiliate' },
]

const stats = [
  { value: '4,500+', label: 'Enterprise brands' },
  { value: '110+', label: 'Countries' },
  { value: '14,000+', label: 'Creators' },
  { value: '$2B+', label: 'Managed production' },
]

const electric = {
  core: '#8B9AFF',
  dim: '#2A2A40',
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
          padding: '120px 48px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background ambience - responds to hover */}
        {(() => {
          const activeColor = hoveredRow && hoveredIndex !== null
            ? (hoveredRow === 'top' ? coreModes[hoveredIndex].color : videoApps[hoveredIndex].color)
            : null
          return (
            <>
              {/* Base ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeColor
                    ? `radial-gradient(ellipse 150% 100% at 50% 100%, ${activeColor}18, ${activeColor}08 40%, transparent 70%)`
                    : `radial-gradient(ellipse 80% 50% at 50% 50%, ${electric.core}06, transparent)`,
                  pointerEvents: 'none',
                  transition: 'all 0.5s ease-out',
                }}
              />

              {/* Electric wash overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeColor
                    ? `linear-gradient(180deg, transparent 0%, ${activeColor}06 30%, ${activeColor}10 50%, ${activeColor}06 70%, transparent 100%)`
                    : 'transparent',
                  pointerEvents: 'none',
                  opacity: activeColor ? 1 : 0,
                  transition: 'opacity 0.5s ease-out',
                }}
              />

              {/* Top vignette with color */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeColor
                    ? `radial-gradient(ellipse 100% 50% at 50% 0%, ${activeColor}10, transparent 50%)`
                    : 'transparent',
                  pointerEvents: 'none',
                  opacity: activeColor ? 1 : 0,
                  transition: 'opacity 0.5s ease-out',
                }}
              />

              {/* Subtle electric noise/grain effect */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeColor
                    ? `radial-gradient(circle at 30% 40%, ${activeColor}08 0%, transparent 25%),
                       radial-gradient(circle at 70% 60%, ${activeColor}06 0%, transparent 20%),
                       radial-gradient(circle at 50% 80%, ${activeColor}10 0%, transparent 30%)`
                    : 'transparent',
                  pointerEvents: 'none',
                  opacity: activeColor ? 1 : 0,
                  transition: 'opacity 0.5s ease-out',
                  animation: activeColor ? 'ethereal-pulse 4s ease-in-out infinite' : 'none',
                }}
              />
            </>
          )
        })()}

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
              marginBottom: 64,
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
            <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: C.tS, maxWidth: 700, margin: '0 auto', lineHeight: 1.5 }}>
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
            <span style={{ fontSize: 11, color: '#B39DFF', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Core Modes
            </span>
          </div>

          {/* Apps + Backbone Container */}
          <div style={{ position: 'relative' }}>
            {/* TOP ROW - 3 Core Modes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 56, position: 'relative', zIndex: 2 }}>
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
                      background: isHovered ? `linear-gradient(180deg, ${mode.color}15, ${mode.color}05)` : C.bg2,
                      border: `1px solid ${isHovered ? mode.color + '60' : C.brd}`,
                      borderRadius: 16,
                      padding: 24,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                      transform: ready ? (isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0)') : 'translateY(30px)',
                      opacity: ready ? 1 : 0,
                      transitionDelay: ready ? '0s' : `${0.1 + i * 0.08}s`,
                      boxShadow: isHovered
                        ? `0 0 25px ${mode.color}40, 0 0 60px ${mode.color}25, 0 0 100px ${mode.color}15, 0 20px 60px ${mode.color}30, inset 0 0 60px ${mode.color}08`
                        : '0 4px 20px rgba(0,0,0,0.2)',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Inner effects container - clipped */}
                    <div style={{ position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden', pointerEvents: 'none' }}>
                      {/* Inner radiance - pulsing core glow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '150%',
                          height: '150%',
                          transform: 'translate(-50%, -50%)',
                          background: `radial-gradient(ellipse at center, ${mode.color}20 0%, transparent 70%)`,
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 0.4s',
                          animation: isHovered ? 'inner-radiance 2s ease-in-out infinite' : 'none',
                        }}
                      />

                      {/* Shimmer edge effect */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 16,
                          background: isHovered
                            ? `linear-gradient(90deg, transparent, ${mode.color}30, transparent)`
                            : 'transparent',
                          backgroundSize: '200% 100%',
                          animation: isHovered ? 'border-shimmer 2s linear infinite' : 'none',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                    </div>

                    {/* Connector line to backbone */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: isHovered ? -68 : -56,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isHovered ? 3 : 1,
                        height: isHovered ? 68 : 56,
                        background: isHovered
                          ? `linear-gradient(to bottom, ${mode.color}, ${mode.color}80)`
                          : `linear-gradient(to bottom, ${C.brd}, ${electric.core}60)`,
                        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                        boxShadow: isHovered ? `0 0 12px ${mode.color}80` : 'none',
                      }}
                    />

                    {/* Energy pulses UP into card from backbone - dual offset */}
                    {isHovered && (
                      <>
                        <div
                          style={{
                            position: 'absolute',
                            bottom: -68,
                            left: 'calc(50% - 3px)',
                            transform: 'translateX(-50%)',
                            width: 4,
                            height: 18,
                            background: `linear-gradient(to top, transparent, ${mode.color})`,
                            borderRadius: 2,
                            animation: 'energy-flow-up 0.8s ease-out infinite',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: -68,
                            left: 'calc(50% + 3px)',
                            transform: 'translateX(-50%)',
                            width: 4,
                            height: 18,
                            background: `linear-gradient(to top, transparent, ${mode.color}cc)`,
                            borderRadius: 2,
                            animation: 'energy-flow-up 0.8s ease-out infinite',
                            animationDelay: '0.4s',
                          }}
                        />
                      </>
                    )}

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            background: isHovered ? `${mode.color}35` : `${mode.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: isHovered ? `0 0 30px ${mode.color}70, 0 0 60px ${mode.color}40, inset 0 0 20px ${mode.color}30` : 'none',
                            animation: isHovered ? 'ethereal-pulse 2s ease-in-out infinite' : 'none',
                          }}
                        >
                          <span
                            style={{
                              fontSize: 24,
                              color: mode.color,
                              filter: isHovered ? `drop-shadow(0 0 12px ${mode.color}) drop-shadow(0 0 24px ${mode.color})` : 'none',
                              animation: isHovered ? 'icon-pulse 1.5s ease-in-out infinite' : 'none',
                            }}
                          >
                            {mode.icon}
                          </span>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 11,
                              color: mode.color,
                              fontWeight: 500,
                              marginBottom: 2,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              textShadow: isHovered ? `0 0 20px ${mode.color}` : 'none',
                            }}
                          >
                            {mode.tagline}
                          </div>
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              color: isHovered ? '#fff' : C.tx,
                              textShadow: isHovered ? `0 0 30px ${mode.color}60` : 'none',
                              transition: 'all 0.3s',
                            }}
                          >
                            {mode.name}
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: isHovered ? C.tx : C.tF, lineHeight: 1.6, marginBottom: 14, transition: 'color 0.3s' }}>
                        {mode.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: 13,
                            color: mode.color,
                            fontWeight: 550,
                            textShadow: isHovered ? `0 0 15px ${mode.color}` : 'none',
                          }}
                        >
                          {mode.metric}
                        </span>
                        <span style={{ fontSize: 12, color: isHovered ? C.tS : C.tF, transition: 'color 0.3s' }}>Learn more →</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* THE BACKBONE */}
            {(() => {
              // Get the active color when hovering
              const activeColor = hoveredRow === 'top' && hoveredIndex !== null
                ? coreModes[hoveredIndex].color
                : hoveredRow === 'bottom' && hoveredIndex !== null
                ? videoApps[hoveredIndex].color
                : null

              return (
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: -100,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      color: activeColor || C.tF,
                      opacity: ready ? 1 : 0,
                      transition: 'all 0.3s',
                    }}
                  >
                    BACKBONE
                  </div>

                  <div
                    style={{
                      flex: 1,
                      height: 8,
                      background: activeColor
                        ? `linear-gradient(90deg, ${C.brd}, ${activeColor}60, ${activeColor}60, ${C.brd})`
                        : `linear-gradient(90deg, ${C.brd}, ${electric.core}30, ${electric.core}30, ${C.brd})`,
                      borderRadius: 4,
                      position: 'relative',
                      opacity: ready ? 1 : 0,
                      transition: 'all 0.3s',
                      boxShadow: activeColor ? `0 0 20px ${activeColor}40` : 'none',
                    }}
                  >
                    {/* Inner glow when active */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 4,
                        background: activeColor
                          ? `linear-gradient(90deg, transparent 10%, ${activeColor}80 50%, transparent 90%)`
                          : 'transparent',
                        opacity: activeColor ? 1 : 0,
                        transition: 'opacity 0.3s',
                      }}
                    />

                    {/* Connection nodes for TOP row - using calc for precise positioning */}
                    {coreModes.map((mode, i) => {
                      const isHovered = hoveredRow === 'top' && hoveredIndex === i
                      // calc positions: card centers accounting for 24px gaps
                      const calcPositions = [
                        'calc((100% - 48px) / 6)',
                        '50%',
                        'calc(100% - (100% - 48px) / 6)'
                      ]
                      return (
                        <div
                          key={`top-${i}`}
                          style={{
                            position: 'absolute',
                            left: calcPositions[i],
                            top: -4,
                            transform: 'translateX(-50%)',
                            width: isHovered ? 16 : 10,
                            height: isHovered ? 16 : 10,
                            borderRadius: '50%',
                            background: isHovered ? mode.color : (activeColor || electric.core),
                            boxShadow: isHovered ? `0 0 20px ${mode.color}` : `0 0 6px ${activeColor || electric.core}`,
                            transition: 'all 0.3s',
                            zIndex: 5,
                          }}
                        />
                      )
                    })}

                    {/* Connection nodes for BOTTOM row - using calc for precise positioning */}
                    {videoApps.map((app, i) => {
                      const isHovered = hoveredRow === 'bottom' && hoveredIndex === i
                      // calc positions: card centers accounting for 12px gaps (5 gaps total = 60px)
                      const calcPositions = [
                        'calc((100% - 60px) / 12)',
                        'calc((100% - 60px) / 12 + (100% - 60px) / 6 + 12px)',
                        'calc((100% - 60px) / 12 + 2 * (100% - 60px) / 6 + 24px)',
                        'calc((100% - 60px) / 12 + 3 * (100% - 60px) / 6 + 36px)',
                        'calc((100% - 60px) / 12 + 4 * (100% - 60px) / 6 + 48px)',
                        'calc(100% - (100% - 60px) / 12)',
                      ]
                      return (
                        <div
                          key={`bottom-${i}`}
                          style={{
                            position: 'absolute',
                            left: calcPositions[i],
                            bottom: -4,
                            transform: 'translateX(-50%)',
                            width: isHovered ? 14 : 8,
                            height: isHovered ? 14 : 8,
                            borderRadius: '50%',
                            background: isHovered ? app.color : (activeColor || electric.core),
                            boxShadow: isHovered ? `0 0 16px ${app.color}` : `0 0 4px ${activeColor || electric.core}`,
                            transition: 'all 0.3s',
                            zIndex: 5,
                          }}
                        />
                      )
                    })}

                    {/* Energy surge when hovering */}
                    {activeColor && (
                      <div
                        key={`surge-${hoveredRow}-${hoveredIndex}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                          borderRadius: 4,
                          animation: 'surge-pulse 0.6s ease-out',
                        }}
                      />
                    )}

                    {/* Ambient traveling pulse */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        width: 100,
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${activeColor || electric.core}40, transparent)`,
                        borderRadius: 4,
                        animation: 'travel 5s linear infinite',
                      }}
                    />
                  </div>
                </div>
              )
            })()}

            {/* BOTTOM ROW - 6 Video Apps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, position: 'relative', zIndex: 2, marginTop: 56 }}>
              {/* VIDEO APPS Label - positioned absolutely */}
              <div
                style={{
                  position: 'absolute',
                  top: -32,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: ready ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s',
                  zIndex: 0,
                }}
              >
                <span style={{ fontSize: 10, color: C.tF, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Specialized Video Apps
                </span>
              </div>
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
                      background: isHovered ? `linear-gradient(0deg, ${app.color}15, ${app.color}05)` : C.bg2,
                      border: `1px solid ${isHovered ? app.color + '60' : C.brd}`,
                      borderRadius: 12,
                      padding: 18,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                      transform: ready ? (isHovered ? 'translateY(8px) scale(1.04)' : 'translateY(0)') : 'translateY(-30px)',
                      opacity: ready ? 1 : 0,
                      transitionDelay: ready ? '0s' : `${0.5 + i * 0.06}s`,
                      boxShadow: isHovered
                        ? `0 0 20px ${app.color}40, 0 0 50px ${app.color}25, 0 0 80px ${app.color}15, 0 -15px 50px ${app.color}25, inset 0 0 40px ${app.color}08`
                        : 'none',
                      position: 'relative',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Inner effects container - clipped */}
                    <div style={{ position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden', pointerEvents: 'none' }}>
                      {/* Inner radiance - pulsing core glow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '180%',
                          height: '180%',
                          transform: 'translate(-50%, -50%)',
                          background: `radial-gradient(ellipse at center, ${app.color}25 0%, transparent 60%)`,
                          opacity: isHovered ? 1 : 0,
                          transition: 'opacity 0.4s',
                          animation: isHovered ? 'inner-radiance 2s ease-in-out infinite' : 'none',
                        }}
                      />

                      {/* Shimmer edge effect */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 12,
                          background: isHovered
                            ? `linear-gradient(90deg, transparent, ${app.color}25, transparent)`
                            : 'transparent',
                          backgroundSize: '200% 100%',
                          animation: isHovered ? 'border-shimmer 1.5s linear infinite' : 'none',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                    </div>

                    {/* Connector line to backbone */}
                    <div
                      style={{
                        position: 'absolute',
                        top: isHovered ? -64 : -56,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isHovered ? 3 : 1,
                        height: isHovered ? 64 : 56,
                        background: isHovered
                          ? `linear-gradient(to top, ${app.color}, ${app.color}80)`
                          : `linear-gradient(to top, ${C.brd}, ${electric.core}60)`,
                        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                        boxShadow: isHovered ? `0 0 10px ${app.color}80` : 'none',
                      }}
                    />

                    {/* Energy pulses DOWN into card from backbone - dual offset */}
                    {isHovered && (
                      <>
                        <div
                          style={{
                            position: 'absolute',
                            top: -64,
                            left: 'calc(50% - 2px)',
                            transform: 'translateX(-50%)',
                            width: 3,
                            height: 14,
                            background: `linear-gradient(to bottom, transparent, ${app.color})`,
                            borderRadius: 2,
                            animation: 'energy-flow-down 0.8s ease-out infinite',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: -64,
                            left: 'calc(50% + 2px)',
                            transform: 'translateX(-50%)',
                            width: 3,
                            height: 14,
                            background: `linear-gradient(to bottom, transparent, ${app.color}cc)`,
                            borderRadius: 2,
                            animation: 'energy-flow-down 0.8s ease-out infinite',
                            animationDelay: '0.35s',
                          }}
                        />
                      </>
                    )}

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: isHovered ? `${app.color}35` : `${app.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            boxShadow: isHovered ? `0 0 25px ${app.color}70, 0 0 50px ${app.color}40, inset 0 0 15px ${app.color}30` : 'none',
                            animation: isHovered ? 'ethereal-pulse 2s ease-in-out infinite' : 'none',
                          }}
                        >
                          <span
                            style={{
                              fontSize: 14,
                              color: app.color,
                              filter: isHovered ? `drop-shadow(0 0 10px ${app.color}) drop-shadow(0 0 20px ${app.color})` : 'none',
                              animation: isHovered ? 'icon-pulse 1.5s ease-in-out infinite' : 'none',
                            }}
                          >
                            {app.icon}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 550,
                            color: isHovered ? '#fff' : C.tx,
                            textShadow: isHovered ? `0 0 25px ${app.color}60` : 'none',
                            transition: 'all 0.3s',
                          }}
                        >
                          {app.name}
                        </div>
                      </div>
                      <p style={{ fontSize: 11, color: isHovered ? C.tx : C.tF, lineHeight: 1.5, marginBottom: 8, transition: 'color 0.3s' }}>
                        {app.description}
                      </p>
                      <div
                        style={{
                          fontSize: 11,
                          color: app.color,
                          fontWeight: 550,
                          textShadow: isHovered ? `0 0 12px ${app.color}` : 'none',
                        }}
                      >
                        {app.metric}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section - Below the fold */}
      <section style={{ padding: '80px 48px', background: C.bg2 }}>
        <div
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            display: 'flex',
            gap: 64,
            justifyContent: 'center',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 600, color: C.tx, letterSpacing: '-0.02em', marginBottom: 4 }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: C.tF }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef as React.RefObject<HTMLElement>}
        style={{ padding: '120px 48px', background: C.bg }}
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
            <span style={{ fontSize: 12, color: '#B39DFF', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
              How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 20 }}>
              One platform, multiple paths
            </h2>
            <p style={{ fontSize: 18, color: C.tS, maxWidth: 600, margin: '0 auto' }}>
              Choose your entry point based on your needs. Everything connects.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 48, left: '16.67%', right: '16.67%', height: 2, background: C.brd, zIndex: 0 }} />
            {[
              { num: '01', title: 'Self-Serve', desc: 'Sign up, access the platform, use the apps directly. Full control over your video operations.', color: '#8B9AFF' },
              { num: '02', title: 'Guided', desc: 'Work with our team to onboard, configure, and optimize for your specific needs.', color: '#B39DFF' },
              { num: '03', title: 'Managed', desc: "Our agency runs everything. Strategy, creative, production, delivery. You approve, we execute.", color: '#FF9DB3' },
            ].map((item) => (
              <div key={item.num} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: C.bg2,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <span style={{ fontSize: 24, fontWeight: 600, color: item.color }}>{item.num}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: C.tx, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: C.tS, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '140px 48px', background: C.bg }}>
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            textAlign: 'center',
            opacity: ctaVis ? 1 : 0,
            transform: ctaVis ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s',
          }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: C.tx, letterSpacing: '-0.03em', marginBottom: 20 }}>
            Ready to build?
          </h2>
          <p style={{ fontSize: 17, color: C.tS, marginBottom: 40, lineHeight: 1.6 }}>Start with any mode. Expand as you grow.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button style={{
              background: '#F5F5F5',
              color: C.bg,
              border: 'none',
              borderRadius: 8,
              padding: '12px 28px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}>
              Get started
            </button>
            <button style={{
              background: 'transparent',
              color: C.tx,
              border: `1px solid ${C.brd}`,
              borderRadius: 8,
              padding: '12px 28px',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}>
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 40px', background: C.bg2, borderTop: `1px solid ${C.brd}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.tx, display: 'block', marginBottom: 6 }}>90 Seconds</span>
            <span style={{ fontSize: 13, color: C.tF }}>The video infrastructure for enterprise.</span>
          </div>
          <div style={{ display: 'flex', gap: 48 }}>
            {[
              { title: 'Core Modes', items: ['Video Creation Agent', 'Enterprise Platform', 'The Agency'] },
              { title: 'Video Apps', items: ['Content Agent', 'Customer Stories', 'Real Shoots', '90 AI Studio', 'Creator Pro', 'Affiliate'] },
              { title: 'Company', items: ['About', 'Careers', 'Press', 'Contact'] },
            ].map((col) => (
              <div key={col.title}>
                <span style={{ fontSize: 11, color: C.tF, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>
                  {col.title}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.items.map((it) => (
                    <a key={it} href="#" style={{ fontSize: 13, color: C.tS, textDecoration: 'none' }}>
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

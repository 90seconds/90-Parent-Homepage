import { useState, useEffect } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const BRAND = '#a855f7'
const BRAND_LIGHT = '#c084fc'

const capabilities = [
  { title: 'Brief Analysis', description: 'AI reads and interprets your creative brief, extracting objectives, tone, audience, and deliverables automatically.', icon: '◈' },
  { title: 'AI vs Human Decision', description: 'Intelligently determines what can be AI-generated versus what requires human crews and physical production.', icon: '◇' },
  { title: 'Resource Planning', description: 'Defines crew requirements, equipment needs, location specifications, and budget allocations.', icon: '▣' },
  { title: 'Timeline Orchestration', description: 'Creates optimized production schedules with dependencies, milestones, and delivery dates.', icon: '◉' },
  { title: 'Crew Matching', description: 'Connects to Real Shoots network to match the right creators for each production requirement.', icon: '★' },
  { title: 'Deliverables Mapping', description: 'Specifies all output formats, versions, and localization requirements upfront.', icon: '✦' },
]

const workflow = [
  { step: '01', title: 'Submit Brief', description: 'Upload your creative brief, campaign objectives, and any reference materials.' },
  { step: '02', title: 'AI Analysis', description: 'The agent analyzes requirements and generates a comprehensive production strategy.' },
  { step: '03', title: 'Review Plan', description: 'Get a detailed execution plan with resource allocation, timeline, and budget.' },
  { step: '04', title: 'Approve & Execute', description: 'One click to activate. The agent orchestrates all downstream systems.' },
]

const metrics = [
  { value: '3 weeks → 3 days', label: 'Planning time reduction' },
  { value: '85%', label: 'Faster scope definition' },
  { value: '40%', label: 'Budget optimization' },
]

const journeyStages = [
  {
    stage: 'AGENT ACTIVATES',
    title: 'The agent reads your brief and builds a plan',
    description: 'Production planning with timeline, budget, location analysis',
    details: ['10 days timeline', '$4,200-5,800 budget', 'Singapore primary location'],
    tasks: ['Script development', 'Voice-over (EN/ZH)', 'B-roll generation', 'Music score', 'Crew match', 'Interview shoot', 'Professional edit', 'QA review', 'Delivery'],
    color: BRAND,
  },
  {
    stage: 'AI GENERATES',
    title: 'AI outputs are created in parallel',
    description: 'Scripts, voice-overs, b-roll, and music generated automatically',
    details: ['Script generated in 8s', 'Multi-language voice-overs', 'Cinematic b-roll options', 'Custom music score'],
    color: '#8b5cf6',
  },
  {
    stage: 'SHOOT',
    title: 'Real-world production happens',
    description: 'Crew dispatched, talent coordinated, footage captured',
    details: ['Location scouts deployed', 'Talent coordination', 'Real production in parallel with AI'],
    color: '#22c55e',
  },
  {
    stage: 'DELIVER',
    title: 'Final delivery and approval',
    description: 'Hero video + cutdowns, asset delivery, approval workflows',
    details: ['Hero video + 3 cutdowns', 'All assets delivered', 'Quality assurance complete'],
    color: '#f97316',
  },
]

export default function VideoCreationAgent() {
  const [ready, setReady] = useState(false)
  const [capRef, capVis] = useVisibility()
  const [workflowRef, workflowVis] = useVisibility()
  const [journeyRef, journeyVis] = useVisibility()
  const [ctaRef, ctaVis] = useVisibility()

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', color: '#fff' }}>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 800, background: `radial-gradient(circle, ${BRAND}15, transparent 60%)`, filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 800, opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: `linear-gradient(135deg, ${BRAND}20, ${BRAND}05)`, border: `1px solid ${BRAND}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, boxShadow: `0 0 60px ${BRAND}20` }}>
              <span style={{ fontSize: 36, filter: `drop-shadow(0 0 20px ${BRAND})` }}>⚡</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BRAND}15`, padding: '6px 14px', borderRadius: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 12, color: BRAND, fontWeight: 600, letterSpacing: '0.05em' }}>AI ORCHESTRATION</span>
            </div>

            <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 24 }}>
              Video Creation<br />Agent
            </h1>

            <p style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: BRAND, fontWeight: 500, marginBottom: 24 }}>
              From brief to plan in minutes.
            </p>

            <p style={{ fontSize: 18, color: '#a1a1aa', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
              An AI-led planning and orchestration agent that turns a brief into a production-ready execution plan. It reads your brief, decides what's AI-generated vs human-shot, and defines crew, locations, assets, timeline, and deliverables.
            </p>

            <div style={{ display: 'flex', gap: 16 }}>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: 16, boxShadow: `0 0 40px ${BRAND}20` }}>Start planning</button>
              <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: 16 }}>See demo</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 64, marginTop: 80, opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s' }}>
            {metrics.map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{m.value}</div>
                <div style={{ fontSize: 14, color: '#71717a' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey - From Brief to Delivery */}
      <section ref={journeyRef as React.RefObject<HTMLElement>} style={{ padding: '120px 48px', background: '#06060a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', opacity: journeyVis ? 1 : 0, transform: journeyVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{ fontSize: 13, color: BRAND_LIGHT, fontWeight: 600, letterSpacing: '0.15em', display: 'block', marginBottom: 16 }}>THE JOURNEY</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>From Brief to Delivery</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto' }}>Follow the journey of a video from a single prompt to final delivery.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {journeyStages.map((stage, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: 40,
                  opacity: journeyVis ? 1 : 0,
                  transform: journeyVis ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s ease ${0.2 + i * 0.15}s`,
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: stage.color, fontWeight: 700, letterSpacing: '0.15em', marginBottom: 8 }}>{stage.stage}</div>
                  <div style={{ width: 4, height: 60, background: `linear-gradient(180deg, ${stage.color}, ${stage.color}30)`, marginLeft: 'auto', borderRadius: 2 }} />
                </div>
                <div style={{ background: `linear-gradient(135deg, ${stage.color}10, transparent)`, border: `1px solid ${stage.color}25`, borderRadius: 20, padding: 32 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{stage.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>{stage.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {stage.details.map((detail, j) => (
                      <span key={j} style={{ padding: '6px 12px', background: `${stage.color}15`, borderRadius: 8, fontSize: 13, color: stage.color }}>{detail}</span>
                    ))}
                  </div>
                  {stage.tasks && (
                    <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                      {stage.tasks.map((task, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: stage.color }} />
                          {task}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capRef as React.RefObject<HTMLElement>} style={{ padding: '120px 48px', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', opacity: capVis ? 1 : 0, transform: capVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: 13, color: BRAND, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 16 }}>CAPABILITIES</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>What it does</h2>
              <p style={{ fontSize: 17, color: '#a1a1aa', lineHeight: 1.7 }}>
                The Video Creation Agent is your AI planning partner. It ingests creative briefs, analyzes requirements, and produces comprehensive production plans that orchestrate every downstream system.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  style={{
                    background: '#111118',
                    border: '1px solid #27272a',
                    borderRadius: 16,
                    padding: 28,
                    opacity: capVis ? 1 : 0,
                    transform: capVis ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                  }}
                >
                  <div style={{ fontSize: 24, color: BRAND, marginBottom: 16 }}>{cap.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{cap.title}</h3>
                  <p style={{ fontSize: 14, color: '#71717a', lineHeight: 1.5 }}>{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section ref={workflowRef as React.RefObject<HTMLElement>} style={{ padding: '120px 48px', background: '#06060a' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', opacity: workflowVis ? 1 : 0, transform: workflowVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 13, color: BRAND, fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: 16 }}>HOW IT WORKS</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Brief to plan in four steps</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {workflow.map((step, i) => (
              <div
                key={step.step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 32,
                  padding: '40px 0',
                  borderBottom: i < workflow.length - 1 ? '1px solid #27272a' : 'none',
                  opacity: workflowVis ? 1 : 0,
                  transform: workflowVis ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                }}
              >
                <div style={{ fontSize: 48, fontWeight: 700, color: BRAND, opacity: 0.3 }}>{step.step}</div>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} style={{ padding: '140px 48px', background: '#0a0a0f', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: `radial-gradient(circle, ${BRAND}15, transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, opacity: ctaVis ? 1 : 0, transform: ctaVis ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s' }}>
          <div style={{ width: 80, height: 80, borderRadius: 20, background: `${BRAND}15`, border: `1px solid ${BRAND}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <span style={{ fontSize: 36 }}>⚡</span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24 }}>Ready to plan faster?</h2>
          <p style={{ fontSize: 20, color: '#a1a1aa', marginBottom: 48, lineHeight: 1.6 }}>Turn your next brief into a production-ready plan in minutes, not weeks.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '16px 36px', fontSize: 16, boxShadow: `0 0 40px ${BRAND}20` }}>Get started free</button>
            <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: 16 }}>Talk to sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: 48, background: '#06060a', borderTop: '1px solid #27272a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>90 Seconds</span>
            <span style={{ color: '#71717a' }}>/</span>
            <span style={{ fontSize: 14, color: BRAND }}>Video Creation Agent</span>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            <a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>Documentation</a>
            <a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>API Reference</a>
            <a href="#" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Softer, more refined color palette
const products = [
  { name: 'Video Creation Agent', path: '/video-creation-agent', color: '#C9A0FF' },
  { name: 'Enterprise Platform', path: '/enterprise-platform', color: '#6B9FFF' },
  { name: 'The Agency', path: '/agency', color: '#FF9DB3' },
  { name: 'Content Agent', path: '/content-agent', color: '#7DD3E8' },
  { name: 'Customer Story', path: '/customer-story', color: '#F0A878' },
  { name: 'Real Shoots', path: '/real-shoots', color: '#4EDBA0' },
  { name: '90 AI Studio', path: '/ai-studio', color: '#A78BFA' },
  { name: 'Creator Pro', path: '/creator-pro', color: '#FBBF24' },
  { name: 'Affiliate', path: '/affiliate', color: '#5EEAD4' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setProductsOpen(false)
  }, [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        background: scrolled ? 'rgba(12, 11, 14, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'all 0.35s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="/logo-white.png" alt="90 Seconds" style={{ height: 24 }} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 13,
                fontWeight: 420,
                padding: '8px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              Products
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                style={{
                  transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              >
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>

            {productsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: -8,
                  marginTop: 4,
                  background: 'rgba(18, 17, 22, 0.96)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: 8,
                  minWidth: 220,
                  boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 12px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: product.color,
                      }}
                    />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 450 }}>{product.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {['About', 'Enterprise', 'Creators'].map((item) => (
            <Link
              key={item}
              to={item === 'About' ? '/about' : '#'}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 13,
                fontWeight: 420,
                padding: '8px 12px',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a
          href="#"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 13,
            fontWeight: 420,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
        >
          Log in
        </a>
        <button
          style={{
            background: '#fff',
            color: '#0c0b0e',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Get started
        </button>
      </div>
    </header>
  )
}

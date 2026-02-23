import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const products = [
  { name: 'Video Creation Agent', path: '/video-creation-agent', color: '#a855f7' },
  { name: 'Enterprise Platform', path: '/enterprise-platform', color: '#3b82f6' },
  { name: 'The Agency', path: '/agency', color: '#ec4899' },
  { name: 'Content Agent', path: '/content-agent', color: '#22d3ee' },
  { name: 'Customer Story', path: '/customer-story', color: '#f97316' },
  { name: 'Real Shoots', path: '/real-shoots', color: '#22c55e' },
  { name: '90 AI Studio', path: '/ai-studio', color: '#8b5cf6' },
  { name: 'Creator Pro', path: '/creator-pro', color: '#fbbf24' },
  { name: 'Affiliate', path: '/affiliate', color: '#14b8a6' },
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

  // Close dropdown on route change
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
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: scrolled ? 'rgba(3,3,3,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #222' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>90</span>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            90 Seconds
          </span>
        </Link>

        {/* Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Products Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: '#a1a1aa',
                fontSize: 14,
                fontWeight: 500,
                padding: '10px 16px',
                borderRadius: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Dropdown */}
            {productsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: 8,
                  background: 'rgba(10, 10, 10, 0.98)',
                  border: '1px solid #222',
                  borderRadius: 16,
                  padding: 12,
                  minWidth: 280,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 16px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: product.color,
                          boxShadow: `0 0 10px ${product.color}50`,
                        }}
                      />
                      <span style={{ fontSize: 14, color: 'white', fontWeight: 500 }}>{product.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            style={{
              color: '#a1a1aa',
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
          >
            About
          </Link>

          <a
            href="#"
            style={{
              color: '#a1a1aa',
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
          >
            Enterprise
          </a>

          <a
            href="#"
            style={{
              color: '#a1a1aa',
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 16px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
          >
            Developers
          </a>
        </nav>
      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a
          href="#"
          style={{
            color: '#a1a1aa',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
        >
          Log in
        </a>
        <button className="btn-primary" style={{ fontSize: 14 }}>
          Get started
        </button>
      </div>
    </header>
  )
}

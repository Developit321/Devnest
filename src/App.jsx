import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from './components/ContactModal'
import { useLanguage } from './context/LanguageContext'
import { INVITABLE_SITE_URL, CONTACT_EMAIL } from './constants/site'

// Icons
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="15" y2="10"/>
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

// Close Icon for mobile menu
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

// Header Component - Transparent overlay style for hero
function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const { t } = useLanguage()

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container header-content">
          <nav className="nav-left">
            <a href="#mission" className="nav-link">{t('nav.mission')}</a>
            <a href="#features" className="nav-link">{t('nav.impact')}</a>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
          </nav>
          
          <a href="/" className="logo">Devnest</a>
          
          <nav className="nav-right">
            <button className="nav-link nav-link-btn" onClick={() => setShowContactModal(true)}>{t('footer.contactUs')}</button>
            <a href="#features" className="nav-btn">{t('nav.getApp')}</a>
          </nav>
          
          <button className="mobile-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-menu-nav">
            <a href="#mission" className="mobile-nav-link" onClick={closeMenu}>{t('nav.mission')}</a>
            <a href="#features" className="mobile-nav-link" onClick={closeMenu}>{t('nav.impact')}</a>
            <button className="mobile-nav-link mobile-nav-link-btn" onClick={() => { closeMenu(); setShowContactModal(true); }}>{t('footer.contactUs')}</button>
            <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>{t('nav.about')}</Link>
            <a href="#features" className="btn-download mobile-cta" onClick={closeMenu}>{t('nav.getApp')}</a>
          </nav>
        </div>
      </header>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  )
}

// Full-Screen Hero Section (Hinge-style)
function HeroFull() {
  const { t } = useLanguage()
  
  return (
    <section className="hero-full">
      <div className="hero-image">
        <img src="/hero.png" alt="People connecting in everyday life" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-tagline">
        <h1>{t('hero.tagline')}<br/>{t('hero.tagline2')}</h1>
      </div>
      <div className="scroll-indicator">
        <ChevronDown />
      </div>
    </section>
  )
}

// Secondary Hero Section (Bumble-style - now second)
function HeroSecondary() {
  const { t } = useLanguage()
  
  return (
    <section className="hero-secondary" id="mission">
      <div className="container">
        <div className="hero-content">
          <div className="hero-images">
            <div className="photo-card large">
              <img 
                src="/secondhero1.png" 
                alt="Person smiling outdoors"
              />
              <span className="interest-tag">Tables</span>
            </div>
            <div className="photo-card medium">
              <img 
                src="/coffee.png" 
                alt="Person running"
              />
              <span className="interest-tag">Events</span>
            </div>
            <div className="photo-card small">
              <img 
                src="/boy.png" 
                alt="Person with dog"
              />
              <span className="interest-tag">Local</span>
            </div>
          </div>
          
          <div className="hero-text">
            <h2>{t('hero.secondaryTitle')}</h2>
            <p>{t('hero.secondaryText')}</p>
            <div className="hero-buttons">
              <a href="#features" className="btn-download">
                {t('nav.getApp')}
              </a>
              <a href={INVITABLE_SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-download-outline">
                {t('hero.download')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: <LocationIcon />,
      title: t('features.nearby.title'),
      description: t('features.nearby.desc')
    },
    {
      icon: <ShieldIcon />,
      title: t('features.consent.title'),
      description: t('features.consent.desc')
    },
    {
      icon: <ChatIcon />,
      title: t('features.connection.title'),
      description: t('features.connection.desc')
    },
    {
      icon: <HeartIcon />,
      title: t('features.invitable.title'),
      description: t('features.invitable.desc')
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>{t('features.title')}</h2>
          <p>{t('features.subtitle')}</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Full-Width Image Section (like Hinge's second image)
function ImageSection() {
  return (
    <section className="image-section">
      <img 
        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600&h=900&fit=crop" 
        alt="Group sharing a meal together"
      />
    </section>
  )
}

// How It Works Section
function HowItWorks() {
  const { t } = useLanguage()
  
  const steps = [
    {
      number: 1,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc')
    },
    {
      number: 2,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc')
    },
    {
      number: 3,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc')
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>{t('howItWorks.title')}</h2>
          <p>{t('howItWorks.subtitle')}</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      content: t('testimonials.quote1'),
      author: "Alex",
      age: 27,
      initial: "A"
    },
    {
      content: t('testimonials.quote2'),
      author: "Jordan",
      age: 24,
      initial: "J"
    },
    {
      content: t('testimonials.quote3'),
      author: "Sam",
      age: 29,
      initial: "S"
    }
  ]

  const stats = [
    { number: "1", label: t('testimonials.stats.flagship') },
    { number: "18+", label: t('testimonials.stats.age') },
    { number: "SA", label: t('testimonials.stats.region') },
    { number: "2025", label: t('testimonials.stats.founded') }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initial}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>Age {testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  const { t } = useLanguage()
  
  return (
    <section className="cta-section" id="download">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-download">
            {t('footer.contactUs')}
          </a>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useLanguage()

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ]

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.subtitle')}</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <span className="faq-icon">
                  <ChevronDown />
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Globe Icon for language
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

// Footer
function Footer() {
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' }
  ]
  
  const currentLangName = languages.find(l => l.code === language)?.name || 'English'

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="/" className="logo">Devnest</a>
              <p>{t('footer.tagline')}</p>
              <div className="language-selector">
                <button 
                  className="lang-btn" 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  aria-label="Select language"
                >
                  <GlobeIcon />
                  <span>{currentLangName}</span>
                  <ChevronDown />
                </button>
                {showLangMenu && (
                  <div className="lang-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`lang-option ${language === lang.code ? 'active' : ''}`}
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLangMenu(false)
                        }}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <ul className="footer-links">
                <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.legal')}</h4>
              <ul className="footer-links">
                <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
                <li><Link to="/terms">{t('footer.terms')}</Link></li>
                <li><Link to="/cookies">{t('footer.cookies')}</Link></li>
                <li><Link to="/safety">{t('footer.safety')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.support')}</h4>
              <ul className="footer-links">
                <li><button className="link-btn" onClick={() => setShowContactModal(true)}>{t('footer.contactUs')}</button></li>
                <li><a href="#faq">{t('footer.faqs')}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
            <a href={INVITABLE_SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-download">{t('nav.getApp')}</a>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  )
}

// Main App
function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <HeroFull />
      <HeroSecondary />
      <Features />
      <ImageSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

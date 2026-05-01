import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { INVITABLE_SITE_URL, CONTACT_EMAIL } from '../constants/site'

function AboutUs() {
  const { t } = useLanguage()
  
  const values = [
    {
      title: t('about.value1Title'),
      description: t('about.value1Desc')
    },
    {
      title: t('about.value2Title'),
      description: t('about.value2Desc')
    },
    {
      title: t('about.value3Title'),
      description: t('about.value3Desc')
    },
    {
      title: t('about.value4Title'),
      description: t('about.value4Desc')
    }
  ]

  const stats = [
    { number: "1", label: t('about.stats.users') },
    { number: "SA", label: t('about.stats.matches') },
    { number: "✓", label: t('about.stats.safer') },
    { number: "2025", label: t('about.stats.founded') }
  ]

  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <div className="container header-content">
          <Link to="/" className="logo">Devnest</Link>
          <nav className="about-nav">
            <Link to="/" className="nav-link">{t('common.backToHome').replace('← ', '')}</Link>
            <a href={INVITABLE_SITE_URL} target="_blank" rel="noopener noreferrer" className="btn-download-sm">{t('nav.getApp')}</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-badge">{t('about.badge')}</span>
            <h1>{t('about.heroTitle')}</h1>
            <p>{t('about.heroText')}</p>
          </div>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop" 
            alt="Friends laughing together"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop" 
                alt="Couple sharing a moment"
              />
            </div>
            <div className="story-content">
              <h2>{t('about.storyTitle')}</h2>
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
              <p>{t('about.storyP3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.valuesTitle')}</h2>
            <p>{t('about.valuesSubtitle')}</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="mission-label">{t('about.missionLabel')}</span>
              <h2>{t('about.missionTitle')}</h2>
              <p>{t('about.missionText')}</p>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&h=800&fit=crop" 
                alt="Couple walking together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <a 
              href={INVITABLE_SITE_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-download"
            >
              {t('nav.getApp')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link to="/" className="logo">Devnest</Link>
              <p>{t('footer.tagline')}</p>
            </div>
            <div className="footer-links-row">
              <Link to="/privacy">{t('footer.privacy')}</Link>
              <Link to="/terms">{t('footer.terms')}</Link>
              <Link to="/safety">{t('footer.safety')}</Link>
              <a href={`mailto:${CONTACT_EMAIL}`}>{t('footer.contact')}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs

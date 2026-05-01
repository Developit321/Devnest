import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <p>
            {t('cookie.message')} <Link to="/cookies">{t('cookie.policy')}</Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn-cookie-decline" onClick={declineCookies}>
            {t('cookie.decline')}
          </button>
          <button className="btn-cookie-accept" onClick={acceptCookies}>
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

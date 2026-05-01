import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { INVITABLE_SITE_URL } from '../constants/site'

function NotFound() {
  const { t } = useLanguage()
  
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>{t('notFound.title')}</h1>
        <h2>{t('notFound.heading')}</h2>
        <p>{t('notFound.text')}</p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">{t('notFound.backHome')}</Link>
          <a 
            href={INVITABLE_SITE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            {t('notFound.getApp')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound

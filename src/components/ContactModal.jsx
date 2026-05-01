import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { CONTACT_EMAIL } from '../constants/site'

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

function ContactModal({ isOpen, onClose }) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Open email client as fallback
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <CloseIcon />
        </button>
        
        <div className="modal-header">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        {submitted ? (
          <div className="contact-success">
            <div className="success-icon">✓</div>
            <h3>{t('contact.successTitle')}</h3>
            <p>{t('contact.successMessage')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.selectSubject')}</option>
                <option value="General Inquiry">{t('contact.subjectGeneral')}</option>
                <option value="Support">{t('contact.subjectSupport')}</option>
                <option value="Feedback">{t('contact.subjectFeedback')}</option>
                <option value="Partnership">{t('contact.subjectPartnership')}</option>
                <option value="Other">{t('contact.subjectOther')}</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                rows="5"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        )}
        
        <div className="contact-alt">
          <p>{t('contact.orEmail')} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal




















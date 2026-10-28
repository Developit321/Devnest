import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext.jsx'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import SafetyTips from './pages/SafetyTips.jsx'
import AboutUs from './pages/AboutUs.jsx'
import KinSupport from './pages/KinSupport.jsx'
import KinPrivacy from './pages/KinPrivacy.jsx'
import KinDeleteAccount from './pages/KinDeleteAccount.jsx'
import NotFound from './pages/NotFound.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/safety" element={<SafetyTips />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/kin/support" element={<KinSupport />} />
          <Route path="/kin/privacy" element={<KinPrivacy />} />
          <Route path="/kin/delete-account" element={<KinDeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)

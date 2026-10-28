/** Devnest product-lab site constants */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.trim() || 'https://devnest.uk'

export const COMPANY_NAME =
  import.meta.env.VITE_COMPANY_NAME?.trim() || 'Devnest'

export const COMPANY_SITE_URL =
  import.meta.env.VITE_COMPANY_SITE_URL?.trim() || SITE_URL

export const FLAGSHIP_PRODUCT_NAME =
  import.meta.env.VITE_FLAGSHIP_PRODUCT_NAME?.trim() || 'Invitable'

export const INVITABLE_SITE_URL =
  import.meta.env.VITE_INVITABLE_SITE_URL?.trim() || 'https://invitable.uk'

export const IOS_APP_STORE_URL =
  import.meta.env.VITE_IOS_APP_STORE_URL?.trim() ||
  'https://apps.apple.com/za/app/invitable-social-activities/id6757788238'

export const ANDROID_BETA_URL =
  import.meta.env.VITE_ANDROID_BETA_SIGNUP_URL?.trim() ||
  'https://groups.google.com/g/invitable'

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'support@invitable.uk'

/** Kin (location circle app) — use for App Store / Play support & privacy URLs */
export const KIN_PRODUCT_NAME =
  import.meta.env.VITE_KIN_PRODUCT_NAME?.trim() || 'Kin'

export const KIN_SUPPORT_EMAIL =
  import.meta.env.VITE_KIN_SUPPORT_EMAIL?.trim() || 'support@devnest.uk'

export const KIN_API_URL =
  import.meta.env.VITE_KIN_API_URL?.trim() || 'https://kin.devnest.uk'

export const COMPANY_LEGAL_NAME = 'Devnest (Pty) Ltd'

/** Registered address, update when final for filings */
export const COMPANY_ADDRESS_PLACEHOLDER =
  'Devnest (Pty) Ltd, contact for registered office address'

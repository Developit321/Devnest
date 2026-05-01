import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  CONTACT_EMAIL,
  INVITABLE_SITE_URL,
  COMPANY_LEGAL_NAME,
  COMPANY_ADDRESS_PLACEHOLDER
} from '../constants/site'

function TermsOfService() {
  const { t, language } = useLanguage()
  const isJa = language === 'ja'

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="logo">Devnest</Link>
        </div>
      </header>

      <main className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <h1>{t('terms.title')}</h1>
            <p className="last-updated">{t('common.lastUpdated')}: May 1, 2026</p>

            <section>
              <h2>{isJa ? '1. 規約への同意' : '1. Acceptance'}</h2>
              <p>{t('terms.intro')}</p>
            </section>

            <section>
              <h2>{isJa ? '2. サイトの利用' : '2. Use of this website'}</h2>
              <p>
                {isJa
                  ? '本サイトの情報は参考目的で提供されます。内容は予告なく変更される場合があります。'
                  : 'Information on this site is provided for general information and may change without notice.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '3. 知的財産' : '3. Intellectual property'}</h2>
              <p>
                {isJa
                  ? '本サイトの文章、デザイン、ロゴ、商標はDevnestまたはライセンサーに帰属します。無断複製や再配布を禁じます。'
                  : 'Text, design, logos, and trademarks on this site belong to Devnest or its licensors. Do not copy or redistribute without permission.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '4. 第三者リンク' : '4. Third-party links'}</h2>
              <p>
                {isJa
                  ? `本サイトは ${INVITABLE_SITE_URL} など外部サイトへリンクする場合があります。各サイトの規約とポリシーが適用されます。`
                  : `We may link to third-party sites such as ${INVITABLE_SITE_URL}. Their terms and policies apply when you leave this site.`}
              </p>
            </section>

            <section>
              <h2>{isJa ? '5. 免責事項' : '5. Disclaimer'}</h2>
              <p>
                {isJa
                  ? '本サイトは「現状有姿」で提供されます。可能な限り正確であるよう努めますが、完全性や特定目的への適合性を保証しません。'
                  : 'This site is provided “as is.” We strive for accuracy but do not warrant completeness or fitness for a particular purpose.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '6. 責任の制限' : '6. Limitation of liability'}</h2>
              <p>
                {isJa
                  ? '法律で許される最大限の範囲で、本サイトの利用に起因する間接損害について当社は責任を負いません。'
                  : 'To the maximum extent permitted by law, Devnest is not liable for indirect damages arising from use of this website.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '7. 準拠法' : '7. Governing law'}</h2>
              <p>
                {isJa
                  ? '本規約は、Devnestの設立法域の法律に準拠します（詳細は紛争時にご案内します）。'
                  : 'These Terms are governed by the laws applicable to Devnest (Pty) Ltd, subject to mandatory consumer protections in your region.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '8. お問い合わせ' : '8. Contact'}</h2>
              <p>
                {isJa ? '本規約に関するお問い合わせ：' : 'Questions about these Terms:'}
              </p>
              <p>
                <strong>{isJa ? 'メール：' : 'Email:'}</strong>{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <br />
                <strong>{isJa ? '事業者：' : 'Entity:'}</strong> {COMPANY_LEGAL_NAME}
                <br />
                <strong>{isJa ? '住所：' : 'Address:'}</strong> {COMPANY_ADDRESS_PLACEHOLDER}
              </p>
            </section>

            <Link to="/" className="back-link">{t('common.backToHome')}</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TermsOfService

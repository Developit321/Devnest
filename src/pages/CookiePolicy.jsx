import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  CONTACT_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_ADDRESS_PLACEHOLDER
} from '../constants/site'

function CookiePolicy() {
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
            <h1>{t('footer.cookies')}</h1>
            <p className="last-updated">{t('common.lastUpdated')}: May 1, 2026</p>

            <section>
              <h2>{isJa ? '1. クッキーとは？' : '1. What are cookies?'}</h2>
              <p>
                {isJa
                  ? 'クッキーは、ウェブサイト訪問時にブラウザに保存される小さなテキストファイルです。言語の記憶や利用状況の把握に使われます。'
                  : 'Cookies are small text files stored in your browser when you visit a site. They can remember preferences and help us understand usage.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '2. Devnestの使用目的' : '2. How Devnest uses cookies'}</h2>
              <p>
                {isJa
                  ? 'Devnestは本サイト（会社サイト）において、次の目的でクッキーおよび類似技術を使用する場合があります：'
                  : 'On this Devnest company website, we may use cookies and similar technologies to:'}
              </p>
              <ul>
                <li>
                  <strong>{isJa ? '必須：' : 'Essential:'}</strong>{' '}
                  {isJa ? 'セキュリティ、負荷分散、フォーム送信の安定動作' : 'Security, load balancing, and reliable form behavior'}
                </li>
                <li>
                  <strong>{isJa ? '設定：' : 'Preferences:'}</strong>{' '}
                  {isJa ? '言語選択などの記憶' : 'Remember choices such as language'}
                </li>
                <li>
                  <strong>{isJa ? '分析：' : 'Analytics:'}</strong>{' '}
                  {isJa ? '集計されたトラフィックの理解（例：ページビュー）' : 'Understand aggregate traffic (e.g. page views)'}
                </li>
              </ul>
            </section>

            <section>
              <h2>{isJa ? '3. 管理方法' : '3. Managing cookies'}</h2>
              <p>
                {isJa
                  ? 'ブラウザの設定でクッキーを削除またはブロックできます。ブロックすると一部機能が制限される場合があります。'
                  : 'You can delete or block cookies in your browser settings. Blocking some cookies may limit certain features.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '4. 本ポリシーの更新' : '4. Updates'}</h2>
              <p>
                {isJa
                  ? '慣行や法規制の変更に伴い、本ポリシーを更新することがあります。'
                  : 'We may update this Cookie Policy when our practices or regulations change.'}
              </p>
            </section>

            <section>
              <h2>{isJa ? '5. お問い合わせ' : '5. Contact'}</h2>
              <p>
                {isJa ? 'クッキーに関するご質問：' : 'Questions about cookies:'}
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

export default CookiePolicy

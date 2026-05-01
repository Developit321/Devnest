import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  CONTACT_EMAIL,
  INVITABLE_SITE_URL,
  COMPANY_LEGAL_NAME,
  COMPANY_ADDRESS_PLACEHOLDER
} from '../constants/site'

function PrivacyPolicy() {
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
            <h1>{t('privacy.title')}</h1>
            <p className="last-updated">{t('common.lastUpdated')}: May 1, 2026</p>

            <section>
              <h2>{t('privacy.sections.s1Title')}</h2>
              <p>{t('privacy.intro')}</p>
              <p>
                {isJa
                  ? `Invitableアプリ利用者向けの詳細は ${INVITABLE_SITE_URL} のポリシーをご確認ください。`
                  : `For details about the Invitable mobile application, please also review the policies linked from ${INVITABLE_SITE_URL}.`}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s2Title')}</h2>
              <h3>{t('privacy.sections.s2Sub1')}</h3>
              <ul>
                <li>
                  <strong>{isJa ? 'お問い合わせ：' : 'Contact inquiries:'}</strong>{' '}
                  {isJa
                    ? 'お名前、メールアドレス、メッセージの内容'
                    : 'Name, email address, and message content when you contact us'}
                </li>
              </ul>
              <h3>{t('privacy.sections.s2Sub2')}</h3>
              <ul>
                <li>
                  <strong>{isJa ? '利用データ：' : 'Usage data:'}</strong>{' '}
                  {isJa
                    ? 'ページ閲覧、言語設定、おおよその地域（クッキーまたは類似技術経由）'
                    : 'Pages viewed, language preference, approximate region (via cookies or similar technologies)'}
                </li>
                <li>
                  <strong>{isJa ? 'デバイス：' : 'Device:'}</strong>{' '}
                  {isJa
                    ? 'ブラウザの種類、参照元、タイムスタンプ'
                    : 'Browser type, referrer, and timestamps'}
                </li>
              </ul>
            </section>

            <section>
              <h2>{t('privacy.sections.s3Title')}</h2>
              <p>{isJa ? '当社は次の目的で情報を使用します：' : 'We use information to:'}</p>
              <ul>
                <li>{isJa ? 'サイトの提供と改善' : 'Operate and improve this website'}</li>
                <li>{isJa ? 'お問い合わせへの対応' : 'Respond to inquiries you send us'}</li>
                <li>{isJa ? 'トラフィックと利用傾向の分析（集計レベル）' : 'Analyze traffic and usage trends in aggregate'}</li>
                <li>{isJa ? '法令遵守と不正防止' : 'Comply with law and help prevent abuse'}</li>
              </ul>
            </section>

            <section>
              <h2>{t('privacy.sections.s4Title')}</h2>
              <p>
                {isJa
                  ? '当社は個人情報を販売しません。ホスティングや分析など、サービス提供に必要な処理者と限定的に共有する場合があります。'
                  : 'We do not sell your personal information. We may share limited data with processors who help us host or analyze the site, under appropriate safeguards.'}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s5Title')}</h2>
              <p>{isJa ? '該当する法域に応じて、次の権利がある場合があります：' : 'Depending on your jurisdiction, you may have the right to:'}</p>
              <ul>
                <li>{isJa ? '保有データへのアクセス' : 'Access personal data we hold'}</li>
                <li>{isJa ? '訂正または削除の請求' : 'Request correction or deletion'}</li>
                <li>{isJa ? '処理への異議' : 'Object to certain processing'}</li>
              </ul>
            </section>

            <section>
              <h2>{t('privacy.sections.s6Title')}</h2>
              <p>
                {isJa
                  ? '合理的な保護措置を講じますが、インターネット上の送信が完全に安全であるとは限りません。'
                  : 'We use reasonable safeguards. No method of transmission over the Internet is completely secure.'}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s7Title')}</h2>
              <p>
                {isJa
                  ? '問い合わせの対応や法令遵守のために必要な期間、情報を保持します。'
                  : 'We retain information only as long as needed to respond to inquiries and meet legal obligations.'}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s8Title')}</h2>
              <p>
                {isJa
                  ? '本サイトは13歳未満を対象としていません。児童から意図せず情報を収集した場合は削除します。'
                  : 'This site is not directed to children under 13. If we learn we have collected information from a child, we will delete it.'}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s9Title')}</h2>
              <p>
                {isJa
                  ? '本ポリシーを更新する場合、本ページに掲載し、最終更新日を改めます。'
                  : 'We may update this policy by posting changes on this page and updating the “Last updated” date.'}
              </p>
            </section>

            <section>
              <h2>{t('privacy.sections.s10Title')}</h2>
              <p>
                {isJa ? 'ご質問は次まで：' : 'Questions? Contact us at:'}
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

export default PrivacyPolicy

import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  COMPANY_LEGAL_NAME,
  KIN_PRODUCT_NAME,
  KIN_SUPPORT_EMAIL,
} from '../constants/site'

function KinSupport() {
  const { t, language } = useLanguage()
  const isJa = language === 'ja'
  const mailto = `mailto:${KIN_SUPPORT_EMAIL}?subject=${encodeURIComponent(`${KIN_PRODUCT_NAME} Support`)}`

  const faqs = isJa
    ? [
        {
          q: '誰が私の位置情報を見られますか？',
          a: '共有がオンになっているサークルのメンバーだけです。設定で共有をオフにすると、新しい位置の送信は止まります。',
        },
        {
          q: '画面がロックされていても Kin は動きますか？',
          a: '共有がオンで、位置情報が「常に」に設定されている場合は動きます。',
        },
        {
          q: 'SOS は緊急通報しますか？',
          a: 'いいえ。SOS はサークルのメンバーに位置付きアラートを送ります。緊急時は地域の緊急番号に電話してください。',
        },
        {
          q: '共有を止める・サークルを退出するには？',
          a: '設定に共有スイッチと「サークルを退出」があります。サインアウトするとこの端末から Kin が外れます。',
        },
      ]
    : [
        {
          q: 'Who can see my location?',
          a: 'Only people in a circle where your sharing is turned on. Turn it off in Settings and new points stop.',
        },
        {
          q: 'Does Kin work while my phone is locked?',
          a: 'Yes, when sharing is on and Location is set to Always.',
        },
        {
          q: 'Does SOS call emergency services?',
          a: 'No. SOS alerts people in your circle with your location. If you need emergency help, call your local emergency number.',
        },
        {
          q: 'How do I stop sharing or leave a circle?',
          a: 'Settings has the sharing switch and Leave circle. Sign out removes Kin from this phone.',
        },
      ]

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="logo">
            Devnest
          </Link>
        </div>
      </header>

      <main className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <p className="about-badge">{KIN_PRODUCT_NAME}</p>
            <h1>{isJa ? 'サポート' : 'Support'}</h1>
            <p className="last-updated">
              {isJa
                ? `${KIN_PRODUCT_NAME}（Devnest）のヘルプとお問い合わせ`
                : `Help and contact for ${KIN_PRODUCT_NAME} by Devnest`}
            </p>

            <section>
              <h2>{isJa ? 'お問い合わせ' : 'Contact us'}</h2>
              <p>
                {isJa
                  ? 'アカウント、位置共有、通知、課金、その他アプリの問題は、次のメールまでご連絡ください。通常数営業日以内に返信します。'
                  : 'For account help, location sharing, notifications, billing, or anything else in the app, email us. We aim to reply within a few business days.'}
              </p>
              <p>
                <strong>{isJa ? 'メール：' : 'Email:'}</strong>{' '}
                <a href={mailto}>{KIN_SUPPORT_EMAIL}</a>
                <br />
                <strong>{isJa ? '事業者：' : 'Developer:'}</strong> {COMPANY_LEGAL_NAME}
              </p>
              <p>
                <a href={mailto} className="btn-download">
                  {isJa ? 'サポートにメールする' : 'Email support'}
                </a>
              </p>
            </section>

            <section>
              <h2>{isJa ? 'メールに含めてほしい情報' : 'What to include'}</h2>
              <ul>
                <li>
                  {isJa
                    ? 'サインインに使っているメール（Apple / Google）'
                    : 'The email you use to sign in (Apple or Google)'}
                </li>
                <li>
                  {isJa ? '端末（iPhone / Android）と OS のバージョン' : 'Device (iPhone or Android) and OS version'}
                </li>
                <li>
                  {isJa ? 'アプリのバージョン（わかる場合）' : 'App version, if you know it'}
                </li>
                <li>
                  {isJa
                    ? '何が起きているか、再現手順の短い説明'
                    : 'A short description of what happened and the steps to reproduce it'}
                </li>
              </ul>
            </section>

            <section>
              <h2>{isJa ? 'よくある質問' : 'Common questions'}</h2>
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </section>

            <section>
              <h2>{isJa ? 'プライバシーとアカウント削除' : 'Privacy & account deletion'}</h2>
              <p>
                {isJa ? (
                  <>
                    Kin が保存するデータは{' '}
                    <Link to="/kin/privacy">プライバシーポリシー</Link>
                    。アカウント削除の手順は{' '}
                    <Link to="/kin/delete-account">アカウント削除</Link> をご覧ください。
                  </>
                ) : (
                  <>
                    See the <Link to="/kin/privacy">Kin Privacy Policy</Link> for what the app
                    stores, and <Link to="/kin/delete-account">Delete account</Link> for how to
                    remove your account and data.
                  </>
                )}
              </p>
            </section>

            <Link to="/" className="back-link">
              {t('common.backToHome')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default KinSupport

import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  COMPANY_LEGAL_NAME,
  KIN_PRODUCT_NAME,
  KIN_SUPPORT_EMAIL,
} from '../constants/site'

function KinPrivacy() {
  const { t, language } = useLanguage()
  const isJa = language === 'ja'
  const mailto = `mailto:${KIN_SUPPORT_EMAIL}?subject=${encodeURIComponent(`${KIN_PRODUCT_NAME} Privacy`)}`

  const sections = isJa
    ? [
        {
          title: 'アカウント',
          body: 'Apple または Google でサインインします。Kin は名前、それらのサービスが提供するメール、および Apple / Google が割り当てる識別子を保存します。Kin 独自のパスワードは使いません。',
        },
        {
          title: '位置情報',
          body: 'サークルで共有がオンの間、Kin はそのサークルに位置を送ります。「常に」位置情報の場合、画面ロック中も続きます。Kin を強制停止すると、再度アプリを開くまで更新は止まります。設定で共有をオフにすると送信が止まります。',
        },
        {
          title: '場所・アラート・履歴',
          body: 'ピン留めした場所には名前、地図上の点、半径が保存されます。到着・退出・チェックイン・SOS アラートは、メンバー名、時刻、場所（ある場合）とともに保存されます。サークルが軌跡を見られるよう、最近の位置点も保存します。',
        },
        {
          title: '通知',
          body: '通知を許可すると、到着・退出・チェックイン・SOS アラートを届けるため、この端末のプッシュトークンを保存します。',
        },
        {
          title: '誰が見られるか',
          body: 'サークルのメンバーは、あなたがメンバーで共有がオンの間、共有位置・場所・アラートを見られます。Kin は位置情報を販売しません。サインアウトするとこの端末のセッションが削除されます。アカウント削除でプロフィール、位置履歴、アラート、あなたがピン留めした場所が削除されます。他のメンバーがいるサークルはそのまま残ります。',
        },
      ]
    : [
        {
          title: 'Account',
          body: 'You sign in with Apple or Google. Kin stores your name, the email those services provide, and the identifier Apple or Google assigns to you. Kin does not use a separate Kin password.',
        },
        {
          title: 'Location',
          body: 'While sharing is on for a circle, Kin sends your location to that circle. If Location is set to Always, this continues while your phone is locked. Force-stopping Kin stops updates until you open the app again. Turn sharing off in Settings to stop sending location.',
        },
        {
          title: 'Places, alerts, and history',
          body: 'Pinned places store a name, a point on the map, and a radius. Arrive, leave, check-in, and SOS alerts are stored with the member name, the time, and the place when there is one. Kin also stores recent location points so your circle can see a trail.',
        },
        {
          title: 'Notifications',
          body: 'If you allow notifications, Kin stores a push token for this phone so other people in your circle can receive arrive, leave, check-in, and SOS alerts.',
        },
        {
          title: 'Who can see it',
          body: 'People in your circle can see your shared location, places, and alerts while you are a member and sharing is on. Kin does not sell your location. Sign out removes the session from this phone. Delete account removes your profile, location history, alerts, and places you pinned. Circles that still have other members stay, without you.',
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
            <h1>{isJa ? 'プライバシーポリシー' : 'Privacy Policy'}</h1>
            <p className="last-updated">{t('common.lastUpdated')}: 28 October 2026</p>

            <section>
              <p>
                {isJa
                  ? 'Kin は、あなたがいる場所を共有するためのプライベートなサークルです。このポリシーは、アプリが何を保存し、誰が見られるかを説明します。'
                  : 'Kin is a private circle for sharing where you are. This policy describes what the app stores and who can see it.'}
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section>
              <h2>{isJa ? 'お問い合わせ' : 'Contact'}</h2>
              <p>
                {isJa ? 'プライバシーに関する質問は次まで：' : 'Privacy questions:'}{' '}
                <a href={mailto}>{KIN_SUPPORT_EMAIL}</a>
                <br />
                <strong>{isJa ? '事業者：' : 'Entity:'}</strong> {COMPANY_LEGAL_NAME}
              </p>
              <p>
                <Link to="/kin/support">{isJa ? 'Kin サポート' : 'Kin Support'}</Link>
                {' · '}
                <Link to="/kin/delete-account">
                  {isJa ? 'アカウント削除' : 'Delete account'}
                </Link>
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

export default KinPrivacy

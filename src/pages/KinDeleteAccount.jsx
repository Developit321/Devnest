import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  COMPANY_LEGAL_NAME,
  KIN_PRODUCT_NAME,
  KIN_SUPPORT_EMAIL,
} from '../constants/site'

function KinDeleteAccount() {
  const { t, language } = useLanguage()
  const isJa = language === 'ja'
  const mailto = `mailto:${KIN_SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `${KIN_PRODUCT_NAME} account deletion request`,
  )}&body=${encodeURIComponent(
    isJa
      ? `Kin アカウントの削除を依頼します。\n\nサインイン用メール（Apple / Google）：\n端末：\n追加メモ：\n`
      : `I request deletion of my Kin account and associated data.\n\nSign-in email (Apple / Google):\nDevice:\nAdditional notes:\n`,
  )}`

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
            <h1>
              {isJa
                ? 'アカウントとデータの削除'
                : 'Delete your account and data'}
            </h1>
            <p className="last-updated">
              {isJa
                ? `${KIN_PRODUCT_NAME} by ${COMPANY_LEGAL_NAME}（Google Play / App Store 掲載用）`
                : `${KIN_PRODUCT_NAME} by ${COMPANY_LEGAL_NAME} — for Google Play / App Store listings`}
            </p>

            <section>
              <p>
                {isJa
                  ? 'Kin では Apple または Google でサインインするアカウントを作成できます。以下の方法でアカウントと関連データを削除できます。'
                  : 'Kin lets you create an account by signing in with Apple or Google. Use the steps below to delete your Kin account and associated data.'}
              </p>
            </section>

            <section>
              <h2>
                {isJa
                  ? '方法 1：アプリ内で削除（推奨）'
                  : 'Option 1: Delete in the Kin app (recommended)'}
              </h2>
              <ol className="delete-steps">
                <li>{isJa ? 'Kin を開き、サインインします。' : 'Open Kin and sign in.'}</li>
                <li>
                  {isJa
                    ? 'アカウント / 設定を開きます。'
                    : 'Go to Account (or Settings).'}
                </li>
                <li>
                  {isJa
                    ? '「Delete account」を選び、確認します。'
                    : 'Tap Delete account and confirm.'}
                </li>
              </ol>
              <p>
                {isJa
                  ? '削除はすぐに処理されます。この端末からサインアウトされ、Kin サーバー上のアカウントデータが削除されます。'
                  : 'Deletion is processed immediately. You are signed out on this device and your account data is removed from Kin’s servers.'}
              </p>
            </section>

            <section>
              <h2>
                {isJa
                  ? '方法 2：メールで削除を依頼'
                  : 'Option 2: Request deletion by email'}
              </h2>
              <p>
                {isJa
                  ? 'アプリにアクセスできない場合は、次のメールで削除を依頼してください。'
                  : 'If you cannot use the app, email us to request deletion:'}
              </p>
              <ol className="delete-steps">
                <li>
                  {isJa ? (
                    <>
                      <a href={mailto}>{KIN_SUPPORT_EMAIL}</a> にメールを送る
                    </>
                  ) : (
                    <>
                      Email <a href={mailto}>{KIN_SUPPORT_EMAIL}</a>
                    </>
                  )}
                </li>
                <li>
                  {isJa
                    ? '件名に「Kin account deletion」と書く'
                    : 'Use the subject “Kin account deletion”'}
                </li>
                <li>
                  {isJa
                    ? 'Kin のサインインに使っているメール（Apple / Google）を書く'
                    : 'Include the email you use to sign in to Kin (Apple or Google)'}
                </li>
              </ol>
              <p>
                <a href={mailto} className="btn-download">
                  {isJa ? '削除依頼メールを送る' : 'Email a deletion request'}
                </a>
              </p>
              <p>
                {isJa
                  ? '本人確認のうえ、通常数営業日以内に削除します。'
                  : 'After we verify the request belongs to you, we delete the account within a few business days.'}
              </p>
            </section>

            <section>
              <h2>
                {isJa ? '削除されるデータ' : 'Data that is deleted'}
              </h2>
              <ul>
                <li>
                  {isJa
                    ? 'プロフィール（名前、サインイン識別子、メール）'
                    : 'Your profile (name, sign-in identifiers, and email)'}
                </li>
                <li>
                  {isJa
                    ? '位置履歴と軌跡のポイント'
                    : 'Location history and trail points'}
                </li>
                <li>
                  {isJa
                    ? '到着・退出・チェックイン・SOS などのアラート'
                    : 'Alerts (arrive, leave, check-in, SOS, and similar)'}
                </li>
                <li>
                  {isJa
                    ? 'あなたがピン留めした場所'
                    : 'Places you pinned'}
                </li>
                <li>
                  {isJa
                    ? 'サークルのメンバーシップとプッシュ通知トークン'
                    : 'Circle memberships and push notification tokens'}
                </li>
              </ul>
            </section>

            <section>
              <h2>
                {isJa ? '残る可能性があるデータ' : 'Data that may be retained'}
              </h2>
              <ul>
                <li>
                  {isJa
                    ? '他のメンバーがいるサークル自体は残りますが、あなたはメンバーから外れます。'
                    : 'Circles that still have other members remain, without you as a member.'}
                </li>
                <li>
                  {isJa
                    ? '他のメンバーが作成したデータ（彼らがピン留めした場所など）は、彼らのアカウントに残ります。'
                    : 'Data created by other members (for example places they pinned) stays with their accounts.'}
                </li>
                <li>
                  {isJa
                    ? '法令遵守や不正防止のために必要な場合、限定的なサーバーログを最大 30 日間保持することがあります。アカウントを復元するためのプロフィールや位置データは保持しません。'
                    : 'Limited server logs may be kept up to 30 days when required for security, abuse prevention, or legal obligations. We do not keep your profile or location data to restore the account.'}
                </li>
              </ul>
            </section>

            <section>
              <h2>{isJa ? '関連リンク' : 'Related'}</h2>
              <ul>
                <li>
                  <Link to="/kin/privacy">
                    {isJa ? 'Kin プライバシーポリシー' : 'Kin Privacy Policy'}
                  </Link>
                </li>
                <li>
                  <Link to="/kin/support">
                    {isJa ? 'Kin サポート' : 'Kin Support'}
                  </Link>
                </li>
              </ul>
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

export default KinDeleteAccount

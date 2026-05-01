import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
function SafetyTips() {
  const { t, language } = useLanguage()
  
  return (
    <div className="legal-page safety-page">
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="logo">Devnest</Link>
        </div>
      </header>
      
      <main className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <h1>{t('safety.title')}</h1>
            <p className="safety-intro">{t('safety.intro')}</p>
            
            <section className="safety-section">
              <h2>{t('safety.sections.protect')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? 'プロフィールや早期のメッセージで姓、自宅住所、勤務先を共有しないでください'
                    : 'Never share your last name, home address, or workplace in your profile or early messages'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '金融情報（銀行口座、クレジットカード番号、給与詳細など）を決して共有しないでください'
                    : 'Never share financial information (bank details, credit card numbers, salary)'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '相手のことを十分に知るまで、アプリ内でメッセージをやり取りしてください'
                    : 'Keep conversations on the app until you know someone well'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '不審なリンク、特に多くを約束するリンクには注意してください'
                    : 'Be cautious of links that seem suspicious or promise too much'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'ソーシャルメディアのプライバシー設定を見直してください'
                    : 'Review your social media privacy settings'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.trust')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? '時間をかけて相手を知りましょう。急がないでください'
                    : 'Take time to get to know someone, and do not rush.'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '直接会う前にビデオ通話を検討してください'
                    : 'Consider video calls before meeting in person'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '良すぎる話には注意してください'
                    : 'Watch out for stories that seem too good to be true'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '不一致や辻褄の合わない話に注意してください'
                    : 'Be wary of inconsistencies in what they tell you'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '直感を信じてください。違和感があれば注意してください'
                    : 'Trust your instincts. If something feels off, it probably is.'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.plan')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? '最初のミートアップは必ず公共の場所で'
                    : 'Meet in a public place for your first in-person meetup'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '友人や家族に行き先と誰と会うかを共有してください'
                    : 'Tell someone you trust where you are going and who you are meeting'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '往復の交通は自分で手配してください'
                    : 'Arrange your own transportation to and from the meetup'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '相手の車に乗らないでください'
                    : 'Don\'t get in their car'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'ミートアップ中・後に連絡する予定を立ててください'
                    : 'Plan to check in with someone during or after the meetup'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '携帯電話を充電して持っていきましょう'
                    : 'Keep your phone charged and with you'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.during')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? '自分でドリンクを注文し、席を離れないでください'
                    : 'Order your own drinks and don\'t leave them unattended'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'アルコールは控えめにしてください。判断力が下がります'
                    : 'Limit alcohol, it can impair your judgment.'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '良い判断ができる程度に意識を保ちましょう'
                    : 'Stay clear-headed enough to make good decisions'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '不快に感じたら、いつでも立ち去って構いません'
                    : 'It\'s okay to leave at any time if you feel uncomfortable'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '安全を感じるまで相手をあなたの家に入れたり、相手の家に行ったりしないでください'
                    : 'Don\'t let them into your home or go to theirs until you feel safe'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.redFlags')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? 'お金やプレゼントの要求'
                    : 'Requests for money or gifts'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'ビデオ通話や対面での会合を拒否'
                    : 'Refusing to video call or meet in person'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '会話をすぐにプライベートプラットフォームに移動しようとする'
                    : 'Moving conversations off the app quickly'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '自分自身について曖昧'
                    : 'Being vague about themselves'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'ストーリーの矛盾'
                    : 'Inconsistencies in their story'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '関係や会う約束を急かしすぎる相手'
                    : 'Pressuring you to escalate plans or intimacy too quickly'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'コントロールや嫉妬的な行動'
                    : 'Controlling or jealous behavior'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'あなたの境界を尊重しない'
                    : 'Not respecting your boundaries'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.wrong')}</h2>
              <ul>
                <li>
                  {language === 'ja' 
                    ? '危険にさらされている場合は、すぐにその場を離れ、緊急サービスに連絡してください'
                    : 'If you\'re in danger, leave immediately and contact emergency services'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '問題があればInvitableアプリからユーザーを報告してください'
                    : 'Report the user through Invitable if something goes wrong'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '信頼できる人に何が起こったかを伝えてください'
                    : 'Tell someone you trust about what happened'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '必要に応じてサポートを求めてください。あなたのせいではありません'
                    : 'Seek support if you need it. It is not your fault.'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-section">
              <h2>{t('safety.sections.reporting')}</h2>
              <p>
                {language === 'ja' 
                  ? '誰かが不適切な行動をしたり、安全でないと感じたりした場合：'
                  : 'If someone behaves inappropriately or makes you feel unsafe:'
                }
              </p>
              <ul>
                <li>
                  {language === 'ja' 
                    ? 'Invitable内のプロフィールまたは会話から報告してください'
                    : 'Report from their profile or conversation inside Invitable'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '報告は真剣に扱い、機密を守ります'
                    : 'Reports are taken seriously and kept confidential'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? 'チームが内容を確認し、必要な対応を行います'
                    : 'Our team reviews reports and takes appropriate action'
                  }
                </li>
                <li>
                  {language === 'ja' 
                    ? '会話や参加を止めたりブロックすることもできます'
                    : 'You can stop engaging, leave a thread, or block at any time'
                  }
                </li>
              </ul>
            </section>

            <section className="safety-resources">
              <h2>{t('safety.resources')}</h2>
              <ul>
                <li><strong>{language === 'ja' ? '緊急通報：' : 'Emergency Services:'}</strong> 112 (SA) / {language === 'ja' ? '110 (日本)' : '911 (US)'}</li>
                <li><strong>{language === 'ja' ? '全国家庭内暴力ホットライン：' : 'National Domestic Violence Hotline:'}</strong> 1-800-799-7233</li>
                <li><strong>RAINN:</strong> 1-800-656-4673</li>
                <li><strong>{language === 'ja' ? '危機テキストライン：' : 'Crisis Text Line:'}</strong> {language === 'ja' ? 'HOMEを741741にテキスト' : 'Text HOME to 741741'}</li>
              </ul>
            </section>

            <Link to="/" className="back-link">{t('common.backToHome')}</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SafetyTips

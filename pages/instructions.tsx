import Layout from '../components/Layout';
import styles from '../styles/Instructions.module.css';
import Link from 'next/link';

export default function Instructions() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>アプリの使い方</h1>

        <section className={styles.section}>
          <h2>1. アプリへのアクセス</h2>
          <p>ブラウザで<a href="https://eng-sentences-genai-next.vercel.app/" target="_blank" rel="noopener noreferrer">https://eng-sentences-genai-next.vercel.app/</a>にアクセスしてください。</p>
        </section>

        <section className={styles.section}>
          <h2>2. 英文の自動生成</h2>
          <p>ページにアクセスすると、自動的に英文が生成されます。生成には数秒かかる場合があります。</p>
        </section>

        <section className={styles.section}>
          <h2>3. 難易度の設定</h2>
          <p>画面下部の「難易度」セレクターから、以下の4つのレベルを選択できます：</p>
          <ul>
            <li>小学生</li>
            <li>中学生</li>
            <li>高校生</li>
            <li>大学生</li>
          </ul>
          <p>難易度を変更した後、「新しい英文を生成」ボタンをクリックすると、選択した難易度に応じた英文が生成されます。</p>
        </section>

        <section className={styles.section}>
          <h2>4. お気に入り機能の使用</h2>
          <p>気に入った英文セットをお気に入りとして保存できます：</p>
          <ul>
            <li>「☆ お気に入りに追加」ボタンをクリックすると、現在表示されている英文セットがお気に入りに追加されます。</li>
            <li>追加済みの英文セットは「★ お気に入りから削除」ボタンに変わり、クリックするとお気に入りから削除できます。</li>
            <li>「お気に入りを見る」ボタンをクリックすると、保存したすべてのお気に入り英文セットを確認できます。</li>
            <li>お気に入りページでは、各英文セットを個別に削除することもできます。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. 新しい英文の生成</h2>
          <p>「新しい英文を生成」ボタンをクリックすると、選択した難易度に基づいて新しい英文セットが生成されます。</p>
        </section>

        <section className={styles.section}>
          <h2>6. 学習のポイント</h2>
          <p>以下の点に注目して学習を進めてください：</p>
          <ul>
            <li>異なる言い回しの比較</li>
            <li>熟語や表現の使い方</li>
            <li>穴埋め問題を通じた理解度の確認</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. PWA（Progressive Web App）としての利用</h2>
          <p>このアプリはPWAとして設計されており、デスクトップやモバイルデバイスにインストールして利用できます。</p>
          <h3>PWAのインストール方法：</h3>
          <h4>デスクトップ（Chrome）：</h4>
          <ol>
            <li>アプリのウェブサイトにアクセスします。</li>
            <li>ブラウザのアドレスバーの右側にあるインストールアイコン（＋マーク）をクリックします。</li>
            <li>「インストール」をクリックします。</li>
          </ol>
          <h4>Android（Chrome）：</h4>
          <ol>
            <li>アプリのウェブサイトにアクセスします。</li>
            <li>メニューから「ホーム画面に追加」を選択します。</li>
            <li>「追加」をタップします。</li>
          </ol>
          <h4>iOS（Safari）：</h4>
          <ol>
            <li>アプリのウェブサイトにアクセスします。</li>
            <li>共有ボタンをタップします。</li>
            <li>「ホーム画面に追加」を選択します。</li>
            <li>「追加」をタップします。</li>
          </ol>
          <p>インストール後は、デバイスのホーム画面やアプリ一覧からアプリを起動できます。新しい英文の生成にはインターネット接続が必要です。</p>
        </section>

        <Link href="/" className={styles.backLink}>
          メインページに戻る
        </Link>
      </div>
    </Layout>
  );
}

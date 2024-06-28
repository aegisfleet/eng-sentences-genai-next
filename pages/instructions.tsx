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
          <h2>3. 英文の内容</h2>
          <p>生成された内容には以下が含まれます：</p>
          <ul>
            <li>ランダムな日本語フレーズ</li>
            <li>5つの異なる英文（同じ意味で異なる言い回し）</li>
            <li>各英文の日本語訳</li>
            <li>英語の熟語や表現の解説</li>
            <li>英文の穴埋め問題</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. 新しい英文の生成</h2>
          <p>「新しい英文を生成」ボタンをクリックすると、新しい英文セットが生成されます。</p>
        </section>

        <section className={styles.section}>
          <h2>5. 学習のポイント</h2>
          <p>以下の点に注目して学習を進めてください：</p>
          <ul>
            <li>異なる言い回しの比較</li>
            <li>熟語や表現の使い方</li>
            <li>穴埋め問題を通じた理解度の確認</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. PWA（Progressive Web App）としての利用</h2>
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

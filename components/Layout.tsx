import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>AIランダム英文生成アプリ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <img src="/logo.svg" alt="AIランダム英文生成アプリ" className={styles.logo} />
        </h1>
        {children}
      </div>
    </>
  );
}

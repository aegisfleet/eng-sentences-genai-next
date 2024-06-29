import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { generateContent } from '../utils/api';
import { marked } from 'marked';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import FavoriteButton from '../components/FavoriteButton';
import DifficultySelector from '../components/DifficultySelector';

export default function Home() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [difficulty, setDifficulty] = useState('hard');

  const handleGenerateContent = async () => {
    setIsLoading(true);
    setContent('');
    try {
      const response = await generateContent(difficulty);
      const markedContent = await marked(response);
      setContent(markedContent);
    } catch (error) {
      console.error('Error:', error);
      setContent('<p>エラーが発生しました。もう一度お試しください。</p>');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGenerateContent();
  }, []);

  return (
    <Layout>
      <p className={styles.instruction}>新しい英文を生成するには、下部の「新しい英文を生成」ボタンをクリックしてください。</p>
      {isLoading && <div className={styles.loading}>生成中...</div>}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.buttonGroup}>
        <FavoriteButton content={content} />
        <Link href="/favorites" className={styles.favoriteButton}>
          お気に入りを見る
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
        <button className={styles.button} onClick={handleGenerateContent} disabled={isLoading}>
          新しい英文を生成
        </button>
      </div>
      <Link href="/instructions" className={styles.instructionsLink}>
        アプリの使い方
      </Link>
    </Layout>
  );
}

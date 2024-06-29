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
  const [difficulty, setDifficulty] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('difficulty') || 'hard';
    }
    return 'hard';
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('lastGeneratedContent');
    if (savedContent) {
      setContent(savedContent);
    } else {
      handleGenerateContent();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('difficulty', difficulty);
  }, [difficulty]);

  const handleGenerateContent = async () => {
    setIsLoading(true);
    setContent('');
    try {
      const response = await generateContent(difficulty);
      const markedContent = await marked(response);
      setContent(markedContent);
      localStorage.setItem('lastGeneratedContent', markedContent);
    } catch (error) {
      console.error('Error:', error);
      setContent('<p>エラーが発生しました。もう一度お試しください。</p>');
    }
    setIsLoading(false);
  };

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  return (
    <Layout>
      <p className={styles.instruction}>新しい英文を生成するには、下部の「新しい英文を生成」ボタンをクリックしてください。</p>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.loadingIcon}></div>
          生成中...
        </div>
      )}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.buttonGroup}>
        <FavoriteButton content={content} />
        <Link href="/favorites" className={styles.favoriteButton}>
          お気に入りを見る
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <DifficultySelector difficulty={difficulty} setDifficulty={handleDifficultyChange} />
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

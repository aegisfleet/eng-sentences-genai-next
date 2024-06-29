import React from 'react';
import Layout from '../components/Layout';
import { useFavorites } from '../hooks/useFavorites';
import styles from '../styles/Favorites.module.css';
import Link from 'next/link';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <Layout>
      <h1 className={styles.title}>お気に入り英文</h1>
      {favorites.length === 0 ? (
        <p className={styles.noFavorites}>お気に入りの英文はありません。</p>
      ) : (
        <ul className={styles.favoritesList}>
          {[...favorites].reverse().map((favorite, index) => (
            <li key={index} className={styles.favoriteItem}>
              <div dangerouslySetInnerHTML={{ __html: favorite }} />
              <button onClick={() => removeFavorite(favorite)} className={styles.removeButton}>
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link href="/" className={styles.backButton}>
        メインページに戻る
      </Link>
    </Layout>
  );
};

export default Favorites;

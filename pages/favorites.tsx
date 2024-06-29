import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useFavorites } from '../hooks/useFavorites';
import styles from '../styles/Favorites.module.css';
import Link from 'next/link';
import ConfirmDialog from '../components/ConfirmDialog';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<string | null>(null);

  const handleDeleteClick = (favorite: string) => {
    setSelectedFavorite(favorite);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedFavorite) {
      removeFavorite(selectedFavorite);
    }
    setDialogOpen(false);
    setSelectedFavorite(null);
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
    setSelectedFavorite(null);
  };

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
              <button onClick={() => handleDeleteClick(favorite)} className={styles.removeButton}>
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link href="/" className={styles.backButton}>
        メインページに戻る
      </Link>
      <ConfirmDialog
        isOpen={dialogOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        message="本当にこのお気に入りを削除しますか？"
      />
    </Layout>
  );
};

export default Favorites;

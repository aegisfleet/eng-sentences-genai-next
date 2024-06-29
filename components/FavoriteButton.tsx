import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import styles from '../styles/FavoriteButton.module.css';

interface FavoriteButtonProps {
  content: string;
  isDisabled: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ content, isDisabled }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.includes(content);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(content);
    } else {
      addFavorite(content);
    }
  };

  return (
    <button 
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''} ${isDisabled ? styles.disabled : ''}`} 
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isFavorite ? '★ お気に入りから削除' : '☆ お気に入りに追加'}
    </button>
  );
};

export default FavoriteButton;

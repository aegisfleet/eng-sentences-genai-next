import React from 'react';
import styles from '../styles/DifficultySelector.module.css';

interface DifficultySelectorProps {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ difficulty, setDifficulty }) => {
  return (
    <div className={styles.difficultySelector}>
      <label htmlFor="difficulty" className={styles.label}>難易度：</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className={styles.select}
      >
        <option value="easy">小学生</option>
        <option value="medium">中学生</option>
        <option value="hard">高校生</option>
        <option value="veryhard">大学生</option>
      </select>
    </div>
  );
};

export default DifficultySelector;

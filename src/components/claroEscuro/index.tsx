"use client"

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function ClaroEscuro() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme === 'dark');
  }, []);

  function mudaTema() {
    const novoTema = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('theme', novoTema);
    setIsDark(!isDark);
  }

  return (
    <button type='button' onClick={mudaTema} className={styles.claroEscuro}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
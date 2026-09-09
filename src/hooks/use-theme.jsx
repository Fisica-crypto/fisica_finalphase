import { useState, useEffect } from 'react';
import { Colors } from '../constants/theme'; 

export function useTheme() {
  // Começamos assumindo que o tema é claro
  const [theme, setTheme] = useState(() => {
    // Só por segurança, verifica se o window existe (boa prática)
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? 'dark' : 'light';
    }
    return 'light';
  });


  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Cria um "espião" para verificar o tema constantemente
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    
    // Limpa o espião quando saímos do componente
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Retorna a paleta de cores pronta
  return Colors[theme];
}
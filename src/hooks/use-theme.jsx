import { useState, useEffect } from 'react';
import { Colors } from '../constants/theme'; 

export function useTheme() {
  // Começamos assumindo que o tema é claro
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Essa linha pergunta pro navegador: "O usuário prefere modo escuro?"
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Define o tema inicial baseado na resposta
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Cria um "espião" para caso o usuário mude o tema com o site aberto
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    
    // Limpa o espião quando saímos do componente
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Retorna a paleta de cores pronta, do mesmo jeito que você tinha feito!
  return Colors[theme];
}
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/2025-1A-T03-G27-INTERNO/intro'); // Redireciona corretamente no GitHub Pages
  }, []);

  return null;
}

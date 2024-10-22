'use client'


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente a /home
    router.push('/home');
  }, [router]);

  return null; // O un indicador de carga si prefieres mostrar algo temporalmente
};

export default IndexPage;

'use client';

import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const apiKey = urlParams.get('apiKey');
    const mode = urlParams.get('mode');
    const oobCode = urlParams.get('oobCode');
    const continueUrl = urlParams.get('continueUrl');
    const lang = urlParams.get('lang');
    
    const deepLink = `banzai://email-auth?apiKey=${apiKey}&mode=${mode}&oobCode=${oobCode}&continueUrl=${continueUrl}&lang=${lang}`;

    window.location.href = deepLink;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecionando...</h1>
        <p className="text-gray-600">Aguarde enquanto redirecionamos para o app Banzai</p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

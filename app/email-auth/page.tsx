'use client';

import { useEffect, useState } from 'react';

export default function EmailAuth() {
  const [status, setStatus] = useState<'loading' | 'redirecting' | 'error'>('loading');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    
    const apiKey = urlParams.get('apiKey');
    const mode = urlParams.get('mode');
    const oobCode = urlParams.get('oobCode');
    const continueUrl = urlParams.get('continueUrl');
    const lang = urlParams.get('lang');
    
    // Verifica se há parâmetros mínimos necessários
    if (!apiKey || !mode || !oobCode) {
      setStatus('error');
      return;
    }
    
    setStatus('redirecting');
    
    // Monta o deep link
    const deepLink = `banzai://email-auth?apiKey=${apiKey}&mode=${mode}&oobCode=${oobCode}${continueUrl ? `&continueUrl=${continueUrl}` : ''}${lang ? `&lang=${lang}` : ''}`;
    
    // Redireciona após um pequeno delay para mostrar a UI
    setTimeout(() => {
      window.location.href = deepLink;
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        {status === 'loading' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Carregando...
            </h1>
            <p className="text-muted-foreground mb-6">
              Preparando autenticação
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </>
        )}
        
        {status === 'redirecting' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              Redirecionando...
            </h1>
            <p className="text-muted-foreground mb-6">
              Aguarde enquanto redirecionamos para o app Banzai
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </>
        )}
        
        {status === 'error' && (
          <>
            <h1 className="font-heading text-2xl font-semibold mb-4 text-destructive">
              Erro de Autenticação
            </h1>
            <p className="text-muted-foreground mb-6">
              Parâmetros de autenticação inválidos ou ausentes
            </p>
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voltar ao início
            </a>
          </>
        )}
      </div>
    </div>
  );
}
